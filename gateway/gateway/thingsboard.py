import logging.handlers
import time
import os
from tb_gateway_mqtt import TBDeviceMqttClient
import paho.mqtt.client as mqtt
import requests

# Info connect
ACCESS_TOKEN = "8nx36nkj1djnq57qdu9k"
THINGSBOARD_SERVER = "thingsboard.cloud"
THINGSBOARD_PORT = 1883


# Function to receive messages
def recv_message(result, _):
    # split mess -> pub to rasp broker
    message = "; ".join(f"{key}={value}" for key, value in result.items())
    print(message)
    try:
        mess = message.split("=")
        client_rasp.publish(mess[0], mess[1])
    except:
        pass


global client_tb
client_tb = TBDeviceMqttClient(THINGSBOARD_SERVER, THINGSBOARD_PORT, ACCESS_TOKEN)
client_tb.connect()
while not client_tb.is_connected():
    time.sleep(0.1)


def on_message(client, userdata, msg):
    print("topic: ", msg.topic, " message: ", str(msg.payload))
    if msg.topic == "sensors":
        try:
            payload = (msg.payload).decode("utf-8")
            mess = payload.split(":")
            telemetry = {
                mess[0]: mess[1],
            }
            client_tb.send_telemetry(telemetry)
            client_tb.send_attributes(telemetry)
        except:
            pass
    else:
        pass


if __name__ == "__main__":
    client_tb.subscribe_to_all_attributes(recv_message)
    client_rasp = mqtt.Client()
    broker_address = "192.168.1.12"
    port = 1883
    client_rasp.connect(broker_address, port)
    client_rasp.on_message = on_message
    client_rasp.subscribe("devices")
    client_rasp.subscribe("sensors")
    client_rasp.loop_forever()

from machine import Pin
from time import sleep
import dht

sensor = dht.DHT11(Pin(5))


def connect_mqtt():
    global client_id, mqtt_server
    client = MQTTClient(client_id, mqtt_server)
    # client = MQTTClient(client_id, mqtt_server, user=your_username, password=your_password)
    client.connect()
    print("Connected to %s MQTT broker" % (mqtt_server))
    return client


def restart_and_reconnect():
    print("Failed to connect to MQTT broker. Reconnecting...")
    time.sleep(10)
    machine.reset()


def read_sensor():
    try:
        sensor.measure()
        temp = sensor.temperature()
        # uncomment for Fahrenheit
        # temp = temp * (9/5) + 32.0
        hum = sensor.humidity()
        return temp, hum
    except OSError as e:
        return "Failed to read sensor."


try:
    client = connect_mqtt()
except OSError as e:
    restart_and_reconnect()

while True:
    try:
        if (time.time() - last_message) > message_interval:
            temp, hum = read_sensor()
            str_temp = "temperature" + ":" + str(temp)
            str_hum = "humidity" + ":" + str(hum)
            client.publish(topic_pub, str_temp)
            client.publish(topic_pub, str_hum)
            last_message = time.time()
    except OSError as e:
        restart_and_reconnect()

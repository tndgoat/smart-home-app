# TODO
import sys
from thingsboard_gateway import MQTTClient
from utils import *
import time
import json
import random
# from create_data import *

AIO_FEED_IO = ["s-light", "s-fan"]
AIO_USERNAME = "tung_nguyen"
AIO_KEY = '~'

#Vận hành giao thức MQTT, IoT Gateway -> Server Adafruit
def connected(client) :
    print("Ket noi thanh cong...")
    for feed in AIO_FEED_IO:
        client.subscribe(feed)

def subscribe(client, userdata, mid, granted_qos) :
    print("Subscribe thanh cong...")

def disconnected (client) :
    print("Ngat ket noi../")
    sys.exit(1)

def message(client, feed_io, payload):
    # print(payload)
    # print("Nhan du lieu: " + payload + " , feed io:" + feed_io)
    payload = json.loads(payload)
    if feed_io == "s-light":
        if payload['command'] == "off":
            writeData("T")
        else:
            writeData("S")
    if feed_io == "s-fan":
        # if payload == 0:
        #     writeData("0")
        # elif payload == 20:
        #     writeData("1")
        # elif payload == 40:
        #     writeData("2")
        # elif payload == 60:
        #     writeData("3")
        # elif payload == 80:
        #     writeData("4")
        # elif payload == 100:
        #     writeData("5")
        def writeData(data):
            # Implement the logic to write data
            pass

        if payload['status'] == 'off':
            writeData("0")
        else:
            if payload['command'] == 0:
                writeData("0")
            elif payload['command'] == 1:
                writeData("1")
            elif payload['command'] == 2:
                writeData("2")
            elif payload['command'] == 3:
                writeData("3")
            elif payload['command'] == 4:
                writeData("4")
            elif payload['command'] == 5:
                writeData("5")

#Taọ đối tượng MQTT Client
client = MQTTClient(AIO_USERNAME, AIO_KEY)
client.on_connect = connected
client.on_disconnect = disconnected
client.on_message = message
client.on_subscribe = subscribe
client.connect()
client.loop_background()

def readSerial(client):
    # Implement the logic to read data from serial
    pass

while True:
    # value_temp = random.randint(20, 50)
    # value_humi = random.randint(0, 100)
    # client.publish("s-temperature", value_temp)
    # client.publish("s-humidity", value_humi)

    readSerial(client)
    time.sleep(10)
    pass

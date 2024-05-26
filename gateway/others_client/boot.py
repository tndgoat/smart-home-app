# This file is executed on every boot (including wake-boot from deepsleep)
# import esp
# esp.osdebug(None)
# import webrepl
# webrepl.start()
# Complete project details at https://RandomNerdTutorials.com
import time
from umqttsimple import MQTTClient
import ubinascii
import machine
import micropython
import network
import esp

esp.osdebug(None)
import gc

gc.collect()

ssid = "VNPT_quanghuy"
password = "241741014"
mqtt_server = "192.168.1.12"
# EXAMPLE IP ADDRESS
client_id = ubinascii.hexlify(machine.unique_id())
topic_sub = b"door"
topic_pub = b"sensors"

last_message = 0
message_interval = 5
counter = 0

station = network.WLAN(network.STA_IF)

station.active(True)
station.connect(ssid, password)

while station.isconnected() == False:
    time.sleep(0.1)

print("Connection successful")
print(station.ifconfig())

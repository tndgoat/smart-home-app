from machine import Pin

door = Pin(2, Pin.OUT)


def connect_and_subscribe():
    global client_id, mqtt_server, topic_sub
    client = MQTTClient(client_id, mqtt_server)
    client.set_callback(sub_cb)
    client.connect()
    client.subscribe(topic_sub)
    print(
        "Connected to %s MQTT broker, subscribed to %s topic" % (mqtt_server, topic_sub)
    )
    return client


def restart_and_reconnect():
    print("Failed to connect to MQTT broker. Reconnecting...")
    time.sleep(10)
    machine.reset()


def sub_cb(topic, msg):
    print((topic, msg))
    if msg == b"True":
        door.value(1)
    else:
        door.value(0)


try:
    client = connect_and_subscribe()
except OSError as e:
    restart_and_reconnect()
while True:
    try:
        client.check_msg()
    except OSError as e:
        restart_and_reconnect()

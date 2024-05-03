import serial.tools.list_ports
import json


def getPort():  
    ports = serial.tools.list_ports.comports()
    N = len(ports)
    commPort = "None"
    for i in range(0, N):
        port = ports[i]
        strPort = str(port)
        if "USB-SERIAL CH340" in strPort:
            splitPort = strPort.split(" ")
            commPort = (splitPort[0])
    return commPort

if getPort() != "None":
    ser = serial.Serial(port= getPort(), baudrate= 115200)
    print(ser)

##############

def processData(client, data) :           #Hàm phân tách dữ liệu
    data = data.replace("!", "")
    data = data.replace("#", "")
    splitData = data.split(":")
    print(splitData)
    try:
        if splitData[0] == "TEMP":
            data = {
                'from': 'temperatureController',
                'to': 'client',
                'data':{
                    'temperature': splitData[1]
                }
            }
            client.publish("s-temperature", json.dumps(data))

        elif splitData[0] == "HUMI":
            data = {
                'from': 'humidityController',
                'to': 'client',
                'data':{
                    'humidity': splitData[1]
                }
            }
            client.publish("s-humidity", json.dumps(data))

        elif splitData[0] == "LUX":
            client.publish("s-lux", splitData[1])
    except:
        pass

mess = ""

########################

def readSerial(client): #Hàm đọc dữ liệu
    byteToRead = ser.inWaiting()
    if (byteToRead > 0):
        global mess
        mess = mess + ser.read(byteToRead).decode("UTF-8")
        while ("#" in mess) and ("!" in mess):
            start = mess.find("!")
            end = mess.find("#")
            processData(client, mess[start:end + 1])
            if (end == len(mess)) :
                mess = ""
            else:
                mess = mess[end+1:]

def writeData(data):
    ser.write(str(data).encode())


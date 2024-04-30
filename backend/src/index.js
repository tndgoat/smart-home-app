
import { Server } from 'socket.io'
import db from './config/database'
import MqttClient from './utils/mqttClient'
import AuthController from './app/controller/auth.controller'
import FanController from './app/controller/fan.controller'
import FireController from './app/controller/fire.controller'
import LightController from './app/controller/light.controller'
// import TemperatureController from './app/controller/temp.controller'


import Subscriber from './utils/subscriber'

const io = new Server(3000)
db.connect()

const mqttClient = new MqttClient();
const [
    temperature,
    door,
    light,
    fan,
    fire,
] = [
    'temperature',
    'door',
    'light',
    'fan',
    'fire',
].map((item) => ({ feed: `smarthome-${item}`, name: `${item}Controller` }));

const authController = new AuthController();
// const temperatureController = new TemperatureController();
const lightController = new LightController(mqttClient, light.feed);
const fanController = new FanController(mqttClient, fan.feed);
const fireController = new FireController();

mqttClient.subscribe(temperatureController, temperature.name)
mqttClient.subscribeTopic(temperature.feed)
mqttClient.subscribe(doorController, door.name)
mqttClient.subscribeTopic(door.feed)
mqttClient.subscribe(lightController, light.name)
mqttClient.subscribeTopic(light.feed)
mqttClient.subscribe(fanController, fan.name)
mqttClient.subscribeTopic(fan.feed)
mqttClient.subscribe(fireController, fire.name)
mqttClient.subscribeTopic(fire.feed)

io.on('connection', (socket) => {
    socket.on('join controller room', (message) => {
        socket.join(message)
    })

    socket.on('join client room', () => {
        socket.join('client room')

        io.in('client room')
            .fetchSockets()
            .then((sockets) => {
                for (let socket of sockets) {
                    console.log(socket.id)
                }
            })
    })

    socket.on('transmission', (message) => {
        const { from, to, data } = message
        io.to(`${from === 'client' ? to : 'client room'}`).emit(
            `${from} to ${to}`,
            JSON.stringify(data)
        )
        console.log(`Message from ${from} to ${to}: ${JSON.stringify(data)}`)
    })
})

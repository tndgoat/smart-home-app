
const { Server } = require('socket.io');

const db = require('./config/dbconnection');
const MqttClient = require('./utils/mqttClient');
const AuthController = require('./app/controller/auth.controller');
const FanController = require('./app/controller/fan.controller');
const FireController = require('./app/controller/fire.controller');
const LightController = require('./app/controller/light.controller');
const DoorController = require('./app/controller/door.controller');
// import TemperatureController from './app/controller/temp.controller'


const Subscriber = require('./utils/subscriber');

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
const doorController = new DoorController();

// mqttClient.subscribe(temperatureController, temperature.name)
// mqttClient.subscribeTopic(temperature.feed)
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

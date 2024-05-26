const io = require('socket.io-client');
const Subscriber = require('../../utils/subscriber');
const { DeviceModel, HumidityModel } = require('../model/device.model');
const MqttClient = require('../../utils/mqttClient');
const { get } = require('http');

const mqttClient = new MqttClient();

class HumidityController extends Subscriber {
    constructor() {
        super();
        this.socket = io('http://localhost:3000');
        this.name = 'humidityController';

        this.socket.on('connect', () => {
            console.log('Humidity controller connected')
            this.socket.emit('join controller room', this.name);
        });

        this.startHumidityUpdates();
    }

    update(context) {
        this.socket.emit('transmission', context);

        DeviceModel.deleteMany({ type: 'Humidity' })
            .then(() => {
                let model = new HumidityModel({
                    value: context.data.humidity,
                });
                model.save().then(() => console.log('database is updated')); // Success
            })
            .catch(function (error) {
                console.log(error); // Failure
            });
    }
    startHumidityUpdates() {
        setInterval(() => {
            this.updateHumidity();
        }, 20000); // Update every 2 seconds (2000 milliseconds)
    }
    
    generateRandomHumidity() {
        return Math.floor(Math.random() * (40 - 18 + 1) + 18); // Generate random number between 50 and 100
    }

    updateHumidity() {
        const randomHumidity = this.generateRandomHumidity();
        mqttClient.sendMessage('v1/devices/me/telemetry', { humidity: randomHumidity });
        console.log('Humidity updated to: ', randomHumidity);
    }

    getSocket() {
        return this.socket;
    }
}

module.exports = HumidityController;

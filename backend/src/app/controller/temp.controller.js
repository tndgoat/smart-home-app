const io = require('socket.io-client');
const Subscriber = require('../../utils/subscriber');
const { DeviceModel, TemperatureModel } = require('../model/device.model');
const MqttClient = require('../../utils/mqttClient');
const { get } = require('http');

const mqttClient = new MqttClient();

class TemperatureController extends Subscriber {
    constructor() {
        super();
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            console.log('Temperature controller connected')
            this.socket.emit('join controller room', this.name);
        });

        this.startTemperatureUpdates();
    }

    update(context) {
        this.socket.emit('transmission', context);

        DeviceModel.deleteMany({ type: 'Temperature' })
            .then(() => {
                let model = new TemperatureModel({
                    value: context.data.temperature,
                });
                model.save().then(() => console.log('database is updated')); // Success
            })
            .catch(function (error) {
                console.log(error); // Failure
            });
    }
    startTemperatureUpdates() {
        setInterval(() => {
            this.updateTemperature();
        }, 20000); // Update every 2 seconds (2000 milliseconds)
    }
    
    generateRandomTemperature() {
        return Math.floor(Math.random() * (40 - 18 + 1) + 18); // Generate random number between 50 and 100
    }

    updateTemperature() {
        const randomTemperature = this.generateRandomTemperature();
        mqttClient.sendMessage('v1/devices/me/telemetry', { temperature: randomTemperature });
        console.log('Temperature updated to: ', randomTemperature);
    }

    getSocket() {
        return this.socket;
    }
}

module.exports = TemperatureController;

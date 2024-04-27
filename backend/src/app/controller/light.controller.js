const io = require('socket.io-client');
const { THINGSBOARD_IO_FEEDS } = require('../../config/thingsboard');
const MqttClient = require('../../utils/mqttClient');
const Subscriber = require('../../utils/subscriber');
const { DeviceModel, LightModel } = require('../model/device.model');

class LightController extends Subscriber {
    constructor(mqttClient, topic) {
        super();
        this.socket = io('http://localhost:3000');
        this.name = 'lightController';

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name);
        });

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(ADAFRUIT_IO_FEEDS + topic, message);
        });
    }

    update(context) {
        this.socket.emit('transmission', context);

        DeviceModel.deleteMany({ type: 'Light' })
            .then(() => {
                let model = new LightModel({
                    status: context.data.status,
                });
                model.save().then(() => console.log('database is updated')); // Success
            })
            .catch(function (error) {
                console.log(error); // Failure
            });
    }

    getSocket() {
        return this.socket;
    }
}

module.exports = LightController;

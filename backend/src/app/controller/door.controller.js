const io = require('socket.io-client');
const { THINGSBOARD_IO_FEEDS } = require('../../config/thingsboard');
const MqttClient = require('../../utils/mqttClient');
const Subscriber = require('../../utils/subscriber');
const { DeviceModel, DoorModel } = require('../model/device.model');

class DoorController extends Subscriber {
    constructor(mqttClient, topic) {
        super();
        this.socket = io('http://localhost:3000');
        this.name = 'doorController';

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name);
        });

        this.socket.on(`client to ${this.name}`, (message) => {
            mqttClient.sendMessage(THINGSBOARD_IO_FEEDS+ topic, message);
        });
    }

    update(context) {
        this.socket.emit('transmission', context);

        DeviceModel.deleteMany({ type: 'Door' })
            .then(() => {
                let model = new DoorModel({
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

module.exports = DoorController;

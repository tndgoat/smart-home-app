const mqtt = require('mqtt');
const {
    THINGSBOARD_HOST,
    THINGSBOARD_PORT,
    THINGSBOARD_ACCESS_TOKEN,
} = require('../config/thingsboard');
const Publisher = require('./publisher');

class MqttClient extends Publisher {
    constructor() {
        super();
        let options = {
        host: THINGSBOARD_HOST,
        port: THINGSBOARD_PORT,
        protocol: 'mqtt',
        username: THINGSBOARD_ACCESS_TOKEN,
        };

        this.client = mqtt.connect(options);

        this.client.on('connect', () => console.log('Connected'));
        this.client.on('error', (err) => console.log(err));

        this.receiveMessage();
    }

    subscribeTopic(topic) {
        this.client.subscribe(topic, (err) => {
            if (err) console.log(err);
        });
    }

    receiveMessage() {
        this.client.on('message', (topic, message) => {
            console.log('Received message:', topic, message.toString());
            this.notify(message.toString());
        });
    }

    sendMessage(topic, message) {
        this.client.publish(topic, message);
    }
}

module.exports = MqttClient;

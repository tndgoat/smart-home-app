const mqtt = require('mqtt');
const {
    THINGSBOARD_FEEDS,
    THINGSBOARD_KEY,
    THINGSBOARD_IO_USERNAME,
} = require('../config/thingsboard');

const Publisher = require('./publisher');
const mqttHost = "thingsboard.cloud";
const protocol = "mqtt";
const port = "1883";
const hostURL = `${protocol}://${mqttHost}:${port}`;    

const options = {
    clientId: 'a1',
    username: 'jIQRII9MGYPYuz4wvV5O', //TODO: update token based on the current thingsboard
    protocolId: "MQTT",     
    protocolVersion: 5,
    clean: true,
    reconnectPeriod: 10000,
    connectTimeout: 10 * 1000,
};
const client = mqtt.connect(hostURL, options);

client.on('connect', () => console.log('MQTT Connected to ', options.username));
client.on('error', (err) => console.log(err));
client.on('reconnect', () => console.log('Reconnecting...'));
client.on('close', () => console.log('Connection closed'));
client.on('message', (topic, message) => {
            console.log('Received message:', topic, message.toString());
        });
class MqttClient extends Publisher {
    constructor() {
        super();
        this.client = client;
        this.receiveMessage();
    }

    subscribeTopic(topic) {
        this.client.subscribe(topic, (err) => {
            if (err) console.log(err);
            console.log('Subscribed to: '+ topic, )
        });
        this.client.subscribe("v1/devices/me/attributes")
    }

    receiveMessage() {
        this.client.on('message', (topic, message) => {
            console.log('Received message:', topic, message.toString());
            this.notify(message.toString());
        });
    }

    sendMessage(topic, message) {
        const stringifiedMessage = JSON.stringify(message);
        console.log(`Sending Topic: ${topic}, Message: ${stringifiedMessage}`);
        this.client.publish('v1/devices/me/attributes', stringifiedMessage, () =>
        { console.log('Message sent') });
    }
}

module.exports = MqttClient;

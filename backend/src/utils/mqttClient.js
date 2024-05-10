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
// const hostURL = mqttHost;

const options = {
    username: 'jIQRII9MGYPYuz4wvV5O', //TODO: update token based on the current thingsboard
    keepalive: 60,
    protocolId: "MQTT",     
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 10 * 1000,
  };
class MqttClient extends Publisher {
    constructor() {
        super();
        this.client = mqtt.connect(hostURL, options);

        this.client.on('connect', () => console.log('MQTT Connected to ', options.username));
        this.client.on('error', (err) => console.log(err));
        this.client.on("reconnect", () => {console.log("Reconnecting...");});
        this.receiveMessage();
        
        // const randomTemperature = Math.floor(Math.random() * (40 - 18 + 1)) + 18;
        // this.sendMessage('v1/devices/me/telemetry', { temperature: randomTemperature });
    }

    subscribeTopic(topic) {
        this.client.subscribe(topic, (err) => {
            if (err) console.log(err);
            console.log('Subscribed to: '+ topic, )
        });
    }

    receiveMessage() {
        this.client.on('message', (topic, message) => {
            console.log('Received message:', topic, message.toString());
            this.notify(message.toString());
        });
    }

    sendMessage(topic, message) {
        console.log(`Sending Topic: ${topic}, Message: ${message.toString()}`);
        const stringifiedMessage = JSON.stringify(message);
        this.client.publish('v1/devices/me/telemetry', stringifiedMessage);
    }
}

module.exports = MqttClient;

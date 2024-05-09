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
    username: 'pZVq3ThQN1oojKfRIrzc',
    // password: 'pZVq3ThQN1oojKfRIrzc', 
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
        this.client.on("reconnect", () => {
    console.log("Reconnecting...");
  });
        this.subscribeTopic('temperature');
        this.sendMessage('temperature', '28');
        this.receiveMessage();
    }

    subscribeTopic(topic) {
        this.client.subscribe(THINGSBOARD_FEEDS + topic, (err) => {
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

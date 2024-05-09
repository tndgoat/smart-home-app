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
        // this.client.on('connect', function () {
        // console.log('Connected to MQTT broker');
        // const message = JSON.stringify({ temperature: 69 });
    //     this.client.publish(topic, message, { qos: 1 }, function (error) {
    //     if (error) {
    //         console.error('Error publishing message:', error);
    //     } else {
    //         console.log('Message published successfully');
    //     }
    // });
// });

        this.client.on('error', (err) => console.log(err));
        this.client.on("reconnect", () => {console.log("Reconnecting...");});
        // this.subscribeTopic('temperature');
        this.receiveMessage();
        // this.sendMessage('temperature', {temperature : 88});
        // this.sendMessage('smarthome-light', 'sm-light: 69')
        this.sendMessage('v1/devices/me/telemetry', {temperature : 98})
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
        console.log(`Sending Topic: ${topic}, Message: ${message}`);
        const stringifiedMessage = JSON.stringify(message);
        // const stringifiedMessage  = JSON.stringify({ temperature: 88 });
        this.client.publish(topic, stringifiedMessage);
    }
}

module.exports = MqttClient;

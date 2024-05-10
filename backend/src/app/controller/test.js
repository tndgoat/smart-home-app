// var mqtt = require('mqtt')
// var client  = mqtt.connect('mqtt://thingsboard.cloud',{
//     username: 'jIQRII9MGYPYuz4wvV5O'
// })

// client.on('connect', function () {
//     console.log('connected')
//     client.subscribe('v1/devices/me/attributes/response/+')
//     client.publish('v1/devices/me/attributes/request/1', '{"clientKeys":"attribute1,attribute2", "sharedKeys":"shared1,shared2"}')
// })

// client.on('message', function (topic, message) {
//     console.log('response.topic: ' + topic)
//     console.log('response.body: ' + message.toString())
//     client.end()
// })

const mqtt = require('mqtt');

// Connect to ThingsBoard MQTT broker
const client  = mqtt.connect('mqtt://thingsboard.cloud',{
    username: 'jIQRII9MGYPYuz4wvV5O',
    clientId: 'a2',
})

// Subscribe to telemetry topic
client.on('connect', function () {
    client.subscribe('v1/devices/me/telemetry/response/+', function (err) {
        if (!err) {
            console.log('Subscribed to telemetry topic');
            client.publish('v1/devices/me/telemetry/request/1', '{"jIQRII9MGYPYuz4wvV5O":"temperature" }')
        } else {
            console.error('Error subscribing to telemetry topic:', err);
        }
    });
});

// Handle incoming telemetry data
client.on('message', function (topic, message) {
    // Parse incoming message (assuming JSON format)
    console.log('Received message:', topic, message.toString());
    const data = JSON.parse(message.toString());
    console.log('Received telemetry data:', topic, data);
    // Process data as needed
    // For example, update UI with the received data
    // console.log('Device ID:', data.deviceId);
    // console.log('Data:', data.data);
    // console.log('Timestamp:', new Date(data.ts).toISOString());
});

const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://tndgoat:smart-home-app-232@smart-home-app.7pukdmi.mongodb.net/?retryWrites=true&w=majority&appName=smart-home-app'
        );
        console.log('Connected successfully!');
    } catch (err) {
        console.log('Connection failed: ', err);
    }
};

module.exports = { connect };

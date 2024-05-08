// import mongoose from 'mongoose'

const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://tndgoat:smart-home-app-232@smart-home-app.7pukdmi.mongodb.net/?retryWrites=true&w=majority&appName=smart-home-app'
        );
        console.log('Connect successfully!');
    } catch (err) {
        console.log('Connected fail: ', err);
    }
};

module.exports = { connect };

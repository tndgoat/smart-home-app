const { Schema, model } = require('mongoose');

const accountSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const AccountModel = model('Account', accountSchema);
module.exports = AccountModel;

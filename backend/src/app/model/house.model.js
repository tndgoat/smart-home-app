const { model, Schema } = require('mongoose');

const houseSchema = new Schema({
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
    },
    devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }],
    notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
});

const HouseModel = model('House', houseSchema);
module.exports = HouseModel;

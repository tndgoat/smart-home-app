const { Schema, model } = require('mongoose');

const options = { discriminatorKey: 'type' };

const notificationSchema = new Schema(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
);

const NotificationModel = model('Notification', notificationSchema);

const FireModel = NotificationModel.discriminator(
    'Fire',
    new Schema(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
);

module.exports = { NotificationModel, FireModel };

const { model, Schema } = require('mongoose');

const options = { discriminatorKey: 'type' };

const deviceSchema = new Schema(
    {
        updateTime: { type: Date, default: Date.now() },
    },
    options
);

const DeviceModel = model('Device', deviceSchema);

const LightModel = DeviceModel.discriminator(
    'Light',
    new Schema(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
);

const DoorModel = DeviceModel.discriminator(
    'Door',
    new Schema(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
);

const SpeakerModel = DeviceModel.discriminator(
    'Speaker',
    new Schema(
        {
            status: { type: Boolean, required: true },
        },
        options
    )
);

const TemperatureModel = DeviceModel.discriminator(
    'Temperature',
    new Schema(
        {
            value: { type: Number, required: true },
        },
        options
    )
);

const FanModel = DeviceModel.discriminator(
    'Fan',
    new Schema(
        {
            speed: { type: Number, required: true },
        },
        options
    )
);

module.exports = {
    DeviceModel,
    LightModel,
    DoorModel,
    SpeakerModel,
    TemperatureModel,
    FanModel,
};

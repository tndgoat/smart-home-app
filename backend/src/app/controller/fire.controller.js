const io = require('socket.io-client');
const Subscriber = require('../../utils/subscriber');
const { FireModel, NotificationModel } = require('../model/notification.model');

class FireController extends Subscriber {
    constructor() {
        super();
        this.socket = io('http://localhost:3000');
        this.name = 'fireController';

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name);
        });
    }

    update(context) {
        this.socket.emit('transmission', context);

        NotificationModel.deleteMany({ type: 'Fire' })
            .then(() => {
                let model = new FireModel({
                    status: context.data.status,
                });
                model.save().then(() => console.log('database is updated')); // Success
            })
            .catch(function (error) {
                console.log(error); // Failure
            });
    }

    getSocket() {
        return this.socket;
    }
}

module.exports = FireController;

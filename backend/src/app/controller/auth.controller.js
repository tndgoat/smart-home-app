const { io } = require('socket.io-client');
const AccountModel = require('../model/account.model');

class AuthController {
    constructor() {
        this.name = 'authController';
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            this.socket.emit('join controller room', this.name);
        });

        this.socket.on(`client to ${this.name}`, (message) => {
            const { username, password } = JSON.parse(message);
            let status = true;

            AccountModel.findOne({ username: username })
                .then((doc) => {
                    if (!doc) {
                        status = false;
                    } else if (doc.password != password) {
                        status = false;
                    }
                })
                .then(() => {
                    this.socket.emit('transmission', {
                        from: 'authController',
                        to: 'client',
                        data: {
                            status: status,
                        },
                    });
                });
        });
    }

    getSocket() {
        return this.socket;
    }
}

module.exports = AuthController;

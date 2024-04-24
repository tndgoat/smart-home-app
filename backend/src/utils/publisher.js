const Subscriber = require('./subscriber');

class Publisher {
    constructor() {
        this.subscribers = {};
    }

    subscribe(subscriber, name) {
        this.subscribers[name] = subscriber;
        return true;
    }

    unsubscribe(subscriber) {
        return false;
    }

    notify(context) {
        const data = JSON.parse(context);
        if (data.to === 'client') {
            this.subscribers[data.from].update(data);
        }
    }
}

module.exports = Publisher;

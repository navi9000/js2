export default {
    _listeners: {},

    addListener(event, callback) {
        if (this._listeners[event]) {
            this._listeners[event].push(callback);
        } else {
            this._listeners[event] = [callback];
        }
    },

    emit(type, ...params) {
        this._listeners[type].forEach(callback => callback(...params));
    }
}
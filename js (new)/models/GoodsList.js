import eventEmitter from '../helpers/eventEmitter.js'

export default class GoodsList {
    constructor() {
        this._goodsList = [];
    }

    load(callback, type) {
        callback().then(data => {
            if (data[0]) {
                this._goodsList = data.map(item => new type(item));
            }
            eventEmitter.emit('loaded');
        })
    }

    add(item) {
        this._goodsList.push(item);
    }

    remove(id) {
        this._goodsList = this._goodsList.filter(item => item.id != id);
    }

    get(id) {
        return this._goodsList.find(el => el.id == id);
    }

    getAll() {
        return this._goodsList;
    }
}
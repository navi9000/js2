import dataHandler from "../helpers/dataHandler.js";
import GoodsList from "./GoodsList.js";
import CartItem from "./CartItem.js";
import eventEmitter from "../helpers/eventEmitter.js";

export default class Cart extends GoodsList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCart.bind(dataHandler), CartItem);
    }

    add(item) {
        let cartEl = this._goodsList.find(el => el.id == item.id);
        if (cartEl) {
            cartEl.add();
        } else {
            super.add(item);
        }
        eventEmitter.emit('added', item.id);
    }

    remove(id) {
        let item = this._goodsList.find(el => el.id == id);
        if (item) {
            if (item.quantity > 1) {
                item.remove()
            } else {
                super.remove(id);
            }
        }
        eventEmitter.emit('removed', id);
    }

    countTotalQuantity() {
        return this._goodsList.reduce((acc, item) => acc + item._quantity, 0);
    }
}
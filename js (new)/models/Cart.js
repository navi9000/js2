'use strict';
import CartItem from "./CartItem.js";

export default class Cart {
    constructor() {
        this.cartGoods = [];
        this.totalQuantity = 0;
    }

    getCartItems() {
        return this.cartGoods;
    }

    getByID(id) {
        return this.cartGoods.find(item => item.id == id);
    }

    add(item) {
        let cartEl = this.getByID(item.id);
        if (cartEl) {
            cartEl.quantity++;
        } else {
            cartEl = new CartItem(item);
            this.cartGoods.push(cartEl);
        }
        this.totalQuantity++;
    }

    remove(item) {
        let index = this.cardGoods.findIndex(el => el == item);
        this.cartGoods.splice(index, 1);
        this.totalQuantity = this.countTotalQuantity();
    }

    countTotalQuantity() {
        return this.cardGoods.reduce(item => item.quantity, 0);
    }
}
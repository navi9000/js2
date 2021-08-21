import GoodsItem from "./GoodsItem.js";

export default class CartItem extends GoodsItem {
    constructor(data, quantity = 1) {
        super(data);
        this._quantity = quantity;
    }

    get price() { return super._price * this._quantity }

    add() {
        this._quantity++;
    }

    remove() {
        this._quantity--;
    }
}
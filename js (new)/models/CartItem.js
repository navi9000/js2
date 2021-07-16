import GoodsItem from "./GoodsItem.js";

export default class CartItem extends GoodsItem {
    constructor({ id, title, desc, price }) {
        super({ id, title, desc, price });
        this.quantity = 1;
    }

    modifyQuantity(num) {
        this.quantity = num;
    }
}
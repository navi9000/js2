export default class CartItem {
    constructor(item) {
        this._item = item;
    }

    renderCartItem() {
        return `<div class="b-cart__el" id="el-${this._item.id}">
        <span class="b-cart__name">${this._item.title}</span>
        <input class="b-cart__input" type="number" value="1" min="1" step="1">
        <span class="b-cart__price">${this._item.price}</span>
        <span class="b-cart__item-total">${this._item.price}</span>
        <img src="img/close-button.svg" alt="Close" class="b-cart__closeBtn"></div>`;
    }
}
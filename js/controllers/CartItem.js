export default class CartItem {
    constructor(item) {
        this._item = item;
        this._numOfItems = 1;
        this._totalPrice = this._item._price;
    }

    renderItem() {
        return `<div class="b-cart__el" id="el-${this._item._id}">
        <span class="b-cart__name">${this._item._title}</span>
        <input class="b-cart__input" type="number" value="1" min="1" step="1">
        <span class="b-cart__price">$${this._item._price.toFixed(2)}</span>
        <span class="b-cart__item-total">$${this._item._price.toFixed(2)}</span>
        <img src="img/close-button.svg" alt="Close" class="b-cart__closeBtn"></div>`;
    }

    // посчитать стоимость одной позиции
    countItemTotal() {
        let field = document.querySelector(`#el-${this._item._id} .b-cart__item-total`);
        this._totalPrice = this._item._price * this._numOfItems;
        field.innerHTML = "$" + this._totalPrice.toFixed(2);
    }

    // добавить слушателя события на поле ввода
    addListenerToInputField(cart) {
        let field = document.querySelector(`#el-${this._item._id} input`);
        field.addEventListener('change', () => {
            field.setAttribute('value', Number(field.value));
            this._numOfItems = Number(field.value);
            this.countItemTotal(this._numOfItems);
            cart.calculateTotalSum();
        });
    }

    // добавить слушателя события на кнопке закрытия
    addListenerToCloseButton(cart) {
        let field = document.querySelector(`#el-${this._item._id} img`);
        field.addEventListener('click', () => {
            document.querySelector(`#el-${this._item._id}`).remove();
            cart.removeItemFromCart(this);
            cart.calculateTotalSum();
        });
    }
}
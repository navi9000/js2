import CartItem from './CartItem.js';
export default
    class Cart {
    constructor() {
        this._items = [];
        this._$cartIcon = document.querySelector('.b-navBar__item_cart');
        this._$totalSum = document.querySelector('.b-cart__total');
        this._$numOfItems = document.querySelector('.b-cart__number');
        this._$cartBlock = document.querySelector(".b-cart__cart-items");
    }

    // Добавление слушателя события при клике на иконку корзины
    addToggle() {
        this._$cartIcon.addEventListener('click', () => {
            this._$cartBlock.classList.toggle('b-cart__cart-items_hidden');
        });
    }

    // добавление нового товара в корзину
    addNewItemToCart(item) {
        let el = new CartItem(item);
        this._items.push(el);
        this._$totalSum.insertAdjacentHTML('beforebegin', el.renderItem());

        // добавить слушателя события на новом поле ввода
        el.addListenerToInputField(this);

        // добавить слушателя события на новой кнопке закрытия
        el.addListenerToCloseButton(this);

        this.calculateTotalSum();
    }

    // изменение кол-ва товара при повторном клике на тот же товар
    modifyExistingCartItem(item) {
        let field = document.querySelector(`#el-${item._id} input`);
        field.setAttribute('value', Number(field.getAttribute('value')) + 1);
        let index = this.getCartItemIndex(item, this._items);
        this._items[index]._numOfItems++;
        this._items[index].countItemTotal();
        this.calculateTotalSum();
    }

    // узнать индекс товара в корзине
    getCartItemIndex(goodsEl, cartEl) {
        let len = this._items.length;
        for (let i = 0; i < len; i++) {
            if (cartEl[i]._item == goodsEl) return i;
        }

        throw new Error('Something went wrong');
    }

    // удалить товар из корзины
    removeItemFromCart(item) {
        let index = this._items.indexOf(item);
        this._items.splice(index, 1);
    }

    // отобразить товары в корзине
    renderCartItems() {
        let itemsList = this._items.map(
            el => el.renderItem()
        ).join('');
        this._$totalSum.insertAdjacentHTML('beforebegin', itemsList);
    }

    // посчитать общую стоимость товаров в корзине
    calculateTotalSum() {
        let sum = 0;
        let numOfItems = 0
        this._items.forEach(item => {
            sum += item._totalPrice;
            numOfItems += item._numOfItems;
        });

        this._$totalSum.innerHTML = 'TOTAL: $' + sum.toFixed(2);

        // изменить поле с кол-вом товаров
        if (numOfItems != 0) {
            this._$numOfItems.innerHTML = numOfItems;
            // отобразить кол-во товаров, если до этого в корзине ничего не было
            if (this._$numOfItems.classList.contains('b-cart__number_hidden')) {
                this._$numOfItems.classList.remove('b-cart__number_hidden');
            }
        }

        // скрыть поле с кол-вом товаров, если из корзины удалено все
        if (numOfItems == 0 && !this._$numOfItems.classList.contains('b-cart__number_hidden')) {
            this._$numOfItems.classList.add('b-cart__number_hidden');
            this._$numOfItems.innerHTML = '';
        }
    }
}
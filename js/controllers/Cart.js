export default
    class Cart {
    constructor() {
        this._items = [];
        this._totalPrice = 0;
        this._$cartIcon = document.querySelector('b-navBar__item_cart');
        this._$cartIcon.addEventListener('click', toggleCart);
        // this._$cartBlock = document.querySelector(".b-cart__cart-items");
    }

    toggleCart() {
        this._$cartBlock.classList.toggle('b-cart__cart-items_hidden');
        console.log('it works!');
    }
}
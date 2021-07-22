import eventEmitter from './helpers/eventEmitter.js';
import Cart from './models/Cart.js';
import Showcase from './models/Showcase.js'
import CartItem from './models/CartItem.js';
import CardBlock from './views/CardBlock.js';

export default {
    _showcaseModel: new Showcase(),
    _cartModel: new Cart(),

    init() {
        eventEmitter.addListener('added', this._renderCart.bind(this));
        eventEmitter.addListener('removed', this._renderCart.bind(this));
        eventEmitter.addListener('loaded', this._renderCart.bind(this));
        eventEmitter.addListener('loaded', this._renderProducts.bind(this));


        this._cartModel.load();
        this._showcaseModel.load();
    },

    _renderProducts() {
        let $catalog = document.querySelector('.catalog');
        this._showcaseModel.getAll().forEach(el => {
            let card = new CardBlock(el);
            card.render($catalog);
            card.setAddHandler(this._addToCart.bind(this));
        })

    },

    _addToCart(id) {
        let item = new CartItem(this._showcaseModel.get(id));
        this._cartModel.add(item);

        console.log(this._cartModel);
    },

    _renderCart() {
        let $num = document.querySelector('.b-cart__number');
        $num.innerHTML = this._cartModel.countTotalQuantity();
        if ($num.classList.contains('b-cart__number_hidden') && $num.innerHTML > 0) {
            $num.classList.remove('b-cart__number_hidden');
        }
        if (!$num.classList.contains('b-cart__hidden') && $num.innerHTML == 0) {
            $num.classList.add('b-cart__number_hidden');
        }
    },

    _removeFromCart(id) {
        this._cartModel.remove(id);
    },

    _toggleCart() {
        let $cartItems = document.querySelector('.b-cart__cart-items');
    }
}
'use strict';

import Cart from './models/Cart.js';
import GoodsItem from './models/GoodsItem.js';
import GoodsList from './models/GoodsList.js';
import CardBlock from './views/CardBlock.js';

let PRODUCTS;
const CART = new Cart;

fetch('js (new)/db/items.json')
    .then(response => response.json())
    .then(res => {
        PRODUCTS = new GoodsList(res);
        let $catalog = document.querySelector('.catalog');
        let cards = PRODUCTS.get().map(item =>
            new CardBlock(item));
        cards.forEach(card => {
            let module = {
                cart: CART,
                callbackFunction: function () { return this.crt.add(PRODUCTS.getByID(card.getCardBlockId())) }
            }
            let callbackFunction = module.callbackFunction;
            card.setAddHandler(callbackFunction.bind(module));
            card.render($catalog);
        });
    });
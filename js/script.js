'use strict';

// import CartItem from './controllers/CartItem.js';
import Cart from './controllers/Cart.js';
import GoodsItem from './controllers/GoodsItem.js';
import GoodsList from './controllers/GoodsList.js';


const LIST = new GoodsList;
let cart;

fetch('js/database/goods.json')
    .then(response => response.json())
    .then(item => item['GOODS'].forEach(el => {
        let res = new GoodsItem(el['id'], el['title'], el['desc'], el['price']);
        LIST.addToGoodsList(res);
    }))
    .then(() => {
        LIST.renderGoodsList();
    })
    .then(() => {
        cart = new Cart;
        cart.addToggle();
        LIST._goods.forEach(el => el.addListenerToProduct(cart));
    });

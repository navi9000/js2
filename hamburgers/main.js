'use strict';

import Core from './js/Core.js';
import Product from './js/Product.js';

const PRODUCTS = [];

fetch('res/products.json')
    .then(response => response.json())
    .then(els => els.forEach(el => {
        let res = new Product(el.id, el.type, el.name, el.calories, el.price);
        PRODUCTS.push(res);
    }))
    .then(() => {
        let core = new Core;
        core.init();
    });

export default PRODUCTS;
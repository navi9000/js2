import GoodsItem from './controllers/GoodsItem.js';
import GoodsList from './controllers/GoodsList.js';
// import Cart from './controllers/Cart.js';
// import CartItem from './controllers/CartItem.js';


const LIST = new GoodsList;

fetch('js/database/goods.json')
    .then(response => response.json())
    .then(item => item['GOODS'].forEach(el => {
        let res = new GoodsItem(el['id'], el['title'], el['desc'], el['price']);
        LIST.addToGoodsList(res);
    }))
    .then(() => LIST.renderGoodsList())
    .then(() => console.log(LIST.calculateTotalSum()));

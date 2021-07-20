import GoodsItem from './GoodsItem.js';

export default class GoodsList {
    constructor(goods) {
        this.goods = goods.map(item => new GoodsItem(item));
    }

    get() {
        return this.goods;
    }

    getByID(id) {
        return this.goods.find(item => item.id == id);
    }

    add(item) {
        this.goods.push(item);
    }

    calculateTotalSum() {
        return this.goods.reduce(acc => acc += el.price, 0);
    }
}
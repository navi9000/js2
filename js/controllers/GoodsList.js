export default

    class GoodsList {
    constructor(goods = []) {
        this._goods = goods;
        this._$goodsListContainer = document.querySelector('.catalog');
    }

    renderGoodsList() {
        let goodsList = this._goods.map(
            item => item.render()
        ).join('');

        this._$goodsListContainer.insertAdjacentHTML('beforeend', goodsList);
    }

    addToGoodsList(item) {
        this._goods.push(item);
    }

    calculateTotalSum() {
        let sum = 0;
        this._goods.forEach(el => sum += el._price);
        return sum;
    }
}
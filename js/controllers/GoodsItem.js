export default

    class GoodsItem {
    constructor(id, title, desc, price) {
        this._id = id;
        this._title = title;
        this._desc = desc;
        this._price = price;
    }

    render() {
        return `<div class="items-grid-item">
        <div class="items__image-div" id="${this._id}">
            <img src="img/item${this._id}.jpg" alt="Item ${this._id}" class="items-grid-img">
            <div class="items-grid__hover-background">
            </div>
            <img src="img/add-to-cart.svg" alt="Add to Cart" class="items-grid__add-button">
        </div>
        <h2 class="items-grid-header">${this._title}</h2>
        <p class="items-grid-text">${this._desc}</p>
        <p class="items-grid-price">$${this._price.toFixed(2)}</p>
    </div>`;
    }
}
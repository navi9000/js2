export default class CartBlock {
    constructor(data) {
        this.data = data;
    }

    getCardBlockId() {
        return this.data.id;
    }

    buildHtml() {
        return `<div class="items-grid-item">
        <div class="items__image-div" id="item-${this.data.id}">
            <img src="img/item${this.data.id}.jpg" alt="Item ${this.data.id}" class="items-grid-img">
            <div class="items-grid__hover-background">
            </div>
            <img src="img/add-to-cart.svg" alt="Add to Cart" class="items-grid__add-button">
        </div>
        <h2 class="items-grid-header">${this.data.title}</h2>
        <p class="items-grid-text">${this.data.desc}</p>
        <p class="items-grid-price">$${this.data.price.toFixed(2)}</p>
    </div>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.buildHtml());
        if (this.addHandler) {
            const addBtn = $container.querySelector(`#item-${this.data.id}  .items-grid__add-button`);
            addBtn.addEventListener('click', this.addHandler.bind(this));
        }
    }

    addHandler() {
        this.addHandlerCb(this.data.id);
    }

    setAddHandler(callback) {
        this.addHandlerCb = callback;
    }
}
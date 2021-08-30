function buildGoodsItem(item) {
    return `<div class="items-grid-item">
        <div class="items__image-div" id="item-${item.id}">
            <img src="img/item${item.id}.jpg" alt="Item ${item.id}" class="items-grid-img">
            <div class="items-grid__hover-background">
            </div>
            <img src="img/add-to-cart.svg" alt="Add to Cart" class="items-grid__add-button">
        </div>
        <h2 class="items-grid-header">${item.title}</h2>
        <p class="items-grid-text">${item.desc}</p>
        <p class="items-grid-price">$${item.price.toFixed(2)}</p>
    </div>`;
}

function buildCartItem(item) {
    return `<div class="b-cart__el" id="el-${item.id}">
    <span class="b-cart__name">${item.title}</span>
    <input class="b-cart__input" type="number" value="1" min="1" step="1">
    <span class="b-cart__price">$${item.price.toFixed(2)}</span>
    <span class="b-cart__item-total">$${item.price.toFixed(2)}</span>
    <img src="img/close-button.svg" alt="Close" class="b-cart__closeBtn"></div>`;
}

export default buildGoodsItem; buildCartItem;
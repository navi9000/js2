export default class CartItemBlock {
    constructor(data) {
        this.data = data;
    }

    buildHtml() {
        return `<div class="b-cart__el" id="el-${this.data._id}">
        <span class="b-cart__name">${this.data._title}</span>
        <input class="b-cart__input" type="number" value="1" min="1" step="1">
        <span class="b-cart__price">$${this.data._price.toFixed(2)}</span>
        <span class="b-cart__item-total">$${this.data._price.toFixed(2)}</span>
        <img src="img/close-button.svg" alt="Close" class="b-cart__closeBtn"></div>`;
    }

    render($container, target = 'afterbegin') {
        $container.insertAdjacentHTML(target, this.buildHtml());
    }

}
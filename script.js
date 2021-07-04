const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];


const $goodsList = document.querySelector('.catalog');

const renderGoodsItem = ({ title, price }) => {
    return `<div class="items-grid-item">
    <div class="items__image-div" id="1">
        <img src="img/item1.jpg" alt="Item 1" class="items-grid-img">
        <div class="items-grid__hover-background">
        </div>
        <img src="img/add-to-cart.svg" alt="Add to Cart" class="items-grid__add-button">
    </div>
    <h2 class="items-grid-header">${title}</h2>
    <p class="items-grid-text">Known for her sculptural takes on traditional tailoring,
        Australian
        arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
    <p class="items-grid-price">$${price}</p>
</div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
        item => renderGoodsItem(item)
    ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();
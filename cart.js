'use strict';

const CART_TOTAL = document.querySelector('.b-cart__total');
const NUMBER = document.querySelector('.b-cart__number');
const ITEMS = document.querySelectorAll('.items-grid__add-button');

// показать или скрыть корзину
function toggleCart() {
    document.querySelector(".b-cart__cart-items").classList.toggle("b-cart__cart-items_hidden");
}

// добавление в корзину при клике
function addToCart(event) {
    if (!document.getElementById(`el-${event.target.parentNode.parentNode.getAttribute('id')}`)) {
        addStruct(event.target.parentNode.parentNode.getAttribute('id'),
            event.target.parentNode.parentNode.childNodes[3].innerHTML,
            event.target.parentNode.parentNode.childNodes[7].innerHTML);
    } else {
        modifyStruct(event.target.parentNode.parentNode.getAttribute('id'));
    }
}

// добавление слушателей на каждой кнопке
ITEMS.forEach(el => el.addEventListener('click', addToCart));

// добавление структуры в корзине
function addStruct(id, name, price) {

    // добавление новой структуры
    let struct = `<div class="b-cart__el" id="el-${id}">
    <span class="b-cart__name">${name}</span>
    <input class="b-cart__input" type="number" value="1" min="1" step="1">
    <span class="b-cart__price">${price}</span>
    <span class="b-cart__item-total">${price}</span>
    <img src="img/close-button.svg" alt="Close" class="b-cart__closeBtn"></div>`;
    CART_TOTAL.insertAdjacentHTML('beforebegin', struct);

    let parentElement = document.getElementById(`el-${id}`);

    // добавить слушателя события на новом поле ввода
    parentElement.childNodes[3].addEventListener('change', () => {
        parentElement.childNodes[3].setAttribute('value',
            Number(parentElement.childNodes[3].value));
        countItemTotal(parentElement);
        countTotal();
    });

    // добавить слушателя события на новой кнопке закрытия
    parentElement.lastChild.addEventListener('click', () => {
        parentElement.remove();
        countTotal();
    });

    countTotal();
}

// изменение структуры при добавлении такого же элемента
function modifyStruct(id) {
    let parentElement = document.getElementById(`el-${id}`);
    parentElement.childNodes[3].setAttribute('value',
        Number(parentElement.childNodes[3].getAttribute('value')) + 1);
    countItemTotal(parentElement);
    countTotal();
}

// посчитать общую стоимость по одному товару
function countItemTotal(el) {
    let numOfItems = Number(el.childNodes[3].getAttribute('value'));
    let price = Number(el.childNodes[5].innerHTML.slice(1));
    el.childNodes[7].innerHTML = "$" + (numOfItems * price).toFixed(2);
}

// посчитать общую стоимость всех товаров
function countTotal() {
    let totalsOfEl = document.querySelectorAll('.b-cart__item-total');
    let numsOfItems = document.querySelectorAll('.b-cart input');
    let totalNumOfItems = 0;
    let sum = 0;
    totalsOfEl.forEach(el => {
        sum += Number(el.innerHTML.slice(1));
    });
    numsOfItems.forEach(el => {
        totalNumOfItems += Number(el.getAttribute('value'));
    });

    CART_TOTAL.innerHTML = 'TOTAL: $' + sum.toFixed(2);

    if (sum != 0) {
        NUMBER.innerHTML = totalNumOfItems;
        if (NUMBER.classList.contains('b-cart__number_hidden')) {
            NUMBER.classList.remove('b-cart__number_hidden');
        }
    }

    if (sum == 0 && !NUMBER.classList.contains('b-cart__number_hidden')) {
        NUMBER.classList.add('b-cart__number_hidden');
        NUMBER.innerHTML = '';
    }
}
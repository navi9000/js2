import PRODUCTS from '../main.js';
import Hamburger from './Hamburger.js';

export default class Core {

    getProductTypeList(productType) {
        return PRODUCTS.filter(el => el.type == productType);
    }

    buildPromptMessage(productType, arr) {
        let message = `Please choose a ${productType}`;
        let arrLen = arr.length;
        for (let i = 1; i <= arrLen; i++) {
            message += `\n${i} - ${arr[i - 1].name}`;
        }
        if (productType == 'topping') {
            message += `\n0 - No Topping`;
        }
        return message;
    }

    getUserInfo(productType) {
        let list = this.getProductTypeList(productType);
        console.log(list, productType);
        let userInput = +prompt(this.buildPromptMessage(productType, list));
        if (!Number.isInteger(userInput) ||
            (productType != 'topping' && !(userInput > 0 && userInput <= list.length)) ||
            (productType == 'topping' && !(userInput >= 0 && userInput <= list.length))) {
            alert('Input incorrect. Please try again.');
            return this.getUserInfo(productType);
        }
        if (userInput == 0) return null;
        return list[userInput - 1];
    }

    init() {
        alert('Hello!');
        let hamburger = this.getUserInfo('hamburger');
        let filling = this.getUserInfo('filling');
        let topping = this.getUserInfo('topping');
        let order = new Hamburger(hamburger, filling, topping);
        alert(this.buildResultMessage(order));
    }

    buildResultMessage(obj) {
        return `You ordered:\n1 ${obj.hamburger.name.toUpperCase()} with ${obj.filling.name.toUpperCase()}${obj.topping === null ? '' : ' and ' + obj.topping.name.toUpperCase()}\n\nTOTAL CALORIES: ${obj.countCalories()}\nTOTAL PRICE: ${obj.countPrice()} RUB`;
    }
}
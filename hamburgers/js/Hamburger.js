export default class Hamburger {
    constructor(hamburger, filling, topping) {
        this.hamburger = hamburger;
        this.filling = filling;
        this.topping = topping;
    }

    countPrice() {
        let myPrice = this.hamburger.price + this.filling.price;
        if (this.topping !== null) {
            myPrice += this.topping.price;
        }
        return myPrice;
    }

    countCalories() {
        let myCalories = this.hamburger.calories + this.filling.calories;
        if (this.topping !== null) {
            myCalories += this.topping.calories;
        }
        return myCalories;
    }

}
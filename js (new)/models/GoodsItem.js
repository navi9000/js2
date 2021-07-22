export default class GoodsItem {
    constructor({ id, title, desc, price }) {
        this._id = id;
        this._title = title;
        this._desc = desc;
        // this._image = image;
        this._price = price;
    }

    get id() { return this._id }
    get title() { return this._title }
    get desc() { return this._desc }
    // get image() {return this._image}
    get price() { return this._price }
}
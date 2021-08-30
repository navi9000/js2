import dataHandler from "../helpers/dataHandler.js";
import GoodsList from "./GoodsList.js";
import GoodsItem from "./GoodsItem.js";

export default class Showcase extends GoodsList {
    constructor() {
        super();
    }

    load() {
        super.load(dataHandler.getCatalog.bind(dataHandler), GoodsItem);
    }
}
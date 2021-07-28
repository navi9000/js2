export default {
    _JSON_PATH_ROOT: "js (new)/db/",
    getCatalog(errorCallback) {
        return fetch(this._JSON_PATH_ROOT + "catalogData.json")
            .then(response => response.json())
            .then(data => data)
            .catch(() => errorCallback());
    },

    getCart(errorCallback) {
        return fetch(this._JSON_PATH_ROOT + "getBasket.json")
            .then(response => response.json())
            .then(data => data)
            .catch(() => errorCallback());
    }
}
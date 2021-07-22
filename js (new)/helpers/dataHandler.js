export default {
    _JSON_PATH_ROOT: "/projects/geekbrains_js_advanced/js (new)/db/",
    getCatalog(errorCallback) {
        return fetch(this._JSON_PATH_ROOT + "catalogData.json")
            .then(response => response.json())
            .then(data => data)
            .catch(() => errorCallback());
    },

    getCart(errorCallback) {
        return fetch(this._JSON_PATH_ROOT + "getCart.json")
            .then(response => response.json())
            .then(data => data)
            .catch(() => errorCallback());
    }
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catalog: [],
    cart: []
  },
  getters: {
    getCatalog(state) {
      return state.catalog;
    },
    getCart(state) {
      return state.cart;
    }
  },
  mutations: {
    setCatalog(state, payload) { state.catalog = [...state.catalog, ...payload] },
    addToCart(state, id) {
      const addedItem = state.cart.find(item => item.id === id);
      if (addedItem) {
        addedItem.quantity++;
      } else {
        const el = state.catalog.find(item => item.id === id);
        state.cart.push({ ...el, quantity: 1 });
      }
    },
    resetCart(state) { state.cart = [] },
    removeItemFromCart(state, id) {
      let index = state.cart.findIndex(item => item.id === id);
      state.cart.splice(index, 1);
      console.log(state.cart)
    },
    // modifyQuantity(state, [id, quantity]) {
    //   let modifiedItem = state.cart.find(item => item.id === id);
    //   modifiedItem.quantity = quantity;
    //   console.log(state.cart)
    // }
  },
  actions: {
    loadCatalog({ commit }) {
      return fetch('api/goods')
        .then(response => response.json())
        .then(goodsList => commit('setCatalog', goodsList));
    },

    loadToCart({ commit }, item) {
      return fetch('api/cart', { method: 'POST', body: JSON.stringify(item) })
        .then(() => commit('addToCart', item.id));
    },
    removeAllFromCart({ commit }) {
      return commit('resetCart');
    },
    removeFromCart({ commit }, item) {
      return fetch('api/cart', { method: 'POST', body: JSON.stringify(item) })
        .then(() => commit('removeItemFromCart', item.id));
    },
    // changeQuantity({ commit }, [item, quantity]) {
    //   return fetch('api/cart', { method: 'POST', body: JSON.stringify(item) })
    //     .then(() => commit('modifyQuantity', [item.id, quantity]));
    // }
  }
})

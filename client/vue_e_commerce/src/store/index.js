import { createStore } from 'vuex'
import product from './product'
import cart from './cart'


export default createStore({
  state: {
    baseUrl: '/api'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    product,
    cart,
  }
})

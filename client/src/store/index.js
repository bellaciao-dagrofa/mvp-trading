import Vue from 'vue';
import Vuex from 'vuex';
import product from './product'
import cart from './cart'
import authentication from './authentication'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: '/api'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    product,
    authentication
  },
});

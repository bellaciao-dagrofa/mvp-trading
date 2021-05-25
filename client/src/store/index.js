import Vue from 'vue';
import Vuex from 'vuex';
import product from './product'
import cart from './cart'
import authentication from './authentication'
import category from './category'
import loading from './loading'
import product_nft from './product_nft'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    category,
    cart,
    product,
    authentication,
    loading,
    product_nft,
  },
});

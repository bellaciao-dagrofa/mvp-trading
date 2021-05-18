import Vue from 'vue'

import HTTP from '../http'

export default {

    namespaced: true,
    state : {
        latestProducts: [],
        product: {},
    },
    actions: {
        getLatestProducts({commit}){
            console.log("GET LATEST PRODUCTS")
            return HTTP().get('v1/latest-products/')
            .then(({data})=>{
                commit('setLatestProducts', data)
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        getProduct({commit}, {category_slug, product_slug}){
            console.log("GET PRODUCT")
            return HTTP().get(`v1/products/${category_slug}/${product_slug}`)
            .then(({data})=>{
                commit('setProduct', data)
            })
            .catch(err =>{
                console.log(err)
            })
        },
    },
    getters: {

    },
    mutations: {
        setLatestProducts(state, latestProducts){
            state.latestProducts = latestProducts
        },
        setProduct(state, product){
            state.product = product
        }

    },

}
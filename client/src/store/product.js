import Vue from 'vue'

import HTTP from '../http'

export default {

    namespaced: true,
    state : {
        latestProducts: [],
        searchProducts: [],
        product: {},
        searchWord: null,
        searchTerm: null,
    },
    actions: {
        async getLatestProducts({commit}){
            commit('loading/setIsLoading', true,  { root: true })
            console.log("GET LATEST PRODUCTS")
            await HTTP().get('v1/latest-products/')
            .then(({data})=>{
                commit('setLatestProducts', data)
            })
            .catch((error)=>{
                console.log(error)
            })
            commit('loading/setIsLoading', false,  { root: true })

        },
        async getProduct({commit}, {category_slug, product_slug}){
            commit('loading/setIsLoading', true,  { root: true })
            console.log("GET PRODUCT")
            await HTTP().get(`v1/products/${category_slug}/${product_slug}`)
            .then(({data})=>{
                commit('setProduct', data)
            })
            .catch(err =>{
                console.log(err)
            })
        //     setTimeout(() => { 
        //     console.log("World!");
        //     commit('setIsLoading', false)

        // }, 2000);
            commit('loading/setIsLoading', false,  { root: true })

        },
        async search({commit, state}){
            console.log("SEARCHING")
            commit('loading/setIsLoading', true,  { root: true })

            await HTTP().post('v1/products_search/', {
                query: state.searchWord
            })
            .then(({data})=>{
               commit('setSearchProducts', data)
            })
            .catch(err=>{
                console.log(err)
            })
            commit('setSearchTerm', state.searchWord)
            commit('setSearchWord', null)
            commit('loading/setIsLoading', false,  { root: true })

        }
    },
    getters: {

    },
    mutations: {
        setLatestProducts(state, latestProducts){
            state.latestProducts = latestProducts
        },
        setProduct(state, product){
            state.product = product
        },
        setSearchWord(state, searchWord){
            let searchWordValue = null
            if (searchWord !== null ){
                if (typeof(searchWord) !== "string"){
                    searchWordValue = searchWord.target.value
                }
            }
            state.searchWord = searchWordValue
        },
        setSearchProducts(state, searchResult){
            state.searchProducts = searchResult
        },
        setSearchTerm(state, searchTerm){
            state.searchTerm = searchTerm
        }
      

    },

}
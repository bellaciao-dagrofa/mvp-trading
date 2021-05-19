import Vue from 'vue'
import HTTP from '../http'


export default {
    namespaced:true,
    state: {
       category:{
           products: []
       },
       error: null
    },
    mutations: {
        setCategory(state, category){
            state.category = category
        },
        setError(state, error){
            state.error = error
        }
    },
    actions:{
        async getCategory({commit}, {category_slug}){
            console.log(category_slug)
            console.log("GET CATEGORY")
            commit('setError', null)
            commit('loading/setIsLoading', true,  { root: true })
            await HTTP().get(`/v1/products/${category_slug}`)
            .then(({data})=>{
                commit("setCategory", data)
            })
            .catch(err=>{
                console.log(err)
                commit('setError', 'Something went wrong, Please try again')
            })

            commit('loading/setIsLoading', false,  { root: true })

        }

    },
    getters:{
        getError(state){
            return state.error
        }
    }
}
import Vue from 'vue'
import HTTP from '../http'
import product from './product'

export default {

    namespaced: true,
    state : {
        cart: {
            items: []
        },
        cartTotalLength:0,
        quantity: 1,
    },
    actions: {
        initializeCart({commit, state}){
            if (localStorage.getItem('cart')){
                commit('setCart', JSON.parse(localStorage.getItem('cart')))
            }
            else{
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            commit('countCartTotalLength')
        },
        addToCart({commit, state}){
            console.log("ADD TO CART")
            const product_object = product.state.product
            // console.log(product_object)
            const quantity = state.quantity
            // console.log(quantity)

            const exists = state.cart.items.filter((i)=>{
                // console.log(i)
                return i.id === product_object.id
            })
            console.log(exists)
            if(exists.length){
                console.log("OYOYYOYO")
            }
            // const exists = state.cart.items.filter((i)=>{
            //     console.log(i)
            //     console.log(item)
            //     return i.id === item.id
            // })
            // if (exists.length){
            //     exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
            // }
            // else{
            //     commit('pushItemToCart', item)
            // }    
            // localStorage.setItem('cart', JSON.stringify(state.cart))
            // commit('countCartTotalLength')
        },
        
      
    },
    getters: {

    },
    mutations: {
        setCart(state, cart){
            state.cart = cart
        },
        pushItemToCart(state, item){
            state.cart.items.push(item)
        },
        countCartTotalLength(state){
            const cartItem = state.cart.items
            let totalLength = 0
            cartItem.forEach((item)=>{
                console.log(item)
                totalLength += item.quantity
            }) 
            console.log(totalLength)
        },
        setQuantity(state, quantity){
            console.log("SET QUANTITY")
            if(isNaN(quantity) || quantity < 1)
            {
                quantity = 1
            }
            state.quantity = quantity
        }

    },

}
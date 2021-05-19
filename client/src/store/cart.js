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
            if(exists.length){
                exists[0].quantity = parseInt(exists[0].quantity) + parseInt(quantity)
                // console.log("EXISTS", exists[0])
            }
            else{
                commit('pushItemToCart', {product_object, quantity})
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
            commit('countCartTotalLength')
            commit('setQuantity', 1)
          
        },
        
      
    },
    getters: {

    },
    mutations: {
        setCart(state, cart){
            state.cart = cart
        },
        pushItemToCart(state, {product_object, quantity}){
            product_object.quantity = quantity
            state.cart.items.push(product_object)
        },
        countCartTotalLength(state){
            const cartItem = state.cart.items
            let totalLength = 0
            cartItem.forEach((item)=>{
                console.log(item)
                totalLength += parseInt(item.quantity)
            }) 
            // console.log(totalLength)
            state.cartTotalLength = totalLength
        },
        setQuantity(state, quantity){
            let quantity_value = 0
            if(Number.isInteger(quantity)){
                quantity_value = quantity
            }
            else{
                quantity_value = quantity.target.value
            }
            console.log("SET QUANTITY", quantity_value)
            if(isNaN(quantity_value) || quantity_value < 1)
            {
                quantity_value = 1
            }
            state.quantity = quantity_value
        }

    },

}
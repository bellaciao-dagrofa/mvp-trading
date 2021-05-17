import Vue from 'vue'

export default {
    state: {
        cart: {
            items: [],
        }
    },
    mutations: {
        addToCart(state, item){
            const exists = state.cart.items.filter(index => index.product.id === items.product.id)
            if (exists.length){
                exists[0].quantity=  parseInt(exists[0].quantity) + parseInt(items.quantity)
            }
            else{
                state.cart.items.push(item)
            }

            this.saveToLocalStorage('cart', state.cart)

            
        },
        saveToLocalStorage(item, value){
            localStorage.setItem(item, JSON.stringify(value))
        }
    },
    actions:{
        initializeCart(state){
            if (localStorage.getItem('cart')){
                state.cart = JSON.parse(localStorage.getItem('cart'))
            }
            else{
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
    }
}
<template>
    <div class="page-cart">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">
                Cart
                </h1>
            </div>
             <div class="column is-12 box">
                 <table class="table is-fullwidth" v-if="cartTotalLength">
                     <thead>
                         <tr>
                             <th>Product</th>
                             <th>Price</th>
                             <th>Quantity</th>
                             <th>Total</th>
                             <th></th>
                         </tr>
                     </thead>
                     <tbody>
                         <CartItem
                            v-for="item in cart.items"
                            :key="item.id"
                            :initialItem="item"
                         />
                     </tbody>
                 </table>
                 <p v-else>You don't have any products in your cart...</p>
             </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
    name: 'Cart',
    // c
}
</script>

<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <!-- <figure class="image mb-6">
          <img :src="product.get_image" />
        </figure>
         -->
        <div>
              <LazyYoutube :src="product.url" />
        </div>
        <h1 class="title sub-color">
          {{ product.name }}
        </h1>
        <p>
          {{ product.description }}
        </p>
      </div>

      <div class="column is-3">
        <h2 class="subtitle sub-color">Information</h2>
        <p>
          <strong class="price-color"> <u>Price: </u></strong>
          $ {{ product.price }}
        </p>
        <div class="field has-addons mt-6">
          <div class="control">
            <!-- <input type="number" class="input" min="1" v-model="quantity" />
             -->
             <input 
                type="number" 
                class="input" 
                min="1"
                :value="quantity"
                @input="setQuantity"> 
          </div>

          <div class="control">
            <a class="button is-dark" 
              @click="addToCartProduct()"> 
              Add to cart 
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { toast } from 'bulma-toast'

import { LazyYoutube } from "vue-lazytube";


export default {
  name: "Product",
  components:{
            LazyYoutube,

  },
  computed: {
    ...mapState('product', [
      'product',
    ]),
    ...mapState('cart', [
      'quantity',
    ]),
  },
  methods: {
    ...mapActions('product', [
      'getProduct'
    ]),
    ...mapActions('cart', [
      'addToCart'
    ]),
    ...mapMutations('cart', [
      'setQuantity'
    ]),
    addToCartProduct(){
      this.addToCart()
      toast({
        message: "The product was added to the cart",
        type: 'is-success',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right'
        
      })
    },
  
  },
  
  mounted() {
    const category_slug = this.$route.params.category_slug
    const product_slug = this.$route.params.product_slug
    this.getProduct({category_slug, product_slug})
    const default_string = " | Sutrix-ecommerce"
    const title_string = product_slug.concat(default_string)
    document.title = title_string
  },
};
</script>
<style scoped lang="scss">

.sub-color{
  color: rgb(201, 206, 214)
}

.price-color{
  color: red
}
</style>
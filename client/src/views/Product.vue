<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-6">
        <!-- <figure class="image mb-6">
          <img :src="product.get_image" />
        </figure>
         -->
        <div>
          <LazyYoutube :src="product.url" />
        </div>
      </div>

      <div class="column is-6">
        <h2 class="subtitle sub-color">Information</h2>
        <h1 class="title sub-color">
          {{ product.name }}
        </h1>
        <p>
          {{ product.description }}
        </p>
        <p>
          <strong class="price-color bigger-price">
            <u> ${{ product.price }} USD</u></strong
          >
        </p>
        <div class="field has-addons mt-6">
          <!-- <div class="control">
             <input 
                type="number" 
                class="input" 
                min="1"
                :value="quantity"
                @input="setQuantity"> 
          </div> -->

          <!-- <div class="control">
            <a class="button is-dark" 
              @click="addToCartProduct()"> 
              Add to cart 
            </a>
          </div> -->
          <div class="control">
            <a class="button is-dark">
              SELECT AND BUY
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="dropdown detail-div" v-bind:class="{'is-active': isShowDetail}" 
          @click="isShowDetail = !isShowDetail">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Collection Detail</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
          {{ product.description }}
            </a>
          </div>
        </div>
      </div> -->
      <div class="detail-div"
      >
      COLLECTION DETAIL
         <i 
         class="icon-right fas fa-arrow-down"></i>
         <div class="description">
         {{product.description}}
         </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { toast } from "bulma-toast";

import { LazyYoutube } from "vue-lazytube";

export default {
  name: "Product",
  components: {
    LazyYoutube
  },
  data(){
    return{
      isShowDetail: false
    }
  },
  computed: {
    ...mapState("product", ["product"]),
    ...mapState("cart", ["quantity"])
  },
  methods: {
    ...mapActions("product", ["getProduct"]),
    ...mapActions("cart", ["addToCart"]),
    ...mapMutations("cart", ["setQuantity"]),
    addToCartProduct() {
      this.addToCart();
      toast({
        message: "The product was added to the cart",
        type: "is-success",
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: "bottom-right"
      });
    },
  },

  mounted() {
    const category_slug = this.$route.params.category_slug;
    const product_slug = this.$route.params.product_slug;
    this.getProduct({ category_slug, product_slug });
    const default_string = " | Top E-sport NFT trading";
    const title_string = product_slug.concat(default_string);
    document.title = title_string;
  }
};
</script>
<style scoped lang="scss">
.sub-color {
  color: rgb(201, 206, 214);
}

.price-color {
  color: red;
}

.bigger-price {
  font-size: 50px;
}

.dropdown {
  width: 100%;
  
  .dropdown-menu{
    width: 100%;
  }

  .dropdown-trigger {
  width: 100%;

  button {
  width: 100%;
  }

}
}

.detail-div{
  background-color: black;
  width: 100%;
  font-size: 30px;
  padding-left:30px;
  text-align: left;
  font-family: Shapiro,sans-serif;

  .icon-right{
    float: right;
    padding-right: 10px;
    padding-top: 7px;  }
}

.description{
      font-size: 15px;
    padding-top: 15px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 15px;
    background-color: aquamarine;
}


</style>

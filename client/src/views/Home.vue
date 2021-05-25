<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <!-- <p class="title mb-6">Welcome to MVP</p> -->
        <img src="https://lh5.googleusercontent.com/Ja0yCw81LMzaCw8JcfKt6i8QnEYr0r9y1ZwSjr3kwHGIvhpVSia-usYXEB4B0NpwxsXAoZmyaEdFjLO3evyH1DyfTebRNoyeTwYL2K_OFNbCcqFO398SzYbiPA_kFJ3VcLit2G4QzJ4"/>                
        <p class="subtitle">best E-sport NFT trading on Binance Smart Chain</p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-centered">Latest Products</h2>
      </div>

      <!-- <div
        class="column is-3"
        v-for="product in latestProducts"
        v-bind:key="product.id"
      >
        <div class="box">
          <figure class="image mb-4">
            <img v-bind:src="product.get_thumbnail" />
          </figure>
          <h3 class="is-size-4">
            {{ product.name }}
          </h3>
          <p class="is-size-6 has-text-grey">${{ product.price }}</p>
        
          <router-link 
            :to="product.get_absolute_url"
            class="button is-dark mt-4">
              View details
          </router-link>
        </div>
      </div> -->
    <ProductBox 
        v-for="product in latestProducts"
        :key="product.id"
        :product="product"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from "vuex";
import ProductBox from '@/components/ProductBox.vue'

export default {
  name: "Home",
  components:{
    ProductBox
    },
  async mounted(){
    document.title = "MVP | Top E-sport NFT trading"
    await this.getLatestProducts()
  },
  computed:{
    ...mapState('product', [
      'latestProducts'
    ]),
  },
  methods: {
    ...mapActions('product', [
        'getLatestProducts'
    ]),
  },
};
</script>

<style scoped>


.image{
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>
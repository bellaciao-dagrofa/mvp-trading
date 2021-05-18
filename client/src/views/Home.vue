<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">Welcome to Django E-commerce</p>
        <p class="subtitle">the best E-commerce store offline</p>
      </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-centered">Latest Products</h2>
      </div>

      <div
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
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions, mapMutations } from "vuex";


export default {
  name: "Home",
  async mounted(){
    await this.getLatestProducts()
  },
  computed:{
    ...mapState('product', [
      'latestProducts'
    ])
  },
  methods: {
    ...mapActions('product', [
        'getLatestProducts'
    ])
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
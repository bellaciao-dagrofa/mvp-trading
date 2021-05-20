<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"
          ><strong>E Commerce</strong></router-link
        >

        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          @click="showMobileMenu = !showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        class="navbar-menu"
        id="navbar-menu"
        v-bind:class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-start">
          <div class="navbar-item">
            <!-- <form> -->
              <div class="field has-addons">
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    placeholder="What are you looking for?"
                    :value="searchWord"
                    @input="setSearchWord"
                  />
                </div>

                <div class="control">
                  <button 
                    class="button is-success"
                    @click="searchItem()">
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                  </button>
                </div>
              </div>
            <!-- </form> -->
          </div>
        </div>
        <div class="navbar-end">
          <router-link to="/category/summer" class="navbar-item">Summer</router-link>
          <router-link to="/category/winter" class="navbar-item">Winter</router-link>

          <div class="navbar-item">
            <div class="buttons">
              <router-link to="/login" class="button is-light"
                >Login</router-link
              >

              <router-link to="/cart/" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart {{ cartTotalLength }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="is-loading-bar has-text-centered"
      :class="{ 'is-loading': isLoading }"
    >
      <div class="lds-dual-ring"></div>
    </div>

    <section class="section">
      <router-view />
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import router from './router'

export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  created() {
    this.initializeCart();
    console.log("DONE");
  },
  computed: {
    ...mapGetters("authentication", []),
    ...mapState("loading", ["isLoading"]),
    ...mapState("authentication", []),
    ...mapState("cart", ["cart", "cartTotalLength"]),
    ...mapState("product", ["searchWord"]),
  },
  methods: {
    ...mapActions("cart", ["initializeCart"]),
    ...mapActions('product', [
      'search'
    ]),
    ...mapMutations("product", ["setSearchWord"]),
    searchItem(){
      this.search()
      if(this.$route.name !== 'Search'){
        router.push({name: 'Search'})

      }
     
    }
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma";

.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.is-loading-bar {
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &.is-loading {
    height: 80px;
  }
}
</style>
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'
import TestMetaMask from '../views/TestMetaMask.vue'
import CreateProduct from '../views/CreateProduct.vue'
import Wallet from '../views/Wallet.vue';
import ProductNFT from '../views/ProductNFT.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/products/:category_slug/:product_slug/',
    name: 'Product',
    component: Product
  },
  {
    path: '/category/:category_slug/',
    name: 'Category',
    component: Category
  },
  {
    path: '/search/result/',
    name: "Search",
    component: Search
  },
  {
    path: '/cart/',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/testMetaMask',
    name: "testMetaMask",
    component: TestMetaMask
  },
  {
    path: '/createProduct',
    name: 'createProduct',
    component: CreateProduct
  },
  {
    path: "/connectWallet",
    name: "connectWallet",
    component: Wallet
  },
  {
    path: "/productNFT",
    name: "productNFT",
    component: ProductNFT
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

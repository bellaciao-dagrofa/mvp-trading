<template>
  <div>
    <vue-metamask userMessage="msg" @onComplete="onComplete"> </vue-metamask>
  </div>
</template>
<script>
import VueMetamask from "vue-metamask";
import router from '../router';

import {mapState,mapActions} from 'vuex'

export default {
  components: {
    VueMetamask
  },
  data() {
    return {
      msg: "This is demo net work"
    };
  },
  computed:{
      ...mapState('authentication', [
          "walletID"
      ])
  },
  methods: {
      ...mapActions('authentication', [
          'connectToWallet'
      ]),
    onComplete(data) {
      console.log("data:", data);
      this.connectToWallet(data.metaMaskAddress)
      router.push('/')
    }
  }
};
</script>

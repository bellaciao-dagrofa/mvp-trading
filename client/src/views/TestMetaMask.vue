<template>
  <div id="demo">
    <vue-metamask userMessage="msg" @onComplete="onComplete"> </vue-metamask>
  </div>
</template>
<script>
import VueMetamask from "vue-metamask";

const Contract = require("web3-eth-contract");
// const web3 = require("web3");

const TOTAL_COUNT_ABI = [
    {
      "constant":true,
      "inputs": [{"name":"tokenId","type":"uint256"}],
      "name":"tokenURI",
      "outputs":[{"name": "Chuong", "type":"string"}],
      "type":"function"
    },
    {
        "constant":true,
        "inputs": [{"name":"tokenURI","type":"string"}],
        "name":"createCollectible",
        "outputs":[],
        "type":"function"
      },
      {
        "constant":true,
        "inputs": [],
        "name":"totalSupply",
        "outputs":[{"name": "totalSupply", "type":"uint256"}],
        "type":"function"
      }
  ];

   const DETAIL_ABI = [
    {
      "constant":true,
      "inputs": [{"name":"tokenId","type":"uint256"}],
      "name":"tokenURI",
      "outputs":[{"name": "Chuong", "type":"string"}],
      "type":"function"
    },
    {
        "constant":true,
        "inputs": [{"name":"tokenURI","type":"string"}],
        "name":"createCollectible",
        "outputs":[],
        "type":"function"
      }
  ];
  const CONTRACT_ID = "0x22D8F94D887aEf0d732159F20e440850AEc9Bf53"

  const PROVIDER = "https://data-seed-prebsc-1-s1.binance.org:8545"

export default {
  components: {
    VueMetamask
  },
  data() {
    return {
      msg: "This is demo net work"
    };
  },
  methods: {
    async onComplete(data) {
      console.log('data:', data);
      const web3 = data.web3

      //  web3.eth.getAccounts((err, result) =>{
      //      if(!err){
      //          console.log("ACCOUNT", result)
      //      }
      //      console.log("ERR",err)
      //  })

 

      //  web3.eth.getBlockNumber((err, result)=>{
      //      if(!err){
      //          console.log('BlockNumber', result)
      //      }
      //      console.log("ERR", err)
      //  })

      //  web3.eth.getBlock(8643342, (err, result)=>{
      //      if(!err){
      //          console.log('trans', result)
      //      }
      //      console.log("ERR", err)
      //  })

       const total_product = await this.totalSupply(PROVIDER, TOTAL_COUNT_ABI, CONTRACT_ID)
       console.log("TOTAL", total_product)

       let tokenID = 0
       while(tokenID < total_product){
         this.whoOwnThisToken(tokenID, PROVIDER, DETAIL_ABI, CONTRACT_ID)
         tokenID += 1

       }
    
    },
    async whoOwnThisToken(tokenId, provider, minABI, contract_id) {
      Contract.setProvider(provider);
      const contract = new Contract(minABI, contract_id);
      const owner = await contract.methods.tokenURI(tokenId).call();
      console.log("OWNER", owner);
    },
    async totalSupply(provider, minABI, contract_id){
      Contract.setProvider(provider);
      const contract = new Contract(minABI, contract_id);
      const URI_LINK = await contract.methods.totalSupply().call();
      // console.log("COUNTING", URI_LINK)
      return URI_LINK
    },
  }
};
</script>

import Vue from 'vue'

export default {
    state: {
       walletID:null,
    },
    mutations: {
        setWalletID(state, walletID){
            state.walletID = walletID
        }

    },
    actions:{

    },
    getters:{
        isConnected(state){
            return !!state.walletID

        }
    }
}
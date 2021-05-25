import Vue from 'vue'

export default {
    namespaced: true,
    state: {
       walletID:null,
    },
    mutations: {
        setWalletID(state, walletID){
            state.walletID = walletID
        }

    },
    actions:{
        async connectToWallet({commit}, data){
            console.log("CONNECT TO WALLET")
            console.log("DATA", data)
            commit('setWalletID', data)
        }
    },
    getters:{
        isConnected(state){
            console.log("HEY YO WTF")
            console.log(state.walletID)
            console.log(!!state.walletID)
            return !!state.walletID

        }
    }
}
// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    count: 0,
    autoIncrement: 0,
    currentClickIncrement: 1,
    items: [
      {
        id: 1,
        count: 0,
        name: 'Clicker',
        img: require('../assets/clicker.png'),
        price: 15,
        vueS: 0.1,
        maxCount: 1000
      },
      {
        id: 2,
        count: 0,
        name: 'GitHub',
        img: require('../assets/github.png'),
        price: 100,
        vueS: 1,
        maxCount: 1000
      },
      {
        id: 3,
        count: 0,
        name: 'Vuex',
        img: require('../assets/vuex.png'),
        price: 1100,
        vueS: 8,
        maxCount: 1000
      },
      {
        id: 4,
        count: 0,
        name: 'Webpack',
        img: require('../assets/webpack.png'),
        price: 12000,
        vueS: 47,
        maxCount: 1000
      }
    ],
    boosts: [
      {
        id: 1,
        name: 'Silver clicker',
        img: require('../assets/clickBoost.jpg'),
        rate: 2,
        price: 100,
        target: 'Clicker',
        purchased: false
      },
      {
        id: 2,
        name: 'Gold clicker',
        img: require('../assets/clickBoost.jpg'),
        rate: 2,
        price: 500,
        target: 'Clicker',
        purchased: false
      }
    ]
  },
  mutations: {
    increment (state, n) {
      state.count += n
    },
    decrement (state, n) {
      state.count -= n
    },
    updateItem (state, params) {
      params.item.price = Math.round(params.item.price * Math.pow(1.2, params.nb))
      params.item.count += params.nb
    },
    updateAutoIncrement (state, n) {
      state.autoIncrement += n
    },
    updateCurrentClickIncrement (state, n) {
      state.currentClickIncrement = state.currentClickIncrement * n
    },
    purchasedBoost (state, boost) {
      boost.purchased = true
    }
  },
  actions: {
    increment: ({ commit }, n) => commit('increment', n),
    decrement ({ commit, state }, n) {
      if (state.count >= n) {
        commit('decrement', n)
      }
    },
    purchaseItem ({ commit, state }, params) {
      let item = params.item
      if (state.count >= item.price && item.maxCount >= item.count + params.nb) {
        commit('decrement', item.price * params.nb)
        commit('updateAutoIncrement', item.vueS * params.nb)
        commit('updateItem', {item: item, nb: params.nb})
      }
    },
    purchaseBoost ({ commit, state }, boost) {
      if (state.count >= boost.price && !boost.purchased) {
        commit('decrement', boost.price)
        commit('updateCurrentClickIncrement', boost.rate)
        commit('purchasedBoost', boost)
      }
    }
  },
  getters: {
    count: state => {
      return state.count
    },
    items: state => {
      return state.items
    },
    boosts: state => {
      return state.boosts
    },
    autoIncrement: state => {
      return state.autoIncrement
    },
    currentClickIncrement: state => {
      return state.currentClickIncrement
    }
  }
})

export default store

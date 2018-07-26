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
    }
  },
  getters: {
    count: state => {
      return state.count
    },
    items: state => {
      return state.items
    },
    item: (state) => (id) => {
      return state.items.find(items => items.id === id)
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

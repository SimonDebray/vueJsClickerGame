// Make sure to call Vue.use(Vuex) first if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    autoIncrement: 1,
    currentClickIncrement: 1,
    items: [
      {
        id: 1,
        data: {
          count: 0,
          name: 'Clicker',
          img: require('../assets/clicker.png'),
          specs: {
            price: 15,
            vueS: 0.1
          }
        }
      },
      {
        id: 2,
        data: {
          count: 0,
          name: 'GitHub',
          img: require('../assets/github.png'),
          specs: {
            price: 100,
            vueS: 1
          }
        }
      }
    ]
  },
  mutations: {
    increment (state, n) {
      state.count += n
    },
    decrement (state, n) {
      state.count -= n
    }
  },
  actions: {
    increment: ({ commit }, n) => commit('increment', n),
    decrement ({ commit, state }, n) {
      if (state.count >= n) {
        commit('decrement', n)
      }
    }
  },
  getters: {
    count: state => {
      return state.count
    },
    getAllItems: state => {
      return state.items
    },
    getItemById: (state) => (id) => {
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

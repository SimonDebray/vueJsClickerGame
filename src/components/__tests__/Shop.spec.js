import { shallowMount, createLocalVue } from '@vue/test-utils'
import Shop from '../Shop.vue'
import Vuex from 'vuex'
import store from '../../store/Store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Shop.vue', () => {
  const wrapper = shallowMount(Shop, {
    store,
    localVue,
    propsData: {
      autoIncrement: 0,
      currentClickIncrement: 1,
      count: 1000
    }
  })

  it('test items from store', () => {
    expect(wrapper.vm.items.length).toBe(4)
    expect(wrapper.vm.items).toEqual([
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
    ])
  })

  it('test boost from store', () => {
    expect(wrapper.vm.boosts.length).toBe(2)
    expect(wrapper.vm.boosts).toEqual([
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
    ])
  })

  it('test the itemPurchase', () => {
    const item = {
      id: 1,
      count: 0,
      name: 'Clicker',
      img: require('../assets/clicker.png'),
      price: 15,
      vueS: 0.1,
      maxCount: 1000
    }

    wrapper.vm.buy(item)

    wrapper.setProps({count: 0})

    wrapper.vm.boostPurchase(item)

    expect()
  })

  it('test the boostPurchase', () => {
    const boost = {
      id: 1,
      name: 'Silver clicker',
      img: require('../assets/clickBoost.jpg'),
      rate: 2,
      price: 100,
      target: 'Clicker',
      purchased: false
    }

    wrapper.setProps({count: 100})

    wrapper.vm.boostPurchase(boost)

    expect()

    wrapper.setProps({count: 0})

    wrapper.vm.boostPurchase(boost)
  })
})

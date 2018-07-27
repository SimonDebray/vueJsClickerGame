import { shallowMount, createLocalVue } from '@vue/test-utils'
import ShopItem from '../ShopItem.vue'
import Vuex from 'vuex'
import store from '../../store/Store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ShopItem.vue', () => {
  const wrapper = shallowMount(ShopItem, {
    store,
    localVue,
    propsData: {
      item: {
        id: 1,
        count: 0,
        name: 'Clicker',
        img: require('../assets/clicker.png'),
        price: 15,
        vueS: 0.1,
        maxCount: 1000
      },
      count: 0
    }
  })

  it('test the buy event emitter', () => {
    const button = wrapper.find('div')
    // check that the event has not been emitted as the count is not enough
    button.trigger('click')
    expect(wrapper.emitted().buy).toBe(undefined)
    // change the count to make purchase possible
    wrapper.setProps({count: 15})
    // Trigger click event
    button.trigger('click')
    // assert event count
    expect(wrapper.emitted().buy.length).toBe(1)
    // check that the event has been emitted
    expect(wrapper.emitted().buy[0]).toEqual([{
      id: 1,
      count: 0,
      name: 'Clicker',
      img: require('../assets/clicker.png'),
      price: 15,
      vueS: 0.1,
      maxCount: 1000
    }])
  })

  it('test the class getter', () => {
    // reset count
    wrapper.setProps({count: 0})
    // check that the good class are returned
    expect(wrapper.vm.getClass()).toEqual({
      isNotClickable: true,
      isClickable: false
    })
    // change the count to make purchase possible
    wrapper.setProps({count: 15})
    // check that the event has been emitted
    expect(wrapper.vm.getClass()).toEqual({
      isNotClickable: false,
      isClickable: true
    })
  })
})

import { shallowMount, createLocalVue } from '@vue/test-utils'
import BoostItem from '../BoostItem.vue'
import Vuex from 'vuex'
import store from '../../store/Store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('BoostItem.vue', () => {
  const wrapper = shallowMount(BoostItem, {
    store,
    localVue,
    propsData: {
      boost: {
        id: 1,
        name: 'Silver clicker',
        img: require('../assets/clickBoost.jpg'),
        rate: 2,
        price: 100,
        target: 'Clicker',
        purchased: false
      },
      count: 0
    }
  })

  it('test the boostPurchase event emitter', () => {
    const button = wrapper.find('div')
    // check that the event has not been emitted as the count is not enough
    button.trigger('click')
    expect(wrapper.emitted().boostPurchase).toBe(undefined)
    // change the count to make purchase possible
    wrapper.setProps({count: 100})
    // Trigger click event
    button.trigger('click')
    // assert event count
    expect(wrapper.emitted().boostPurchase.length).toBe(1)
    // check that the event has been emitted
    expect(wrapper.emitted().boostPurchase[0]).toEqual([{
      id: 1,
      name: 'Silver clicker',
      img: require('../assets/clickBoost.jpg'),
      rate: 2,
      price: 100,
      target: 'Clicker',
      purchased: false
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
    wrapper.setProps({count: 100})
    // check that the event has been emitted
    expect(wrapper.vm.getClass()).toEqual({
      isNotClickable: false,
      isClickable: true
    })
  })
})

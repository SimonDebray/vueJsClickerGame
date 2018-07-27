import { shallowMount, createLocalVue } from '@vue/test-utils'
import Main from '../Main.vue'
import Vuex from 'vuex'
import store from '../../store/Store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Main.vue', () => {
  const wrapper = shallowMount(Main, { store, localVue })

  // Save default store state
  const initialStateCopy = JSON.parse(JSON.stringify(store.state))

  // Reset default store state before each test
  beforeEach(() => {
    store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
  })

  it('when receiving the emit from clicker, main count should increment', () => {
    // Check that the store is initialized
    expect(wrapper.vm.count).toBe(0)
    wrapper.vm.counter()
    // assert event has been emitted
    expect(wrapper.vm.count).toBe(1)
  })

  it('check that the auto incrmeent is working, main count should autoIncrement', () => {
    // Check that the store is initialized
    expect(wrapper.vm.count).toBe(0)
    // Update autoIncrement in the store
    store.commit('updateAutoIncrement', 1)
    // Wait 1 second to see if the count is updated
    setTimeout(function () {
      expect(wrapper.vm.count).toBe(1)
      // Wait 1 second to see if the count is updated
      setTimeout(function () {
        expect(wrapper.vm.count).toBe(2)
      }, 1001)
    }, 1001)
  })

  it('when bonus is clicked, main count should increment by 600*autoIncrement', () => {
    // Check that the store is initialized
    expect(wrapper.vm.count).toBe(0)
    // Update autoIncrement in the store
    store.commit('updateAutoIncrement', 1)
    // Trigger the bonus event
    wrapper.vm.bonus()
    // Check that the count has ben updated
    expect(wrapper.vm.count).toBe(600)
  })

  it('check data initialized data', () => {
    // Check initialized data
    expect(wrapper.vm.displayBonus).toBe(false)

    setTimeout(function () {
      expect(wrapper.vm.count).toBe(1)
      // Wait 1 second to see if the count is updated
      expect(store.mutations.increment).toHaveBeenCalled()
    }, 1001)
  })
})

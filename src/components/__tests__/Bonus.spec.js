import { shallowMount, createLocalVue } from '@vue/test-utils'
import Bonus from '../Bonus.vue'
import Vuex from 'vuex'
import store from '../../store/Store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Bonus.vue', () => {
  const wrapper = shallowMount(Bonus, { store, localVue })

  it('VUE click should emit an event to main', () => {
    const button = wrapper.find('img')
    button.trigger('click')
    // assert event count
    expect(wrapper.emitted().bonus.length).toBe(1)
  })
})

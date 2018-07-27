import { shallowMount, createLocalVue } from '@vue/test-utils'
import Clicker from '../Clicker.vue'
import Vuex from 'vuex'
import store from '../../store/Store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Clicker.vue', () => {
  const wrapper = shallowMount(Clicker, { store, localVue })

  it('VUE click should emit an event to main each time it is clicked', () => {
    const button = wrapper.find('img')
    // assert event has been emitted
    button.trigger('click')
    expect(wrapper.emitted().counter).toBeTruthy()
    button.trigger('click')
    // assert event count
    expect(wrapper.emitted().counter.length).toBe(2)
  })
})

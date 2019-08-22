import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Pomodoro from '@/components/Pomodoro.vue'

describe('Pomodoro.vue', () => {
  it('should be has start timer', () => {
    const timerStart = '25:00'
    const wrapper = shallowMount(Pomodoro)
    expect(wrapper.text()).to.include(timerStart)
  })

  /*
  it('should filter seconds', () => {

  })
  */
})

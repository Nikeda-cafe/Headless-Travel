import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    sp: 767,
    pc: 768
  },
  defaultBreakpoint: 'sp'
})

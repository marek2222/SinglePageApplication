import Vue from 'vue'
import App from './App.vue'
Vue.component('nazwa', {
  template: '<p>'
})


new Vue({
  el: '#app',
  render: h => h(App)
})

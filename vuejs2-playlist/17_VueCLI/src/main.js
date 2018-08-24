import Vue from 'vue'
import App from './App.vue'

//// only for globally component
// import Ninjas from './Ninjas.vue'

// Vue.component ('ninjas', Ninjas);


new Vue({
  el: '#app',
  render: h => h(App)
})

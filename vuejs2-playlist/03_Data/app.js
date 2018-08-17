new Vue({
  el: '#vue-app',
  data: {
    name: 'marek2222',
    job: 'ninja'
  },
  methods: {
    greet: function(time) {
      return 'Good '+ time + ' '+ this.name;
    }
  }
});
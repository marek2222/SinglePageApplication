new Vue({
  el: '#vue-app',
  data: {
    name: 'marek2222',
    job: 'ninja',
    website: 'http://thenetninja.co.uk',
    websiteTag: '<a href="http://thenetninja.co.uk">The Net Ninja Website</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good '+ time + ' '+ this.name;
    }
  }
});
new Vue({
  el: '#vue-app',
  data: {
    name: 'marek2222',
    job: 'ninja',
    website: 'https://www.thenetninja.co.uk/',
    websiteTag: '<a href="https://www.thenetninja.co.uk/">The Net Ninja</a>'
  },
  methods: {
    greet: function(time) {
      return 'Good '+ time + ' '+ this.name;
    }
  }
});
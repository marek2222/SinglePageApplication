new Vue({
  el: '#vue-app',
  data: {
    b: 0
  },
  methods: {
  },
  computed: {
    addToB: function() {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});
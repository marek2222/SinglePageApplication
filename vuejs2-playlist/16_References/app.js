new Vue({
  el: '#vue-app',
  data: {
    wynik: 'Podaj ulubione jedzenie'
  },
  methods: {
     czytajReferencje: function () { 
       console.log(this.$refs.pole.value);
      this.wynik = this.$refs.pole.value;

      //show all the refs: pole i test
      console.log(this.$refs);
    }
  },
  computed: {
  
  }
});
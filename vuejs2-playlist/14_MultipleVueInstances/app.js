var pierwsza = new Vue({
  el: '#vue-app-one',
  data: {
    tytul: 'Vue App One'
  },
  methods: {
  
  },
  computed: {
    powitanie: function () {  
      return 'Witaj z pierwszej instancji Vue'; 
    }
  }
});

var druga = new Vue({
  el: '#vue-app-two',
  data: {
    tytul: 'Vue App Two'
  },
  methods: {
    zmienTytul: function(){
      pierwsza.tytul = "Zmieniono pierwszy tutuł";
    }
  },
  computed: {
    powitanie: function () {  
      return 'Witaj, to druga instancja Vue.js'; 
    }
  }
});

druga.tytul = "Zmieniony tytuł";
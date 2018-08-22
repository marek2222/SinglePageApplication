var dane = {
  nazwa: 'Yoshi'
}

Vue.component('powitanie', {
  template: '<p>Witaj, jestem {{ nazwa }}. <button @click="zmienNazwe">Zmien nazwę</button></p>',
  data: function (){
    return dane;
  },
  methods: {
    zmienNazwe: function() {
      this.nazwa = 'Mario'
    }
  }
});

new Vue({
  el: '#vue-app-one'
});

new Vue({
  el: '#vue-app-two'
});


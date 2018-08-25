 <template>
    <div>
        <naglowek-apl v-bind:tytul="tytul" v-on:zmienTytul="aktualizujTytul($event)"></naglowek-apl>
        <osoby-apl      v-bind:osoby="osobyDane"></osoby-apl>
        <stopka-apl     v-bind:tytul="tytul"></stopka-apl>
    </div>
</template>


<script>
import Naglowek from './components/Naglowek.vue';
import Osoby from './components/Osoby.vue';
import Stopka from './components/Stopka.vue';

export default {
  components: {
    'naglowek-apl': Naglowek,
    'osoby-apl': Osoby,
    'stopka-apl': Stopka
  },
  data() {
    return {
      osobyDane: [
        {nazwa: 'Jarek', specjalnosc: 'Vue komponent', widocznosc: false},
        {nazwa: 'Darek', specjalnosc: 'Czarodziej Vue ', widocznosc: false},
        {nazwa: 'Wiesiek', specjalnosc: 'Zdarzenie Click', widocznosc: false},
        {nazwa: 'Stasiek', specjalnosc: 'Warunki', widocznosc: false},
        {nazwa: 'Daniel', specjalnosc: 'Webpack', widocznosc: false},
        {nazwa: 'Damian', specjalnosc: 'Vue undefinied', widocznosc: false}
      ]
      ,tytul: 'Osoby z Vue'
      }
    },
    methods: {
       aktualizujTytul: function(aktualizujTytul){
         this.tytul = aktualizujTytul;
       }
    }
  }

</script>

<style>
</style>

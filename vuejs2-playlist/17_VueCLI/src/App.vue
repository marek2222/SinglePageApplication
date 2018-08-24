 <template>
  <div>
    <naglowek-apl></naglowek-apl>
    <osoby-apl v-bind:osoby="osobyDane"></osoby-apl>
    <stopka-apl></stopka-apl>
  </div>
</template>


<script>
import Naglowek from './komponenty/Naglowek.vue';
import Osoby from './komponenty/Osoby.vue';
import Stopka from './komponenty/Stopka.vue';

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
    }
  }
}
</script>

<style>
</style>

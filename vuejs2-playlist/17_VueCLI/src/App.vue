 <template>
  <div>
    <naglowek-apl></naglowek-apl>
    <osoby-apl></osoby-apl>
    <stopka-apl></stopka-apl>
  </div>
</template>


<script>
import Naglowek from './komponenty/Naglowek.vue';
import Stopka from './komponenty/Stopka.vue';
import Osoby from './komponenty/Osoby.vue';

export default {
  components: {
    'naglowek-apl': Naglowek,
    'osoby-apl': Osoby,
    'stopka-apl': Stopka
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>

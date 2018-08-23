 <template>
  <div>
    <h1>{{ tytul }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'

export default {
 components: {
   'ninjas': Ninjas
 },
 data() {
    return {
      tytul: 'Ninja App'
    }
  }
}
</script>

<style>

</style>

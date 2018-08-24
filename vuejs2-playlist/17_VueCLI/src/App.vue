 <template>
  <div>
    <h1>{{ tytul }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
//  locally component
import Ninjas from './Ninjas.vue'

export default {
 components: {
   'ninjas': Ninjas
 },
 data() {
    return {
      tytul: 'Ninja App - locally component'
    }
  }
}
</script>

<style>
  h1{
    color: purple;
  }
</style>

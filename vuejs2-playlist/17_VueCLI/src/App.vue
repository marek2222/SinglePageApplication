 <template>
  <div>
    <h1>{{ tytul }}</h1>
    <p><b> Globally</b><br>
    Inside main.js should be:
    <br> 1)    import Ninjas from './Ninjas.vue'     and
   <br>  2)    Vue.component ('ninjas', Ninjas);</p>
    <p><b> Locally</b><br>
    Inside App.vue in section &ltscript&gt should be:
    <br> 1)    import Ninjas from './Ninjas.vue'     and
   <br>  2)
   export default {
    components: {
     'ninjas': Ninjas
    },
    ...another code
</p>
   <br>
    <p>List from globally 'Ninjas.vue'</p>
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

// //globally component
// export default {
//  data() {
//     return {
//       tytul: 'Ninja App - globally component'
//     }
//   }
// }

</script>

<style>

</style>

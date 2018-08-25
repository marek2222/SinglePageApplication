 <template>
    <footer>
        <p>{{ prawa }}  {{ tytul }}</p>
    </footer>
 </template>

<script>
import { bus } from '../main';

export default {
  props: {
    tytul: {
      type: String
    }
  },
  data() {
    return {
      prawa: 'Prawa autorskie 2018'
    }
  },
  created(){
    bus.$on('zmienionyTytul',(data)=>{
       this.tytul = data;
    });
  }
}
</script>

<style scoped>
footer{
  background: #222;
  padding: 10px;
}
p{
  color: lightgreen;
  text-align: center;
}
</style>

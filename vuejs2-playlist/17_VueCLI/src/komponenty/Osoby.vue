 <template>
  <div id="osoby ">
    <p>{{ osoby }}</p>
    <ul>
      <li v-for="osoba in osoby" v-on:click="osoba.widocznosc =!  osoba.widocznosc">
        <h2>{{ osoba.nazwa }}</h2>
        <h3 v-show=" osoba.widocznosc">{{ osoba.specjalnosc }}</h3>
      </li>
    </ul>
  </div>
  </template>

<script>
export default {
  // props: [' osoby'],
props: {
  osoby: {}
},
data() {
    return {
        type: Array,
        required: true
    }
  }
  // ,methods: {
  //   test: function(){
  //     return this.osoby;
  //   }
  // }
}
</script>

<style scoped>
#osoby{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

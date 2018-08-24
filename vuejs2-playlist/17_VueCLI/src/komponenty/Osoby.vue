 <template>
  <div id="osoby ">
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
  data() {
    return {
     osoby: [
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
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

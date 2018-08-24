 <template>
    <footer>
        <p>{{ prawa }}  {{ tytul }}</p>
    </footer>
 </template>

<script>
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

 <template>
  <footer>
    <p>{{ prawa }}</p>
  </footer>
 </template>

<script>
export default {
  data() {
    return {
      prawa: 'Prawa autorskie 2018 marek2222'
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

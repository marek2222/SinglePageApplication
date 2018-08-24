 <template>
  <header>
    <h1>{{ tytul }}</h1>
  </header>
</template>

<script>
export default {
 data() {
    return {
      tytul: 'Vue ninjas'
    }
  }
}
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>

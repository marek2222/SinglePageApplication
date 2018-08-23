<template>
<div>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['Darek','Marek','Zbyszek']
    }
  }
}
</script>

<style>

</style>

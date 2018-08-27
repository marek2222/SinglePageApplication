<template>
  <div>
    <form-helper>
      <h2 slot="tytul">{{ tytul }}</h2>
      <p slot="tekst">To jest paragraf dla 'slot'.</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'


export default {
  components: {
    'formHelper': formHelper
  },
  data () {
    return {
          tytul: 'To jest dynamiczny tytul dla "slot"'
    }
  }
}
</script>

<style scoped>

</style>

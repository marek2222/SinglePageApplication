 <template>
	<header>
		<h1 v-on:click="zmienTytul">{{ tytul }}</h1>
	</header>
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
		}
  },
  methods: {
    zmienTytul: function(){
      this.tytul = 'Czarodzieje Vue (Vue Wizards)'
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

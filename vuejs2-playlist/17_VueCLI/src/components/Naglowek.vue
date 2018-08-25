 <template>
	<header>
		<h1 @click="zmienTytul">{{ tytul }}</h1>
	</header>
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
      tytul: 'Osoby Vue'
		}
  },
  methods: {
    zmienTytul: function(){
      //this.tytul = 'Czarodzieje Vue (Vue Wizards)'
      //this.$emit('zmienTytul','Czarodzieje Vue (Vue Wizards)');
      this.tytul =  'Czarodzieje Vue (Vue Wizards)'
      bus.$emit('zmienionyTytul','Czarodzieje Vue (Vue Wizards) - zmienionyTytul');
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

<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>To jest tytul formularza</h3>
                <p>To kilka informacji o formularzu</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="nazwa" required />
                <input type="password" placeholder="haslo" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="przeslijZgloszenie">Prześlij</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './components/formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
    data () {
        return {

        }
    },
    methods: {
        przeslijZgloszenie: function(){
            alert('dziękujemy  za przesłanie');
        }
    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>

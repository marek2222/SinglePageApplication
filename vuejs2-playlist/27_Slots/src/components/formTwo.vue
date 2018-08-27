<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Formularz drugi - logowanie</h3>
                <p>Wpisz dane do logowania</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="nazwa" required />
                <input type="password" placeholder="haslo" required />
            </div>
            <div slot="form-controls">
                <button v-on:click="przeslijZgloszenie">Login</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
// Imports
import formHelper from './formHelper.vue'

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
            alert('dziękujemy za logowanie (w formularzu drugim)');
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

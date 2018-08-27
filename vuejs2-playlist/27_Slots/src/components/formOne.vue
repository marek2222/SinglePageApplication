<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Formularz pierwszy - Kontakt z nami</h3>
                <p>Wypełnij formularz aby skontaktować się z nami</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="nazwa" required />
                <label>Twoja wiadomość:</label>
                <textarea></textarea>
            </div>
            <div slot="form-controls">
                <button @click="przeslijZgloszenie">Prześlij</button>
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
            alert('Dziekujemy za przesłanie formularza pierwszego & kontakt z nami...');
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

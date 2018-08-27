<template>
    <div>
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <button @click="component = 'form-pierwszy'">Pokaż fomularz pierwszy</button>
        <button @click="component = 'form-drugi'">Pokaż fomularz drugi</button>
    </div>
</template>

<script>
// Imports
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
    components: {
        'form-pierwszy': formOne,
        'form-drugi': formTwo
    },
    data () {
        return {
            component: 'form-pierwszy'
        }
    },
    methods: {
        przeslijZgloszenie: function(){
            alert('Dziekujemy za przesłanie...');
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

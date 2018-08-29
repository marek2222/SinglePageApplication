<template>
    <div id="show-blogs">
        <h1>Lista tytyłow bloga</h1>
        <input type="text" v-model="szukaj" placeholder="przeszukaj blogi">
        <div v-for="blog in filtrowaneBlogi" v-bind:key="blog.id" class="single-blog">
            <h2 >{{ blog.title }}</h2>
        </div>
    </div>
</template>

<script>
import searchMixin      from '../mixins/searchMixin.js';

export default {
    data () {
        return {
            blogi: [],
            szukaj: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogi = data.body.slice(0,10);
        });
    },
    computed: {

    },
    //filters locally
    filters: {
        toUppercase: function (value) {
            return value.toUpperCase();
        }
    },
    directives: {
        'rainbow': {
            bind(el, binding, vnode){
                el.style.color = "#"+ Math.random().toString(16).slice(2,8);
            }
        }
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: grey;
}
</style>

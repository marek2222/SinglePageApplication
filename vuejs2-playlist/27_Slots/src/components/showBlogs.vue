<template>
    <div id="show-blogs">               <!-- v-theme:column="'narrow'"  -->
        <h1>Wszystkie artykuły bloga</h1>
        <input type="text" v-model="szukaj" placeholder="przeszukaj blogi">
        <div v-for="blog in filtrowaneBlogi" v-bind:key="blog.id" class="single-blog">
            <router-link  v-bind:to="'/blog/' + blog.id"><h2>{{ blog.tytul | toUppercase }}</h2></router-link>   <!-- <h2 v-rainbow>{{ blog.title | toUppercase }}  -->
            <article>{{ blog.zawartosc }}</article>
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
        this.$http.get('https://vue-playlist-93dc3.firebaseio.com/posts.json').then(function(data){
            //this.blogi = data.body.slice(0,10);
            return data.json();
        }).then(function (data) {
            var  blogiArray = [];
            for (let key in data){
                data[key].id = key;
                blogiArray.push(data[key]);
            }
            this.blogi = blogiArray;
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

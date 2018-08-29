<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>Wszystkie artykuły bloga</h1>
        <div v-for="blog in blogi" v-bind:key="blog.id" class="single-blog">
            <h2 v-rainbow>{{ blog.title }}</h2>
            <article>{{ blog.body }}</article>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blogi: []
        }
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogi = data.body.slice(0,10);
        });
    }
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

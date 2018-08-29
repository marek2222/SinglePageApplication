<template>
    <div id="show-blogs">               <!-- v-theme:column="'narrow'"  -->
        <h1>Wszystkie artykuły bloga</h1>
        <input type="text" v-model="szukaj" placeholder="przeszukaj blogi">
        <div v-for="blog in filtrowaneBlogi" v-bind:key="blog.id" class="single-blog">
            <h2>{{ blog.title | to-uppercase }}</h2>   <!-- v-rainbow  -->
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
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
        filtrowaneBlogi: function () {
            return this.blogi.filter((blog) => {
                return blog.title.match(this.szukaj);
            });
        }
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

<template>
    <div id="single-blog">
        <h1>{{ blog.tytul }}</h1>
        <article>{{ blog.zawartosc }}</article>
        <p>Autor: {{ blog.autor }}</p>
        <ul>
              <li v-for="kategoria in blog.kategorie" v-bind:key="kategoria.id">
                  {{ kategoria }}
              </li>
        </ul>

   </div>
</template>

<script>

export default {
    data(){
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://vue-playlist-93dc3.firebaseio.com/posts/'+ this.id + '.json'
        ).then(function(data){
            return data.json();
        }).then(function (data) {
            this.blog = data;
        });
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
}
</style>

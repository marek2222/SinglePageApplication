<template>
    <div id="dodajBlog">
        <h2>Dodaj nowy post na blogu</h2>
        <form v-if="!przeslane">
            <label>Tytuł blogu</label>
            <input type="text" v-model.lazy="blog.tytul" required>
            <label>Zawartość blogu</label>
            <textarea v-model.lazy="blog.zawartosc"></textarea>
            <div id="checkboxes">
                <label>Ninje</label>
                <input type="checkbox" value="ninje" v-model="blog.kategorie" />
                <label>Czarodzieje</label>
                <input type="checkbox" value="czarodzieje" v-model="blog.kategorie" />
                <label>Mariusz</label>
                <input type="checkbox" value="mariusz" v-model="blog.kategorie" />
                <label>Ser</label>
                <input type="checkbox" value="ser" v-model="blog.kategorie" />
            </div>
            <label>Autor: </label>
            <select v-model="blog.autor" >
                <option v-for="autor in autorzy" v-bind:key="autor.id">
                  {{ autor }}</option>
            </select>
            <button @click.prevent="post">Add blog</button>
        </form>

        <div v-if="przeslane">
            <h3>Dziękujemy za dodanie twojego posta</h3>
        </div>
        <div id="podglad">
          <h3>Podgląd bloga</h3>
          <p>Tytuł bloga: {{ blog.tytul }}</p>
          <p>Zawartość bloga: </p>
          <p>{{ blog.zawartosc }}</p>
          <p>Kategorie blogu:</p>
          <ul>
              <li v-for="kategoria in blog.kategorie" v-bind:key="kategoria.id">
                  {{ kategoria }}
              </li>
          </ul>
          <p>Autor: {{ blog.autor }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blog: {
                tytul: "",
                zawartosc: "",
                kategorie: [],
                autor: ""    //"Sieciowy Ninja" - można ustawić wartość domyślną
            },
            autorzy: ['Sieciowy Ninja', 'Mściciel  Angulara', 'Obronca Vue'],
            przeslane: false
        }
    },
    methods: {
      post: function(){
        this.$http.post('https://vue-playlist-93dc3.firebaseio.com/posts.json', this.blog
        ).then( function(data){
          console.log(data);
          this.przeslane = true;
        });
      }
    }
}
</script>

<style>
#dodajBlog *{
    box-sizing: border-box;
}
#dodajBlog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#podglad{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label {
    display: inline-block;
}
</style>

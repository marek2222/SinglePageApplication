<template>
    <div id="dodajBlog">
        <h2>Dodaj nowy post na blogu</h2>
        <form action="">
            <label>Tytuł blogu</label>
            <input type="text" v-model.lazy="blog.tytul" required>
            <label>Zawartość blogu</label>
            <textarea v-model.lazy="blog.zawartosc"></textarea>
        </form>
        <div id="podglad">
          <h3>Podgląd bloga</h3>
          <p>Tytuł bloga: {{ blog.tytul }}</p>
          <p>Zawartość bloga: </p>
          <p>{{ blog.zawartosc }}</p>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            blog: {
                tytul: '',
                zawartosc: ''
            }
        }
    },
    methods: {

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
</style>

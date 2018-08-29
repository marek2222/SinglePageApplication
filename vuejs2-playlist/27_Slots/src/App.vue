<template>
    <div>
        <naglowek-apl></naglowek-apl>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import addBlog      from './components/addBlog.vue';
import showBlogs  from './components/showBlogs.vue';
import listBlogs      from './components/listBlogs.vue';
import naglowek    from './components/naglowek.vue';


export default {
    components: {
        'add-blog':     addBlog,
        'show-blogs': showBlogs,
        'list-blogs':     listBlogs,
        'naglowek-apl': naglowek
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>

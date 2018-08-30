export default{
    computed: {
        filtrowaneBlogi: function () {
          return this.blogi.filter((blog) => {
              return blog.tytul.match(this.szukaj);
          });
      }
    }
}

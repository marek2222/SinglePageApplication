export default{
    computed: {
        filtrowaneBlogi: function () {
          return this.blogi.filter((blog) => {
              return blog.title.match(this.szukaj);
          });
      }
    }
}

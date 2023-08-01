<template>
  <div>
    <Navbar />
    <Hero :highlight="highlight"/>
    <hr class="hr-space">
    <Category1 :allNewsData="allNewsData1" :header="'Hot News'"/>
    <hr class="hr-space">
    <Category1 :allNewsData="allNewsData2" :header="'Untuk Kamu'"/>
  </div>
</template>

<script>

export default {
    name: 'IndexPage',
    data() {
      return {
        allNewsData1: [],
        allNewsData2: [],
        highlight: {}
      }
    },
    created() {
      this.$store.dispatch('news/fetchNews');
    },
    watch: {
      '$store.state.news.allNews': {
        immediate: true, 
        handler(newsData) {
          this.allNewsData1 = newsData.slice(0, 5)
          this.allNewsData2 = newsData.slice(5, 10)
          this.highlight = newsData.slice(10, 11)
        },
      },
    },
}
</script>

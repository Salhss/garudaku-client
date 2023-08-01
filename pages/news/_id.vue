<template>
  <div>
    <div class="body-detail">
      <Breadcrumbs :title="news.title"/>
      <News-Title :title="news.title" :date="news.date"/>
      <News-Content :news="news"/>
      <hr />

      <!-- Button Edit -->
      <div class="edit-button">
        <NuxtLink :to="`/news/edit/${this.$route.params.id}`" class="edit">Edit Berita</NuxtLink>
      </div>
      <!-- Button Edit End -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
        news: {}
    }
  },
  created() {
    const newsId = this.$route.params.id
    this.$store.dispatch('news/fetchSelectedNews', { id: newsId })
  },
  watch: {
    '$store.state.news.selectedNews': {
      immediate: true,
      handler(newsData) {
        console.log(newsData)
        this.news = newsData
      },
    },
  },
}
</script>

<style>
.body-detail {
  padding: 10px;
  padding-inline: 100px;
}
</style>

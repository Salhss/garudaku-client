<template>
  <div class="detail-title">
    <h1>{{ title }}</h1>
    <h3 class="detail-time">{{ formattedDate(date) }}</h3>
  </div>
</template>

<script>
export default {
  name: 'news-title',
  props: ['title', 'date'],
  methods: {
    formattedDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }
      let resdate = new Date(date)
      return resdate.toLocaleString('id-ID', options)
    },
  },
}
</script>

<style></style>

<template>
  <div class="detail-content">
        <div class="detail-image">
            <img :src="news.thumbnail" alt="photo">
            <p>{{ news.thumbnailCaption }}</p>
        </div>
        <div v-html="news.content" class="detail-description">
        </div>
    </div>
</template>

<script>
export default {
    name: 'News-Content',
    props: ['news']
}
</script>

<style>

</style>
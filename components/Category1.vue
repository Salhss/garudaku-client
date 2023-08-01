<template>
  <div class="other-main">
        <div class="news-header-container">
            <div class="news-header-left">
                <p>{{header}}</p>
            </div>
        </div>
        <div class="news-main-container">
            <NuxtLink v-for="news in allNewsData" :key="news.id" :to="`/news/${news.id}`" class="news-main-card">
                <div class="news-image-wrapper">
                    <div class="news-image-zoom">
                        <div class="news-image-content">
                            <img :src="news.thumbnail" :alt="news.title">
                        </div>
                    </div>
                </div>
                <div class="news-other-title">
                    <p>{{ news.title }}</p>
                </div>
                <div class="news-other-description">
                    <p>{{ news.description }}</p>
                </div>
            </NuxtLink>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'Category1',
    props: ['allNewsData', 'header'],
    
    
}
</script>

<style>

</style>
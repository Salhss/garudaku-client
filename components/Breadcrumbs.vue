<template>
  <div class="breadcrumbs-main">
        <div class="breadcrumbs-container">
            <ul>
                <NuxtLink to="/" class="list-page">Home /</NuxtLink>
                <li class="list-page">{{title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    props: ['title']
}
</script>

<style>

</style>
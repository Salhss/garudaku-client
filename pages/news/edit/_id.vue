<template>
  <div class="form-container">
    <div class="form-header"><h1>Edit Berita</h1></div>
    <form @submit.prevent="editData">
      <div class="form-input">
        <label for="title">Judul Berita</label>
        <input v-model="title" type="text" name="title" required />
      </div>
      <div class="form-input">
        <label for="thumbnail">Thumbnail Berita</label>
        <div v-if="isLoading" class="loading-div">
        Sedang Upload Gambar...
        <!-- You can use a loading spinner or any other loading animation here -->
        </div>
        <input @change="handleImageUpload" type="file" name="thumbnail" />
      </div>
      <div class="form-input">
        <label for="content">Caption Thumbnail</label>
        <textarea v-model="thumbnailCaption" name="thumbnailCaption" required />
      </div>
      <div class="form-input">
        <label for="content">Deskripsi Singkat</label>
        <textarea v-model="description" type="text" name="description" required />
      </div>
      <div class="form-input">
        <label for="content">Konten Berita</label>
        <client-only>
            <VueEditor v-model="content"></VueEditor>
        </client-only>
      </div>
      <div class="buttons">
        <button v-if="isLoading === false" class="input-buttons" type="submit">Simpan</button>
        <NuxtLink :to="`/news/${this.$route.params.id}`" class="input-buttons"
          >Batal</NuxtLink
        >
      </div>
    </form>
  </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'
export default {
  name: 'Edit',
  components: {VueEditor},
  data() {
    return {
      title: "",
      thumbnail: "",
      thumbnailCaption: "",
      description: "",
      content: "",
      isLoading: false 
    }
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
        console.log(file)
        const formData = new FormData()
      formData.append("file", file);
      formData.append("upload_preset", "upload_image");
      this.isLoading = true;
      this.$axios.$post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      )
      .then((res) => this.thumbnail = res.url)
      .catch((err) => console.log(err))
      .finally(() => {this.isLoading = false;})
    },
    async editData() {
        try {
        const payload = {
            title: this.title,
            thumbnail: this.thumbnail,
            thumbnailCaption: this.thumbnailCaption,
            description: this.description,
            content: this.content,
            id: this.$route.params.id
        }

        console.log("dari component>>",payload)

        await this.$store.dispatch('news/patchData', payload)

        this.$router.push(`/news/${this.$route.params.id}`)

      } catch (error) {
        console.error('Error when patching data:', error)
      }
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
        this.title = newsData.title
        this.thumbnail = newsData.thumbnail
        this.thumbnailCaption = newsData.thumbnailCaption
        this.description = newsData.description
        this.content = newsData.content
      },
    },
  },
}
</script>

<style>
.form-container {
    padding-inline: 20px;
    margin-inline: 20px;
}
</style>

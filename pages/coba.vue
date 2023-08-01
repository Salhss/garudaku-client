<template>
  <div>
    <input type="file" @change="handleImageUpload">
  </div>
</template>

<script>
export default {
    methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
        console.log(file)
        const formData = new FormData()
      formData.append("file", file);
      formData.append("upload_preset", "upload_image");
      this.$axios.$post(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    },
  },
}
</script>

<style>

</style>
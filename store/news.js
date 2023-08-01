export const state = () => ({
  allNews: [],
  selectedNews: {},
})

export const mutations = {
  setAllNewsData(state, news) {
    state.allNews = news
  },

  setSelectedNews(state, news) {
    state.selectedNews = news
  },
}

export const actions = {
  async fetchNews({ commit }) {
    this.$axios
      .$get('/')
      .then((res) => {
        commit('setAllNewsData', res)
      })
      .catch(console.log)
  },

  async fetchSelectedNews({ commit }, { id }) {
    try {
      const data = await this.$axios.$get(`/${id}`)
      commit('setSelectedNews', data)
    } catch (err) {
      console.log(err)
    }
  },

  async patchData({ commit }, payload) {
    try {
      const { title, thumbnail, thumbnailCaption, description, content, id } =
        payload
      // console.log('ini payload>>', payload)
      // Lakukan patch request menggunakan Axios
      await this.$axios.patch(
        `/${id}`, // Ganti dengan endpoint yang sesuai untuk patch request
        { title, thumbnail, thumbnailCaption, description, content } // Ganti dengan data yang ingin di-update
      )
    } catch (error) {
      // Tangani kesalahan jika terjadi
      console.error('Error when patching data:', error)
    }
  },
}

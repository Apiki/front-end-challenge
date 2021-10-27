<template>
  <router-link :to="{ name: 'Post', params: { slug: slug } }" class="post-card">
    <img
      :src="image"
      class="post-image"
      width="100%"
      height="200px"
      :alt="title"
    />

    <div class="content">
      <h6 class="title" v-html="title"></h6>
      <time :datetime="post.date">Criado em: {{ post.date | dateBR }}</time>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    title() {
      return this.post.title.rendered
    },
    image() {
      return this.post._embedded['wp:featuredmedia'][0].source_url
    },
    slug() {
      return this.post.slug
    }
  },
  filters: {
    dateBR(data) {
      let date = new Date(data)
      let options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC'
      }
      return date.toLocaleDateString('pt-BR', options)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: grid;
  grid-gap: 10px;
  max-width: 268px;
  margin: 10px;
  .post-image {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 200px;
  }
  .content {
    padding: 15px;
    .title {
      text-align: center;
    }
    p {
      color: #333;
      height: 80px;
    }
    time {
      color: var(--crimson);
      font-size: 0.8rem;
    }
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  .columns {
    margin: 0;
  }
}
</style>
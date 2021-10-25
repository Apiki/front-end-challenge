<template>
  <div>
    <div class="columns">
      <div class="mt-4 mb-4 flex-post">
        <Card :post="post" v-for="(post, index) in posts" :key="index" />
      </div>
    </div>
    <div class="columns is-center">
      <button
        class="button is-primary mr-2"
        @click="prevPosts"
        v-if="header.currentPage > 1"
      >
        Posts Anteriores
      </button>
      <button class="button is-primary" @click="nextPosts">
        Carregar mais...
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '@/components/utils/Card.vue'
export default {
  name: 'Home',
  metaInfo: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    title: 'Frontend Challenge',
    meta: [
      {
        name: 'Blog para frontends',
        content: 'content',
        description: 'Blog de informações e dicas para devs'
      }
    ]
  },
  components: {
    Card
  },
  computed: {
    ...mapState('Posts', ['posts', 'header'])
  },
  methods: {
    ...mapActions('Posts', ['listarPosts', 'setLoadingValue']),
    async nextPosts() {
      if (this.header.nextPage) {
        await this.listarPosts({ page: this.header.nextPage })
      }
    },
    async prevPosts() {
      if (this.header.currentPage) {
        await this.listarPosts({ page: this.header.currentPage - 1 })
      }
    }
  },
  async mounted() {
    //await this.setLoadingValue(true)
    await this.listarPosts()
    //await this.setLoadingValue(false)
  }
}
</script>

<style lang="scss" scoped>
.flex-post {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.is-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 320px) and (max-width: 480px) {
  .flex-post {
    justify-content: center;
  }
}
</style>
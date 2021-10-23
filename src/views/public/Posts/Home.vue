<template>
  <div class="mt-4 mb-4 flex-post">
    <Card :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '@/components/utils/Card.vue'
export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState('Posts', ['posts'])
  },
  methods: {
    ...mapActions('Posts', ['listarPosts'])
  },
  async mounted() {
    await this.listarPosts()
  }
}
</script>

<style lang="scss" scoped>
.flex-post {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
</style>
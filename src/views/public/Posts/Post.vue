<template>
  <div class="content">
    <div class="mt-4" v-html="content"></div>
  </div>
</template>

<script>
import postService from '@/services/Posts/postService'
import { mapActions } from 'vuex'
export default {
  name: 'Post',
  data() {
    return {
      content: null
    }
  },

  methods: {
    ...mapActions('Posts', ['setBanner']),
    backgroundBanner(banner) {
      return {
        backgroundColor: 'rgba(0, 0, 0, .5) !important',
        backgroundImage: `url(${banner})`,
        backgroundBlendMode: 'color-dodge',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '300px'
      }
    }
  },
  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.slug) {
          postService
            .buscar({ slug: val.slug })
            .then((res) => {
              let { title, content, _embedded } = res.data[0]
              this.content = content.rendered
              let banner = _embedded['wp:featuredmedia'][0].source_url
              this.setBanner({
                title: title.rendered,
                style: this.backgroundBanner(banner)
              })
            })
            .catch(() => {
              this.$router.push({ name: 'NotFound' }).catch(() => {})
            })
        } else {
          this.setBanner({
            title: 'Blog Front-End',
            subtitle: 'Challenge',
            style: null
          })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (min-width: 320px) and (max-width: 480px) {
  .content {
    padding: 30px;
  }
}
</style>
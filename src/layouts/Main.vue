<template>
  <div>
    <Header />
    <section class="hero is-primary" :style="banner.style">
      <div class="hero-body">
        <p class="title">{{ banner.title }}</p>
        <p class="subtitle">{{ banner.subtitle }}</p>
      </div>
    </section>
    <main class="container">
      <transition name="fade">
        <slot></slot>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Main',
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState('Posts', ['banner'])
  },
  methods: {
    ...mapActions('Posts', ['setBanner'])
  },
  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler(val) {
        if (!val.slug) {
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flex-loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
</style>

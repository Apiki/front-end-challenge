<template>
  <div>
    <Header />
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Blog Front-End</p>
        <p class="subtitle">Challenge</p>
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

export default {
  name: 'Main',
  components: {
    Header,
    Footer
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
</style>

<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'main'
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  mounted() {
    localStorage.setItem('token', 0)
  }
}
</script>

<style>
</style>

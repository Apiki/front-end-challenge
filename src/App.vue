<template>
  <div id="app">
    <component :is="layout">
      <keep-alive max="2">
        <router-view></router-view>
      </keep-alive>
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

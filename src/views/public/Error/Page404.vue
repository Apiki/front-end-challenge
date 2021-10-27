<template>
  <div class="flex">
    <div class="clearfix">
      <h1 class="title">404</h1>
      <h4 class="pt-3">Oops! Procurando algo?.</h4>
      <p class="text-muted">A página não foi encontrada.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  text-align: center;
  .clearfix {
    margin: 0 auto;
    .title {
      font-size: 6rem;
    }
  }
}
</style>

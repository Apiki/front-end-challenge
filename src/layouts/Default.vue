<template>
  <div class="bg-color">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style lang="scss" scoped>
.bg-color {
  background: #333;
}
</style>

<template>
  <div class="demo-show">
    <div class="description">
      <slot name="description" />
    </div>
    <div class="demo-wrapper">
      <slot name="demo-wrapper" />
    </div>
    <div class="source-code">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoShow',
}
</script>

<style scoped>
  .demo-show {
  }

  .description {

  }

  .demo-wrapper {

  }

  .source-code {
  }
</style>

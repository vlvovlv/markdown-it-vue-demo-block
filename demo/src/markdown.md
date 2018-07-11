:::demo This is description
```html {3}
<template>
  <div class="demo-1">
    <h1 @click="handleClick">This is demo 1</h1>
  </div>
</template>
<script>
  export default {
    name: 'demo-1',
    created() {
      console.log('demo-1 created');
    },
    mounted() {
      console.log('demo-1 mounted');
    },
  };
</script>
<style scoped>
  .demo-1 h1 {
    color: red;
  }
</style>
```
:::

<script>
  export default {
    name: 'demo-1',
    created() {
      console.log('demo-1 created');
    },
    mounted() {
      console.log('demo-1 mounted');
    },
    methods: {
      handleClick() {
        console.log('clicked');
      }
    }
  }
</script>

<template>
  <MenuItem/>
</template>





<script>
  // @ is an alias to /src
  import MenuItem from '@/components/MenuItem.vue'

  export default {
    name: 'App',
    components: {
      MenuItem
    }
  }
</script>





<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
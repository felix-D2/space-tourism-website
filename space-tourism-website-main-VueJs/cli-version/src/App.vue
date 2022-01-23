<template>
  <div id="app">
    <MenuItem/>
  </div>
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


  body
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;

    height: 100%;
    width: 100%;

    display: flex;

    background-color:black;
  }


  #app 
  {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
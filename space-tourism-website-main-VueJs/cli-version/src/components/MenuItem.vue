<template>
  <div id="nav">
    <router-link to="/">00 Home</router-link> |
    <router-link to="/destination">01 Destination</router-link> |
    <router-link to="/crew">02 Crew</router-link> |
    <router-link to="/technology">03 Technology</router-link>
    
    <router-view/>
  </div>
</template>




<script>
export default {
  name: 'MenuItem'
}
</script>





<style lang="scss">
  #nav {
    padding: 30px;
    background-color:rgba(255, 255, 255, 0.04);
    height: 96px;
    
    backdrop-filter: blur(81.5485px);

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>

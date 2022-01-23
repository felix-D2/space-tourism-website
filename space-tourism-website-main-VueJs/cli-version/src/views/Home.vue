<template>
  <div :class="$style.home">
    <div :class="$style.text">
      <h5>So, you want to travel to</h5>


      <h1>Space</h1>

      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!

      Explore

    
    </div>
  </div>
</template>




<script>
// @ is an alias to /src
import MenuItem from '@/components/MenuItem.vue'

export default {
  name: 'Home',
  components: {
    MenuItem
  }
}
</script>




<style module>
  .home {
    /* background: rgb(24, 52, 212);
     */

    /* height: 100%;
    width: 100%; */


    /* border-width:5px;
    border-style: dotted;
    border-color:rgb(247, 2, 2); */

    /* position: absolute;
    top: 0px; */

    
    position: absolute;

    background:  center fixed  url("/images/home/background-home-desktop.jpg") no-repeat;
    background-size: cover;
    /* background-repeat: no-repeat;
    background-position: center; */

    /* background-position: top left; */

    height: 100%;
    width: 100%;

    z-index:1;
  }


  .text{
    position: absolute;
    top: 300px;

    color:white;
  }
  
</style>
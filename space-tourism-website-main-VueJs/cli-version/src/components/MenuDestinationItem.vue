<template>
    <div class="nav">

      <router-link :to="{name: 'Destination', params : {id: '0'}}"
      class="navText ">
        Moon
        <div class="linkNavUnderline"></div>
      </router-link>    


      <router-link :to="{name: 'Destination', params : {id: '1'}}"
      class="navText ">
        Mars
        <div class="linkNavUnderline"></div>
      </router-link>    


      <router-link :to="{name: 'Destination', params : {id: '2'}}"
      class="navText ">
        Europa
        <div class="linkNavUnderline"></div>
      </router-link>   


      <router-link :to="{name: 'Destination', params : {id: '3'}}"
      class="navText ">
        Titan
        <div class="linkNavUnderline"></div>
      </router-link>   

    </div>
</template>





<script>
  export default {
    name: 'MenuDestinationItem',
  }
</script>








<style scoped>


  .nav 
  {    
    width: 342px;
    height: 19px;

    display: flex;
    justify-content: space-between;
    align-items: center;

  }




/* ___Underline___ */

  .linkNavUnderline
  {
    opacity: 0;

    position: relative; 
    top: 10px;

    height: 3px;
    width: 100%;

    background: #ffffff;

    pointer-events: none;

    transition: opacity 0.3s;
  }


  .router-link-active > .linkNavUnderline   /* Link underline activated */
  {
    opacity: 1;
  }


  .router-link-active   /*  Disable Link underline hover  */
  {
    pointer-events: none;
  }
  
  .navText:hover > .linkNavUnderline    /* Link underline hover */
  {
    opacity: 0.5;
  }
  

</style>
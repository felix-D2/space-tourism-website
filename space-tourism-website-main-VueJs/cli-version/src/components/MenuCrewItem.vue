<template>
    <div class="nav">


      <router-link :to="{name: 'Crew', params : {id: '0'}}"
      class="navText ">
        0
        <div class="linkNavUnderline"></div>
      </router-link>    


      <router-link :to="{name: 'Crew', params : {id: '1'}}"
      class="navText ">
        1
        <div class="linkNavUnderline"></div>
      </router-link>    


      <router-link :to="{name: 'Crew', params : {id: '2'}}"
      class="navText ">
        2
        <div class="linkNavUnderline"></div>
      </router-link>   


      <router-link :to="{name: 'Crew', params : {id: '3'}}"
      class="navText ">
        3
        <div class="linkNavUnderline"></div>
      </router-link>   

    </div>
</template>






<script>
  export default {
    name: 'MenuCrewItem',
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


    border: 2px solid rgb(19, 200, 224);

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
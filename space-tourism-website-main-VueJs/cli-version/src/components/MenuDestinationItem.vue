<template>
    <div class="subNav">


      <button class="navText" @click="changeParameter(0)" type="button">
        Moon
        <div class="linkNavUnderlineButton" style="opacity: 1;"></div>
      </button>


      <button class="navText" @click="changeParameter(1)" type="button" >
        Mars
        <div class="linkNavUnderlineButton"></div>
      </button>


      <button class="navText" @click="changeParameter(2)" type="button" >
        Europa
        <div class="linkNavUnderlineButton"></div>
      </button>


      <button class="navText" @click="changeParameter(3)" type="button" >
        Titan
        <div class="linkNavUnderlineButton"></div>
      </button>



    </div>
</template>





<script>
  export default {
    name: 'MenuDestinationItem',

    data () {
      return{
        actualLink: 0
      }
    },

    methods: {
      changeParameter(NavValue){
        this.$emit('change-param', { nb: NavValue})
        this.actualLink=NavValue

        let button = document.querySelector(".subNav");
        let buttonUnderLine;
        


        for(let i=0; i<4; i++) {
          buttonUnderLine = button.getElementsByTagName('div')[i];

          if(i == this.actualLink){
            buttonUnderLine.style.opacity = "1";     //    Link underline activated
          }
          else{
            buttonUnderLine.removeAttribute("style");       //    Link underline desactivated
          }
        }
         
      }
    }
  }
</script>






<style scoped>


  .subNav 
  {    
    width: 342px;
    height: 19px;

    display: flex;
    justify-content: space-between;
    align-items: center;

  }



.navText
{
  background: none;
  border: none;
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



  .linkNavUnderlineButton
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



  
  .navText:hover > .linkNavUnderlineButton    /* Link underline hover */
  {
    opacity: 0.5;
  }
  

</style>
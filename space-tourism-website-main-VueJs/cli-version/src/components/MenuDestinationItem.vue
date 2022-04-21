<template>
    <div class="subNav">


      <button class="navText" @click="changeParameter(0)" type="button" style="cursor: auto;">
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
        this.$emit('change-param', { nb: NavValue});
        this.actualLink=NavValue;

        let nav = document.querySelector(".subNav");
        let buttonUnderLine;
        let buttonSelected;
        


        for(let i=0; i<4; i++) {
          buttonUnderLine = nav.getElementsByTagName('div')[i];
          buttonSelected = nav.getElementsByTagName('button')[i];

          if(i == this.actualLink){
            buttonUnderLine.style.opacity = "1";     //    Link underline activated

            buttonSelected.style.cursor = 'auto';   //    Cursor modification (arrow)
          }
          else{
            buttonUnderLine.removeAttribute("style");       //    Link underline desactivated
            buttonSelected.removeAttribute("style");        //    Cursor modification (hand, default mode)
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
    cursor: pointer;
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
  





    @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */

  
    .subNav 
    {    
      width: 237.5px;
      height: 28px;
    }

  }

</style>
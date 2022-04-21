<template>
  <div class="subNav">


    <button class="navText" @click="changeParameter(0)" type="button" style="opacity: 1; cursor: auto;">
    </button>


    <button class="navText" @click="changeParameter(1)" type="button" >
    </button>


    <button class="navText" @click="changeParameter(2)" type="button" >
    </button>


    <button class="navText" @click="changeParameter(3)" type="button" >
    </button>



  </div>
</template>

<script>
export default {
  name: "MenuCrewItem",

  data () {
    return{
    actualLink: 0
    }
  },
  
    methods: {
      changeParameter(NavValue){
        this.$emit('change-param', { nb: NavValue})
        this.actualLink=NavValue    
        let nav = document.querySelector(".subNav");
        let buttonSelected;



        for(let i=0; i<4; i++) {
          buttonSelected = nav.getElementsByTagName('button')[i];

          if(i == this.actualLink){
            buttonSelected.style.opacity = "1";     //    Link underline activated
           
           buttonSelected.style.cursor = 'auto';
          }
          else{
            buttonSelected.removeAttribute("style");       //    Link underline desactivated
          }
        }
         
      }
  }
  
};
</script>

<style scoped>
.subNav {
  width: 130px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navText {
  width: 17px;
  height: 17px;
  border-radius: 50%;


  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(255, 255, 255);
  opacity: 0.17;

  cursor: pointer;

  transition: opacity 0.3s;
}



.navText:hover    /* Link hover */ {
  opacity: 0.5;
}
</style>

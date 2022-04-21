<template>
  <div class="subNav">

    <button class="navText" @click="changeParameter(0)" type="button"
    style="opacity: 1; background: rgb(255, 255, 255); color: rgb(11, 13, 23); cursor: auto;">
      1
    </button>


    <button class="navText" @click="changeParameter(1)" type="button" >
      2
    </button>


    <button class="navText" @click="changeParameter(2)" type="button" >
      3
    </button>



      
  </div>
</template>

<script>
export default {
  name: "MenuTechnologyItem",

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



      for(let i=0; i<3; i++) {
        buttonSelected = nav.getElementsByTagName('button')[i];

        if(i == this.actualLink){
          buttonSelected.style.opacity = "1";     //    Link underline activated
          buttonSelected.style.background= "#ffffff";
          buttonSelected.style.color= "#0b0d17";

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
  width: 90px;
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.navText { /*Bellefair Regular - 32px*/
  font-family: "Bellefair", serif;
  text-transform: uppercase;

  font-style: normal;
  font-weight: normal;

  text-decoration: none;
  line-height: 37px;
  font-size: 32px;


  width: 80px;
  height: 80px;
  border-radius: 50%;


  border: 2px solid rgba(255, 255, 255, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  background: rgba(255, 255, 255, 0);

  cursor: pointer;

  transition: all 0.4s;
}





/* ___Underline___ */

.navText:hover   /* Link hover */ {
  border-color:rgba(255, 255, 255, 1);
}





/*    Responsive      */


@media screen and (max-width: 1215px)
{/* Tablet version, or lower than max-width */
    

  .subNav
  {
    flex-direction: row;
    justify-content: space-between;

    width: 330px;
    height: 90px;
  }

  .navText 
  {
    width: 60px;
    height: 60px;

    font-size: 24px;
    line-height: 28px;
    letter-spacing: 1.5px;
  }

}





@media screen and (max-width: 580px)
{/* Mobile version, or lower than max-width */
    

  .subNav
  {
    width: 152px;
    height: 40px;
  }

  .navText 
  {
    width: 40px;
    height: 40px;
  }

}

</style>

<template>
  <div class="subNav">
    <!-- <router-link
      :to="{ name: 'Technology', params: { id: '0' } }"
      class="navTextTechnology"
    >
      1
    </router-link>

    <router-link
      :to="{ name: 'Technology', params: { id: '1' } }"
      class="navTextTechnology"
    >
      2
    </router-link>

    <router-link
      :to="{ name: 'Technology', params: { id: '2' } }"
      class="navTextTechnology"
    >
      3
    </router-link> -->



    <button class="navText" @click="changeParameter(0)" type="button"
    style="opacity: 1; background: rgb(255, 255, 255); color: rgb(11, 13, 23);">
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
      let button = document.querySelector(".subNav");
      let buttonUnderLine;



      for(let i=0; i<3; i++) {
        buttonUnderLine = button.getElementsByTagName('button')[i];

        if(i == this.actualLink){
          buttonUnderLine.style.opacity = "1";     //    Link underline activated
          buttonUnderLine.style.background= "#ffffff";
          buttonUnderLine.style.color= "#0b0d17";
        }
        else{
          buttonUnderLine.removeAttribute("style");       //    Link underline desactivated
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


  transition: all 0.4s;
}





/* ___Underline___ */

.navText:hover   /* Link hover */ {
  border-color:rgba(255, 255, 255, 1);
}
</style>

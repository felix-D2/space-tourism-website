<template>
  <header>
    <div :class="$style.menu">
      <div :class="$style.navZone">
        <div :class="$style.fuzzyRectangle">
          <div :class="$style.nav">

            <router-link to="/" @click="clicked = 0" 
            v-on:mouseover="linkUnderlining(0)"
            v-on:mouseleave="linkUnderlined"
            :class="$style.linkNav"> <span>00</span> Home</router-link>

            <router-link to="/destination" @click="clicked = 1"
            v-on:mouseover="linkUnderlining(1)"
            v-on:mouseleave="linkUnderlined" 
            :class="$style.linkNav"> <span>01</span> Destination</router-link>

            <router-link to="/crew" @click="clicked = 2"
            v-on:mouseover="linkUnderlining(2)"
            v-on:mouseleave="linkUnderlined" 
            :class="$style.linkNav"> <span>02</span> Crew</router-link>

            <router-link to="/technology" @click="clicked = 3"
            v-on:mouseover="linkUnderlining(3)"
            v-on:mouseleave="linkUnderlined" 
            :class="$style.linkNav"> <span>03</span> Technology</router-link>

            <div v-if="clicked === 0" :class="$style.linkNavUnderline" :id="$style.linkNavUnderline_0"></div>
            <div v-if="clicked === 1" :class="$style.linkNavUnderline" :id="$style.linkNavUnderline_2"></div>
            <div v-if="clicked === 2" :class="$style.linkNavUnderline" :id="$style.linkNavUnderline_3"></div>
            <div v-if="clicked === 3" :class="$style.linkNavUnderline" :id="$style.linkNavUnderline_4"></div>

            <div v-if="underlined === 0" :class="$style.linkNavUnderlineMouseOver" :id="$style.linkNavUnderline_0" ></div>
            <div v-if="underlined === 1" :class="$style.linkNavUnderlineMouseOver" :id="$style.linkNavUnderline_2"></div>
            <div v-if="underlined === 2" :class="$style.linkNavUnderlineMouseOver" :id="$style.linkNavUnderline_3"></div>
            <div v-if="underlined === 3" :class="$style.linkNavUnderlineMouseOver" :id="$style.linkNavUnderline_4"></div>
          </div>
          
        </div>

        <div :class="$style.ligne"></div>
        <img :class="$style.logo" src="/images/shared/logo.svg" alt="logo"/>
        

      </div>
      
      <router-view/>
      
    </div>
  </header>
</template>




<script>
  export default {
    name: 'MenuItem',

    data(){
      return{
        clicked: 0,
        underlined: 4
      }
    },

    methods: {
      linkUnderlining(number){ 
        this.underlined = number
        this.underline = 1
        this.linkNavUnderline.style.color = 'black'
      },
      linkUnderlined(){
        this.underlined = 4
      }

    }
  }
</script>





<style module>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');


  .navZone 
  {
    position: absolute;
    top: 40px;
    right: 0px;
    z-index: 2;   /*Met au premier plan */

    width: 1385px;
    height: 96px;


    /* border-width: 3px;
    border-style: solid;
    border-color:rgb(247, 231, 2); */

  }

  .fuzzyRectangle
  {
    position: relative;
    top: 50%;
    transform: translate(0, -50%); /* décalage de 50% de sa propre taille */
    left: 555px;

    width: 830px;
    height: 96px;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
  .nav 
  {
    position: relative;
    top: 39px;
    left: 50%;
    transform: translate(-50%);
    

    width: 542px;
    height: 19px;

    /* border-width: 3px;
    border-style: solid;
    border-color:rgb(126, 125, 113); */
  }


  .linkNav
  {
    margin-right: 48px;

    color: #FFFFFF;
    text-decoration: none;

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
  }
  .linkNav span
  {
    font-weight: bold;
  }

  .linkNav:nth-child(4)
  {
    margin-right: 0px;
    
  }

  .linkNav:nth-child(2):hover,
  .linkNav:nth-child(2):focus
  {
    border-color: hsl( var(--clr-white) / .5);
    
  }
  

  .linkNavUnderline
  {
    position: absolute; 
    top: 54px;

    height: 3px;

    background: #ffffff;
  }

  #linkNavUnderline_0
  {
    left: 8px;
    width: 70px;
  }

  #linkNavUnderline_2
  {
    left: 125px;
    width: 127px;
  }

  #linkNavUnderline_3
  {
    left: 297px;
    width: 71px;
  }

    #linkNavUnderline_4
  {
    left: 415px;
    width: 127px;
  }

  

    .linkNavUnderlineMouseOver
  {
    position: absolute; 
    top: 54px;

    height: 3px;

    background: #ffffff;
    opacity: 0.5;
  }



  .ligne
  {
    position: absolute; 
    top: 48px;
    left: 112px;

    width: 473px;
    height: 1px;

    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.25;
  }


  .logo
  {
    position: absolute;
    top: 24px;
    left: 0px;
  }
  

  p
  {
    color: white;
  }
  /* a 
  {



    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  } */

  .nav router-link-exact-active 
  {
    color: #42b983;
  }









    /* remove animations for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
</style>

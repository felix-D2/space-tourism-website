<template>
    <div class="menu">
      <div class="navZone">
        <div class="fuzzyRectangle responsive">
          <div class="nav responsive">


            <router-link to="/"
            class="linkNav"> 

              <span>00</span> Home
              <div class="linkNavUnderline"></div>
            </router-link>
            
            
            <router-link to="/destination"
            class="linkNav"> 

              <span>01</span> Destination
              <div class="linkNavUnderline"></div>
            </router-link>
            

            <router-link to="/crew"
            class="linkNav">
            
            <span>02</span> Crew
            <div class="linkNavUnderline"></div>
            </router-link>


            <router-link to="/technology"
            class="linkNav"> 
            
            <span>03</span> Technology
            <div class="linkNavUnderline"></div>
            </router-link>

          </div>
          
        </div>

        <div class="ligne"></div>
        <img class="logo" src="/images/shared/logo.svg" alt="logo"/>

        

        <a class="hamburger" @click="myFunction()">
          <img src="/images/shared/icon-hamburger.svg" alt="icon hamburger"/>
        </a>


      </div>
      
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
      >
        <router-view/>
      </transition>
      
    </div>
</template>




<script>
  export default {
    name: 'MenuItem',

      
      // Use for mobile menu
      methods: {
        myFunction() {
          
          let classNav = document.querySelector(".nav");
          let classFuzzyRectangle = document.querySelector(".fuzzyRectangle");
          let classHamburger = document.querySelector(".hamburger>img");

            // var x = document.getElementById("nav");
            if (classNav.className === "nav") {
              classNav.className += " responsive";
              classFuzzyRectangle.className += " responsive";

              classHamburger.src="/images/shared/icon-hamburger.svg";
                
            } else {
              classNav.className = "nav";
              classFuzzyRectangle.className = "fuzzyRectangle";

              classHamburger.src="/images/shared/icon-close.svg";
            }
        }
      }
    
  }
</script>





<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');


  .navZone
  {
    position: fixed;
    top: 40px;
    right: 0px;
    z-index: 2;   /*Met au premier plan */

    height: 96px;
    width: 96vw;


    display: flex;

    align-items: center;
    justify-content: flex-end;
  }


  .fuzzyRectangle
  {
    height: 96px;
    width: 830px;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }


  .nav
  {
    position: relative;
    top: 39px;
    left: 50%;
    transform: translateX(-50%);
    
    width: 542px;
    height: 19px;


    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .ligne
  {
    position: absolute; 
    top: 48px;
    left: 112px;

    width: 38vw;
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

  .hamburger
  {
    display: none;
  }
  

  .linkNav
  {
    color: #FFFFFF;
    text-decoration: none;

    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    
  }
  .linkNav span
  {
    font-weight: bold;
  }




/* ___Underline___ */

  .linkNavUnderline
  {
    opacity: 0;

    position: relative; 
    top: 37px;
    margin: 0, auto, 0;

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
  
  .linkNav:hover > .linkNavUnderline    /* Link underline hover */
  {
    opacity: 0.5;
  }




/*    Responsive      */


  @media screen and (max-width: 1420px)
  {/* lower than max-width, about ligne*/
    .ligne
    {
      display: none;
    }

  }


  @media screen and (max-width: 1060px)
  {/* Tablet version, or lower than max-width */

    .navZone
    {
      top: 0;
      width: auto;
    }

    .fuzzyRectangle
    {
      width: 55%;
      min-width: 480px;
    }

    .logo{
      left: auto;
      right: 90vw;
    }

    .nav
    {
      height: 18px;
      width: 356px;
    }

    .ligne
    {
      display: none;
    }

    span
    {
      display: none;
    }


    /* ___Font____ */

    .linkNav
    {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 2.3625px;
    }
  }





    @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */

    .menu
    {
      height: 100%;
      width: 100%;
    }


    .fuzzyRectangle
    {
      position: absolute;
      top: 0;
      right: 0;

      height: 100vh;
      width: 67vw;

      min-width: 0;


      display: flex;
      justify-content: flex-end;
      align-content: flex-start;
    }

    .nav.responsive
    {
      display: none;
    }

    .fuzzyRectangle.responsive
    {
      display: none;
    }

    .logo
    {
      position: absolute;
      left: auto;
      right: 85vw;
      

      height: 40px;
      width: 40px;
    }

    .hamburger
    {
      display: block;

      cursor: pointer;

      position: absolute;
      top: 33.5px;
      right: 40px;

      height: 21px;
      width: 24px;
    }

    .nav
    {
      flex-direction: column;
      align-items: flex-start;


      transform: translate(0);
      top: 20%;
      left: auto;
      right: 0px;
      
      height: 30%;
      width: 80%;
    }

    span
    {
      display: inline-block;
      margin-right: 10px;
    }

    .linkNav
    {
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 2.7px;


      height: 15%;
      width: 100%;


      display: flex;
      align-items: center;
    }

    .linkNavUnderline
    {
      margin-left: auto;
      
      top: 0;

      height: 100%;
      width: 4px;
    }
  }

</style>



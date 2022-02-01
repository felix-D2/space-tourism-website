<template>
  <header>
    <div class="menu">
      <div class="navZone">
        <div class="fuzzyRectangle">
          <div class="nav">


            <router-link to="/"
            class="linkNav"> 

              <span>00</span> Home
              <div class="linkNavUnderline"></div>
            </router-link>
            
            
            <router-link :to="{name: 'Destination', params: {id: '0'}}"
            class="linkNav"> 

              <span>01</span> Destination
              <div class="linkNavUnderline"></div>
            </router-link>
            

            <router-link :to="{name: 'Crew', params: {id: '0'}}"
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
        

      </div>
      
      <router-view/>
      
    </div>
  </header>
</template>




<script>
  export default {
    name: 'MenuItem',
  }
</script>





<style scoped>

  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');



  .navZone
  {
    position: absolute;
    top: 40px;
    right: 0px;
    z-index: 2;   /*Met au premier plan */

    width: 96vw;
    height: 96px;

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
    transform: translate(-50%);
    right: 50%;
    transform: translate(0, 0, -50%);
    
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
  

  .linkNav
  {

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




/* ___Underline___ */

  .linkNavUnderline
  {
    opacity: 0;

    position: relative; 
    top: 37px;

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
  
  .linkNav:hover > .linkNavUnderline    /* Link underline hover */
  {
    opacity: 0.5;
  }

</style>



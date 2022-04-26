<template>
  <section>
    <div class="home">

      <div class="contents">
        <div class="information">
          <h5>So, you want to travel to</h5>

          <h1>Space</h1>

          <div class="bodyText">     
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </div>

        </div>

        <button class="exploreButton" @click="goDestination()" type="button">
          Explore
        </button>

      </div>

    </div>
  </section>
</template>





<script>
  export default {
    name: 'Home',

    methods: {

      goDestination() {
        console.log("destination");
        this.$router.push({name: 'Destination', params: {id: "0"}})
      },

    }
  }
</script>





<style scoped>

  .home 
  {
    position: absolute;

    background:  center fixed no-repeat url("/images/home/background-home-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 110%;
    width: 100%;

    overflow: auto;   /*à mettre impérativement, pour éviter des problème d'affichage (ex : background d'une autre couleur) */

    z-index: 1;
  }

  .contents
  {
    
    width: 100%;
    height: 100%;
  }

  .information 
  {    
    position: absolute;
    top: 35%;
    left: 8%;

    width: 450px;
    height: 382px;

    padding-bottom: min(30px, 15%);


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
  }

  .bodytext
  {
    padding-bottom: min(30px, 15%);
  }


  .exploreButton
  {
    position: absolute;
    bottom: 15%;
    right: 10%;

    width: 274px;
    height: 274px;
    border-radius: 50%;
    margin: 0;


    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color:rgb(255, 255, 255);
    border: 1px solid rgb(255, 255, 255);

    cursor: pointer;


    /*      ___Font___      */
    /*Bellefair Regular - 32px*/
    font-family: 'Bellefair', serif;
    text-transform: uppercase;

    font-style: normal;
    font-weight: normal;

    text-decoration: none;
    line-height: 37px;
    font-size: 32px;
    letter-spacing: 2px;

    color: #0B0D17;
  }




  /*      Animations      */


/* exploreButton */
  .exploreButton:hover
  {
    box-shadow: 0 0 0 0 rgb(255, 255, 255, 1);
    animation: pulse 0.9s forwards;
  }

  @keyframes pulse 
  {
    to
    {
      box-shadow: 0 0 0 88px rgb(255, 255, 255, 0.1);
    }
  }




/* h5 */
h5
{
  animation: apparition 0.8s forwards;
  opacity: 0;
}
/* h1 */
h1
{
  animation: apparition 0.8s 0.5s forwards;
  opacity: 0;
}

@keyframes apparition 
{
  from {
    
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}




/*    Responsive      */


  @media screen and (max-width: 1215px)
  {/* Tablet version, or lower than max-width */

    .home 
    {
      background: center fixed no-repeat url("/images/home/background-home-tablet.jpg");
      background-size: cover;   /* Background resize */
    }

    .contents
    {
      padding-bottom: 20%;
      padding-top: 124px;

      height: auto;
    }

    .information
    {    
      position: relative;
      top: 15%;
      left: 50%;
      transform: translate(-50%); 

      height: 30%;
      width: 75%;
    }


    .exploreButton
    {
      position: relative;
      top: 340px;
      left: 50%;
      transform: translate(-50%); 

      height: 242px;
      width: 242px;

      
    }


  }





  @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */

    .home 
    {
      background:  center fixed no-repeat url("/images/home/background-home-mobile.jpg");
      background-size: cover;   /* Background resize */
    }

        

    .information
    {
      top: 0;

      height: 315px;
      width: 95%;
    }

    .exploreButton
    {
      top: 20px;

      height: 150px;
      width: 150px;



      /*      ___Font___      */
      line-height: 23px;
      font-size: 20px;
      letter-spacing: 1.25px;
    }
  }


</style>



<template>
  <section>
    <div class="home">

      <div class="contents">
        
        <h5>So, you want to travel to</h5>

        <h1>Space</h1>

        <div class="bodyText">     
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
        </div>

      </div>


    
      <a class="exploreButton" @click="goDestination()">
        Explore
        <div class="exploreButtonHover"> </div>
      </a>
   

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
      }
    }
  }
</script>





<style scoped>


  .home {
    position: absolute;

    background:  center fixed no-repeat url("/images/home/background-home-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

    z-index: 1;
  }


  .contents{
    position: relative;
    top: 35%;
    left: 8%;

    width: 450px;
    height: 382px;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }


  .exploreButton
  {
    position: absolute;
    bottom: 15%;
    right: 10%;
    

    width: 274px;
    height: 274px;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color:rgb(175, 9, 9);
  }

  .linkExploreButton    /*Bellefair Regular - 32px*/
  {
    font-family: 'Bellefair', serif;
    text-transform: uppercase;

    font-style: normal;
    font-weight: normal;

    text-decoration: none;
    line-height: 37px;
    font-size: 32px;

    color: #0B0D17;
  }


.exploreButtonHover
{
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;


  width: 450px;
  height: 450px;
  border-radius: 100%;

  background-color:rgb(255, 255, 255);
  opacity: 0.1;
}

  
</style>



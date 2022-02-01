<template>
  <div class="crew">


    <div class="contents">

      <div class="display">


        <diV class="crewInformation">
          <h5><span>02</span> Meet your crew</h5>


          <h4>{{data.crew[this.id].role}}</h4>


          <h3>{{data.crew[this.id].name}} </h3>  


          <div class="bodyText">
            {{data.crew[this.id].bio}}
            
          </div>

          <div class="menu"><MenuCrewItem/></div>

        </div>


      </div>


      <img class="images" :src="data.crew[this.id].images.png" alt="planet Image" />

    </div>
  </div>

</template>




<script>
  import MenuCrewItem from '@/components/MenuCrewItem.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Crew',
    props: {'id': {required: true}},

    components: {
      MenuCrewItem
    },



    // data() {
    //   return{
    //     destinationId: 0,
    //   }
    // },


    computed: {
      ...mapState(['data']),

    },

  }
</script>








<style scoped>

  .crew {
    position: absolute;

    background:  center fixed no-repeat url("/images/crew/background-crew-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

    z-index:1;
  }


  .contents
  {
    position: absolute;
    width: 80%;
    

    top: 25%;
    right: 10%;

    display: flex;

    
    justify-content: space-between;
    align-items: flex-start;
    


    border: 2px solid rgb(224, 19, 19);

  }



  .display
  {
    width: 600px;

    display: flex;
    flex-direction: column;
    align-items: space-between;

    border: 2px solid rgb(19, 224, 19);
  }
  .display h5
  {
    margin-bottom: 20%;

    align-self: flex-start;
  }

  h5 span
  {
    opacity: 0.25;
  }

  .images
  {
    width: 30%;

    border: 2px solid rgb(160, 10, 219);
  }





  .crewInformation
  {
    display: flex;

    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    
  }

  h4
  {
    width: 40%;
    text-align: left;

    margin-bottom: 2%;

    opacity: 0.5;
  }

  h3{
    text-align: left;
    margin-bottom: 2%;
  }



  .travelInformation > .subheading1
  {
    order: 3;
  }



</style>
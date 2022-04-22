<template>
  <div class="destination">
    <div class="contents">

      <div class="display">
        <h5><span>01</span> Pick your destination</h5>
        <img class="images" :src="destinationData.images.png" alt="planet Image" />
      </div>


      <div class="information">
        <div class="menu"><MenuDestinationItem @change-param="addNewParam" /></div>


        <h2>{{destinationData.name}}</h2>  

        <div class="bodyText">
          {{destinationData.description}}
        </div>

        
        <div class="ligne"></div>


        <diV class="travelInformation">

          <div class="informationDistance">
            <div class="subheading2">
              Avg. distance
            </div>
          

            <div class="subheading1">
              {{destinationData.distance}}
            </div>
          </div>
          

          <div class="informationTravel"> 
            <div class="subheading2">
              Est. travel time
            </div>

            <div class="subheading1">
              {{destinationData.travel}}
            </div>
          </div>
      
        </diV>
      </div>
    </div>
  </div>
</template>



<script>
  import MenuDestinationItem from '@/components/MenuDestinationItem.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Destination',
    //  props: {'id': {required: true}},  // type: String,

    components: {
      MenuDestinationItem
    },

    data() {
      return{
        planet: 0,
      }
    },


    computed: {
      ...mapState(['data']),

      destinationData() {
        return this.data.destinations[this.planet];
      },
    },

    methods: {
      addNewParam(amount) {
        this.planet = amount.nb
      }
    }
  }

</script>




<style scoped>

  /*    ___Background___    */

  .destination 
  {
    position: absolute;

    background: center fixed no-repeat url("/images/destination/background-destination-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 110%;
    width: 100%;

    overflow: auto;   /*à mettre impérativement, pour éviter des problème d'affichage (ex : background d'une autre couleur) */

    z-index: 1;
  }
  /*    *****************    */



  .contents
  {
    position: absolute;
    width: 80%;

    top: 20%;
    right: 10%;

    padding-bottom: min(30px, 15%);


    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }




  /*      ___Display___      */
  /*  (title of view and picture) */
  .display
  {
    display: flex;
    flex-direction: column;
    align-items: space-between;

    margin-right: 4%;
  }


  h5
  {
    margin-bottom: 11%;

    align-self: flex-start;
  }


  h5 span
  {
    opacity: 0.25;
  }


  .images
  {
    margin-left: 5%;
  }
  /*      *************      */




  /*    ___Information___ */
  /*  (information of the destination) */
  .information
  {
    width: 445px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }


  .menu
  {
    margin-top: 15%;
    margin-bottom: 10%;
  }

  .bodyText
  {
    margin-top: 1%;
  }

  .ligne
  {
    width: 100%;
    height: 1px;

    margin-top: 15%;
    margin-bottom: 8%;


    background: #383B4B;
  }


  .travelInformation
  {
    display: flex;

    align-items: flex-start;
    width: 100%;
  }

  .informationDistance
  {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .informationTravel
  {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .subheading1, .subheading2
  {
    text-align: left;
  }

  .subheading2
  {
    margin-bottom: 3%;
  }


  /*      *************      */





/*    Responsive      */


  @media screen and (max-width: 1215px)
  {/* Tablet version, or lower than max-width */

    .destination
    {
      background: center fixed no-repeat url("/images/destination/background-destination-tablet.jpg");
      background-size: cover;   /* Background resize */
    }

    .contents
    {
      left: 5%;

      width: 90%;

      flex-direction: column;
      align-items: center;
    }

    h5 
    {
      position: absolute;
      left: 0px;

      margin-bottom: 10px;
    }

    .images
    {
      margin-top: 20%;
      margin-left: auto;

      height: 300px;
      width: 300px;

     
    }


    .information
    {
      margin-bottom: 10%;
      align-items: center;
      width: 80%;
    }

    .menu
    {
      margin-top: 10%;
      margin-bottom: 10%;
    }

    .ligne
    {
      margin-top: 5%;
    }

    .informationDistance, .informationTravel
    {
      align-items: center;
    }

  }






    @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */

    .destination 
    {
      background: center fixed no-repeat url("/images/destination/background-destination-mobile.jpg");
      background-size: cover;   /* Background resize */
    }

    .contents
    {
      top: 15%;
    }

    .display
    {
      justify-content: center;
    }

    h5 
    {
      position: relative;
      align-self: center;
    }

    .images
    {
      height: 170px;
      width: 170px;
      margin-right: auto;
      margin-top: 10%;
    }

    .information
    {
      width: 100%;
    }

    .menu
    {
      margin-top: 10%;
    }

    .travelInformation
    {
      flex-direction: column;
      align-items: center;

      padding-bottom: 10%;
    }

    .informationDistance
    {
      padding-bottom: 10%;
    }

    .informationTravel
    {
      margin-bottom: 20%;
    }

  }
</style>
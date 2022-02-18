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

          <div class="subheading2">
            Avg. distance
          </div>

          <div class="subheading1">
            {{destinationData.distance}}
          </div>

          

          <div class="subheading2">
            Est. travel time
          </div>

          <div class="subheading1">
            {{destinationData.travel}}
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

  .destination {
    position: absolute;

    background:  center fixed no-repeat url("/images/destination/background-destination-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

    z-index:1;
  }
  /*    *****************    */



  .contents
  {
    position: absolute;
    width: 80%;


    top: 20%;
    right: 10%;

    display: flex;

    justify-content: space-between;
    align-items: flex-start;

    border: 2px solid rgb(224, 19, 19);
  }




  /*      ___Display___      */
  /*  (title of view and picture) */
  .display
  {
    display: flex;
    flex-direction: column;
    align-items: space-between;

    border: 2px solid rgb(19, 224, 19);
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
    

    border: 2px solid rgb(160, 10, 219);
  }


  .menu
  {
    margin-top: 15%;
    margin-bottom: 10%;
  }


  .travelInformation
  {
    display: flex;
    flex-wrap: wrap;


    align-items: flex-start;
    justify-content: space-between;
  }


  .ligne
  {
    width: 100%;
    height: 1px;

    margin-top: 15%;
    margin-bottom: 8%;

    background: #383B4B;
  }


  .subheading1, .subheading2
  {
    width: 40%;
    text-align: left;
  }

  .subheading2
  {
    margin-bottom: 3%;
  }

  .travelInformation > .subheading1
  {
    order: 3;
  }
  /*      *************      */

</style>
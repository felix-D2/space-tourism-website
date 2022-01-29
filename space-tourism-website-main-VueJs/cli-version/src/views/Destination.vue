<template>
  <div class="destination">
    
    <div class="destinationView">
      <h5><span>01</span> Pick your destination</h5>

      <img class="destination_images" :src="data.destinations[0].images.webp" alt="planet Image" />
    </div>



    <div class="information">
      <MenuDestinationItem/>

      <h2>{{data.destinations[0].name}} </h2>  

      <p>
        {{data.destinations[0].description}}
      </p>

      <p>
        Avg. distance
        {{data.destinations[0].distance}}

      </p>

      <p>
        Est. travel time
        {{data.destinations[0].travel}}
      </p>

    </div>
    
  </div>
</template>



<script>
  import MenuDestinationItem from '@/components/MenuDestinationItem.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Destination',
    components: {
      MenuDestinationItem
    },

    data() {
      return{

      }
    },


    computed: {
      ...mapState(['data'])
    },

  }

</script>




<style scoped>

  .destination {
    position: absolute;

    background:  center fixed no-repeat url("/images/destination/background-destination-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

    z-index:1;
  }


  .text
  {
    position: absolute;
    top: 300px;

    color:white;
  }
</style>
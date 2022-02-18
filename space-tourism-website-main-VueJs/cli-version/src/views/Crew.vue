<template>
  <div class="crew">


    <div class="contents">


      <h5><span>02</span> Meet your crew</h5>

      <div class="information">

          

          <h4>{{destinationData.role}}</h4>


          <h3>{{destinationData.name}}</h3>  


          <div class="bodyText">
            {{destinationData.bio}}
          </div>
      </div>

      <div class="menu"><MenuCrewItem @change-param="addNewParam" /></div>

      <div class="display">
        <img class="images" :src="destinationData.images.png" alt="planet Image" />
      </div>
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


    data() {
      return{
        crew: 0,
      }
    },


    computed: {
      ...mapState(['data']),

      destinationData() {
        return this.data.crew[this.crew];
      },
    },


    methods: {
      addNewParam(amount) {
        this.crew = amount.nb
      }
    }

  }
</script>








<style scoped>

/*    ___Background___    */
  .crew {
    position: absolute;

    background:  center fixed no-repeat url("/images/crew/background-crew-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

    z-index:1;
  }
/*    *****************    */



  .contents
  {
    position: absolute;
    height: 75%;
    width: 80%;
    

    bottom: 0;
    right: 10%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    border: 2px solid rgb(224, 19, 19);
  }



  h5
  {
    position: absolute;
    top: 0;
  }

  h5 span
  {
    opacity: 0.25;
  }




/*    ___Information___ */
  /*  (Crew information) */

  .information
  {
    height: 75%;
    width: 55%;
    align-self: flex-center;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    border: 2px solid rgb(224, 152, 19);
  }


  h4
  {
    justify-self: flex-start;

    text-align: left;
    margin-bottom: 2%;

    opacity: 0.5;

    border: 2px solid rgb(6, 230, 6);
  }


  h3
  {
    text-align: left;
    margin-bottom: 5%;

    border: 2px solid rgb(207, 19, 224);
  }


  .bodyText
  {
    width: 70%;

    border: 2px solid rgb(19, 200, 224);
  }

  .menu
  {    
    position: absolute;
    bottom: 5%;

    border: 2px solid rgb(19, 22, 224);
  }




  /*      ___Display___      */
  /*  (picture) */
  .display
  {

    display: flex;
    justify-content: center;
    border: 2px solid rgb(19, 224, 19);
  }

  .images
  {
    width: 75%;
  }
 /*    *****************    */






/* 
??????????? */

  .travelInformation > .subheading1
  {
    order: 3;
  }



</style>
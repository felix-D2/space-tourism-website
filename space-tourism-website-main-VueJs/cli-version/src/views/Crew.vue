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

        <div class="menu"><MenuCrewItem @change-param="addNewParam" /></div>
      </div>

      

      <div class="display">
        <img class="images" :src="destinationData.images.png" alt="planet Image" />
      </div>

      <div class="ligne"></div>

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
  .crew 
  {
    position: absolute;

    background: center fixed no-repeat url("/images/crew/background-crew-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 110%;
    width: 100%;

    overflow: auto;   /*à mettre impérativement, pour éviter des problème d'affichage (ex : background d'une autre couleur) */

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
  }


  h4
  {
    justify-self: flex-start;

    text-align: left;
    margin-bottom: 2%;

    opacity: 0.5;
  }


  h3
  {
    text-align: left;
    margin-bottom: 5%;
  }


  .bodyText
  {
    width: 70%;
  }

  .menu
  {    
    position: absolute;
    bottom: 5%;
  }




  /*      ___Display___      */
  /*  (picture) */
  .display
  {
    display: flex;
    justify-content: center;
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






/*    Responsive      */


  @media screen and (max-width: 1215px)
  {/* Tablet version, or lower than max-width */

    .crew
    {
      background:  center fixed no-repeat url("/images/crew/background-crew-tablet.jpg");
      background-size: cover;   /* Background resize */
    }

    .contents
    {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      right: 5%;

      top: 20%;
      height: auto;
      width: 90%;
    }

    .information
    {
      justify-content: flex-end;
      align-items: center;

      margin-top: 10%;

      height: 100%;
      width: 100%;
    }

    h4 
    {
      margin-bottom: 0;
    }
    h3 
    {
      margin-top: 3%;
      margin-bottom: 0;
    }

    h5 
    {
      align-self: flex-start;
      top: 5%;
    }

  .bodyText
    {
      width: 90%;

      margin-top: 3%;
      margin-bottom: 6%;
    }

    .menu
    {    
      position: relative;
      bottom: 0;
    }
  }




    @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */

    .crew
    {
      background:  center fixed no-repeat url("/images/crew/background-crew-mobile.jpg");
      background-size: cover;   /* Background resize */
    }

    

    .contents
    {
      top: 15%;

      height: 700px;
      justify-content: flex-start;
    }

    h5 
    {
      position: relative;
      top: 0;
      align-self: center;
    }

    .display
    {
      position: absolute;
      bottom: 380px;
      height: 35%;
    }

    .images
    {
      width: auto;
    }

    .ligne
    {
      position: absolute;
      bottom: 380px;

      width: 95%;
      height: 1px;

      margin-bottom: -1px;

      background: #383B4B;
    }

    .information
    {
      order: 3;
      position: absolute;
      top: 310px;

      height: auto;

      justify-content: flex-start;
    }
      
    .menu
    {
      order: 1;
    }

    h4 
    {
      order: 2;
      margin-top: 10%;
    }
    h3 
    {
      order: 3;
    }
    .bodyText
    {
      order: 4;
      width: 100%;

      margin-top: 10%;
      margin-bottom: 40%;
    }


  }

</style>
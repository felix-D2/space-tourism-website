<template>
  <div class="technology">
    <div class="contents">


      <div class="information">
        <h5><span>03</span> Space launch 101</h5>

        <div class="mainInformation">
          <div class="menu"><MenuTechnologyItem @change-param="addNewParam" /></div>

          <div class="rightInfo">
            <div class="navText">The terminology...</div>

            <h3>{{destinationData.name}} </h3>  


            <div class="bodyText">
              {{destinationData.description}}
            </div>
          </div>
        </div>
      </div>


      <div class="display">
        <img class="images_portrait" :src="destinationData.images.portrait" alt="technology Image" />
        <img class="images_landscape" :src="destinationData.images.landscape" alt="technology Image" />
      </div>

    </div>
  </div>
</template>







<script>
  import MenuTechnologyItem from '@/components/MenuTechnologyItem.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Technology',
     props: {'id': {required: true}},  // type: String,

    components: {
      MenuTechnologyItem
    },

    data() {
      return{
        technology: 0,
      }
    },


    computed: {
      ...mapState(['data']),

      destinationData() {
        return this.data.technology[this.technology];
      },
    },

    methods: {
      addNewParam(amount) {
        this.technology = amount.nb
      }
    }

  }

</script>








<style scoped>

/*    ___Background___    */

  .technology 
  {
    position: absolute;

    background:  center fixed no-repeat url("/images/technology/background-technology-desktop.jpg");
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
    width: 90%;

    top: 25%;
    right: 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }




  /*      ___Display___      */
  /*  (picture) */
  .display
  {
    display: flex;
    justify-content: flex-end;
  }

  .images_portrait
  {
    display: block;
    width: 90%;
  }

  .images_landscape{
    display: none;
  }


 /*    *****************    */




/*    ___Information___ */
  /*  (technology information) */
  .information
  {
    width: 55%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }


  h5
  {
    margin-bottom: 11%;
  }


  h5 span
  {
    opacity: 0.25;
  }


  .mainInformation
  {
    display: flex;
    justify-content: space-between;
  }

  .rightInfo
  {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .navText
  {
    margin-bottom: 1%;
  }

  h3 
  {
    margin-bottom: 3%;
    text-align: start;
  }

  .bodyText
  {
    width: 70%;
  }

/*      *************      */




/*    Responsive      */


  @media screen and (max-width: 1215px)
  {/* Tablet version, or lower than max-width */
    
    .technology
    {
      background:  center fixed no-repeat url("/images/technology/background-technology-tablet.jpg");
      background-size: cover;   /* Background resize */
    }

    .contents
    {
      flex-direction: column-reverse;
      align-items: center;

      top: 20%;

      width: 100%;
    }

    h5 
    {
      position: absolute;
      top: 0;
      left: 1%;
    }

    .display
    {
      justify-content: center;
      margin-top: 15%;
      width: 100%;
    }

    .images_portrait
    {
      display: none;
    }

    .images_landscape{
      display: block;
      width: 100%;
    }

    .information
    {
      width: 100%;
      margin-top: 10%;
    }


    .mainInformation
    {
      flex-direction: column;
      align-items: center;
    }

    .rightInfo
    {
      margin-top: 8%;
      margin-bottom: 15%;
      align-items: center;
    }
    
  }






  @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */
    
    .technology
    {
      background:  center fixed no-repeat url("/images/technology/background-technology-mobile.jpg");
      background-size: cover;   /* Background resize */
    }

    .contents
    {
      top: 15%;
    }

    h5 
    {
      left: 50%;
      transform: translate(-50%);
    }



    .rightInfo
    {
      width: 100%;
    }

    .navText
    {
      margin-bottom: 3%;
    }
    
    .bodyText
    {
      width: 90%;
      margin-bottom: 20%;
    }

  }



</style>
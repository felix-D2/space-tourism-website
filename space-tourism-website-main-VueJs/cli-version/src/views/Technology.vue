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
        <img class="images" :src="destinationData.images.portrait" alt="technology Image" />
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

  .technology {
    position: absolute;

    background:  center fixed no-repeat url("/images/technology/background-technology-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

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

    border: 2px solid rgb(224, 19, 19);
  }




  /*      ___Display___      */
  /*  (picture) */
  .display
  {
    display: flex;
    justify-content: flex-end;
    border: 2px solid rgb(19, 224, 19);
  }

  .images
  {
    width: 90%;
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

    border: 2px solid rgb(160, 10, 219);
  }


  h5
  {
    margin-bottom: 11%;

    border: 2px solid rgb(45, 196, 58);
  }


  h5 span
  {
    opacity: 0.25;
  }


  .mainInformation
  {
    display: flex;
    justify-content: space-between;

    border: 2px solid rgb(219, 163, 10);
  }

  .rightInfo
  {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 2px solid rgb(48, 10, 219);
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

  .menu
  {
    border: 2px solid rgb(19, 224, 214);
  }
/*      *************      */
</style>
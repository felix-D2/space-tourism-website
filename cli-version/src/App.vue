<template>
  <div id="app">
    <MenuItem/>
  </div>
</template>





<script>
  // @ is an alias to /src
  import MenuItem from '@/components/MenuItem.vue'

  export default {
    name: 'App',
    components: {
      MenuItem
    }
  }
</script>





<style lang="scss">


  body
  {
    position: fixed;
    top: 0;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;

    height: 100%;
    width: 100%;
    

    display: flex;

    background-color:rgb(0, 0, 0);

    
  }


  #app 
  {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }


  // ___Font____

  @import url('https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap');

  h1, h2, h3, h4, .subheading1, h5, .subheading2, .navText, .bodyText
  {
    margin: 0px;
  }



  h1, h2, h3, h4, .subheading1
  {
    font-family: 'Bellefair', serif;
    text-transform: uppercase;

    font-style: normal;
    font-weight: normal;

    color: #FFFFFF;
  }

  h5, .subheading2, .navText
  {
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;

    font-style: normal;
    font-weight: normal;

    text-decoration: none;
  }


  h1    //Bellefair Regular - 100px
  {
    line-height: 172px;
    font-size: 150px;
  }

  h2    //Bellefair Regular - 100px
  {
    line-height: 115px;
    font-size: 100px;
  }

  h3    //Bellefair Regular - 56px
  {
    line-height: 64px;
    font-size: 56px;
  }

  h4    //Bellefair Regular - 32px
  {
    line-height: 37px;
    font-size: 32px;
  }


  h5    //Barlow Condensed Regular - 28px - 4.75 Character Space
  {
    line-height: 34px;

    font-size: 28px;
    letter-spacing: 4.725px;

    color: #D0D6F9;
  }


  //____Subheading___
  
  .subheading1   //Subheading 1 - Bellefair Regular - 28px
  {
    line-height: 32px;
    font-size: 28px;
  }

  .subheading2   //Subheading 2 -  Barlow Condensed Regular - 14px - 2.35 Character Space
  {
    line-height: 17px;

    font-size: 14px;
    letter-spacing: 2.3625px;

    color: #FFFFFF;
  }

  

  //____Text___

  .navText    //Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
  {
    line-height: 19px;

    font-size: 16px;
    letter-spacing: 2.7px;

    color: #FFFFFF;
  }
  


  .bodyText   //Body Text - Barlow Regular - 18px
  {
    font-family: 'Barlow', sans-serif;

    font-style: normal;
    font-weight: normal;

    font-size: 18px;
    line-height: 32px;

    color: #D0D6F9;

    text-align: start;
  }



  @media screen and (max-width: 1215px)
  {/* Tablet version, or lower than max-width */

    /* ___Font____ */
    
    h1
    {
      line-height: 150px;
    }

    h2
    {
      line-height: 92px;
      font-size: 80px;
    }

    h3
    {
      line-height: 46px;
      font-size: 40px;
    }

    h4
    {
      line-height: 28px;
      font-size: 24px;
    }

    h5 
    {
      line-height: 24px;
      font-size: 20px;
      letter-spacing: 3.375px;
    }

    .bodyText
    {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  
  }




    @media screen and (max-width: 580px)
  {/* Mobile version, or lower than max-width */

    /* ___Font____ */
    
    h1
    {
      line-height: 100px;
      font-size: 80px;
    }

    h2
    {
      line-height: 64px;
      font-size: 56px;
    }

    h3
    {
      line-height: 28px;
      font-size: 24px;
    }

    h4
    {
      line-height: 18px;
      font-size: 16px;
    }

    h5 
    {
      line-height: 18px;
      font-size: 16px;
    }
  
  }




    /* remove animations for people who've turned them off */
  @media (prefers-reduced-motion: reduce) {  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

</style>
<template>

    <section>
        <div class="contents">
            <div class="notFound">

                <h3>You seem to be lost in space...</h3>
                <h4>404 Not found</h4>
            </div>
        </div>
    </section>
</template>






<script>
export default {
    name: 'NotFound',
}
</script>






<style scoped>
  /*    ___Background___    */

  .contents {
    position: absolute;

    background:  center fixed no-repeat url("/images/destination/background-destination-desktop.jpg");
    background-size: cover;   /* Background resize */
    height: 100%;
    width: 100%;

    z-index:1;
  }
  /*    *****************    */



  .notFound
  {
    position: absolute;
    width: 80%;


    top: 40%;
    right: 10%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }


  h4
  {
    margin-top: 8%;
  }
</style>

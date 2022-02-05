<template>
  <div class="nav">
    <router-link
      :to="{ name: 'Technology', params: { id: '0' } }"
      class="navTextTechnology"
    >
      1
    </router-link>

    <router-link
      :to="{ name: 'Technology', params: { id: '1' } }"
      class="navTextTechnology"
    >
      2
    </router-link>

    <router-link
      :to="{ name: 'Technology', params: { id: '2' } }"
      class="navTextTechnology"
    >
      3
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuTechnologyItem",
};
</script>

<style scoped>

.nav {
  width: 90px;
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.navTextTechnology { /*Bellefair Regular - 32px*/
  font-family: "Bellefair", serif;
  text-transform: uppercase;

  font-style: normal;
  font-weight: normal;

  text-decoration: none;
  line-height: 37px;
  font-size: 32px;


  width: 80px;
  height: 80px;
  border-radius: 100%;

  border: 1px solid rgba(255, 255, 255, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
}



/* ___Underline___ */


.router-link-active  /* Link activated */ {
  opacity: 1;
  background: #ffffff;

  color: #0b0d17;
}

.router-link-active   /*  Disable Link hover  */ {
  pointer-events: none;
}

.navTextTechnology:hover   /* Link hover */ {
  border-color:rgba(255, 255, 255, 1);
}
</style>

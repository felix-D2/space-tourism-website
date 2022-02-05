<template>
  <div class="nav">
    <router-link :to="{ name: 'Crew', params: { id: '0' } }" class="navText">
    </router-link>

    <router-link :to="{ name: 'Crew', params: { id: '1' } }" class="navText">
    </router-link>

    <router-link :to="{ name: 'Crew', params: { id: '2' } }" class="navText">
    </router-link>

    <router-link :to="{ name: 'Crew', params: { id: '3' } }" class="navText">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuCrewItem",
};
</script>

<style scoped>
.nav {
  width: 130px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navText {
  width: 15px;
  height: 15px;
  border-radius: 100%;

  background-color: rgb(255, 255, 255);
  opacity: 0.17;
}

/* ___Underline___ */

.linkNavUnderline {
  opacity: 0;

  position: relative;
  top: 10px;

  height: 3px;
  width: 100%;

  background: #ffffff;

  pointer-events: none;
}

.router-link-active   /* Link underline activated */ {
  opacity: 1;
}

.router-link-active   /*  Disable Link underline hover  */ {
  pointer-events: none;
}

.navText:hover    /* Link hover */ {
  opacity: 0.5;
}
</style>

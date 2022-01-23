<template>
  <div :class="$style.destination">
    <div :class="$style.text">
      <h1>This is an Destination page</h1>

    
      <h5>01 Pick your destination</h5>

      Moon
      Mars
      Europa
      Titan

      <h2>Europa</h2>

      The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
      winter lover’s dream. With an icy surface, it’s perfect for a bit of 
      ice skating, curling, hockey, or simple relaxation in your snug 
      wintery cabin.

      Avg. distance
      628 mil. km

      Est. travel time
      3 years


    </div>
    
  </div>
</template>



<style module>
  .destination {
    position: absolute;

    height: 100%;
    width: 100%;
    border-width:5px;
    border-style:dotted;
    border-color:rgb(247, 2, 2);

    position: absolute;
    top: 0px;

    z-index:1;
    

    background-image: url("/images/home/background-home-desktop.jpg");
  }


  .text
  {
    position: absolute;
    top: 300px;

    color:white;
  }
</style>
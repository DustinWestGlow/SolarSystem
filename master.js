// var parse = require("modules/animframe.js");
// import requestAnimFrame from "./modules/animframe.js";

function getrand(min, max) {
  return Math.random() * (max - min) + min;
}

time = 0;
// debug don't wipe screen
// helped planet iteration and screen wipe problem
keepclearing = true;//false;//true;
// post general planet info at first
// init_planet_table();
tick = 0;
var background = new Image();
background.src = "media/stars.jpg";
function loop() {
  // only clear once per game loop
  // DO NOT clear for every planet or only 1 planet will show
  if (keepclearing)
  {
    // Clear Screen
    clearScreen();
  }
  // update time
  time = (time + 1);
  // The Sun
    drawSun();
  for (var i = 0; i < planets.length; i++) {
    // update planet
    var planet = planets[i];
    updatePlanet(planet, time);
    // draw planet
    drawPlanet(planet, showOrbitPath=true);
    // then post specific time-dependent info
    // observe planet (html table)
    // observePlanet(planet);
    // if (keepclearing)
    // {
      // console.log(planet);
    // }
  }
  // Show data
  observe();
  window.requestAnimFrame(loop);
}
window.requestAnimFrame(loop);
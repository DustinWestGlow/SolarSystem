/** Planet Radii
 * and Orbit Radii (Circular)
 * Used to calculate real math 2 pixels
 **/
var radii = [
1.516 * Math.pow(10, 3),
3.760 * Math.pow(10, 3),
3.959 * Math.pow(10, 3),
2.106 * Math.pow(10, 3),
4.344 * Math.pow(10, 4),
3.618 * Math.pow(10, 4),
1.576 * Math.pow(10, 4),
1.530 * Math.pow(10, 4)
];
var orbit_radii = [
5.79 * Math.pow(10, 7),
0.672 * Math.pow(10, 8),
0.930 * Math.pow(10, 8),
1.417 * Math.pow(10, 8),
4.837 * Math.pow(10, 8),
8.898 * Math.pow(10, 8),
1.421 * Math.pow(10, 9),
2.805 * Math.pow(10, 9)
];
var revolutions = [
87.97/365,
224.7/365,
365.26/365,
1.88,
11.88,
29.46,
84.01,
164.79
];
var au = 9.296*Math.pow(10, 7);

// scale out to neptune
outer = orbit_radii[orbit_radii.length - 1];
// real miles 2 digital pixels
// based on outer canvas limit a.k.a outermost planet
// then draw outer as outer pix, middle as middle px, ...
function real2d(miles) {
  return miles / outer * screen_width / 2;
}
class Planet {
  constructor(nth, rad, orb_rad, rev, pimg) {
    this.nth = nth;
    this.radius = rad;
    this.orbitRadius = orb_rad;
    this.revolution = rev;
    this.x = 0;
    this.y = 0;
    this.img = pimg;
    // start all planets in line at beginning of simulation
    // distanced realistically
    // will be wiped/updated by update loop
  }
}
var pimgs = [
"mercury.jpeg",
"venus.jpeg",
"earth.jpeg",
"elonmusk.jpeg",
"jupiter.jpeg",
"saturn.jpeg",
"uranus.jpeg",
"neptune.jpeg",
];

zoom = 0.80;
planet_count = 8;
var planets = [];
for (var i = 0; i < planet_count; i++)
{
  var img = new Image();
  img.src = "media/" + pimgs[i];
  var np = new Planet(i,
    radii[i], orbit_radii[i],
    revolutions[i], img);
  planets.push(np);
}

/** BEGIN SUN */
class Star {
  constructor(rad) {
    this.x = 0;
    this.y = 0;
    this.radius = rad;
  }
}
var sun_radii = 4.325 * Math.pow(10, 5);
var sun = new Star(sun_radii);
var sun_img = new Image();
// 'media' not '/media'
sun_img.src = "media/sun.jpeg";
function drawSun() {
    // c.drawImage(sun_img, sun.x - 10, sun.y - 10, 20, 20);
    c.beginPath();
    c.arc(sun.x, sun.y, 10, 0, Math.PI * 2);
    c.fillStyle = "yellow";
    c.fill();
}
/** END SUN */

function drawPlanet(planet, showOrbitPath) {
    // draw and color planet
    digital_x = planet.x / au * zoom * smaller/2;    
    digital_y = planet.y / au * zoom * smaller/2;
    planet_size = 20;
    c.drawImage(planet.img,  
      digital_x - planet_size/2,
      digital_y - planet_size/2,
    planet_size, planet_size);
    // c.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
    // draw and color orbit circle
    c.beginPath();
    // circle x,y at sun, then stretch out to planet
    var showOrbitPath = showOrbitPath || false;
    if (showOrbitPath)
    {
      c.arc(sun.x, sun.y,
        planet.orbitRadius/au * zoom * smaller/2, 0, Math.PI*2);
      c.strokeStyle = "purple";
      c.stroke();
    }
}
function updatePlanet(planet, time) {
  angle = (time/360) * (2 * Math.PI);
  planet.x = Math.cos(angle) * planet.orbitRadius;
  planet.y = Math.sin(angle) * planet.orbitRadius;
}

// PHEW! Under 100 lines after refactor
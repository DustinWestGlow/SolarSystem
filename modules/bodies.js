

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



function drawSun() {
    // c.drawImage(sun_img, sun.x - 10, sun.y - 10, 20, 20);
    c.beginPath();
    c.arc(zz.x, zz.y, 10, 0, Math.PI * 2);
    c.fillStyle = "yellow";
    c.fill();
}
/** END SUN */

function drawPlanet(planet, showOrbitPath) {
    // draw and color planet
    digital_x = zz.x + planet.x / au * zoom * smaller/2;    
    digital_y = zz.y + planet.y / au * zoom * smaller/2;
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
      c.strokeStyle = "#ff0";
      c.lineWidth = 1;
      c.stroke();
    }
    // draw dot in middle of screen :)
    c.beginPath();
    c.arc(0, 0,
      2,
      0, Math.PI*2);
    c.fillStyle = "white";
    c.fill();
}
function updatePlanet(planet, time) {
  angle = (time/360) * (2 * Math.PI);
  speed = 2;
  if (LEFT) {
    zz.x += speed;
  }
  if (RIGHT) {
    zz.x -= speed;
  }
  if (UP) {
    zz.y -= speed;
  }
  if (DOWN) {
    zz.y += speed;
  }
  sun.x = zz.x;
  sun.y = zz.y;
  planet.x = Math.cos(angle) * planet.orbitRadius;
  planet.y = Math.sin(angle) * planet.orbitRadius;
}

// PHEW! Under 100 lines after refactor
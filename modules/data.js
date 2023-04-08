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
/** BEGIN SUN */
class Star {
    constructor(rad) {
      this.x = 0;
      this.y = 0;
      this.radius = rad;
    }
  }
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
var planet_names = [
"Mercury",
"Venus",
"Earth",
"Mars",
"Jupiter",
"Saturn",
"Uranus",
"Neptune"
];
var sun_radii = 4.325 * Math.pow(10, 5);
// 'media' not '/media'
var sun = new Star(sun_radii);
var sun_img = new Image();
sun_img.src = "media/sun.jpeg";
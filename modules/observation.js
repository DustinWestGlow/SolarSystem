
SHOWDATA = true;
$("#gui_container [name='toggle_data']").click(function() {
   // whether to hide or show data
  var data_el = $("#gui_container [name='planet']");
  SHOWDATA = !SHOWDATA;
  if (SHOWDATA) {
    $("[name='toggle_data']").text("Hide Data");
  } else {
    $("[name='toggle_data']").text("Show Data");
  }
  data_el.toggle();
});
PLANET = 2;
var unit = "au";
$("[name='pout']").click(function() {
  PLANET = (PLANET + 1) % (planets.length);
  digital_x = planets[PLANET].orbitRadius / au * zoom * smaller/2;    
  zz.x = -digital_x;
});
$("[name='pin']").click(function() {
  PLANET = Math.max(Math.abs(PLANET - 1), 0);
  digital_x = planets[PLANET].orbitRadius / au * zoom * smaller/2;    
  zz.x = -digital_x;
});
function unitconv(n, fromu, tou) {
  if (fromu == tou) {
    return n;
  }
  if (fromu == 'au' && tou == 'mi') {
    return n * au;
  }
  if (fromu == 'au' && tou == 'km') {
    return n * au * 1.60934;
  }
  if (fromu == 'mi' && tou == 'au') {
    return n / au;
  }
  if (fromu == 'mi' && tou == 'km') {
    return n * 1.60934;
  }
  if (fromu == 'km' && tou == 'au') {
    return n / 1.60934 / au;
  }
  if (fromu == 'km' && tou == 'mi') {
    return n / 1.60934;
  }
  return -1;
}
function observe() {

  // Cursor Location Caption
  var cursor_x = -zz.x / (zoom * smaller/2);
  var cursor_y = -zz.y / (zoom * smaller/2);
  $("[name='cursor_coords']").text(
    "Cursor @ (" +
  (unitconv(cursor_x, "au", unit).toFixed(2))
  + " " + unit + ", " +
  unitconv(cursor_y, "au", unit).toFixed(2)
  + unit + " " + ")")
  
  // Planet Title Caption
  var title = planet_names[PLANET] + " [" +
  (PLANET+1) +  "] Planet";
  $("#data [name='title']").text(title);

  var planet = planets[PLANET];

  // Coordinates
  $("[name='pcx']").text(
    // Math.toFixed(
      unitconv(planet.x, "mi", unit).toFixed(2)
    // , 2)
  );
  $("[name='pcxu']").text(unit);
  $("[name='pcy']").text(
    // Math.round(
      unitconv(planet.y, "mi", unit).toFixed(2)
    // )
  );
  $("[name='pcyu']").text(unit);

  // Orbit
  $("[name='orbit_measurement']").text(
    unitconv(orbit_radii[PLANET], "mi", unit).toFixed(2)
  );

  $("[name='orbit_unit']").text(unit);

  // Radius
  $("[name='radius_measurement']").text(
    unitconv(radii[PLANET], "mi", unit).toFixed(2)
  );

  $("[name='radius_unit']").text(unit);
  
  // Revolution
  $("[name='revolution_measurement']").text(
    revolutions[PLANET].toFixed(2)
  );

}

function pl_table_el(planet_nth, item_nth) {
  var tr = document.querySelectorAll("#planets tr")[planet_nth];
  var td = tr.querySelectorAll("td")[item_nth];
  return td;
}
function observePlanet(planet) {
  pl_table_el(planet.nth, 4).textContent = "(," + Math.round(planet.x.d) + "," + Math.round(planet.y.d) + ")";
  pl_table_el(planet.nth, 5).textContent = "(," + planet.x.r.toExponential(2) + "," + planet.y.r.toExponential(2) + ")";
}
function general_info_planet(planet) {
  pl_table_el(planet.nth, 0).textContent = Math.round(planet.radius.d);
  pl_table_el(planet.nth, 1).textContent = planet.radius.r.toExponential(2);
  pl_table_el(planet.nth, 2).textContent = Math.round(planet.orbitRadius.d);
  pl_table_el(planet.nth, 3).textContent = planet.orbitRadius.r.toExponential(2);
}
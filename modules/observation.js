
function init_planet_table() {
  for (var i = 0; i < planets.length; i++) {
    var row = `<tr>
          <th>Earth</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>`;
    document.getElementById("planets").insertAdjacentHTML( 'beforeend', row);
  }
  for (var i = 0; i < planets.length; i++) {
    general_info_planet(planets[i]);
  }
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
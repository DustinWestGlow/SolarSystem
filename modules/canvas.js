//get a reference to the canvas
var canvas = document.getElementById('canvas');
//get a reference to the drawing context
var c = canvas.getContext('2d');

// https://stackoverflow.com/questions/5760897/html5-canvas-inverted-coordinate-system

function clearScreen() {
    c.fillStyle = "black";
    c.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
}

// Canvas at screen width and height
// space coordinates scaled from earth = 80% up/down
// scrollbar issues -10
var screen_width = window.innerWidth - 10;
var screen_height = window.innerHeight - 10;
// var screen_width = document.body.clientWidth;
// var screen_height = document.body.clientHeight;
console.log(screen_width);
console.log(screen_height);
var container = document.getElementById("container");
container.setAttribute("style", "width:" + screen_width + "px; height: " + screen_height + "px; position: relative;");;
canvas.width = screen_width;
canvas.height = screen_height;

c.translate(0, screen_height);
c.scale(1, -1);
c.translate(screen_width/2, screen_height/2);
var larger = Math.max(screen_width, screen_height);
var smaller = Math.min(screen_width, screen_height);
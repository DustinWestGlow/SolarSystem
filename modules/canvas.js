//get a reference to the canvas
var canvas = document.getElementById('canvas');
//get a reference to the drawing context
var c = canvas.getContext('2d');

// https://stackoverflow.com/questions/5760897/html5-canvas-inverted-coordinate-system
c.translate(0, canvas.width);
c.scale(1, -1);
c.translate(canvas.width/2, canvas.height/2);

function clearScreen() {
    c.fillStyle = "white";
    c.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
}
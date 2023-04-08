// window.onmousedown(function(e) {

// });

// Keycodes
// Left - 37, Right - 39
// Up - 38, Down - 40
// <^>V

var zz = {x: 0, y: 0};

var LEFT = false;
var RIGHT = false;
var UP = false;
var DOWN = false;

window.addEventListener('keydown', function(e) {
    if (e.key == "ArrowLeft") {
        LEFT = true;
    }
    if (e.key == "ArrowRight") {
        RIGHT = true;
    }
    if (e.key == "ArrowUp") {
        UP = true;
    }
    if (e.key == "ArrowDown") {
        DOWN = true;
    }
});

window.addEventListener('keyup', function(e) {
    if (e.key == "ArrowLeft") {
        LEFT = false;
    }
    if (e.key == "ArrowRight") {
        RIGHT = false;
    }
    if (e.key == "ArrowUp") {
        UP = false;
    }
    if (e.key == "ArrowDown") {
        DOWN = false;
    }
});

function keymove() {
    movespeedpx = 1;
    if (LEFT) {
        zz.x += movespeedpx;
    }
}
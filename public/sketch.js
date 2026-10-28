//Open and connect socket
let socket = io();
let num1; 
let num2;
let num3;

window.onmousedown = function() {
  num1 = Math.floor(Math.random() * 256);
  num2 = Math.floor(Math.random() * 256);
  num3 = Math.floor(Math.random() * 256);

};

//Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 200, 200);

  //Listen for messages named 'data' from the server
  socket.on('data', function(obj) {
    console.log(obj);
    drawPos(obj);
  });
}

function mouseMoved() {
  //Grab mouse position
  let mousePos = { x: mouseX, y: mouseY };
  //Send mouse position object to the server
  socket.emit('data', mousePos);

  //Draw yourself? or Wait for server?
  // fill(0);
  // ellipse(mouseX, mouseY 10, 10);
}

//Expects an object with a and y properties
function drawPos(pos) {
  fill(num1, num2, num3);
  noStroke();
  ellipse(pos.x, pos.y, 10, 10);
}
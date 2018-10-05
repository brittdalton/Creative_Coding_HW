
function setup() {
  createCanvas(windowWidth, 600);
  background(255, 255, 255);

  // translucent stroke using alpha value
  stroke(0, 0, 0, 25);
}

function draw() {
  // draw two random chords each frame
  randomChord();
  randomChord();
}

function randomChord() {
  // find a random point on a circle
  var angle1 = random(0, 2 * PI);
  var xpos1 = 200 + 200 * cos(angle1);
  var ypos1 = 200 + 200 * sin(angle1);

  // find another random point on the circle
  var angle2 = random(0, 2 * PI);
  var xpos2 = 200 + 200 * cos(angle2);
  var ypos2 = 200 + 200 * sin(angle2);

  // draw a line between them
  line(xpos1, ypos1, windowWidth, ypos2);
}

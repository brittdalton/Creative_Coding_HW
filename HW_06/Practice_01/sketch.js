function setup() {
  createCanvas(windowWidth, 400);
  background('rgb(65, 105, 175)');
  strokeWeight(20);
  frameRate(20);
}

function draw() {
  for (var i = 0; i < width; i++) {
    var r = random(255);
    stroke(r);
    fill('rgb(241, 152, 18)');
    ellipse(75, 100, width, height);
  }
}

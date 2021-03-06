
var numBalls = 23;
var spring = 0.05;
var gravity = 0.03;
var friction = -0.9;
var balls = [];

function setup() {
  createCanvas(windowWidth, 900);
  for (var i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls
    );
  }

}

function draw() {
  background('rgb(31, 154, 143)');

  noCursor(); //remove cursor icon
    fill('rgb(241, 124, 164)');                 //Color of mouse x,y ellipses
    ellipse( mouseX,40,60,33 );                 //Interactive mouse ellipses
    ellipse( mouseX/2,80,60,70 );
    ellipse(mouseX*2,120,60,90);

    noStroke();
    fill(255, 204);

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}

function Ball(xin, yin, din, idin, oin) {
  this.x = xin;
  this.y = yin;
  var vx = 0;
  var vy = 0;
  this.diameter = din;
  this.id = idin;
  this.others = oin;

  this.collide = function() {
    for (var i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      var dx = this.others[i].x - this.x;
      var dy = this.others[i].y - this.y;
      var distance = sqrt(dx * dx + dy * dy);
      var minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        var angle = atan2(dy, dx);
        var targetX = this.x + cos(angle) * minDist;
        var targetY = this.y + sin(angle) * minDist;
        var ax = (targetX - this.others[i].x) * spring;
        var ay = (targetY - this.others[i].y) * spring;
        vx -= ax;
        vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  };

  this.move = function() {
    vy += gravity;
    this.x += vx;
    this.y += vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      vy *= friction;
    }
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}

/*
Based on code from Keith Peters
source example: https://p5js.org/examples/motion-bouncy-bubbles.html
*/

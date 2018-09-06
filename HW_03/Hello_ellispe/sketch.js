function setup(){     // setup funtion needs to be in the top of each sketch.js
                      // and only needs to be added once

}

function draw(){
//  ellipse( 20,20,30,30 ); // testing parameters in draw function
                          // ellipse parameter: (x,y,w,h)
  ellipseMode(RADIUS);
  fill(255);
  ellipse (20,20,30,30);

  ellipseMode(CENTER);
  fill(100);
  ellipse(20,20,30,30); // trying out code from p5js.org reference ellipseMode()

  ellipse( 60,60,30,30 ); // adding second ellipse to test x,y placement
  ellipse( 100,100,30,30 ); // attempting to create line of ellipses, they were cut off so i am assuming the default canvas size is too small, the position from 20,20 to 60,60 was just a random number but i wanted equal spacing so next went to 100,100 and was cut off so it must have a canvas of similar size
                              // TODO try this again after canvas lesson to see if i can continue the line of ellipses

}

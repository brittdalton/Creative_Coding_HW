function setup(){     // setup funtion needs to be in the top of each sketch.js
                      // and only needs to be added once

}

function draw(){
  ellipse( 20,20,30,30 ); // testing parameters in draw function
                          // ellipse parameter: (x,y,w,h)
  ellipse( 60,60,30,30 ); // adding second ellipse to test x,y placement
  ellipse( 100,100,30,30 ); // attempting to create line of ellipses, they were cut off so i am assuming the default canvas size is too small
                              // TODO try this again after canvas lesson to see if i can continue the line of ellipses
  ellipse( 20,20,60,60 );
}

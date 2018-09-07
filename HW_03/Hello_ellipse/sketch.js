function setup(){     // setup funtion needs to be in the top of each sketch.js
createCanvas( 400,400 )        // and only needs to be added once
background ( 'blue' )

}



function draw(){
//  ellipse( 20,20,30,30 ); //turning off to try ellispeMode its place
/* testing parameters in draw function
   ellipse parameter: (x,y,w,h)
*/
  ellipseMode(RADIUS);
  fill(255);
  ellipse (20,20,30,30);

  ellipseMode(CENTER);
  fill("red");        //after i tried this i played with the idea that the
                      // two ellipses white and red mixed and the smaller
                      // ellispes following it are pink

  ellipse(20,20,30,30); // trying out code from p5js.org reference ellipseMode()
  fill('pink')

  ellipse( 60,60,30,30 ); // adding second ellipse to test x,y placement
  ellipse( 100,100,30,30 );
  /*attempting to create line of ellipses, they were cut off so i am assuming the default canvas
   size is too small, the position from 20,20 to 60,60 was just a random number but i wanted equal
   spacing so next went to 100,100 and was cut off so it must have a canvas of similar size
   TODO try this again after canvas lesson to see if i can continue the line of ellipses
   -- issue fixed by creating 400,400 canvas
  */
  ellipse( 140,140,30,30 );
  ellipse( 180,180,30,30 );
  ellipse( 220,220,30,30 );
  ellipse( 260,260,30,30 ); // continue line of ellipses

  ellipse( 220,260,30,30 ); //test to change direction

}

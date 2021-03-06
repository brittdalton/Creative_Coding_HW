function setup(){
createCanvas( windowWidth,900);
frameRate(30);                              //Frame rate for animation


}

var tree_branch="rgb(85, 47, 3)";             //Save time on freq used color

var x = mouseX;                               //Set variables
var y = mouseY;
var ix = width - mouseX;                      //Inverse of X
var iy = height - mouseY;                     //Inverse of Y



function draw(){
    background ( 'rgba(199, 109, 36, 0.91)' ); //background color

    line(mouseX, mouseY, pmouseX, pmouseY);     //Cursor creates line w/ variable length

    noCursor(); //remove cursor icon
    fill('rgb(241, 124, 164)');                 //Color of mouse x,y ellipses
    ellipse( mouseX,mouseY,60,33 );                 //Interactive mouse ellipses
    ellipse( mouseX/2,mouseY,60,70 );
    ellipse(mouseX*2,mouseY,60,90);





  push();                                     //sandbox creation for character

    translate(450,450);                        //alter center point of grid
    //translate(mouseX,mouseY);                        //character follows mouse


/*
  //sky
  push();

    fill('rgb(116, 181, 226)');
    stroke('rgb(116, 181, 226)');
    rect(-450,-450,windowWidth,300);

  pop();
  //End sky
*/


  //tree branch
 push();

    stroke(tree_branch);
    strokeWeight(20);
    line(-200,450,450,450);

    stroke(tree_branch);
    strokeWeight(20);
    line(-100,350,0,450);

    stroke(tree_branch);
    strokeWeight(40);
    line(300,-450,300,450);

  pop();
//End tree branch


  //Nest and Egg
  push();

    fill('rgb(230, 237, 237)');
    ellipse(56, 350, 125, 155);
    fill('rgb(215, 214, 27)');
    ellipse(56, 425, 355, 55);

  pop();
  //Nest and Egg


  //Body
  push();

    ellipseMode(CENTER);
    fill('rgb(10, 43, 71)');
    ellipse(56, 150, 225, 255);


  pop();
  //End body


  //Wings
  push();

    fill('rgb(28, 73, 106)');
    rect( 20, 20, 200, 200, 0, 90, 45, 150 );

  pop();
  //End wings

  //Head
  push();

    fill('rgb(10,43,71)');
    rect( -70, -60, 150, 175, 90 );

  //Beak
  push();

    fill('rgb(238, 222, 10)');
    triangle( -65, 0, -70, 30, -120, 10 );

  pop();
  //End beak

  //Eyes
  push();

    ellipseMode(CENTER);
    fill('rgb(0,0,0)');
    ellipse(-10, 0, 25, 25);
    fill('rgb(255,255,255)');
    ellipse(-12,2,5,5);

  pop();
  //End Eyes



  pop();
  //End head


  pop();
  //End character





}

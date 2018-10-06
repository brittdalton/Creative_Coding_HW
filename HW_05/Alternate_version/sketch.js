var aa = 150;
var bb = 20;
var cc = -60;
var dd = 0;
var ee = 30;
var ff = 10;
var gg = 0;
var hh = -6;



function setup(){     // setup funtion needs to be in the top of each sketch.js
createCanvas( windowWidth,windowHeight );        // and only needs to be added once
noCursor();                              //remove cursor icon


}



function draw(){

background ( 'rgba(199, 109, 36, 0.91)' ); //background color


//worm


fill('rgb(241, 124, 164)');                 //Color of mouse x,y ellipses
ellipse(mouseX,mouseY,20,10);               //top of worm
ellipse(mouseX +5,mouseY +5,20,10);        //moves ellipse over for body segment
ellipse(mouseX +10,mouseY +10,20,10);
ellipse(mouseX +15,mouseY +15,20,10);


push();                                     //sandbox creation for character

translate(450,450);                        //alter center point

//sky
push();
fill('rgb(116, 181, 226)');
stroke('rgb(116, 181, 226)');
rect(-450,-450,windowWidth,300);
pop();



push();                                 //tree branch

stroke('rgb(85, 47, 3)');
strokeWeight(20);
line(-200,450,windowWidth,450);

stroke('rgb(85, 47, 3)');
strokeWeight(20);
line(-100,350,0,450);

pop();
//End tree branch

                                      //Mother bird - character 1


push();                                       //Nest and Egg 1

fill('rgb(250, 250, 241)');
ellipse(56, 350, 125, 155);

fill('rgb(215, 214, 27)');
ellipse(56, 425, 355, 55);

pop();
//Nest and Egg


push();                                       //Body 1
translate(-20,50);

ellipseMode(CENTER);
fill('rgb(10, 43, 71)');
ellipse(56, 150, 225, 255);


pop();
//End body



push();                                       //Wings 1
translate(-20,50);

fill('rgb(28, 73, 106)');
rect( 20, 20, 200, 200, 0, 90, 45, 150 );

pop();
//End wings

push();                                       //Head 1
translate(-20,50);

fill('rgb(10,43,71)');
rect( -70, -60, 150, 175, 90 );

push();                                       //Beak 1
translate(-1,10);
rotate(radians(-6));

fill('rgb(238, 222, 10)');
triangle( -65, 0, -70, 30, -120, 10 );

pop();
//End beak


push();                                       //Eyes 1
translate(-15,20);

ellipseMode(CENTER);
fill('rgb(0,0,0)');
ellipse(-10, 0, 25, 25);
fill('rgb(255,255,255)');
ellipse(-12,2,5,5);

pop();
//End Eyes



pop();
//End head

                                       //baby bird 1 - 2nd Character



translate (150,350);
scale(0.25);

push();                                       //Body 2

ellipseMode(CENTER);
fill('rgb(10, 43, 90)');
ellipse(56, 150, 225, 255);


pop();
//End body



push();                                       //Wings 2

fill('rgb(28, 73, 106)');
rect( 20, 20, 200, 200, 0, 90, 45, 150 );

pop();
//End wings

push();                                       //Head 2

fill('rgb(10,43,90)');
rect( -70, -60, 150, 175, 90 );

push();                                       //Beak 2
fill('rgb(238, 222, 10)');
triangle( -65, 0, -70, 30, -120, 10 );

pop();
//End beak


push();                                       //Eyes 2

ellipseMode(CENTER);
fill('rgb(0,0,0)');
ellipse(-10, 0, 25, 25);
fill('rgb(255,255,255)');
ellipse(-12,-6,5,5);

pop();
//End Eyes



pop();
//End head


                                       //baby bird 2 - 3nd Character

push();

translate (150,100);
scale(1);

push();                                       //Body 3

ellipseMode(CENTER);
fill('rgb(110, 143, 204)');
ellipse(56, aa, 225, 255);


pop();
//End body



push();                                       //Wings 3

fill('rgb(30, 73, 100)');
rect( 20, bb, 200, 200, 0, 90, 45, 150 );

pop();
//End wings

push();                                       //Head 3

fill('rgb(112, 146, 204)');
rect( -70, cc, 150, 175, 90 );

push();                                       //Beak 3
fill('rgb(238, 222, 10)');
triangle( -65, dd, -70, ee, -120, ff );

pop();
//End beak


push();                                       //Eyes 3

ellipseMode(CENTER);
fill('rgb(0,0,0)');
ellipse(-10,gg, 25, 25);
fill('rgb(255,255,255)');
ellipse(-12,hh,5,5);

pop();
//End Eyes


pop();
//End head

aa = aa - 2;
bb = bb - 2;
cc = cc - 2;
dd = dd - 2;
ee = ee - 2;
ff = ff - 2;
gg = gg - 2;
hh = hh - 2;



pop();
//end sandbox for character 3

pop();
//End character
}


function mousePressed(){

background ( 'rgba(199, 109, 36, 0.91)' ); //background color refill on mouse click

}

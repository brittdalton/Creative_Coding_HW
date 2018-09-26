function setup(){     // setup funtion needs to be in the top of each sketch.js
createCanvas( 900,900 );        // and only needs to be added once


}



function draw(){

background ( 'rgba(199, 109, 36, 0.91)' ); //background color


push();                                     //sandbox creation for character

translate(450,450);                        //alter center point



push();                                   //sky

fill('rgb(116, 181, 226)');
stroke('rgb(116, 181, 226)');
rect(-450,-450,900,300);

pop();
//End sky

push();                                 //tree branch

stroke('rgb(85, 47, 3)');
strokeWeight(20);
line(-200,450,450,450);

stroke('rgb(85, 47, 3)');
strokeWeight(20);
line(-100,350,0,450);

pop();
//End tree branch


push();                                       //Nest and Egg

ellipse(56, 350, 125, 155);
fill('rgb(215, 214, 27)');
ellipse(56, 425, 355, 55);

pop();
//Nest and Egg

push();                                       //Body

ellipseMode(CENTER);
fill('rgb(10, 43, 71)');
ellipse(56, 150, 225, 255);


pop();
//End body



push();                                       //Wings

fill('rgb(28, 73, 106)');
rect( 20, 20, 200, 200, 0, 90, 45, 150 );

pop();
//End wings

push();                                       //Head

fill('rgb(10,43,71)');
rect( -70, -60, 150, 175, 90 );

push();                                       //Beak

fill('rgb(238, 222, 10)');
triangle( -65, 0, -70, 30, -120, 10 );

pop();
//End beak


push();                                       //Eyes

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

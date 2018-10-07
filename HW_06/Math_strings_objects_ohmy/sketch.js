/*jshint esversion: 6 */                                       //fix for error warnings
var r = 10;                                                    //define variables
var b = 0;
var g = 25;

var lines = ["THE INDIGO HAZE","OF THE ICY COLD FULL MOON", "ONLY IN WINTER"];    //define variables in array
// Color Haiku: https://colorhaiku.wordpress.com/2007/12/27/indigo-haze/

var para = 0;                                                   //define variable to reference first line in array

var snow = [];                                                 //empty array for snow
var gravity;                                                   //variable for gravity

function setup (){
    createCanvas (windowWidth, windowHeight);
    gravity = createVector(0,0.03);                             //creating gravity falling down
}

function draw(){


//background color maped to mouse

r = map (mouseX, windowWidth, windowHeight, 10, 200);       //maping variable r to window w/h and rgb values 10-200
b = map (mouseX, windowWidth, windowHeight, 0, 255);        //maping variable b to window w/h and rgb values 0-255
g = map (mouseY, windowWidth, windowHeight, 255, 0);        //maping variable g to window w/h and rgb values 255-0

background(r,g,b);                                       //expression of map on background, rgb vs rbg to get pinks/purples

noCursor();                                               //remove default cursor
fill('rgb(26, 5, 45)');                                   //color and shape for cursor
ellipse(mouseX,mouseY,25,25);

fill('rgb(249, 246, 240)');                                //text color
textSize(85);                                              //font size
text(lines[para],20,200);                                  //text: variables in array, starting point, location

snow.push (new Snowflake());                               //create new snowflake

for (var flake of snow) {                                       //conditions for snowflakes
    flake.update();                                       //reference to add velocity to position
    flake.render();                                       //reference to render snowflake
}



}

function mousePressed(){                                   //action when click mouse
    para = para + 1;                                       //cycle through words

    if (para == 3){                                        //reset to first word after haiku ends
        para = 0;
    }
}

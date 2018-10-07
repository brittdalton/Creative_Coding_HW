var r = 10;
var b = 0;
var g = 25;


function setup (){
    createCanvas (windowWidth, windowHeight);

}

function draw(){

//background color maped to mouse

r = map (mouseX, windowWidth, windowHeight, 10, 200);       //maping variable r to window w/h and rgb values 10-200
b = map (mouseX, windowWidth, windowHeight, 0, 255);        //maping variable b to window w/h and rgb values 0-255
g = map (mouseY, windowWidth, windowHeight, 255, 0);        //maping variable g to window w/h and rgb values 255-0

background(r,g,b);                                       //expression of map on background, rgb vs rbg to get pinks/purples

noCursor();
fill('rgb(26, 5, 45)');
rect(mouseX,mouseY,25,25);

}

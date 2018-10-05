

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    stroke('rgb(74, 244, 15)');                         //add outline color to change default to green
    fill('rgb(230, 241, 14)');                          //change fill to yellow
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {                               //creates change when mouse is clicked
    ball.scale_x = map(mouseX, 0, width, 0.5, 1);
    ball.scale_y = map(mouseY, 0, height, 0.5, 11);
}

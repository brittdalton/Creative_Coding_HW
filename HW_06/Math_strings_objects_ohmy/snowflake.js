/*jshint esversion: 6 */                                      //fix for error warnings
class Snowflake {

    constructor(){                               //function inside class to create snowflake
        let x = random(width);                   //add new snowflakes at random x pos
        let y = random(-100,-10);                  //add new snowflakes above the screen view
        this.pos = createVector(x,y);              //snow position
        this.vel = createVector(0,0);              //snow speed
        this.acc = createVector();             //snow acceleration
    }

    update(){                                   //add velocity to snowflake position
        this.acc = gravity;                      //accelleration is equal to gravity
        this.vel.add(this.acc);                  //add acceleration to velocity f=m*a
        this.pos.add(this.vel);
    }

    render() {
        stroke('rgb(243, 249, 241)');                //snowflakes color
        strokeWeight(5);                             //size
        point(this.pos.x, this.pos.y);               //point and position
    }

}

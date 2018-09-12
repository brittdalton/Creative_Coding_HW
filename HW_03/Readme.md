# Creative Coding I #
### Week 3 ###

Britt Dalton, 74199 section 50

[Hello World](https://brittdalton.github.io/Creative_Coding_HW/HW_03/Hello_world)

[Ellipse Practice](https://brittdalton.github.io/Creative_Coding_HW/HW_03/Hello_ellipse)

 #### Introduction ####
 Many artists learning to code begin with [processing software](https://processing.org),
 using a JavaScript library [p5.js](https://p5js.org) you can "draw" in a web browser.
 The basic features are familiar tools to create simiple designs; shapes, colors and
 composition.

 #### Sketching with p5.js ####
 To create in p5.js you will need to [download](https://p5js.org/download/) the library and
 set up your directories to work in. After getting set up, it is best to spend some time
 practicing [setup()](https://p5js.org/reference/#/p5/setup) and experimenting with a rendering option such as the [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) function. The [Draw()](https://p5js.org/reference/#/p5/draw) function is important to use because it executes lines
 of code contained inside it. The basic shapes, colors etc. described below will all be contained within the
 Draw() function.

###### Functions used to create "Hello World" and "Hello Ellipse": ######

|Functions | Code Example | More Info |
|---------- | -------------|-----------|
| Background() | `background(255, 204, 0);`| [Background Reference](https://p5js.org/reference/#/p5/background) |
| ellipse() | ` ellipse(56, 46, 55, 55);`| [Ellipse Reference](https://p5js.org/reference/#/p5/ellipse) |
| line()| ` line(30, 20, 85, 75);`|[Line Reference](https://p5js.org/reference/#/p5/line) |
| stroke() | `stroke(255, 204, 0);`|[Stroke Reference](https://p5js.org/reference/#/p5/stroke) |
| strokeWeight() | ` strokeWeight(1);`|[Stroke Weight Reference](https://p5js.org/reference/#/p5/strokeWeight) |
| fill() | ` fill(255, 204, 0); `| [Fill Reference](https://p5js.org/reference/#/p5/fill) |
| ellipseMode() | `ellipseMode(RADIUS); fill(255);ellipse(50, 50, 30, 30);`|  [Ellipse Mode Reference](https://p5js.org/reference/#/p5/ellipseMode) |


 #### Issues + Insights ####

:bulb: When learning to code, following along with a course and being provided code samples
 and lists of options to use can be invaluable in supporting development but in
 addition to provided information, the references written for specific languages contain
 extensive information to support learning and exploration as well as a place to
 look for updated materials or changes.

 [p5.js reference](https://p5js.org/reference/)

 :bulb: Hello World! This is a traditional first line of code written in any new language you learn.
 Credited to Brian Kernighan, the phrase is the first test of the output of your code.

 :zap: Learning to place shapes on your canvas can be a little frustrating, especially
 if you are unfamiliar with grids. The dimensions of your canvas will define the
 limits of your grid. For example, if you set a canvas size of 200 x 200 your shapes will
 fall within the parameters of 0-200 x-axsis and 0-200 y-axis grid.
 ![Canvas Grid](/HW_03/Grid_example.png)

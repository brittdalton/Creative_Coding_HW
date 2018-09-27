# Creative Coding I #
### Week 4 ###

Britt Dalton, 74199 section 50

[Little Blue Bird](https://brittdalton.github.io/Creative_Coding_HW/HW_04/)



 #### Introduction ####
 2 dimensional shapes can be used to create a composition in p5.js, setting up a canvas and
 defining the parameters you are working in is the first step. After laying out the
 technical requirements, traditional art practices and color theory can help
 make your design visually appealing.

 #### Sketching with p5.js ####
 To create in p5.js you will need to [download](https://p5js.org/download/) the library and
 set up your directories to work in. After getting set up, it is best to spend some time
 practicing [setup()](https://p5js.org/reference/#/p5/setup) and experimenting with a rendering option such as the [createCanvas()](https://p5js.org/reference/#/p5/createCanvas) function. The [Draw()](https://p5js.org/reference/#/p5/draw) function is important to use because it executes lines
 of code contained inside it. The basic shapes, colors etc. described below will all be contained within the
 Draw() function.
[Color Theme](https://color.adobe.com/explore/?filter=most-popular&time=month)
 [Adobe Color CC](https://color.adobe.com/create/color-wheel/)

###### Functions used to create "Hello World" and "Hello Ellipse": ######

|RGB Color | Code Example |
|---------- | -------------|
| Red | `rgb(255,0,0)`| 
| ellipse() | ` ellipse(56, 46, 55, 55);`|
| line()| ` line(30, 20, 85, 75);`|
| stroke() | `stroke(255, 204, 0);`|
| strokeWeight() | ` strokeWeight(1);`|
| fill() | ` fill(255, 204, 0); `|
| ellipseMode() | `ellipseMode(RADIUS); fill(255);ellipse(50, 50, 30, 30);`|


 #### Issues + Insights ####

:bulb: When learning to code, following along with a course and being provided code samples
 and lists of options to use can be invaluable in supporting development but in
 addition to provided information, the references written for specific languages contain
 extensive information to support learning and exploration as well as a place to
 look for updated materials or changes.

 [p5.js reference](https://p5js.org/reference/)

 :bulb: **Order of Operations** The order of elements is important to getting the
 outcome you desire. When using scale, translate and rotate, it is important they
 go in that order (as written: scale, translate, rotate).

 :zap: Learning to place shapes on your canvas can be a little frustrating, especially
 if you are unfamiliar with grids. The dimensions of your canvas will define the
 limits of your grid. For example, if you set a canvas size of 200 x 200 your shapes will
 fall within the parameters of 0-200 x-axsis and 0-200 y-axis grid.
 ![Canvas Grid](/HW_03/Grid_example.png)

 :bulb: If last week's issue (placing shapes on a grid) was difficult, this tip will help. [translate()](https://p5js.org/reference/#/p5/translate) will alter the center point of your grid.
 For example if you have created a canvas with dimensions of 200 x 200 'createCanvas( 200,200)' you can add 'translate(100,100)' to move the center point of the grid to the center point of your
 canvas. This will create a grid that you are familiar with from using grids in math.

![Translate Grid](/HW_04/Translate_grid_01.png)

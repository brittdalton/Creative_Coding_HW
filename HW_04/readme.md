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



###### Color Values in RGB: ######

|RGB Color | Code Example |
|---------- | -------------|
| Red | `rgb(255,0,0)`|
| Green | ` rgb(0,255,0)`|
| Blue | ` rgb(0,0,255)`|
| Black | `rgb(0,0,0)`|
| White | ` rgb(255,255,255)`|
| Grey | ` rgb(112,112,112) `|




 #### Issues + Insights ####

:bulb: Adobe Color CC has an interactive color wheel
that allows you to input desired colors and will show you colors that fit into your
desired colors. You can choose from analogous, monochromatic, triad, complementary,
compound, shades or a custom color.


![Color wheel](/HW_04/Color_wheel.png)

:bulb: If you are looking for colors that work well together, Adobe Color CC has
a list of color themes that can be used on any project and will provide color Code
info for CMYK, RGB, LAB, HSB and HEX. Click on any theme and select "edit a copy"
to see the codes.

 [Color Theme](https://color.adobe.com/explore/?filter=most-popular&time=month)


 :zap: Learning to place shapes on your canvas can be a little frustrating, especially
 if you are unfamiliar with grids. The dimensions of your canvas will define the
 limits of your grid. For example, if you set a canvas size of 200 x 200 your shapes will
 fall within the parameters of 0-200 x-axsis and 0-200 y-axis grid.
 ![Canvas Grid](/HW_03/Grid_example.png)

 :bulb: If last week's issue (placing shapes on a grid) was difficult, this tip will help. [translate()](https://p5js.org/reference/#/p5/translate) will alter the center point of your grid.
 For example if you have created a canvas with dimensions of 200 x 200 'createCanvas( 200,200)' you can add 'translate(100,100)' to move the center point of the grid to the center point of your
 canvas. This will create a grid that you are familiar with from using grids in math.

![Translate Grid](/HW_04/Translate_grid_01.png)

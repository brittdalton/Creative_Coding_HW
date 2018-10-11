# Creative Coding I #
### Week 5 ###

Britt Dalton, 74199 section 50

[Little Blue Bird](https://brittdalton.github.io/Creative_Coding_HW/HW_05/)

[Little Blue Bird **Revision**](https://brittdalton.github.io/Creative_Coding_HW/HW_05/Alternate_version) October 6, 2018

[Week 05 Practice : Bounce](https://brittdalton.github.io/Creative_Coding_HW/HW_05/Practice_motion)


 #### Introduction ####
 Characters and basic shapes can be given specific movements or assigned tasks such as replacing
 the cursor in order to create more interesting creations in p5.js . Creating points of interaction
 or assigning random movements can give your sketch more depth.

 #### Animation in p5.js ####
 The shapes and colors created in the draw function are not created once and displayed
 in browsers as it appears, they are actually drawn, redrawn and redrawn over and
 over again. The [' function draw() ']([p5.js reference](https://p5js.org/reference/)) is a
 loop that goes through commands in order and then begins again at the top line. In order
 to create an animation, you will simply change the sketch over time and use a frame
 rate that is high enough to create the illusion of movement in your design.

###### Functions used to create various animations: ######

|Functions | Code Example | More Info |
|---------- | -------------|-----------|
| noCursor() | ` noCursor(); `| [Info on cursor] (https://p5js.org/reference/) |
| mouseX, mouseY | ` ellipse(mouseX, mouseY, 55, 55); `| [Interactivity](https://p5js.org/learn/interactivity.html) |
| Interaction| ` Follow `|[Example](https://p5js.org/examples/interaction-follow-1.html) |
| Interaction | ` Reach `|[Example](https://p5js.org/examples/interaction-reach-1.html) |
| Motion | ` Bounce `|[Example](https://p5js.org/examples/motion-bounce.html) |
| Motion | ` Moving Line `| [Example](https://p5js.org/examples/motion-linear.html) |
| Motion | ` Changing Shapes `|  [Example](https://p5js.org/examples/motion-morph.html) |


 #### Issues + Insights ####

:bulb: **Variables** are a way to store data and recall them in your code. Variables may be
familiar to you from traditional math classes where letters are assigned a number value
X=3 | X+5=8. Variables in coding work the same way but can include more than just a numerical
value. When defining a variable in p5.js you must list the value you are representing (X=3)
"var x = 3" which means "the variable x is equal to 3".

 [More on variables in coding](https://launchschool.com/books/ruby/read/variables)

:zap: **Readable Code** The code you write is 'behind the scenes' but it needs to
be clear and easy to read by other people in order to facilitate cooperation and
making it easy for others to understand your work and your intentions.
Things that make your code easier to read:
tabs - setting the start point of your lines apart
space - leaving blank lines between sections just as you would in written compositions.
organization - keeping certain information together in the same place even though it may
work in another location will make it easier to read through and understand.

 :bulb: **Order of Operations** The order of elements is important to getting the
 outcome you desire. When using scale, translate and rotate, it is important they
 go in that order (as written: scale, translate, rotate).

 Order of operations is very important in writing variables using math as well.

 :zap: **Frame Rate** The default frame rate if not specifically defined is
 60 frames per second. Using frameRate(); in your setup function can slow down
 an animation that is going too fast for your liking.

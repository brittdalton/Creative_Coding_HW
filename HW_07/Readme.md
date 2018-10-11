# Creative Coding I #
### Week 7 ###

Britt Dalton, 74199 section 50

[ Sample Code ](https://brittdalton.github.io/Creative_Coding_HW/HW_07/Original)

[ Altered Code](https://brittdalton.github.io/Creative_Coding_HW/HW_07/Altered)

 #### Assignment ####
 This week's HW was to download provided sample code and change it to make it
 more interesting.

 #### Sample Code ####
 The sample code creates a sketch that draws ellipses. The ellipses are animated
 to move across the canvas. The background is drawn behind the ellipses so a
 trail of ellipses can be seen when the draw funtion loops around. The variables
 define the ellipses orginal location and allow for the speed of the animations.

 The draw function contains a pair of 'if' statements that keep the ellipse
 from moving beyond the x,y boundries.

 Mouse pressed creates a change in direction and velocity when you click the
 mouse.

#### Altered Code ####

In order to make the sketch more interesting to me, I first added colors.
The ellipses now have a green outline, which is all you can see as the line
of ellipses crosses the screen without interference. I added a yellow fill,
which can be seen in the leading ellipse and added a red backgound to give
the idea that the yellow dot is trailing through the red and creating a
green trail, adding a background color makes the trail appear more smooth because
you can no longer see a clear ellipse outline after it moves.

I also changed the speed of the animation because the mouse pressed only
worked when you could get it in just the right place and was a little frustrating
to do when it went faster, so i slowed it down. If you want to see the end pattern
of the animation it now takes longer but the interesting part of this sketch is
the interaction so I believe making that more accessable is prefered.

I also changed the size of the canvas to window width and window height because
I really do not like the disconnect of seeing something in a 'window' within a
'window'. I think the sketch should fill the canvas and that should be the
canvas defined by the user. Ideally it would also be responsive but I did
not include it in the alterations.

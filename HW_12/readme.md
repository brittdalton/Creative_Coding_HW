# Creative Coding I #
### Week 12 ###

Britt Dalton, 74199 section 50

[ Winter Haiku ](https://brittdalton.github.io/Creative_Coding_HW/HW_06/Math_strings_objects_ohmy)



 #### Introduction ####
In order to make your sketches more complex you will need to integrate math into your
animations and use equations to write/define variables. Making more complex sketches
gives you an increased amount of control over your designs.

 #### Math in p5.js ####
 Basic math in p5.js is simple and very similar to traditional calculations. Addition
 var up = 10+3, subtraction var down = 10-3, multiplication var slide = 10*3, and
 division var climb = 10/3.

###### Calculations in code: ######

|Functions | Code Example | More Info |
|---------- | -------------|-----------|
| abs() | `var y = abs(x);`| [Absolute Value](https://p5js.org/reference/#/p5/abs) |
| round() | ` var bx = round(map(mouseX, 0, 100, 0, 5));`| [Round Reference](https://p5js.org/reference/#/p5/round) |
| floor()| ` var bx = floor(map(mouseX, 0, 100, 0, 5));`|[Floor Reference](https://p5js.org/reference/#/p5/floor) |
| ceil() | `var bx = ceil(map(mouseX, 0, 100, 0, 5));`|[Ceil Reference](https://p5js.org/reference/#/p5/ceil) |
| sqrt() | ` var x2 = sqrt(x1);`|[Square root Reference](https://p5js.org/reference/#/p5/sqrt) |
| lerp() | ` var c = lerp(a, b, 0.2); `| [Lerp Reference](https://p5js.org/reference/#/p5/lerp) |
| Modulo  | `var buble = numerator % 3;`|  [Modulo %](https://p5js.org/reference/#/p5/ellipseMode) |


 #### Issues + Insights ####

:bulb: **Order of Operations**
        * Parenthesis
        * Increase ++
        * Decrease --
        * Exponents
        * Multiplication
        * Division
        * Modulo
        * Addition
        * Subtraction

 [p5.js reference](https://p5js.org/reference/)

 :bulb: **Increasing & Decreasing** Using ++ will increase the value by 1 in your code,
 using -- will decrease the value by 1 in your code.

 Example:
var open = 0;
var close = 100;

function draw() {
    background( 'blue' );


    open ++;
    close --;

 :zap: Dividing by zero in your equations or setting up a variable and using that
 variable in a way that will lead to dividing by zero will lead to problems with your
 code and the function will be compromised.

 [Dividing by zero : Khan Academy](https://www.khanacademy.org/math/algebra/introduction-to-algebra/division-by-zero/v/why-dividing-by-zero-is-undefined)

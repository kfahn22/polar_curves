# Polar Curves

This repository contains a collection of p5.js sketches that utilize polar curves.  I have also created a sketch to explore how changing a curves parameters affect its shape. You can play [here](https://github.com/kfahn22/shape_playground/blob/main/style.css).

The base code is from Dan Shiffman's [Heart Curve Coding Challenge](https://thecodingtrain.com/challenges/134-heart-curve).

## Chrysanthemum Curve

I am using the equation for a chrysanthemum curve from [Paul Bourke](http://paulbourke.net/geometry/chrysanthemum/).

`r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi`

The center uses the code from Dan Shiffman's [Phyllotaxis Coding challenge](https://thecodingtrain.com/challenges/30-phyllotaxis).

I am also using the P5.js [patgrad](https://github.com/antiboredom/p5.patgrad) libary to add a background gradient color to the flower.

![](assets/purple.png)

## Flower garden

In this sketch, I am using a Flower class to render multiple flowers and have adapted the "cannabis" curve to create the leaves. The formula for the cannabis curve is from [Mathworld](https://mathworld.wolfram.com/CannabisCurve.html).

`let r = this.lfsc * (1 + 7 / 10 * cos(4 * beta)) * (1 + 1 / 10 * cos(12 * beta)) * (5 / 10 + 0.06 * cos(40 * beta)) * (1 + sin(beta));`  
`let x = r * cos(beta);`  
`let y = -r * sin(beta);`

![](assets/chrysanthemum_garden.jpg)  
[p5 sketch](https://editor.p5js.org/kfahn/sketches/wnQDK8Qog)  
[Code](https://github.com/kfahn22/polar_curves/tree/main/chrystanthemum_garden)

## Ophiuride Curve

I am using the equation from [Wolfram Mathworld](https://mathworld.wolfram.com/Ophiuride.html). I am graphing 120 curves with a random rotation with varying scale and alpha.

`for (let theta = -170; theta < 170; theta += 1) {`  
`let r = ( 0.2 * sin(theta) -  1.5 * cos(theta) ) * tan(theta);`  
`let x = this.sc * r * cos(theta);`  
`let y = -this.sc * r * sin(theta);}`

![](assets/ophiuride1.jpg)
[p5 sketch](https://editor.p5js.org/kfahn/sketches/TflYfJiF3)


# Other Resources

I ran across this reference, which has the equations for the Batman logo, the Twitter logo and even a "bunny" curve!
[Other Curves](https://blog.wolframalpha.com/2013/07/18/even-more-formulas-for-everything-from-filled-algebraic-curves-to-the-twitter-bird-the-american-flag-chocolate-easter-bunnies-and-the-superman-solid/)  
[Wolfram Mathworld](https://mathworld.wolfram.com/topics/PlaneCurves.html)

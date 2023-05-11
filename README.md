# Polar Curves

 This repository contains a collection of p5.js sketches that utilize polar curves. 
 
 
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

I am using the equation from [Wolfram Mathworld](https://mathworld.wolfram.com/Ophiuride.html).  The curves are graphed from -170, 170 degrees;

`let r = ( 0.2 * sin(theta) -  1.5 * cos(theta) ) * tan(theta);`

![](assets/ophiuride1.jpg)
[p5 sketch](https://editor.p5js.org/kfahn/sketches/TflYfJiF3)

## Spherical Fan

I started with the equation for Seiffert's spherical curve from []().  However, it is not quite right, since I am using the normal trig functions instead of the Jacobian versions.  I am also only pushing a point to the array for theta % 8.  

`const x = this.r * sin(theta / pow(this.a, 2)) * cos(this.a * theta);`  
`const y = this.r * sin(theta / pow(this.a, 2)) * sin(this.a * theta);`  
`const z = this.r * cos(theta / pow(this.a, 2));`

![]()

## Butterfly Curve

I am using the equation for the butterfly curve from [Paul Bourke](http://paulbourke.net/geometry/butterfly/). You can also learn about the curve at [Wolfram Mathworld](https://mathworld.wolfram.com/ButterflyCurve.html).

![](assets/butterfly.png)

## "Cannabis" Curve

You can vary the look of the leaf by adjusting the parameters, as I have done for the garden sketch.

`let r  = 90 * (1 + 9/10 * cos(8 * a))*(1 + 1/10 * cos(24*a))*(9/10 + 1/10 * cos(200*a)) * (1 + sin(a));`  
`const x = r * cos(a);`  
`const y = r * sin(a);`

![](assets/cannabis.png)

# Other Resources

I ran across this reference, which has the equations for the Batman logo, the Twitter logo and even a "bunny" curve!
[Other Curves](https://blog.wolframalpha.com/2013/07/18/even-more-formulas-for-everything-from-filled-algebraic-curves-to-the-twitter-bird-the-american-flag-chocolate-easter-bunnies-and-the-superman-solid/)  
[Wolfram Mathworld](https://mathworld.wolfram.com/topics/PlaneCurves.html)
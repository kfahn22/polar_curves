// https://chat.openai.com

let radius = 200; // Set the radius of the sphere
let curvePoints = 100; // Set the number of points to plot on the curve
let angleIncrement = TWO_PI / curvePoints; // Calculate the angle increment between points

function setup() {
  createCanvas(400, 400, WEBGL); // Create a 3D canvas
}

function draw() {
  background(200); // Set the background color

  rotateY(frameCount * 0.01); // Rotate the sphere around the Y-axis

  stroke(255); // Set the stroke color to white
  noFill(); // Don't fill the shape

  beginShape(); // Start a new shape
  for (let i = 0; i < curvePoints; i++) {
    let t = map(i, 0, curvePoints, -PI, PI); // Map the index to a value between -PI and PI
    let x = radius * cos(t) / sqrt(1 + cos(t) * cos(t)); // Calculate the x-coordinate of the point on the sphere
    let y = radius * sin(t) / sqrt(1 + cos(t) * cos(t)); // Calculate the y-coordinate of the point on the sphere
    let z = radius * cos(t) * sin(t) / sqrt(1 + cos(t) * cos(t)); // Calculate the z-coordinate of the point on the sphere
    vertex(x, y, z); // Plot the point on the sphere
  }
  endShape(); // End the shape
}

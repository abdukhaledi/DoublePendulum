// Length of the rod
let length1 = 125;
let length2 = 125;

//mass of the pendulum
let mass1 = 20;
let mass2 = 20;

// angles of the pendulum
let angle1 = 0;
let angle2 = 0;

// angle changing by velocity
let angle1_velocity = 0;
let angle2_velocity = 0;

// gravity
let gravity = 1;


function setup() {
  createCanvas(600, 600); //
  
  angle1 = PI/2; // You can set the enetial value
  angle2 = PI/2; // You can set the initial value
}

function draw() {
  background(500);     // background of the canvas 
  stroke('red');           // color of the rod 
  strokeWeight(2);     // thickness of the rod
  translate(300, 250); //amount displace objects within the window
  
    // upper pendulum 
  let x1 = length1 * sin(angle1);
  let y1 = length1 * cos(angle1);
  
  line (0, 0, x1, y1);            // draws a line to the 1st pendulum
  fill('blue');                        // pendulum color
  ellipse(x1, y1, mass1, mass1)   // draws the pendulum
  
  // lower pendulum
  let x2 = x1 + length2 * sin(angle2); 
  let y2 = y1 + length2 * cos(angle2);
  
  line (x1, y1, x2, y2);          // draws a line to the 2nd pendulum
  fill('blue');                        // pendulum color
  ellipse(x2, y2, mass2, mass2)   // draws the pendulum
  
  // equation of motion for angle1
  let num1 = -gravity * (2 * mass1 + mass2) * sin(angle1);
  let num2 = -mass2 * gravity * sin(angle1 - 2 * angle2);
  let num3 = -2 * sin(angle1 - angle2) * mass2;
  let num4 = angle2_velocity * angle2_velocity * length2 + angle1_velocity * 
      angle1_velocity * length1 * cos(angle1 - angle2);
  let num5 = length1 * (2 * mass1 + mass2 - mass2 * cos(2 * angle1 - 2 *                      angle2));
  let angle1_acceleration = (num1 + num2 + num3 * num4) / num5;
  
  // equation of motion for angle2
  num1 = 2 * sin(angle1 - angle2);
  num2 = (angle1_velocity * angle1_velocity * length1 * (mass1 + mass2));
  num3 = gravity * (mass1 + mass2) * cos(angle1);
  num4 = angle2_velocity * angle2_velocity * length2 * mass2 * cos(angle1 -                angle2);
  num5 = length2 * (2 * mass1 + mass2 - mass2 * cos(2 * angle1 - 2 * angle2));
  let angle2_acceleration = (num1 * (num2 + num3 + num4)) / num5;
  
  
  // changing in velocity
  angle1_velocity += angle1_acceleration;
  angle2_velocity += angle2_acceleration;
  angle1 += angle1_velocity;
  angle2 += angle2_velocity;
}
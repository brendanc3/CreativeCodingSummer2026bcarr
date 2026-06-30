let hair
let can


function preload(){
  hair = loadImage('images/crazy-hair.png')
  can = loadImage('images/soda-can.png')
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  rectMode(CENTER);
}
function draw() {

  background(255);
  noStroke();
  //head
  fill(229, 218, 176);
  ellipse(300, 300, 500);

  //hair
  image(hair, 300, 90, 400, 200)

  //can
  image(can, 500, 500, 300, 300)

  //cheeks
  fill(255, 66, 82);
  ellipse(130, 320, 100);
  ellipse(470, 320, 100);

  //eyeballs
  fill(255, 255, 255);
  ellipse(200, 200, 125, 70);
  fill(0, 0, 0);
  ellipse(200, 200, 25);

  fill(255, 255, 255);
  ellipse(400, 200, 125, 70);
  fill(0, 0, 0);
  ellipse(400, 200, 25);

  //nose
  fill(247, 170, 229);
  triangle(260, 330, 300, 280, 340, 330);

  //mouth
  fill(255, 255, 255);
  ellipse(300, 425, 200, 120);

  //teeth
  fill(242, 238, 21);
  rect(260, 400, 35, 58);
  rect(320, 390, 35, 58);

  //cavities
  fill(0, 0, 0);
  ellipse(262, 385, 10);
  ellipse(324, 393, 7);
}

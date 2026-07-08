let hair
let can
let teeth

let hairBool = false
let dentalBool = false

function preload(){
  hair = loadImage('images/crazy-hair.png')
  can = loadImage('images/soda-can.png')
  teeth = loadImage('images/perfect-teeth.png')
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

  fill(0)
  textSize(20)
  text("click for dentist", 5, 20)
  text("h for hair transplant", 5, 50)
  text("r to reset", 5, 80)

  //hair
  // image(hair, 300, 90, 400, 200)
  if(hairBool == true){
    hairFix()
  }

  //can
  if(dentalBool == false){
    image(can, 500, 500, 300, 300)
  }

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
  if(dentalBool == false){
    ellipse(300, 425, 200, 120);
  }

  //teeth
  fill(242, 238, 21);
  if(dentalBool == false){
  rect(260, 400, 35, 58);
  rect(320, 390, 35, 58);
  }

  //cavities
  fill(0, 0, 0);
  ellipse(262, 385, 10);
  ellipse(324, 393, 7);

  //tooth fix
  if(dentalBool == true){
    teethFix()
  }
}

function hairFix(){
  image(hair, 300, 90, 400, 200)
}

function teethFix(){
  image(teeth, 300, 400, 200, 100)
}

function mousePressed(){
  if(mousePressed){
    dentalBool = true
  }
}

function keyPressed(){
  if(key === 'h'){
    hairBool = true
  }

  if(key === 'r'){
    dentalBool = false
    hairBool = false
  }
}






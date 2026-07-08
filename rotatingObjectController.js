let angle = 0;       // the object's own facing/rotation angle
let rotSpeed = 0;  // how fast it spins in place
let posX, posY;       // the object's position (starts at canvas center)
const thrustSpeed = 2.5;
let paused = false;
let trail = [];

let startBool = true
let gameBool = false
let deathBool = false
let winBool = false


let rockX = []
let rockY = []

let coinX = []
let coinY = []

let score = 0
let damage = 0
let damageCooldown = 0

let startButton
let retryButton


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  posX = width / 2;
  posY = height / 2;

  for(let i = 0; i < 10; i++){
    rockX.push(random(30, windowWidth - 30))
    rockY.push(random(30, windowHeight - 30))
  }

  for(let i = 0; i < 10; i++){
    coinX.push(random(30, windowWidth - 30))
    coinY.push(random(30, windowHeight - 30))
  }

  startButton = createButton('Start Game')
  startButton.mousePressed(gameStart)
  startButton.position(windowWidth/2, windowHeight/2)

  retryButton = createButton('Try Again')
  retryButton.mousePressed(gameStart)
  retryButton.position(windowWidth/2, windowHeight/2.5)
  retryButton.hide()
  
}

function draw() {

  // start screen
  if (startBool == true){
    background(0, 0, 255)
  }

  if(gameBool == true){
    gameplay()
  }

  // death screen
  if(deathBool == true){
    background(255, 0, 0)
    fill(17)
    textSize(50)
    text("You Lose!", windowWidth/2, windowHeight/2)
  }

  //win screen
  if(winBool == true){
    background(240, 233, 46)
    fill(17)
    textSize(50)
    text("You Win!!", windowWidth/1.5, windowHeight/1.5)
  }
}



function keyPressed() {
  if (key === ' ') {
    paused = !paused;
  }
}


function gameStart() {
  startButton.hide();
  retryButton.hide();

  startBool = false;
  deathBool = false;
  winBool = false;
  gameBool = true;

  // Reset player
  posX = width / 2;
  posY = height / 2;
  angle = 0;
  rotSpeed = 0;
  trail = [];

  // Reset score and damage
  score = 0;
  damage = 0;
  damageCooldown = 0;

  // Create new rocks and coins
  rockX = [];
  rockY = [];
  coinX = [];
  coinY = [];

  for (let i = 0; i < 10; i++) {
    rockX.push(random(30, width - 30));
    rockY.push(random(30, height - 30));
  }

  for (let i = 0; i < 10; i++) {
    coinX.push(random(30, width - 30));
    coinY.push(random(30, height - 30));
  }
}

function gameLoss(){
  retryButton.show()
  startBool = false
  deathBool = true 
  gameBool = false
  winBool = false
}

function gameWin(){
  retryButton.show()
  startBool = false
  deathBool = false
  gameBool = false
  winBool = true
}

function gameplay(){
   background(17);

  fill(255)
  textSize(20)
  text('Score:' + score, 10, windowHeight - 10)
  text('Damage:' + damage, 10, windowHeight - 35)

    // spin around its own center point
   if (!paused) {
    angle += rotSpeed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rotSpeed += 0.0008;
  }
  if (keyIsDown(LEFT_ARROW)) {
    rotSpeed -= 0.0008;
  }
  rotSpeed = constrain(rotSpeed, -0.15, 0.15);

    // arrow keys move the object along the direction it's currently facing
  if (keyIsDown(UP_ARROW)) {
    posX += thrustSpeed * cos(angle);
    posY += thrustSpeed * sin(angle);
    trail.push({ x: posX, y: posY });
  }
  if (keyIsDown(DOWN_ARROW)) {
    posX -= thrustSpeed * cos(angle);
    posY -= thrustSpeed * sin(angle);
    trail.push({ x: posX, y: posY });
  }
  if (trail.length > 200) trail.shift();

    // keep it on screen (wrap around edges)
  if (posX < 0) posX = width;
  if (posX > width) posX = 0;
  if (posY < 0) posY = height;
  if (posY > height) posY = 0;

    // faint trail of where it's traveled
  noFill();
  stroke(90, 160, 255, 80);
  strokeWeight(10);
  beginShape();
  for (const p of trail) vertex(p.x, p.y);
    endShape();

    // the object itself: spins around its own center, then moves along that facing angle
  push();
  translate(posX, posY);
  rotate(angle);
  fill(90, 200, 255);
  noStroke();
  triangle(16, 0, -12, 9, -12, -9);
    // small marker at its own center point (the point it rotates around)
  fill(255, 100, 100);
  circle(0, 0, 5);
  pop();

  fill(255)
  for(let i = 0; i < rockX.length; i++){
    ellipse(rockX[i], rockY[i], 50, 50);
    if (dist(posX, posY, rockX[i], rockY[i]) < 25 && damageCooldown == 0){
      print('Hit Rock!')
      damage ++
      damageCooldown = 30
    }
  }

  fill(240, 233, 46)
  for(let i = 0; i < coinX.length; i++){
    ellipse(coinX[i], coinY[i], 25, 25);
    if(dist(posX, posY, coinX[i], coinY[i]) < 15){
      score ++
      print(score)

      //remove the collected coin
      coinX.splice(i, 1);
      coinY.splice(i,1)
    }
  }

  if(damageCooldown > 0) {
    damageCooldown--;
  }

  if(damage == 5){
    gameLoss()
  }

  if(score == 10){
    gameWin()
  }

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


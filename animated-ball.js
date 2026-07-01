let xPos
let yPos

let ballDiameter = 100

let xSpeed = 2
let ySpeed = 2

function preload(){
	furby = loadImage('images/furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	imageMode(CENTER)
}

//ball styling
function draw(){
	background(27, 194, 227)

	fill(0)
	textSize(30)
	text("A Bouncing Furby!!", 50, 100)

	fill(111, 201, 68)
	// ellipse(xPos, yPos, ballDiameter, ballDiameter)
	image(furby, xPos, yPos, ballDiameter, ballDiameter)

	//move the ball
	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	if(xPos >= windowWidth - ballDiameter/2 || xPos <= ballDiameter/2){
		//reverse x speed
		xSpeed = xSpeed * -1
	}

	if(yPos >= windowHeight - ballDiameter/2 || yPos <= ballDiameter/2){
		//reverse y speed
		ySpeed = ySpeed * -1
	}
}
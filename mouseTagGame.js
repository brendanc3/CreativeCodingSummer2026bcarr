let xPos
let yPos

let ballDiameter = 100

let xSpeed = 2
let ySpeed = 2

let score = 0

let mouseDist

let startBool = true
let winBool = false

function preload(){
	furby = loadImage('images/furby.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	xPos = windowWidth/2
	yPos = windowHeight/2
	imageMode(CENTER)
}

function draw(){

	if(startBool == true){
		startGame()
	}	

	if(winBool == true){
		winGame()
	}
	
}



function startGame(){
	background(0)

	fill(255)
	textSize(40)
	text('Tag the Furby! Your socore is ' + score + ' points!!', 20, 100)

	image(furby, xPos, yPos, 30, 30)

	//calculating the distance between mouse and furby
	mouseDist = dist(mouseX, mouseY, xPos, yPos)


	//move the furby
	xPos = xPos + xSpeed
	yPos = yPos + ySpeed

	//reverse the direction of the furby when it hits an edge
	if(xPos >= windowWidth - 15 || xPos <= 15){
		//reverse x speed
		xSpeed = xSpeed * -1
	}

	if(yPos >= windowHeight - 15 || yPos <= 15){
		//reverse y speed
		ySpeed = ySpeed * -1
	}

	//game mechanics...check and see if we've tagged the furby, if so do stuff
	if(mouseDist < 15){
		score ++
		xPos = random(16, windowWidth, - 16)
		yPos = random(16, windowHeight - 16)

		xSpeed = xSpeed * 1.1
		ySpeed = ySpeed * 1.1

	}

	//checking the score, if it reaches a certain value trigger the win screen
	if(score == 5){
		winBool = true
		startBool = false
	}
}


function winGame(){
	background(0, 0, 255)
	fill(255)
	textSize(40)
	text('You Win!!', windowWidth/2, 50)
}









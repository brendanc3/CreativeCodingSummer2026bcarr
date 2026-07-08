let lineBrushBool = false
let ellipseBrushBool = false

function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
}

function draw(){
	textSize(20)
	text("press l for line", 10, 20)
	text("press e for ellipse", 10, 50)

	if(lineBrushBool == true){

		lineBrush()
	}

	if(ellipseBrushBool == true){
		ellipseBrush()
	}
}

function lineBrush(){
	stroke(random(255), random(255), random(255))
	strokeWeight(5)
	if(mouseIsPressed){
		line(pmouseX, pmouseY, mouseX, mouseY)
	}
}

function ellipseBrush(){
	if(mouseIsPressed){
		fill(random(255), random(255), random(255))
		ellipse(mouseX, mouseY, 20, 20)
	}
}

function keyPressed(){
	if(key === 'l'){
		lineBrushBool = true
		ellipseBrushBool = false
	}

	if (key === 'e'){
		lineBrushBool = false
		ellipseBrushBool = true
	}

	if(key === 'b'){
		lineBrushBool = true
		ellipseBrushBool = true
	}

	if(key === 'o'){
		lineBrushBool = false
		ellipseBrushBool = false
	}

	if (key ==='c'){
		lineBrushBool = false
		ellipseBrushBool = false
		background(255)
	}

	if(key ==='s'){
		save('myDrawing.jpg')
	}
}



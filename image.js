//furby variable
let furby



function preload(){
	furby = loadImage('images/furby.png')
}



function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	background(100, 200, 50)

}


function draw(){
	

	if(mouseIsPressed == true){
		background(0, 0, 255)

	}else{
		background(100, 200, 50)
	}

	textSize(60)
	text('A Furby!!!', 200, 200)
	// if(keyIsPressed == true){
	// 	background(0, 0, 255)

	// }else{
	// 	background(100, 200, 50)
	// }

	image(furby, windowWidth/2, windowHeight/2, 100, 100)

}



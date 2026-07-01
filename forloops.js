let furby


function preload(){
	furby = loadImage('images/furby.png')
}



function setup(){
	createCanvas(windowWidth, windowHeight)
	
}


function draw(){
	// background(0, 0, 255)

for(let i = 0; i < 100; i++){
		image(furby, random(windowWidth), random(windowHeight), 20, 20)
	}

	// for(let i = 0; i < windowWidth; i = i+10){
	// 	line(i, 0, i, windowHeight)
		
	// }

	// for(let i=0; i < windowHeight; i = i+10){
	// 	line(0, i, windowWidth, i)
	// }

	noStroke()
	fill(0, 0, 255, 100)
	ellipse(mouseX, mouseY, 100, 100)



}
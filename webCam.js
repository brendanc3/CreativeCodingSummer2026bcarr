

let capture

function setup(){
createCanvas(windowWidth, windowHeight)

capture = createCapture(VIDEO)
capture.size( 640,480 )
capture.hide()
imageMode(CENTER)
}


function draw(){
	background(0)
	image(capture,  mouseX, mouseY, mouseX, mouseY )
	filter(BLUR, 3)
}
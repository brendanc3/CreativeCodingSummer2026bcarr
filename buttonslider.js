

let button
let canvas

let rSlider
let gSlider
let bSlider

let moveSlider

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0, 0)
	canvas.style('z-index', '-1')

	rSlider = createSlider(0, 255, 0)
	rSlider.position(0,10)
	gSlider = createSlider(0, 255, 0)
	gSlider.position(0, 50)
	bSlider = createSlider(0, 255, 0)
	bSlider.position(0, 100)

	rSlider.hide()
	gSlider.hide()
	bSlider.hide()

	button = createButton("Mix the background")
	button.mousePressed(colorMixer)
	//button.position(100, 20)

	moveSlider = createSlider(0, windowWidth, 0)
	background(0)
}


function colorMixer (){
	print("Color Mixer!")
	rSlider.show()
	gSlider.show()
	bSlider.show()
}


function draw(){
	background(rSlider.value(), gSlider.value(), bSlider.value())

	fill(255)
	text("red:" + rSlider.value(), 400, 10)

	ellipse(moveSlider.value(), windowHeight/2, moveSlider.value(), moveSlider.value())


}
let canvas

let randoButton

let randoText = 0

let randoBool = false

let randImage = 0
let textArray = ['Dog', '🐙', 'Cat', 'Alligator','😸', '🐼']

let imgs = []
let myImages = ['0.jpg', '1.jpg', '2.jpg', 'tiger.png']

function preload(){
	// for(i = 0; i < 3; i++){
	// 	imgs[i] = loadImage('images/' + i + '.jpg')
	// }

	for(let i = 0; i< myImages.length; i++){
		imgs[i] = loadImage('images/' + myImages[i])
	}

	print(imgs)
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0, 0)
	canvas.style('z-index', '-1')

	randoButton = createButton('Random Image and Text')
	randoButton.mousePressed(randImageText)
	randoButton.position(30, 50)

}

function randImageText(){
	randoBool = true
	randoText = int(random(textArray.length))
	randImage = int(random(imgs.length))
}

function draw(){
	background(255)

if(randoBool == true){
		image(imgs[randImage], windowWidth/2, windowHeight/2, 300, 300)
		textSize(200)
		text(textArray[randoText], 400, 300)
	}
}
let squareNums = [25, 36, 49, 64, 81, 100]


function setup(){
	createCanvas(windowWidth, windowHeight)

	print(squareNums[4])

	for (let i = 0; i < squareNums.length; i++){
		let posX = random(100, windowWidth - 100)
		let posY = random(100, windowHeight - 100)

		fill(244, 66, 200)
		ellipse(posX, posY, squareNums[i], squareNums[i])

		fill(0)
		textSize(20)
		text(squareNums[i], posX, posY)

	}


}


function draw(){


}
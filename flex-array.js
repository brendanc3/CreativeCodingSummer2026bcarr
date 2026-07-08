let furby

let furbyX = []
let furbyY = []

function preload(){
	furby = loadImage('images/furby.png')
}


function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)

	for(let i =0; i < 10; i++){
		furbyX.push(random(30, windowWidth - 30))
		furbyY.push(random(30, windowHeight - 30))
	}


}


function draw(){
	background(150, 40, 100)

	for(let i = 0; i < furbyX.length; i++){
		image(furby, furbyX[i], furbyY[i], 60, 60)

		if(dist(mouseX, mouseY, furbyX[i], furbyY[i]) < 30 && mouseIsPressed){
			furbyX.splice(i, 1)
			furbyY.splice(i, 1)
		}
	}

}

function mouseClicked(){
	// furbyX.push(mouseX)
	// furbyY.push(mouseY)
}


function keyPressed(){
	if(key === 'x'){
		furbyX.splice(furbyX.length -1, 1)
		furbyY.splice(furbyY.length -1, 1)

	}

	if(key === 'a'){
		furbyX.push(mouseX)
	 	furbyY.push(mouseY)
	}
}








// code from class

function setup() {
	// create a place to draw
	createCanvas(640, 360);

}

function draw() {
	// clear the background
	background(50);

	// draw rect
	fill(0);
	rect(50, 50, 200, 300);

	//draw x

	stroke(255, 0, 0);
	strokeWeight(30);

	if (mouseX > 250) {
		mouseX = 250;
	}
	if (mouseX < 50) {
		mouseX = 50;
	}
	if (mouseY < 50) {
		mouseY = 50;
	}
	if (mouseY > 350) {
		mouseY = 350;
	}
	line(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50);
	line(mouseX - 50, mouseY + 50, mouseX + 50, mouseY - 50);

}

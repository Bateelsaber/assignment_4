function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	background(50, 0, 0);
	if (mouseIsPressed) {
		fill(255);
		ellipse(position, position, 50, 50);
		ellipse(mouseX, mouseY, 50, 50);
		fill(0, 100, 250);
		ellipse(position, position, 30, 30);
		ellipse(mouseX, mouseY, 30, 30);

	} else {

		fill(255);
		ellipse(mouseX, mouseY, 50, 50);
		fill(0, 100, 250);
		ellipse(mouseX, mouseY, 30, 30);
	}
}

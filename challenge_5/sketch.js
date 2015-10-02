function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	background(50, 0, 0);
	if (mouseIsPressed) {
		//draw line
		stroke(255);
		strokeWeight(8);
		line(100, 100, mouseX, mouseY);
		// draw white circles
		noStroke();
		fill(255);
		ellipse(100, 100, 50, 50);
		ellipse(mouseX, mouseY, 50, 50);
		//draw blue circles
		fill(0, 100, 250);
		ellipse(100, 100, 30, 30);
		ellipse(mouseX, mouseY, 30, 30);


	} else {
		// reoeat drawing white and blue circles
		fill(255);
		ellipse(mouseX, mouseY, 50, 50);
		fill(0, 100, 250);
		ellipse(mouseX, mouseY, 30, 30);
	}
}

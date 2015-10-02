var a = 0;
var b = 0;

function setup() {
	createCanvas(640, 480);

}

function draw() {
	background(50, 0, 0);
	ellipse(mouseX, mouseY, 70, 70);
	fill(0, 100, 250);
	noStroke();
	ellipse(mouseX, mouseY, 40, 40);
	strokeWeight(10);
	if (!mouseIsPressed) {
		a = mouseX;
		b = mouseY;
	} else {
		fill(0, 100, 250);
		stroke(255);

		line(a, b, mouseX, mouseY);

	}
	if (mouseIsPressed) {
		fill(0, 100, 250);
		stroke(255);
		ellipse(a, b, 50, 50);
		ellipse(mouseX, mouseY, 50, 50);
	}
}

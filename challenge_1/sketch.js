function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(100, 200, 255);
	// draw rectangle
	fill(50, 200, 90);
	rect(0, 210, 640, 350);
	// draw flowers
	for (var i = 0; i < 40; i++) {
		drawTarget(random(10, 630), random(140, 340), 40);
	}

	function drawTarget(x, y, size) {
		// draw stem
		fill(0, 150, 20);
		rect(x - 1.5, y, 5, 90);
		// back green circle
		fill(0, 195, 0, 90);
		ellipse(x, y, size - 30, size - 30);

		// outside ring
		fill(255, 255, 255, 88);
		ellipse(x, y, size, size);

		// middle ring
		fill(255, 255, 255, 88);
		ellipse(x, y, size - 10, size - 10);

		// inside ring
		fill(255, 255, 255, 88);
		ellipse(x, y, size - 20, size - 20);

		// smallest insid ring
		fill(255, 255, 255, 88);
		ellipse(x, y, size - 40, size - 40);
	}
}

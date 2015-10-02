var xPosition = [];
var yPosition = [];

function setup() {
	createCanvas(640, 480);
	noStroke();
	for (var i = 0; i < 10; i++) {
		xPosition[i] = random(0, 640);
		yPosition[i] = random(0, 480);


	}
}

function draw() {
	background(150, 0, 0);

	for (var i = 0; i < 10; i++) {
		xPosition[i] = xPosition[i] + random(-4, 4);
		yPosition[i] = yPosition[i] + random(-4, 4);
		fill(0, 255, 255);
		ellipse(xPosition[i] + 240, yPosition[i] - 130, 5, 5);

		ellipse(xPosition[i] - 90, yPosition[i] + 180,
			12, 12);

		ellipse(xPosition[i], yPosition[i], 25, 25);
	}
}

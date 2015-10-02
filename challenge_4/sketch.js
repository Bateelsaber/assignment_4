var xPosition = [];
var yPosition = [];
var BallSize = [];

function setup() {
	createCanvas(640, 480);
	noStroke();
	for (var i = 0; i < 20; i++) {
		xPosition[i] = random(0, 640);
		yPosition[i] = random(0, 480);
		BallSize[i] = random(30);


	}
}

function draw() {
	background(150, 0, 0);

	for (var i = 0; i < 20; i++) {
		xPosition[i] = xPosition[i] + random(-4, 4);
		yPosition[i] = yPosition[i] + random(-4, 4);

		fill(0, 255, 255);
		ellipse(xPosition[i], yPosition[i], BallSize[i], BallSize[i]);
	}
}

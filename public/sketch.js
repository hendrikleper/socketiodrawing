let socket
let color = '#000'
let strokeWidth = 4
let cv
var splatter = 10;

function setup() {
	// Creating canvas
	cv = createCanvas(windowWidth, windowHeight-120)
	//cv = createCanvas(1000, 700)
	centerCanvas()
	cv.background(255, 255, 255)

	// Start the socket connection
	socket = io.connect('http://localhost:3000')
	//socket = io.connect('http://172.18.107.121:3000')

	// Callback function
	socket.on('mouse', data => {
		fill(data.color)
		noStroke();
		strokeWeight(data.strokeWidth)
		//line(data.x, data.y, data.px, data.py)
		for (let i = 1; i < 50; i++) {
      splatter = random(20);
      var x = random(-splatter, splatter);
      var y = random(-splatter, splatter);
      var s = random(1, 5);
      ellipse(x + data.x, y + data.y, s, s);
    }
	})

	// Getting our buttons and the holder through the p5.js dom
	const color_picker = select('#pickcolor')
	const color_btn = select('#color-btn')
	const color_holder = select('#color-holder')

	const stroke_width_picker = select('#stroke-width-picker')
	const stroke_btn = select('#stroke-btn')

	// Adding a mousePressed listener to the button
	color_btn.mousePressed(() => {
		// Checking if the input is a valid hex color
		if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color_picker.value())) {
			color = color_picker.value()
			color_holder.style('background-color', color)
		} else {
			console.log('Enter a valid hex value')
		}
	})

	// Adding a mousePressed listener to the button
	stroke_btn.mousePressed(() => {
		const width = parseInt(stroke_width_picker.value())
		if (width > 0) strokeWidth = width
	})
}

function windowResized() {
	centerCanvas()
	cv.resizeCanvas(windowWidth / 2, windowHeight / 2, false)
	//cv.resizeCanvas(1000, 700, false)
}


function centerCanvas() {
	const x = (windowWidth - width) / 2
	const y = (windowHeight - height) / 2
	cv.position(x, y)
}


function mouseDragged() {
	// Draw
	fill(color);
	noStroke();
	strokeWeight(strokeWidth);
	//line(mouseX, mouseY, pmouseX, pmouseY)

    for (let i = 1; i < 50; i++) {
      splatter = random(20);
      var x = random(-splatter, splatter);
      var y = random(-splatter, splatter);
      var s = random(1, 5);
      ellipse(x + mouseX, y + mouseY, s, s);
    }

	// Send the mouse coordinates
	sendmouse(mouseX, mouseY, pmouseX, pmouseY)
}

// Sending data to the socket
function sendmouse(x, y, pX, pY) {
	const data = {
		x: x,
		y: y,
		px: pX,
		py: pY,
		color: color,
		strokeWidth: strokeWidth,
	}

	socket.emit('mouse', data)
}

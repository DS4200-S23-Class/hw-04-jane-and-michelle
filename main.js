
// create a function that displays the coordinate of the point clicked
function pointClicked(point){
	let clickedPt = document.getElementById(point);
	clickedPt.classList.toggle("ptStyle");
	let newText = "Last Point Clicked: " + point;
	document.getElementById("selected-pt").innerHTML = newText;
}

// add event handler to points using anonymous function calling
document.getElementById("(1,2)").addEventListener("click", () => {pointClicked("(1,2)")});
document.getElementById("(2,4)").addEventListener("click", () => {pointClicked("(2,4)")});
document.getElementById("(6,2)").addEventListener("click", () => {pointClicked("(6,2)")});
document.getElementById("(9,9)").addEventListener("click", () => {pointClicked("(9,9)")});


// set x value for coordinate once selected value from options
function setXValue() {
	let x_coord = document.getElementById("x_coord").value;
}

// set y value for coordinate once selected value from options
function setYValue() {
	let y_coord = document.getElementById("y_coord").value;
}

// add a function to add a point to the graph when submit button is clicked
function addPoint(subButton){
	
	// set the x and y coordinate values for new point
	let x_coord = document.getElementById('x_coord').value;
	let y_coord = document.getElementById('y_coord').value;

	// get the element svg frame by id frame
	let svgFrame = document.getElementById("frame");

	// set values for x and y on the grid
	let xValue = x_coord * 50;
	let yValue = y_coord * 50;

	// set element id
	let elementID = "(" + x_coord + "," + y_coord + ")";
	
	// create a new svg
	let newSvg = document.createElementNS('http://www.w3.org/2000/svg', "svg");

	// create a new circle and set attributes for the new circle
	let newCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	newCircle.setAttribute("id", elementID);
	newCircle.setAttribute('cx', xValue);
	newCircle.setAttribute("cy", yValue);
	newCircle.setAttribute("r", 10);

	// set x coordinate for text location
	let textXCoord = xValue + 10;

	// create a new text element and set attributes for the new text element
	let newText = document.createElement("text");
	newText.setAttribute("x", textXCoord);
	newText.setAttribute("y", yValue);
	newText.innerHTML = elementID;

	// append new circle and new text elements to the new created svg
	newSvg.appendChild(newCircle);
	newSvg.appendChild(newText);

	// append new created svg to svg frame
	svgFrame.appendChild(newSvg);

	// add event handler to new point using anonymous function calling
	document.getElementById(elementID).addEventListener("click", () => {pointClicked(elementID)});
}

// add event handler to submit button using anonymous function call
document.getElementById('subButton').addEventListener("click", () => {addPoint()})


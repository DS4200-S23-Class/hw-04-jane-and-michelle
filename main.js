// create a function that displays the coordinate of the point clicked
// takes in point parameter which is the id of the point
function pointClicked(point){
	// variable to store the point
	let clickedPt = document.getElementById(point);

	// give toggle function to the point
	clickedPt.classList.toggle("ptStyle");

	// variable to store text that tells user the last point clicked
	let newText = "Last Point Clicked: " + point;

	// assign the variable to the id 
	document.getElementById("selected-pt").innerHTML = newText;
}

// add event handler - looping/iterating through list of points and use anonymous function to execute pointClicked
let pts = document.getElementsByTagName("circle");
for (let idx = 0; idx < pts.length; idx++){
    pts[idx].addEventListener("click", () => {pointClicked(pts[idx].id)});
}

// create a function to add a point to the graph when submit button is clicked
function addPoint(){
	
	// set the x and y coordinate values for new point
	let x_coord = document.getElementById("x_coord").value;
	let y_coord = document.getElementById("y_coord").value;

	// get the element svg frame by id frame
	let svgFrame = document.getElementById("frame");

	// set values for x and y on the grid
	let xValue = x_coord * 50;
	let yValue = 500 - (y_coord * 50);
	
	// set element id
	let elementID = "(" + x_coord + "," + y_coord + ")";

	// create a new svg
	let newSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

	// create a new circle and set attributes for the new circle
	let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	newCircle.setAttribute("id", elementID);
	newCircle.setAttribute("cx", xValue);
	newCircle.setAttribute("cy", yValue);
	newCircle.setAttribute("r", 10);

	// set x and y coordinates for text location
	let textXCoord = xValue + 10;
	let textYCoord = yValue - 5;

	// create a new text element and set attributes for the new text element
	let newText = document.createElementNS("http://www.w3.org/2000/svg", "text");
	newText.setAttribute("x", textXCoord);
	newText.setAttribute("y", textYCoord);
	newText.innerHTML = elementID;

	// append new circle and new text elements to the new created svg
	newSvg.appendChild(newCircle);
	newSvg.appendChild(newText);

	// append new created svg to svg frame
	svgFrame.appendChild(newSvg);

	// add event handler to new point using anonymous function - toggle for new point
	newCircle.addEventListener("click", () => {pointClicked(elementID)});
}

// add event handler to submit button in order to execute the addPoint function
document.getElementById("subButton").addEventListener("click", addPoint);


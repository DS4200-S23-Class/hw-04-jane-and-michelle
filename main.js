


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
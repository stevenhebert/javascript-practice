/**
 *  colorChange when cursor over
 */
function fontChangeColorMouseOver() {
	document.getElementById("changeColor").style.color = "White";
}

/**
 * colorChange when cursor leaves
 */
function fontChangeColorMouseOut() {
	document.getElementById("changeColor").style.color = "Black";
}

/**
 * fontChange on click
 */
function fontChangeFamilyDoubleClick() {
	var fontFamily = ["Georgia", "Helvetica", "Palatino Linotype", "Monaco"];
	var num = Math.floor(Math.random() * 4);
	document.getElementById("fontChange").style.fontFamily = fontFamily[num];
}

/**
 * pc on click
 */
function mouseEnter() {
	document.getElementById("peace").innerHTML = "hover over here";
	document.getElementById("peace").src = "images/win.jpg";
}

function mouseOut() {
	document.getElementById("peace").innerHTML = "---";
	document.getElementById("peace").src = "images/non.jpg";
}



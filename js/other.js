/**
 *  colorChange when cursor over
 **/
function fontChangeColorMouseOver() {
	document.getElementById("changeColor").style.color = "White";
}

/**
 * colorChange when cursor leaves
 **/
function fontChangeColorMouseOut() {
	document.getElementById("changeColor").style.color = "Black";
}

/**
 * fontChange on double click
 **/
function fontChangeFamilyDoubleClick() {
	var fontFamily = ["Georgia", "Helvetica", "Palatino Linotype", "Monaco"];
	var num = Math.floor(Math.random() * 4);
	document.getElementById("fontChange").style.fontFamily = fontFamily[num];
}

/**
 *
 **/
function changeImage() {
	document.getElementById('bliss').src="images/not.jpg";
}
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
	document.getElementById('imageChange').src = "images/not.jpg";
}


function unchangeImage() {
	document.getElementById('imageChange').src = "images/bliss.jpg";
}

/**
// data that lives in an object
var myCat = {
	"name": "meowsAlot",
	"species": "cat",
	"favFood": "tuna"
}

// myCat.name
// myCat.species
// myCat.favFood


// data that lives in an array
var myFavColors = ["blue", "green", "purple"];

// myFavColors[1]
// returns green


// array of objects
var thePets = [
	{
		"name": "meowsAlot",
		"species": "cat",
		"favFood": "tuna"
	},
	{
		"name": "meowsAlot",
		"species": "cat",
		"favFood": "tuna"
	}
]

// thePets.favFood[1]
// object.property
// returns carrots

**/
var animalContainer = document.getElementById("animal-info");
var button = document.getElementsById("btn")

btn.addEventListener("click", function() {

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
renderHTML(ourData);

	};
	ourRequest.send;
});

function renderHTML(data){
	var htmlstring = "this is a test"
animalContainer.insertAdjacentHTML('beforeend', 'htmlstring')
}

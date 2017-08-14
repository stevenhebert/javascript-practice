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
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementsById("btn");

btn.addEventListener("click", function() {

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
	pageCounter++;
});

function renderHTML(data) {
	var htmlString = "";

	for(i = 0, i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

		for(ii = 0, ii < data[i].food.likes.length; ii++) {
			if(ii == 0) {
				htmlString += data[i].food.likes.[ii];
			} else {
				htmlString += " and "
				data[i].food.likes.[ii];
			}
		}

		htmlString += ' and dislikes ';

		for(ii = 0, ii < data[i].food.dislikes.length; ii++) {
			if(ii == 0) {
				htmlString += data[i].food.dislikes.[ii];
			} else {
				htmlString += " and "
				data[i].food.dislikes.[ii];
			}
		}

		htmlString += '.<p/>';
	}
	animalContainer.insertAdjacentHTML('beforeend', 'htmlString');
}

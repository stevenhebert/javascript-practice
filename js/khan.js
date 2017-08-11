//find and store the element we want to listen to events on
////what is document
var clickerButton = document.getElementById("clicker");

//define the function that will respond to the event
//THIS IS THE CALLBACK FN
var onButtonClick = function() { clickerButton.textContent ="thanks for clicking";};

//add listener for the element and function
// call var made above.state what to do when("event", happens)
clickerButton.addEventListener("click", onButtonClick);
//if want to call when page loads, simply add: "()";
// fn() CALLS a fn, fn w/o () just REFERS to a fn
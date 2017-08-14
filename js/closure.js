// a closure is function that has reference to a private variable
// instantiation is a process of taking a class and creating an object from it that you can use in your program


/////////////////////////////////////////////////////


function person(name) {
	this.name = name;
}
// returns undefined

var me = new person("steven");
// returns undefined

me
//returns "person {name: steven}"

me.name
//returns "steven"
// the variable "name" is an attribute of the object


/////////////////////////////////////////////////////


function person(name) {
	// this variable only exists in the scope of this function (private variable). after function is executed will return undefined
	var _name = name;
}
// returns undefined

var me = new person("steven");
// returns undefined

me
//returns "person {}"

me._name
//returns undefined
// variable "name" is private (out of scope)


/////////////////////////////////////////////////////


function person(paraName) {
	var _name = paraName;

	// inner function uses the outer function as a reference. _name is now accessible even after the inner function has executed. is NOT garbage collected.
	this.getName = function() {
		return _name;
	};
}
// returns undefined

var me = new person("steven");
// returns undefined

me
//returns "person {}"

me.getName()
//returns "steven"
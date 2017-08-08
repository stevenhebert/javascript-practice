/**
 * for registration form
 *
 */

function FormValidation() {

	var fn = document.getElementById('profileUserName').value;
	/* username not blank*/
	if(fn == "") {
		document.getElementById('profileUserName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileUserName').style.borderColor = "white";
	}



	var fn = document.getElementById('profileHash').value;
	/* password not blank*/
	if(fn == "") {
		document.getElementById('profileHash').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileHash').style.borderColor = "white";
	}



	var fn = document.getElementById('profileEmail').value;
	/* email not blank*/
	if(fn == "") {
		document.getElementById('profileEmail').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileEmail').style.borderColor = "white";
	}



	var fn = document.getElementById('profileFirstName').value;
	/* first name not blank*/
	if(fn == "") {
		document.getElementById('profileFirstName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileFirstName').style.borderColor = "white";
	}
	/* no numbers in first name */
	if(/^[0-9]+$/.test(document.getElementById("profileFirstName").value)) {
		document.getElementById('profileFirstName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileFirstName').style.borderColor = "white";
	}



	var fn = document.getElementById('profileLastName').value;
	/* last name not blank*/
	if(fn == "") {
		document.getElementById('profileLastName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileLastName').style.borderColor = "white";
	}
	/* no numbers in last name */
	if(/^[0-9]+$/.test(document.getElementById("profileLastName").value)) {
		document.getElementById('profileLastName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileLastName').style.borderColor = "white";
	}



	var fn = document.getElementById('profileAddress1').value;
	/* address not blank*/
	if(fn == "") {
		document.getElementById('profileAddress1').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileAddress1').style.borderColor = "white";
	}



	var fn = document.getElementById('profileCity').value;
	/* city not blank*/
	if(fn == "") {
		document.getElementById('profileCity').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileCity').style.borderColor = "white";
	}
	/* no numbers in city */
	if(/^[0-9]+$/.test(document.getElementById("profileCity").value)) {
		document.getElementById('profileCity').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileCity').style.borderColor = "white";
	}




	var fn = document.getElementById('profileState').value;
	/* state not blank*/
	if(fn == "") {
		document.getElementById('profileState').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileState').style.borderColor = "white";
	}
	/* no numbers in state */
	if(/^[0-9]+$/.test(document.getElementById("profileState").value)) {
		document.getElementById('profileState').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileState').style.borderColor = "white";
	}



	var fn = document.getElementById('profileZip').value;
	/* zipcode not blank */
	if(fn == "") {
		document.getElementById('profileZip').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileZip').style.borderColor = "white";
	}
	/* no alpha in zipcode */
	if(/^[A-Za-z]*/.test(document.getElementById("profileState").value)) {
		document.getElementById('profileZip').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileZip').style.borderColor = "white";
	}
	if(fn.length === 5) {
		document.getElementById('profileZip').style.borderColor = "white";
		return true;
	} else {
		document.getElementById('profileZip').style.borderColor = "red";
	}

}
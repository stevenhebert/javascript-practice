/**
 * for registration form
 *
 */

function FormValidation() {

	var fn = document.getElementById('profileUserName').value;
	/* username not blank*/
	if(fn == "") {
		alert('username required');
		document.getElementById('profileUserName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileUserName').style.borderColor = "white";
	}



	var fn = document.getElementById('profileHash').value;
	/* password not blank*/
	if(fn == "") {
		alert('password required');
		document.getElementById('profileHash').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileHash').style.borderColor = "white";
	}



	var fn = document.getElementById('profileEmail').value;
	/* email not blank*/
	if(fn == "") {
		alert('email required');
		document.getElementById('profileEmail').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileEmail').style.borderColor = "white";
	}



	var fn = document.getElementById('profileFirstName').value;
	/* first name not blank*/
	if(fn == "") {
		alert('first name required');
		document.getElementById('profileFirstName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileFirstName').style.borderColor = "white";
	}
	/* no numbers in first name */
	if(/^[0-9]+$/.test(document.getElementById("profileFirstName").value)) {
		alert("name cannot contain numbers");
		document.getElementById('profileFirstName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileFirstName').style.borderColor = "white";
	}



	var fn = document.getElementById('profileLastName').value;
	/* last name not blank*/
	if(fn == "") {
		alert('last name required');
		document.getElementById('profileLastName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileLastName').style.borderColor = "white";
	}
	/* no numbers in last name */
	if(/^[0-9]+$/.test(document.getElementById("profileLastName").value)) {
		alert("name cannot contain numbers");
		document.getElementById('profileLastName').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileLastName').style.borderColor = "white";
	}



	var fn = document.getElementById('profileAddress1').value;
	/* address not blank*/
	if(fn == "") {
		alert('address required');
		document.getElementById('profileAddress1').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileAddress1').style.borderColor = "white";
	}



	var fn = document.getElementById('profileCity').value;
	/* city not blank*/
	if(fn == "") {
		alert('city required');
		document.getElementById('profileCity').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileCity').style.borderColor = "white";
	}
	/* no numbers in city */
	if(/^[0-9]+$/.test(document.getElementById("profileCity").value)) {
		alert("city cannot contain numbers");
		document.getElementById('profileCity').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileCity').style.borderColor = "white";
	}




	var fn = document.getElementById('profileState').value;
	/* state not blank*/
	if(fn == "") {
		alert('state required');
		document.getElementById('profileState').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileState').style.borderColor = "white";
	}
	/* no numbers in state */
	if(/^[0-9]+$/.test(document.getElementById("profileState").value)) {
		alert("state cannot contain numbers");
		document.getElementById('profileState').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileState').style.borderColor = "white";
	}



	var fn = document.getElementById('profileZip').value;
	/* zipcode not blank */
	if(fn == "") {
		alert('state required');
		document.getElementById('profileZip').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileZip').style.borderColor = "white";
	}
	/* no alpha in zipcode */
	if(/^[A-Za-z]*/.test(document.getElementById("profileState").value)) {
		alert("zipcode cannot contain alpha");
		document.getElementById('profileZip').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileZip').style.borderColor = "white";
	}
	if(fn.length = 5) {
		alert('zipcode must be five digits');
		document.getElementById('profileZip').style.borderColor = "red";
		return false;
	} else {
		document.getElementById('profileZip').style.borderColor = "white";
	}
}
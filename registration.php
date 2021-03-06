<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
				crossorigin="anonymous">

		<!-- Optional theme -->
		<link rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
				integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
				crossorigin="anonymous">

		<!-- Font Awesome -->
		<link type="text/css"
				href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css"
				rel="stylesheet">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
				  integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
				  crossorigin="anonymous"></script>

		<!-- jQuery v3.0 -->
		<script> src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js"</script>

		<!-- my javascript -->
		<script type="text/javascript"
				  src="js/reg.js"></script>

		<link type="text/css"
				src="css/style.css"
				rel="stylesheet">

		<title>JS Assignment</title>

	</head>
	<body>

		<main>
			<div class="container">
				<form action="" onsubmit="return FormValidation();" onchange="return FormValidation();">

					username: <input type="text" id="profileUserName"><br/>
					password: <input type="text" id="profileHash"><br/>
					email address: <input type="text" id="email"><br/>
					first name: <input type="text" id="profileFirstName"><br/>
					last name: <input type="text" id="profileLastName"><br/>
					address1: <input type="text" id="profileAddress1"><br/>
					address2: <input type="text" id="profileAddress2"> <br/>
					city: <input type="text" id="profileCity"><br/>
					state: <input type="text" id="profileState"><br/>
					zipcode: <input type="text" id="profileZip"><br/>
					<input type="submit" value="register">

				</form>

			</div>

		</main>

	</body>

</html>
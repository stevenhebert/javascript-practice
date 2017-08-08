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
				  src="js/js.js"></script>

		<link type text
		/css
		src="css/style.css"
		rel="stylesheet">

		<title>JS Assignment</title>

	</head>
	<body>

		<main>
			<section>
				<div class="container">

					<h1 id="fontChange" ondblclick="fontChangeFamilyDoubleClick()">
						js needs more practice
					</h1>

					<p id="changeColor" onmouseenter="fontChangeColorMouseOver()" onmouseleave="fontChangeColorMouseOut()">
						disappearing text, click me if you can!
					</p>

			</section>

			<section>
				<div class="container">

					<img id="peace" src="images/win.jpg" alt="office" onclick="imageChange()">

				</div>

			</section>

			<section>
				<div class="container">
					<div class="form">
						<form action="/action_page.php" onsubmit="myFunction()">
							username: <input type="text" name="profileUserName">
							password: <input type="text" name="profileHash">
							email address: <input type="text" name="email">
							first name: <input type="text" name="profileFirstName">
							last name: <input type="text" name="profileLastName">
							address1: <input type="text" name="profileAddress1">
							address2: <input type="text" name="profileAddress2">
							city: <input type="text" name="profileCity">
							state: <input type="text" name="profileState">
							zipcode: <input type="text" name="profileZip">
							<input type="Submit" value="Submit">
						</form>
					</div>
				</div>
	</body>
</html>


</section>
</main>
</html>

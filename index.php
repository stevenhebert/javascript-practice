/**
* create a GitHub repository/deployment put in some filler text
* write ≥ 3 functions to manipulate the filler text/images:
* 1) change colors
* 2) change fonts
* 3) find/replace
* use an <input> tag at some point to ask for user input
* put your CSS, JavaScript, and image files in separate files - NO INLINE
* connect those functions to the event(s) of your choice
**/

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
				  src="script.js"></script>

		<!-- my stylesheet -->
		<link rel="stylesheet" href="css/style.css" type="text/css"/>

		<title>JS Assignment</title>

	</head>
	<body>
		<header>
			<nav class="navbar navbar-default navbar-static-top">
				<div class="container">

					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
								  aria-expanded="false" aria-controls="navbar">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">title</a>
					</div>

					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav navbar-right">
							<li><a href="https://bootcamp-coders.cnm.edu/~shebert2/">link1</a></li>
							<li><a href="https://bootcamp-coders.cnm.edu/~shebert2/">link2</a></li>
							<li><a href="https://bootcamp-coders.cnm.edu/~shebert2/">link3</a></li>
							<li><a href="https://bootcamp-coders.cnm.edu/~shebert2/">link4</a></li>
						</ul>
					</div>
				</div>

			</nav>

		</header>

		<main>
			<section>
				<div class="container">
					<h1>Oink, Bacon!</h1>
					<p>Chuck in laborum, nulla ex t-bone cupim leberkas. Est laboris porchetta turkey aute mollit enim minim
						ham hock occaecat sirloin cupim. Quis nulla sausage, rump flank laboris in nisi andouille. Ullamco
						short loin swine, flank fugiat ham venison ut meatloaf beef.</p>
					<a class="btn btn-primary" href="https://bootcamp-coders.cnm.edu/~shebert2/" role="button">Learn more
						»</a></div>
			</section>

			<section>
				<div class="container">
					<img class="notfood" src="images/food5.jpg" alt="food5">
					<p>Aliquam nunc leo, porttitor sed risus sit amet, cursus porta lacus. Mauris lobortis turpis dictum
						lacinia
						sodales. Praesent aliquet, ipsum sit amet ornare semper, diam diam euismod arcu, ac pharetra nulla
						felis
						ac odio. In tellus felis, ultrices vitae mi non, ultrices egestas metus. Vestibulum hendrerit lacus
						non
						fringilla sagittis. Pellentesque scelerisque metus quis libero condimentum tempus. Etiam a metus
						ultricies mi accumsan euismod volutpat in eros. Cras tincidunt elit libero, eget aliquet purus gravida
						sed. Nulla luctus leo quis diam porta maximus. Sed sed nulla et ligula tincidunt ultricies ac vel est.
						Sed ac vehicula lacus. Proin vitae sapien sed nibh venenatis porta. Donec ultricies, lacus eget
						dignissim
						pulvinar, ex urna vulputate enim, dictum malesuada quam felis et arcu. Duis ornare tellus in risus
						placerat tincidunt. Cras ultricies scelerisque justo non mollis.
					</p>
				</div>
			</section>

			<section>
				<div class="container">

					<div class="row">
						<div class="col-md-3">
							<img class="food" src="images/food1.jpg" alt="food1">
							<p>Spicy jalapeno bacon ipsum dolor amet alcatra sirloin ad beef kielbasa exercitation pig. Et
								dolore
								spare ribs tongue, filet mignon kielbasa irure ham magna eiusmod mollit corned beef officia id
								tail. Beef ribs incididunt reprehenderit jowl sint shankle. Shank sirloin labore dolore ball
								tip.
								Veniam fugiat cupim reprehenderit eu occaecat.</p>
						</div>
						<div class="col-md-3">
							<img class="food" src="images/food2.jpg" alt="food2">
							<p>Alcatra culpa shank, sausage turducken kevin aliqua in nulla. Bresaola corned beef reprehenderit
								commodo occaecat ipsum ad ball tip ground round aute pancetta boudin sint. Deserunt beef ribs in
								aliqua tempor venison beef ut bresaola, jerky laborum ipsum shank. Incididunt qui adipisicing,
								ham
								bacon minim pastrami bresaola labore boudin doner landjaeger tempor swine.</p>
						</div>
						<div class="col-md-3">
							<img class="food" src="images/food3.jpg" alt="food3">
							<p>Ham tri-tip anim incididunt brisket nostrud, ad tail adipisicing excepteur capicola swine.
								Sirloin
								ut fatback andouille biltong. Laboris velit in, sunt ad turducken incididunt ribeye pastrami.
								Minim
								ham hock aute turkey drumstick fatback in commodo culpa quis corned beef officia est. Meatball
								flank brisket, shank reprehenderit irure tempor. Corned beef rump irure meatball laborum nostrud
								venison, pork loin tenderloin exercitation.</p>
						</div>
						<div class="col-md-3">
							<img class="food" src="images/food4.jpg" alt="food4">
							<p>Tongue drumstick cow prosciutto velit voluptate landjaeger magna bacon enim est deserunt. Anim
								qui
								fatback tail chuck ribeye duis flank. Pork chop exercitation deserunt venison ham hock, pastrami
								bresaola. Adipisicing prosciutto id pork chop picanha filet mignon alcatra sint enim
								reprehenderit
								nisi aute tail bresaola. Eiusmod swine proident, pig voluptate dolor aliqua veniam do aliquip
								brisket pork chop enim dolore chicken. Fugiat hamburger tongue, ut duis mollit pork loin
								reprehenderit.</p>
						</div>
					</div>
				</div>
			</section>
		</main>

		<footer>
			<div class="container">
				<p>Does your lorem ipsum text long for something a little meatier? Give our
					generator a try… it’s tasty!</p>
			</div>
			</div>
		</footer>

	</body>
</html>


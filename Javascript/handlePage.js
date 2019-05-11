var player;
var time;
var timer;
var scores = [];

$(document).ready(() => {
	$("#game").css("opacity", "0");
	$('#mainmenu').css("opacity", "0");

	//Main Menü megjelenítése
	$('#mainmenu').animate({
		opacity: 1
	},800);

	$('#music-button').click(() => {
		if(!document.getElementById('music').paused){
			//Zene kikapcsolása
			document.getElementById('music').pause();
			document.getElementById('music').currentTime = 0;
		}else {
			document.getElementById('music').play();
		}
	});

	$('#exit').click(() => {
		window.location.href = 'index.html';
	});

	$('#hint').click(() => {
		var logo = document.getElementById('logo').src;

		if(player.hints > 0){
			player.hints--;
			$('#playerHints').text(" Hints " + player.hints);
			if(logo.includes('adidas')){
				showMessage("It's a clothing brand from Germany.")
			}

			if(logo.includes('apple')){
				showMessage("One of the biggest mobile company in the world.<br>They are famous of selling expensive devices.");
			}

			if(logo.includes('mcdonalds')){
				showMessage("The most famous junk food company in the world.");
			}

			if(logo.includes('audi')){
				showMessage("Expensive and luxury cars from Germany.");
			}
		}else{
			showMessage("You are out of hints!");
		}

	});

	//Gomb liseteners
	$('#start-button').click(() => {

		if($('#name-field').val() != ""){

			player = {name: $('#name-field').val(), score: 0, hints: 3};

			$('#playerName').text(player.name);
			var span = $('<span id="playerScore"></span><span id="playerHints"></span>');
			$('<br>').appendTo('#playerName');
			span.appendTo($('#playerName'));
			$('#playerScore').text('Score ' + player.score);
			$('#playerHints').text(' Hints ' + player.hints);

			$('#mainmenu').animate({
				opacity: 0
			}, 800, () => {
				$('#mainmenu').css('display', 'none');
				$('#game').css('display', 'block');
				$('#game').animate({
					opacity: 1
				}, 800);
			});

			startGame();
		}
	});

	//Reset gomb
	$('#reset').click(() => {
		var logo = document.getElementById('logo').src;
		if(logo.includes('adidas')){
			for(var i = 0; i < 6; i++){
				var id = "input" + i;
				document.getElementById(id).value = "";
			}
		}
		if(logo.includes('apple')){
			for(var i = 0; i < 5; i++){
				var id = "input" + i;
				document.getElementById(id).value = "";
			}
		}
		if(logo.includes('audi')){
			for(var i = 0; i < 4; i++){
				var id = "input" + i;
				document.getElementById(id).value = "";
			}
		}
		if(logo.includes('mcdonalds')){
			for(var i = 0; i < 9; i++){
				var id = "input" + i;
				document.getElementById(id).value = "";
			}
		}
	});

	//Check gomb
	$('#check').click(() => {
		var logo = document.getElementById('logo').src;

		if(logo.includes('adidas')){
			//Akkor az adidas logo van a játékba.
			var result = "";
			for(var i = 0; i < 6; i++){
				var id = 'input' + i;
				result += document.getElementById(id).value;
			}
			if(result.toLowerCase() == 'adidas'){
				clearInterval(timer);
				$('#check').attr("disabled", "disabled");
				//Animáció
				$('#logo').addClass('accept-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('accept-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #73e600");
				});

				//Játék kezelése
				player.score ++;
				$('#playerScore').text('Score ' + player.score);

				setTimeout(() => {
					$('#box').animate({
						opacity: 0
					},500);
				}, 1000);

				setTimeout(() => {
					startGame();
				}, 3000);

			}else{
				//Animáció
				$('#logo').addClass('denied-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('denied-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #cc5200");
				});
			}
		}

		if(logo.includes('apple')){
			//Akkor az apple logo van a játékba.
			var result = "";
			for(var i = 0; i < 5; i++){
				var id = 'input' + i;
				result += document.getElementById(id).value;
			}
			if(result.toLowerCase() == 'apple'){
				clearInterval(timer);
				$('#check').attr("disabled", "disabled");
				//Animáció
				$('#logo').addClass('accept-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('accept-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #73e600");
				});

				//Játék kezelése
				player.score ++;
				$('#playerScore').text('Score ' + player.score);

				setTimeout(() => {
					$('#box').animate({
						opacity: 0
					},500);
				}, 1000);

				setTimeout(() => {
					startGame();
				}, 3000);


			}else{
				//Animáció
				$('#logo').addClass('denied-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('denied-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #cc5200");
				});
			}
		}

		if(logo.includes('mcdonalds')){
			//Akkor az mcdonalds logo van a játékba.
			var result = "";
			for(var i = 0; i < 9; i++){
				var id = 'input' + i;
				result += document.getElementById(id).value;
			}
			if(result.toLowerCase() == 'mcdonalds'){
				clearInterval(timer);
				$('#check').attr("disabled", "disabled");
				//Animáció
				$('#logo').addClass('accept-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('accept-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #73e600");
				});

				//Játék kezelése
				player.score ++;
				$('#playerScore').text('Score ' + player.score);

				setTimeout(() => {
					$('#box').animate({
						opacity: 0
					},500);
				}, 1000);

				setTimeout(() => {
					startGame();
				}, 3000);


			}else{
				//Animáció
				$('#logo').addClass('denied-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('denied-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #cc5200");
				});
			}
		}

		if(logo.includes('audi')){
			//Akkor az mcdonalds logo van a játékba.
			var result = "";
			for(var i = 0; i < 4; i++){
				var id = 'input' + i;
				result += document.getElementById(id).value;
			}
			if(result.toLowerCase() == 'audi'){
				clearInterval(timer);
				$('#check').attr("disabled", "disabled");
				//Animáció
				$('#logo').addClass('accept-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('accept-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #73e600");
				});

				//Játék kezelése
				player.score ++;
				$('#playerScore').text('Score ' + player.score);

				setTimeout(() => {
					$('#box').animate({
						opacity: 0
					},500);
				}, 1000);

				setTimeout(() => {
					startGame();
				}, 3000);

			}else{
				//Animáció
				$('#logo').addClass('denied-pulse');
				$('#logo').on('animationend', function(){
    			$('#logo').removeClass('denied-pulse');
					$('#logo').css("boxShadow", "0px 0px 20px #cc5200");
				});
			}
		}
	});

});

function gameOver() {
	$('#game').animate({
		opacity: 0
	},600, () => {
		$('#game').css("display", "none");
		$('#scoreboard').css("display", "block");

		//Adatok kiírása
		writeData(player);

		for(var i = 0; i < scores.length; i++){
			$('<tr><td>' + scores[i].name + '</td><td>' + scores[i].score + '</td><td>' + scores[i].hints + '</td></tr>').appendTo('#scores');
		}

		$('#scoreboard').animate({
			opacity: 1
		}, 600);
	});
};

function writeData(player) {
	scores = readData();
	scores.push(player);
	document.cookie = "scores=" + JSON.stringify(scores);
};

function readData(){
	try {
		return JSON.parse(getCookie("scores"));
	}catch (err) {
		return scores;
	}
};

function startGame(){
	time = 30;
	$('#box').animate({
		opacity: 1
	}, 300);

	$('#time').text(time);
	$('#inputs').text("");
	$('#logo').css("boxShadow", "0px 0px 10px black");
	$('#check').removeAttr("disabled");

	//Idő számláló
	timer = setInterval(() => {
		time--;

		//Szín beállítása
		if(time > 20){
			$('#time').css("color", "#77ff33");
		}

		if(time <= 20){
			$('#time').css("color", "#3399ff");
		}

		if(time <= 10){
			$('#time').css("color", "red");
		}

		if(time == 0){
			$('#time').text("Game Over");
			clearInterval(timer);
			gameOver();
		}else{
			$('#time').text(time);
		}

	}, 1000);


	var random = Math.floor(Math.random() * 4);

	//Játék felállítása
	switch (random) {
		case 0:
			//Apple
			$('#logo').attr('src', 'Sources/apple.png');
			for(var i = 0; i < 5; i++){
				var element = document.createElement('input');
				element.setAttribute("class", 'input');
				element.setAttribute("id", 'input' + i);
				element.setAttribute("maxlength", '1');
				element.setAttribute("onkeyup", "inputNext(" + i + ")")
				document.getElementById('inputs').appendChild(element);
			}
			break;

		case 1:
			//Mcdonalds
			$('#logo').attr('src', 'Sources/mcdonalds.png');
			for(var i = 0; i < 9; i++){
				var element = document.createElement('input');
				element.setAttribute("class", 'input');
				element.setAttribute("id", 'input' + i);
				element.setAttribute("maxlength", '1');
				element.setAttribute("onkeyup", "inputNext(" + i + ")")
				document.getElementById('inputs').appendChild(element);
			}
			break;

		case 2:
			//Audi
			$('#logo').attr('src', 'Sources/audi.png');
			for(var i = 0; i < 4; i++){
				var element = document.createElement('input');
				element.setAttribute("class", 'input');
				element.setAttribute("id", 'input' + i);
				element.setAttribute("maxlength", '1');
				element.setAttribute("onkeyup", "inputNext(" + i + ")")
				document.getElementById('inputs').appendChild(element);
			}
			break;

		case 3:
			//Adidas
			$('#logo').attr('src', 'Sources/adidas.png');
			for(var i = 0; i < 6; i++){
				var element = document.createElement('input');
				element.setAttribute("class", 'input');
				element.setAttribute("id", 'input' + i);
				element.setAttribute("maxlength", '1');
				element.setAttribute("onkeyup", "inputNext(" + i + ")")
				document.getElementById('inputs').appendChild(element);
			}
			break;
	}
}

function inputNext(actualIndex) {
	document.addEventListener("keyup", function (event) {
		if(event.which > 64 && event.which < 91){
			try {
				actualIndex++;
				var nextElement = "input" + actualIndex;
				document.getElementById(nextElement).focus();
			}catch(err){
				//console.log(err.message);
			}
		}
	});
};

function windowListener () {
	document.addEventListener("click", () => {
		//Name-input-label-animation
		if($('#name-field').is(':focus')){
			$('#name-label').animate({
				opacity: 0
			}, 300, () => {
				$('#name-label').css("color", 'black');
				$('#name-label').text('checking...');
				$('#name-label').animate({
					opacity: 1
				},300);
			});
		}else{
			$('#name-label').animate({
				opacity: 0
			}, 300, () => {
				$('#name-label').css("color", 'black');
				if($('#name-field').val() == ""){
					$('#name-label').text("Write your name!");
					$('#name-label').animate({
						opacity: 1
					},300);
				}else{
					$('#name-label').text("Good name");
					$('#name-label').css("color", "green");
					$('#name-label').animate({
						opacity: 1
					},300);
				}
			});
		}
	});
};

function showMessage(string) {
  var x = document.getElementById("snackbar");
	x.innerHTML = string;
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

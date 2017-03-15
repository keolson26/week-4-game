
$(document).ready(function () {
	//Variables
	//set up variables
	var numSet0 = ["0", "1"];
	var numSet1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var numGame = 0;
	//crystal assignment variables
	var crystalArr = [];
	//scoring variables
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	//start game

	$("#startBtn").click(function () {

		console.log("start");

		crystalArr = [];
		numGame = 0;
		totalScore = 0;
		userScore = 0;

		//Clear screen
		$("#random").html(numGame);
		$("#userScore").html(totalScore);


		//Set first value for game number
		var random0 = numSet0[Math.floor(Math.random() * numSet0.length)];
		console.log(random0);
		numGame += random0;
		console.log(numGame);
		//Set 2nd and 3rd game number values
		for (var i = 1; i < 3; i++) {
			var random1 = numSet1[Math.floor(Math.random() * numSet1.length)];
			console.log(random1);
			numGame += random1;
			console.log(numGame);
		}

		numGame = parseInt(numGame);

		//Check game number is betweein 19 and 120
		if (numGame > 120) {
			var subtractor = numSet1[Math.floor(Math.random() * numSet1.length)];
			numGame -= subtractor;
		} else if (numGame < 19) {
			var adder = numSet1[Math.floor(Math.random() * numSet1.length)];
			numGame += adder;
		} else {}

		//Pull number to play into HTML

		$("#random").html(numGame);


		//Set Crystal Numbers
		for (var i = 0; i < 4; i++) {
			var randomC1 = numSet0[Math.floor(Math.random() * numSet0.length)];
			console.log(randomC1);
			crystalArr.push(randomC1);
			console.log(crystalArr);
		}

		for (var i = 0; i < 4; i++) {
			var randomC2 = numSet1[Math.floor(Math.random() * numSet1.length)];
			crystalArr[i] += randomC2;
			if (parseInt(crystalArr[i]) > 12) {
				var subtractorC = numSet1[Math.floor(Math.random() * numSet1.length)];
				crystalArr[i] -= parseInt(subtractorC);
			} else if (parseInt(crystalArr[i]) < 0) {
				var adderC = numSet1[Math.floor(Math.random() * numSet1.length)];
				crystalArr[i] += parseInt(adderC);
			}
			crystalArr[i] = parseInt(crystalArr[i]);
		}
		console.log(crystalArr);

		//Activate crystal buttons and play game

		$("#pic1").click(function () {
			totalScore += crystalArr[0];
			console.log(totalScore);
			$("#userScore").html(totalScore);
			//$("#userScore").append(scoreDiv);

			if (totalScore > numGame) {
				alert("You lost! Click Play Again to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click Play Again to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});

		$("#pic2").click(function () {
			totalScore += crystalArr[1];
			console.log(totalScore);
			$("#userScore").html(totalScore);


			if (totalScore > numGame) {
				alert("You lost! Click Play Again to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click Play Again to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});

		$("#pic3").click(function () {
			totalScore += crystalArr[2];
			console.log(totalScore);
			$("#userScore").html(totalScore);


			if (totalScore > numGame) {
				alert("You lost! Click Play Again to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click Play Again to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});

		$("#pic4").click(function () {
			totalScore += crystalArr[3];
			console.log(totalScore);
			$("#userScore").html(totalScore);

			if (totalScore > numGame) {
				alert("You lost! Click Play Again to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click Play Again to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});
	});

});




//game play


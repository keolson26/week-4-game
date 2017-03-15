
$(document).ready(function () {
	//Variables
	//set up variables
	var numSet0 = [];
	var numSet1 = [];
	var numGame = 0;
	//crystal assignment variables
	var crystalArr = [];
	//scoring variables
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

	//Fill in number arrays to match game parameters
	for (var i = 19; i < 121; i++) {
		numSet0.push(i);
	}

	for (var i = 1; i < 13; i++) {
		numSet1.push(i);
	}

	//start game

	$("#startBtn").click(function () {

		crystalArr = [];
		numGame = 0;
		totalScore = 0;
		userScore = 0;

		//Clear screen
		$("#random").html(numGame);
		$("#userScore").html(totalScore);

		//Set value for game number
		var numGame = numSet0[Math.floor(Math.random() * numSet0.length)];

		//Pull number to play into HTML

		$("#random").html(numGame);

		//Set Crystal Numbers
		for (var i = 0; i < 4; i++) {
			var randomC1 = numSet1[Math.floor(Math.random() * numSet1.length)];
			crystalArr.push(randomC1);
		}

		//Activate crystal buttons and play game

		$("#pic1").click(function () {
			totalScore += crystalArr[0];
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
			$("#userScore").html(totalScore);

			if (totalScore > numGame) {
				alert("You lost! Click 'Click to Play' to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click 'Click to Play' to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});

		$("#pic3").click(function () {
			totalScore += crystalArr[2];
			$("#userScore").html(totalScore);

			if (totalScore > numGame) {
				alert("You lost! Click 'Click to Play' to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click 'Click to Play' to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});

		$("#pic4").click(function () {
			totalScore += crystalArr[3];
			$("#userScore").html(totalScore);

			if (totalScore > numGame) {
				alert("You lost! Click 'Click to Play' to restart.");
				losses++;
				$("#loss1").html(losses);
			} else if (totalScore === numGame) {
				alert("You win! Click 'Click to Play' to restart.");
				wins++;
				$("#win1").html(wins);
			}
		});
	});

});






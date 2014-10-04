/*
Name: Albert Martinez
Date: 10/3/2014
Assignment: Goal1: Duel #1 
*/

//self-executing function
(function(){
	console.log("Fight!"); // verify if document is setup properly

	// PLAYER NAME
 	// give each player a name and store in a variable for each (p1Name & p2Name)
	var p1Name = "Modern Man";
	var p2Name = "Retro Rival";


	// PLAYER DAMAGE
	// give each player a max damage they can cause to the other player per round
	var p1Damage = p2Damage = 35;


	// PLAYER HEALTH
	// provide each player health points - a way to keep track of the damage received
	var p1Health = p2Health = 100;
	
	// initialize # of rounds to 0 in order to dislay the correct round # when loop begins
	var round = 0;


	// FIGHT()
	// create a fight function that loops up to 10 rounds and subtracts a random # from the players' health
	// initiate the function and name it fight()
	function fight() {
		
		// create an alert that displays the start of the round and each players starting health points
		alert(p1Name + ': ' + p1Health + ' ** START ** ' + p2Name + ': ' + p2Health);
		
		/* create a for loop to act as a round counter that will increase by 1 every round
		initialize i=0, set # of rounds with conditional statement to prevent a being stuck in a forever loop, increase i by 1 every round*/
		for (var i = 0; i < 10; i++) {

			// given players max damage, calculate the min damage (1/2 the players max Damage)
			var minDamage1 = p1Damage * .5;
			var minDamage2 = p2Damage * .5;

			// generate a random # between the max and min damage to determine the damage to each player
			var f1 = Math.floor(Math.random() * (p1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random() * (p2Damage - minDamage2) + minDamage2);

			// each playersHealth should reflect the damage received
			p1Health -=f1;
			p2Health -=f2;

			// check if our random # is working and if each pleyersHealth is reflecting the damage
			// console.log(p1Name + ': ' + p1Health + ' || ' + p2Name + ': ' + p2Health);

			
			var results = winnerCheck();
			
			// print to the console the outcome of fight() to verify it's working properly
			console.log(results);

			// if there is no winner continue to the next round
			if (results === "no winner") {
				round++;
				// create an alert that displays round #, round end, and each playersHealth
				alert(p1Name + ': ' + p1Health + ' ** ROUND ' + round + ' OVER ** '  + p2Name + ': ' +p2Health);
			// otherwise display an alert with the winner, break the loop, and exit program	
			} else {
				alert(results);
				break;
			}
		}
	}
	

	// WINCHECK()
	console.log("------ WINCHECK() ------");

	// create a function called winnerCheck to check if a player has won at the end of every round
	function winnerCheck(){
		// check using a console.log() if this function is working 
		// console.log("in winnerCheck FN");

		// create a "no winner" outcome and set it to a variable named result
		var result = "no winner";

		// use a conditional statement to check if both players' health fell below 0
		if (p1Health < 1 && p2Health < 1) {
			// if above is true, both players lose
			result = "You both lost";
			// since they both didn't lost then check if one of the players' health is below 0 to determine the loser and the other the winner
		} else if (p1Health < 1) {
			result = p2Name + " Wins!";
		} else if (p2Health < 1) {
			result = p1Name + " Wins!";
		}
		// return the value to the result variable to make this function reuseable
		return result;
	}
	
	/****** PROGRAM BEGINS HERE ******/
	// the fight function invocation
	fight();


})();
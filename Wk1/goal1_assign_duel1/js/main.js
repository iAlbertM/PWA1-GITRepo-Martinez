/*
Name: Albert Martinez
Date: 10/3/2014
Assignment: Goal1: Duel #1 
*/


/*
PSEUDO CODE: 
			
	//initialize round = i
	//round 1 begins
	// generate random# using Math.floor(Math.random()*(max - min) + min)
	// calculate: p1hp = p1hp - random#
	// is p1HP > 0? 
		// if yes, continue
		// if not, p1 = dead
	//generate random# using Math.floor(Math.random()*(max - min) + min)
	// calculate: p2hp = p2hp - random#
	// is p2HP > 0? 
		// if yes, continue
		// if not, p1 = dead

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

			// generate a random # between a players max and min damage to determine the amount of damage each player will receive
			var f1 = Math.floor(Math.random() * (max - min) + min);
			var f2 = Math.floor(Math.random() * (max - min) + min);

			// subtract the damage taken from each players Health - assign it to the playersHealth
			p1Health -=f1;
			p2Health -=f1;

			// check if our random # is working and if each pleyersHealth is reflecting the damage
			console.log(p1Name + ': ' + p1Health + p2Name + ': ' + p2Health);

			// store the result of each round in a variable named 'result'
			var results = winnerCheck();
			
			// print to the console the outcome of fight() to verify it's working properly
			console.log(results);

			if (results === "no winner") {
				round++;
				// create an alert that displays the start of the round and each players health
				alert(p1Name + ': ' + p1Health + ' ** ROUND ' + round + ' OVER ** '  + p2Name + ': ' +p2Health);
			} else {
				alert(results);
				break;
			}
		}
	}
	

	// WINCHECK()
	console.log("------ WINCHECK() ------");

	function winnerCheck(){
		console.log("in winnerCheck()")
		var result = "no winner";

		if(p1Health < 1 && p2Health < 1) {
			result = "You both lost";
		} else if (p1Health < 1) {
			result = p2Name + "Wins!";
		} else if (p2Health < 1) {
			result = p1Name + "Wins!";
		}
	}



})();
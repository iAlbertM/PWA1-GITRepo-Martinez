/*Name: Albert MartinezDate: 10/10/2014Assignment: Goal2: Duel #2 *///self-executing function(function(){    // verify if document is setup properly using console.log	console.log("Fight!");/*** PLAYERS    EXAMPLE PLAYER:        var player = ["playerName", playerDamage, playerHealth];    EXAMPLE PLAYER LEGEND:        player[0] = "playerName": give each player a name and store in a variable for each (p1[0] & p2[0])        player[1] = playerDamage: give each player a max damage they can cause to the other player per round        player[2] = playerHealth: provide each player health points - a way to keep track of the damage receive */    var p1 = ["Modern Man", 35, 100];    var p2 = ["Retro Rival", 35, 100];	// initialize # of rounds to 0 in order to dislay the correct round # when loop begins	var round = 0;/*** FIGHT()	create a fight function that loops up to 10 rounds and subtracts a random # from the players' health each round    POSSIBLE SCENARIOS:        TIE:            if 10 rounds over with no winner |or| if Both players health < 1        WIN & LOSE:            @ end of a round, if player 1 health is < 0 and player 2 health is > 0            player 1 = loser, player 2 = winner */	// Declare the fight function	function fight() {				// alert the user that the fight began and each players name and HP (health points)        alert('** START **\n' + p1[0] + ': ' + p1[2] + ' || '  + p2[0] + ': ' +p2[2]);				// use a for...loop to iterate up to 10 rounds: if no winner is announced and both players have not lost		for (var i = 0; i < 10; i++) {			// given players max damage, calculate the min damage (1/2 the players max Damage)			var minDamage1 = p1[1] * .5;			var minDamage2 = p2[1] * .5;			// calculate a different random # for each player that falls between their min and max damage			var f1 = Math.floor(Math.random() * (p1[1] - minDamage1) + minDamage1);			var f2 = Math.floor(Math.random() * (p2[1] - minDamage2) + minDamage2);			// store the difference of the random # from the players health into the players health index[2]			p1[2] -=f1;			p2[2] -=f2;			// check if our random # is working and if each pleyers Health is reflecting the damage			// console.log(p1[0] + ': ' + p1[2] + ' || ' + p2[0] + ': ' + p2[2]);			// create a variable named results and assign it the outcome of the winnerCheck function			var results = winnerCheck();						// write to the console the value of the results variable			console.log(results);			// create an if/else statement to check if there is a next round or stop to announce the winner			if (results === "no winner") {				round++;				// alert the user the end of the round and its outcome				alert('** ROUND ' + round + ' OVER **\n' + p1[0] + ': ' + p1[2] + ' || '  + p2[0] + ': ' +p2[2]);			// otherwise display an alert with the winner, break the loop, and exit program				} else {				alert(results);				break;			}		}	}		// WINCHECK()	console.log("------ WINCHECK() ------");	// create a function called winnerCheck to check if a player has won at the end of every round	function winnerCheck(){		// check using a console.log() if this function is working 		// console.log("in winnerCheck FN");		// create a "no winner" outcome and set it to a variable named result		var result = "no winner";		// use a conditional statement to check if both players' health fell below 0		if (p1[2] < 1 && p2[2] < 1) {			// if above is true, both players lose			result = "You both lost";			// since they both didn't lost then check if one of the players' health is below 0 to determine the loser and the other the winner		} else if (p1[2] < 1) {			result = p2[0] + " Wins!";		} else if (p2[2] < 1) {			result = p1[0] + " Wins!";		}		// return the value to the result variable to make this function reuseable		return result;	}		/****** PROGRAM BEGINS HERE ******/	// the fight function invocation	fight();})();
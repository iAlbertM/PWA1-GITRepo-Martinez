/**
 * GUESSING GAME:
 *
 * Created By: Albert Martinez
 * Date: 10/20/14
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

var ranNum = Math.floor(Math.random()*11);
var exitVar = true;
var dom = {
	output: document.getElementById('output'),
	input: document.getElementById('input'),
	button: document.getElementsByTagName('button')
};

button.addEventListener("click", checkGuess()); 

var validGuess = function(){
	while(input > 0 && input < 11){
		if(!isNaN(input)){
			if(input > 0 && input < 11)
		}

	}

while (exitVariable) {
    if(prediction === randomNumber){
        exitVariable = false; //should exit the loop when the user predicts the same number that was generated by the computer, but it doesn't
    }else{
        prediction = prompt("I was not thinking " + prediction + ". Guess again.");
    }
}
console.log("That's Correct! I was thinking" + randomNumber + ".");


		input.innerHTML;
	if(isNaN(input)){
		if(input > 0 && input < 11){

		}
	}
});

// Create an .addEventListner event listener on the guess button to listen for a click event.
// When the guess button is clicked, evaluate your guess with the number the computer has chosen.
// Create a function to validate the users input:
// Validate that a number was entered -- AND
// Validate that the number entered is between 1 and 10
// If your guess is higher than the computer's number then display appropriate message in the HTML.
// If your guess is lower than the computer's number then display appropriate message in the HTML.
// If your guess is equal to the computer's number then display appropriate message and end the game.
// Tally all the wrong guesses and end the game after the 3rd incorrect guess and show appropriate game over message in the HTML.
// Deactivate the button by removing the event listener when the game is over.
// EXTRA CREDIT: Use a keyboard event for the ENTER button that also acts like clicking on the guess button.

})();
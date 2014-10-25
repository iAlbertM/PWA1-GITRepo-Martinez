/**
 * Created by Albert Martinez
 * Class: PWA-1
 * Goal: Goal7 Assignment
 */

// self-executing anonymous function 
(function(){
	// define all variables
	var numPeople = 3;
	var names = ["Matt Hatter", "Chris Mass", "Will Hisoneway", "Scott Winters", "Sandy Sikek"];
	var people = [];
	var interval;

	for (var i = 0; i < numPeople; i++) {
		// generate random number between 0 and the length of the names array
		var randNum = Math.floor(Math.random() * names.length);
		// creating a variable that stores generating new Person objects
		var person = new Person(names[randNum], i + 1);

		// inserting data into the correct columns Names in col 1, jobs in col 2
		populateHTML(person.name, "r" + (i + 1) + "c1")
		populateHTML(person.job, "r" + (i + 1) + "c2")
		
		// place the completed person into the people array per instructions
		people.push(person);
		names.splice(randNum, 1);
	} 

	// make sure to clear the interval since we only want 1  at any given time
	clearInterval(interval);
	// assigning the variable interval to the function that sets up the interval
	interval = setInterval(runUpdate, 1000 / 30);
	
	function populateHTML(pName, pfield) {
		var rowCol = document.getElementById(pfield);
		rowCol.innerHTML = pName;
	}
	function runUpdate(){
		//run update for each element in the people array - hence each Person instance
		people.forEach(function(element){
			// calling the Person.prototype.update method from person.js file 
			element.update();
		});
	}
	console.log(people);
})();
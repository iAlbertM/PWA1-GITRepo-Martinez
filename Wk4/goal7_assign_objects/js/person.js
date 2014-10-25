/*
 * Created by Albert Martinez
 * Class: PWA-1
 * Goal: Goal 7 week 4
 */

 (function(){

	// add the Person object to the global window object so that we can ready Person from main.js
	window.Person = Person;

	// list all job opportunities and actions that a Person do
	Person.jobs = ["Graphic Artist", "Illustrator", "Web Developer", "Web Designer", "Hair Stylist" ];
	// list all actions that the user can do 
	Person.actions = ["Sketching", "Taking a break", "Meditating", "Coding", "Studying"];

	//screen cast link to watch when in need of var "https://www.youtube.com/watch?v=5wWdKr86MIc&list=PLhRlE5h84yWb2AmOu30rGN6XTDmRyvUbn#t=3178";
	// create the Person object using contructor function
	function Person(name, row){
		// check function is being seen by using console.log to print the name of the person it creates
		console.log("Person Created: ", name);
		this.name 	= name;
		// setting the initial random action from the Person.actions array
		this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
		// setting the initial random job choice from the Person.jobs array
		this.job 	= Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
		this.row 	= row;
		// setting variable col3 to the HTML element in column 3 row: (depends on the element calling the function = this.row)
		var col3 = document.getElementById("r" + this.row + "c3");
		// column 3 is the action column so naturally we are placing the objects .action here
		col3.innerHTML = this.action;
	};
	
	Person.prototype.update = function(){
		// run the function about once every 5 seconds or so( 1 / 60sec = 0.01)
		if(Math.floor(Math.random() < 0.01)) {
			// random number between 0 and the length of the Person.actions array: 5
			var i = Math.floor(Math.random()*Person.actions.length);
			// setting the actions index to be random using the i variable
			this.action = Person.actions[i];
			// grab the html element to insert the data into column 3 of this Person.row
			var col3 = document.getElementById("r" + this.row + "c3");
			col3.innerHTML = this.action;
		}
	}
})();


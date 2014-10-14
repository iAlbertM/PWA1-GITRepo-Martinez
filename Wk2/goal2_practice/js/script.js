// Variable initialization (DO NOT FIX ANY OF THE BELOW VARs)
var resultsDIV = document.getElementById("results"),
	searchInput = document.forms[0].search, 
	currentSearch = "";
// Validates search query
var validate = function(query) {
	// fixed spelling error and changed == to a single =
	// Trim whitespace from start and end of search query
	while (query.charAt(0) === " ") {
		// fixed syntax error-- fixed the assignment operator to compare using a double ==
		query = query.substring(1, query.length);
		while (query.charAt(query.length - 1) === " ") {
			query = query.substring(0, query.length - 1);
			// Check search length, must have 3 characters
			if (query.length < 3) {
				// alert the user that the # of characters entered is too small
				alert("Your search query is too small, try again.");
				// fixed alert syntax-- closed string with double quotes "
				// (DO NOT FIX THE LINE DIRECTLY BELOW)
				searchInput.focus();
				return;
				search(query);
				console.log(query);
				// Finds search matches
				// create a function expression that takes the argument 'query' and name the reference variable 'search'
				var search = function(query) {
					// split the user's search query string into an array
					// create the users input split up into an array so that each word is used for the search
					var queryArray = query.split(" ");
					// fixed with the correct method
					// array to store matched results from database.JavaScript
					var results = [];
					// loop through each index of db array
					for(var i = 0, j = db.length; i<j; i++) {
						// each db[i] is a single video item, each title ends with a pipe "|"
						// save a lowercase variable of the video title
						var dbtitleEnd = db[i].indexOf('|');
						var dbitem = db[i].toLowerCase().substring(0, dbtitleEnd);
						// loop through the user's search query words
						// save a lowercase variable of the search keyword
						for(var ii=0, jj=queryArray.length; ii<jj; ii++) {
							var qitem = queryArray[ii].toLowerCase();
						}
						// is the keyword anywhere in the video title?
						// If a match is found, push full db[i] into results array
						var compare = dbitem.indexOf(qitem);
						if (compare !== -1) {
							results.push(db[i]);
						}
						results.sort();
						// Check that matches were found, and run output functions
						if(results.length == 0){
							noMatch();
							document.write(noMatch);
							console.log(noMatch);
						}
						else{
							showMatches(results);
						};
						// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
						var noMatch = function(){
							var html = ''+
								'<p>No Results found.</p>'+
								'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
							;
							resultsDIV.innerHTML = html;
						};
						// Put matches into page as paragraphs with anchors
						var showMatches = function(results){
							// THE NEXT 4 LINES ARE CORRECT.
							var html = '<p>Results</p>',
								title,
								url
							;
							// loop through all the results search() function
							for(var i=0, j=results.length; i<j; i++){
								// title of video ends with pipe
								// pull the title's string using index numbers
								dbTitleEnd = results[i].indexOf('|');
								title = results[i].subString(0, titleEnd);
								// pull the video url after the title
								url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
								// make the video link - THE NEXT LINE IS CORRECT.
								html += '<p><a href=' + url + '>' + title + '</a></p>';
							};
							resultsDIV.innerHTML = html;
							//THIS LINE IS CORRECT.
						};
						// The onsubmit event will be reviewed in upcoming Course Material.´
						// THE LINE DIRECTLY BELOW IS CORRECT
						document.forms[0].onsubmit = function() {
							var query = searchInput.value;
							validate(query);
							// return false is needed for most events - this will be reviewed in upcoming course material
							// THE LINE DIRECTLY BELOW IS CORRECT
							return false;
							// fixed syntax error by adding curly braces
						}

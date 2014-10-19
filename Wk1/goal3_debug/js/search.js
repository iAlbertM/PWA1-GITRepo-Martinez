/*
Name: Albert Martinez
Date: 10/14/2014
Assignment: Goal4_Debug

ABBREVIATION LEGEND:

var fxSyn = "fixed syntax error"
var fxRun = "fixed runtime error"
*/


// Create privatized scope using a self-executing function
( // opening to a self executing function-everything within these parentheses is organized visually as belonging together
    function() {

        // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
        var resultsDIV = document.getElementById("results"), // assign html element with id '#results' to a variable named 'resultsDIV'
            searchInput = document.forms[0].search, // assign the HTML search input field to the variable searchInput
            currentSearch = 'search text here'; // input a placeholder value for the input field-assign it to the variable current search
        console.log("inside the self executing anonymous function"); //test for runtime-errors with console.logs
        // Validates search query
        var validqte = function(query) { //fxSyn: corrected assignment operator:'==' to '='
            console.log("inside validqte a.k.a. the 'valid quote' function"); //test for runtime-errors with console.logs
            // Trim whitespace from start and end of search query
            while (query.charAt(0) === " ") { // fxRun: fixed assignment operand from '=' to '==='
                query = query.substring(1, query.length); // while condition is true, 
            };
            console.log("inside 1st while statment-query: ", query); //test for runtime-errors with console.logs
            while (query.charAt(query.length - 1) === "") {
                query = query.substring(0, query.length - 1);
                console.log("inside 2nd while statment-query: ", query); //test for runtime-errors with console.logs
            }; // fxSyn: added closing curly brace

            // Check search length, must have 3 characters
            if (query.length < 3) {
                alert("Your search query is too small, try again."); //fxSyn: added ending double quotes to alert: "...again.); to "...again.");

                // (DO NOT FIX THE LINE DIRECTLY BELOW)
                searchInput.focus();
                return;
            };

            search(query);
        };

        // Finds search matches
        var search = function(query) { // fxSyn: added opening curly brace for function code block
            console.log("inside search function"); //test for runtime-errors with console.logs
            // split the user's search query string into an array
            var queryArray = query.split(" "); // fxRun: corrected the method from '.join' to '.split' per developers commentary

            // array to store matched results from database.js
            var results = [];

            // loop through each index of db array
            for (var i = 0, j = db.length; i < j; i++) {
                console.log("inside 1st for loop"); //test for runtime-errors with console.logs
                // each db[i] is a single video item, each title ends with a pipe "|"
                // save a lowercase variable of the video title
                var dbTitleEnd = db[i].indexOf('|');
                var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); //fxRun: changed 'tolowercase' to 'toLowerCase'
                console.log("dbitem: ", dbitem); //test for runtime-errors with console.logs
                // loop through the user's search query words
                // save a lowercase variable of the search keyword
                for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                    console.log("inside for-loop's nested for-loop"); //test for runtime-errors with console.logs
                    var qitem = queryArray[ii].toLowerCase(); //fxRun: changed 'tolowercase' to 'toLowerCase'

                    // is the keyword anywhere in the video title?
                    // If a match is found, push full db[i] into results array
                    var compare = dbitem.indexOf(qitem);
                    if (compare !== -1) {
                        results.push(db[i]);
                    }
                }; // fxSyn: added closing curly brace
            }; // fxSyn: added closing curly brace
            console.log("finished looping through the indeces of the db array"); //test for runtime-errors with console.logs
            results.sort();
            console.log("results: ", results); //test for runtime-errors with console.logs
            // Check that matches were found, and run output functions
            if (results.length === 0) { // fxSyn: changed assignment operator '=' to comparison operator '=='
                console.log("True: results.length === 0. This is if from inside the if-else statement"); //test for runtime-errors with console.logs
                noMatch();
            } else {
                console.log("False: results.length does not === 0. This is else from inside the if-statement"); //test for runtime-errors with console.logs
                showMatches(results);
            };
        };
        console.log("Thanks for watching Debug! I'm Albert Martinez, PWA assignment news--good night."); // end of the search reference variable definition

        // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
        var noMatch = function() {
            console.log("Hello from inside the noMatch reference variable"); //test for runtime-errors with console.logs
            var html = '' +
                '<p>No Results found.</p>' +
                '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';
            resultsDIV.innerHTML = html;
        };

        // Put matches into page as paragraphs with anchors
        var showMatches = function(results) {
            console.log("What a great day for displaying results inside the showMatches reference variable"); //test for runtime-errors with console.logs
            // THE NEXT 4 LINES ARE CORRECT.
            var html = '<p>Results</p>',
                title,
                url;

            // loop through all the results search() function
            for (var i = 0, j = results.length; i < j; i++) {

                // title of video ends with pipe
                // pull the title's string using index numbers
                titleEnd = results[i].indexOf('|');
                title = results[i].substring(0, titleEnd);

                // pull the video url after the title
                url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

                // make the video link - THE NEXT LINE IS CORRECT.
                html += '<p><a href=' + url + '>' + title + '</a></p>';
            };
            resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
            console.log("done looping through the showMatches function"); //test for errors with console.logs
        };

        // The onsubmit event will be reviewed in upcoming Course Material.
        // THE LINE DIRECTLY BELOW IS CORRECT
        document.forms[0].onsubmit = function() {
            var query = searchInput.value;
            validqte(query);

            // return false is needed for most events - this will be reviewed in upcoming course material
            // THE LINE DIRECTLY BELOW IS CORRECT
            console.log("The End");
            return false;
        }; // fxSyn: added closing curly bracefor function expression
    }());  // fxSyn: inverted the anonymous function's argument parentheses: from ')(' to '()'

// create array that computer can use to randomly pick letter
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables that hold number of wins and losses
var wins = 0;
var losses = 0;

//run whenever a user presses a key
document.onkeyup = function(event) {
    
    //determines which key was pressed
    var userText = event.key;
    //lets the computer randomly select from the array    
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //logic that determines the outcome.  If userText is equal to the compterGuss, var wins goes up 1. Otherwise, losses increases 1.
    if (userText === computerGuess) {
        wins++;
    } else {
        losses++;}
        
        var gameInfo = 
        "<p>You chose " + userText + "</p>" +
        "<p>The computer chose " + computerGuess + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>"
        
        
        //post wins and losses to page
        
        document.getElementById("#game") = gameInfo;
};

//Set the Number of turns

//There are 10 turns and the game should count down from 10 each time the user lets go of a button
function countDown(onclick) {
var guessesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//??
} 

//now I need to put the countDown into #total-guesses
//???

//There are 10 turns and the game should tell the user how many turns they have left after they press a key
//run the about countDown function in reverse, then put the result (countUP) into #guesses
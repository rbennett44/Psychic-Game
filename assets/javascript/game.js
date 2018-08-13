
//create an array of letters for the computer and user to guess from
//var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//have the computer randomly guess a letter from the array
//var randomLetter = letters[Math.floor(Math.random() * letters.length)];

//create an onkey command for the user to choose one of the letters and display it 
var chooseLetter = document.getElementById("user-text");
document.onkeyup = function(event) {
    userText.textContent = event.key;
};
//If the user chooses the same letter as the computer, user wins... else user loses.

//Post number of wins and number of losses

//create a countdown from 10.  Each time the user chooses a key, it counts down.  When it hits zero, game over. 
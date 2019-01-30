//VARIABLES 
//------------------------------------------------------------------------------------

// Array of excellent hockey players
var playerArray = ["gretsky", "orr", "crosby", "selanne", "lidstrom", "lemieux"];

//Computer-selected player will be stored here
var chosenPlayer = "";

//breaks the chosenPlayer into individual letters
var lettersInChosenPlayer = [];

//the number of blanks to corresond with the lettersInChosenPlayer
var numBlanks = 0;

//holds the mix of blanks and solved letters
var blanksAndSuccesses = [];

//Holds the letters guessed
var lettersGuessed = "";

//Holds all the wrong guesses
var wrongLetters = [];

//Game counters
var winCounter = 0;
var lossCounter = 0;
var remainingGuesses = 9;

//FUNCTIONS TO RUN THE GAME
//------------------------------------------------------------

//start the game (call back function).  This will run what the game will do
function startGame() {
    //set the guesses to 9
    remainingGuesses = 9;

    //randomly select a player from the array and display it in html "player" as blanks
    chosenPlayer = playerArray[Math.floor(Math.random() * playerArray.length)];

    //the word is broken into individual letters
    lettersInChosenPlayer = chosenPlayer.split("");

    //count the number of letters in the word
    numBlanks = lettersInChosenPlayer.length;

    //test
    console.log(chosenPlayer);

    //reset guess and success array 
    blanksAndSuccesses = [];

    //reset wrong guesses 
    wrongLetters = [];

    //fill in the blanks with appropriate number of blanks based on lettersInChosenPlayer
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    console.log(blanksAndSuccesses);

    //reprints the guesses left to 9
    document.getElementById("guesses-left").innerHTML = remainingGuesses;

    //Prints blanks at the beginning of the round
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    document.getElementById("wrong-guesses").innerHTML = wrongLetters.join(" ");
};

function checkLetters(letter) {
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenPlayer[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenPlayer[j] === letter) {
                blanksAndSuccesses[j] = letter;
            }
        }
        console.log(blanksAndSuccesses);
    }
    else {
        wrongLetters.push(letter);
        remainingGuesses--;
    }
};

function roundComplete() {
    console.log("WinCount: " + winCounter + " | Loss Count: " + lossCounter + " | Remaining Guesses: " + remainingGuesses);
    document.getElementById("guesses-left").innerHTML = remainingGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("wrong-guesses").innerHTML = wrongLetters.join("");

    if (lettersInChosenPlayer.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You Won!");
        document.getElementById("win-counter").innerHTML = winCounter;

        startGame();
    }
    else if (remainingGuesses === 0) {
        lossCounter++;
        alert("You Lost!");
        document.getElementById("loss-counter").innerHTML = lossCounter;

        startGame();
    }


};

startGame();
document.onkeyup = function(event) {
    lettersGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(lettersGuessed);
    roundComplete();
};
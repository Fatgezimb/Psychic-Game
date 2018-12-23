// variables initialized

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var computerChoice;


// List for the guess that the user does. These need to be printed on the page
var previousGuess = [];


// ======================================================================
// starts the game
game();

function game() {
    // computer needs to pick random letter
    var computerChoice = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26))];
    console.log("Computer Choice: " + computerChoice);

    // initiates the below function
    compareGuess();
    // ======================================================================
    // correct guess funtion
    // Will determine if the letter guessed matched the computers guess
    function compareGuess() {
        // ======================================================================
        // ======================================================================
        document.onkeyup = function (event) {
            // Determines which key was pressed.
            var userGuess = event.key;
            letter = userGuess
            console.log("Letter: " + letter);

            // console.log("your guess: " + userGuess);
            // console.log("_______________________")         

            // Correct need to make wins go up by one
            // ======================================================================

            if (userGuess == computerChoice) {
                console.log("YOU WIN");
                alert("You Win: "+ computerChoice);
                wins++;
                document.getElementById("userWins").innerHTML = wins;
                resetGame();
                // console.log("Wins: " + wins);
                // console.log("losses: " + losses);
                console.log("_______________________");
            }
            // ======================================================================
           
            else {
                guessesLeft--;
                document.getElementById("userGuessesLeft").innerHTML = guessesLeft;

                // This addes the guess to the array userGuesses

                previousGuess.push(letter);
                console.log("TESTETTESTEETS:" + previousGuess);
                document.getElementById("userPreviousGuesses").innerHTML = previousGuess;

                // console.log("Wins: " + wins);
                // console.log("Your Guess: " + userGuess);
                console.log("Your Guess: " + userGuess);
                console.log("_______________________");
                // ======================================================================
                document.getElementById("userGuessesLeft").innerHTML = guessesLeft;
                outOfGuesses();

            }

        }

        // compares userGuess to computerGuess

        // if the guess is correct do this


        // if the guess is incorrect do this

        // print the users guesses and place them in them list userGuesses
    }



    // reset the game and start again
    // --------------------------------------------------------------------
    function resetGame() {
        
        guessesLeft = 5;
        previousGuess = [];
        document.getElementById("userGuessesLeft").innerHTML = guessesLeft;
        document.getElementById("userPreviousGuesses").innerHTML = previousGuess;
        document.getElementById("computerChoice").innerHTML = computerChoice;
        
        game();
    }




    // Out of guesses for this game check
    // --------------------------------------------------------------------
    function outOfGuesses() {
        if (guessesLeft === 0) {
            console.log("Next I will take over the world");
            alert("game over you lose");
            losses++;
            document.getElementById("userLosses").innerHTML = losses;
            resetGame();
        } else {
            compareGuess();
            console.log("TRY AGAIN, WRONG GUESS")
        }

    }





}
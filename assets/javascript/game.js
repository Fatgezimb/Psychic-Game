// variables initialized

var wins = 0;
var losses = 0;
var guessesLeft = 5;
var computerChoice;

// List for the guess that the user does. These need to be printed on the page
var yourGuess = [];

// computers guess to appear when user loses or wins

// ======================================================================
// LOOK HERE TO FINISH THIS PART
var computerGuess = document.getElementById("computerGuess");

// ======================================================================
// score wins losses
var userWins = document.getElementById("userWins");
var userLosses = document.getElementById("userLosses");

// ======================================================================
// user guesses left
var userGuessesLeft = document.getElementById("userGuessesLeft");

// ======================================================================
// display users guesses
var userGuesses = document.getElementById("userGuesses");




// ======================================================================
// starts the game
game();

function game() {
    // computer needs to pick random letter
    var computerChoice = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
    console.log(computerChoice);

    // initiates the below function
    compareGuess();


// ======================================================================
    // correct guess funtion
    // Will determine if the letter guessed matched the computers guess
    function compareGuess() {
        
       
    //    Not working code :(
        // // get user guess
        // document.onkeyup = function (keyPress) {
        //     var yourGuess = String.keyPress.key
        //     console.log("This is your guess: " +yourGuess)
        // }
// ======================================================================
        document.onkeyup = function(event) {

            // Determines which key was pressed.
            var yourGuess = event.key;
            console.log("your guess: "+yourGuess);
            console.log("_______________________" )
        // Correct need to make wins go up by one

// ======================================================================

        if (yourGuess == computerChoice) {
            console.log("YOU WIN")
            wins++;
            console.log("Wins: "+wins )
            console.log("losses: "+losses )
            console.log("_______________________" )
        } 

// ======================================================================
        else if (yourGuess != computerChoice) {
            guessesLeft--;
            console.log("Wins: "+wins )
            console.log("gussesLeft: "+guessesLeft)
            console.log("_______________________" )

// ======================================================================
            if (guessesLeft <=0) {
                losses++
                console.log("Wins: "+wins )
                console.log("Losses: "+losses)
                console.log("_______________________" )
                // need to restart the game
            }

        
        }
        
        
        
        
        
        }
        
                

        // compares userGuess to computerGuess

        // if the guess is correct do this


        // if the guess is incorrect do this

        // print the users guesses and place them in them list yourGuess






    }







}






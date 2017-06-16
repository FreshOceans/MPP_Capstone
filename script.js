$(document).ready(function() {
  console.log("jQuery ready");

    var fortune = {
        // Arrays for items of game
        vowels: [ "A", "E", "I", "O", "U" ],
        consonants: [ "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z" ],
        wheel_1: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "2500", "Lose a Turn", "1000000"],
        wheel_2: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "3500", "Lose a Turn", "1000000"],
        wheel_3: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "5000", "Lose a Turn", "1000000"],

        // Initialize App
        Initialize: function() {
            clearPlayerReg();
        },
        // Enable Player Registration
        activateRegistrationBTN: function() {
        },
        // Clear Player Registration
        clearPlayerReg: function() {
        },
        // Enable Game Start
        activateStartBTN: function() {
        },
        // Enable Game Timer
        activateGameTimer:  function() {
        },
        // Enable New Game
        activateNewGameBTN: function() {
        },
        // Load Game Board
        loadGameBoard: function() {
            var $div = $("<div>", {id: "foo", "class": "a"});
            $div.click(function(){ /* ... */ });
            $("#box").append($div);
        },
        // Enable Spin Button
        activateSpinBTN: function() {
            displaySpinResult();
        },
        // Round Total Increment
        increseRdTotal: function() {
        },
        // Game Total Increment
        increseGameTotal: function() {
        },
        // Round Total Decrement
        decreseRdTotal: function() {
        },
        // Game Total Decrement
        decreseGameTotal: function() {
        },
        // Enable Solve the Puzzle Button
        activateSolveBTN: function() {
        },
        // Display Spin Result
        displaySpinResult: function() {
        },
        // Enable Buy Vowel Button
        activateVowelBTN: function() {
        },
        // Enable Guess Consonant Button
        activateGuessConsonant: function() {
        },
        // Create Turn Method

        // Display Initial Phrase
        displayInitalPhrase: function() {
        },
        // Enable Player Guess Field
        activatePlayerGuess: function() {
        },
        // Display Player Guess
        displayGuess: function() {
        },
        // End Game
        displayWinner: function() {
        }











    } // CLOSE fortune object


}); // CLOSE jQuery

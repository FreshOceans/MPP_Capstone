$(document).ready(function() {
  console.log("jQuery ready");

    var fortune = {
        // Arrays for items of game
        vowels: [ "A", "E", "I", "O", "U" ],
        consonants: [ "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z" ],
        wheel_1: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "2500", "Lose a Turn", "1000000"],
        // wheel_2: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "3500", "Lose a Turn", "1000000"],
        // wheel_3: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "5000", "Lose a Turn", "1000000"],
        myPlayers: [],
        phrase: [ "Casablanca", "The Matrix", "Shawkshank Redemption", "Toy Story", "Fight Club", "Inception", "The Dark Knight", "City of God", "The_Departed", "Seven Samurai" ],
        // ======= Initialize App =========
        Initialize: function() {
            console.log("== Initialize ==");
            this.activateUserInterface();
        },
        // ====== Enable User Interaction =======
        activateUserInterface: function() {
            console.log("== activateUserInterface ");
            var self = this;
            $('#registerBTN').on('click', function(e){
                console.log('-- registerBTN --');
                self.addNewPlayer();
            });
            $('#clearBTN').on('click', function(e){
                console.log("-- clearBTN --");
                $('#playerForm')[0].reset();
            });
        },
        // ======= Enable Add New Player =======
        addNewPlayer: function() {
            console.log("== addNewPlayer ==");
            var playerName = $('#playerName').val();
            // ===== Player Instance ====
            var nextPlayer = new this.Player(playerName);
            this.myPlayers.push(nextPlayer);
            console.log(this.myPlayers[this.myPlayers.length - 1]);
            this.createPlayerCard();
            this.activateStartBTN();
        },
        // ======= Player Constructor =======
        Player: function(playerName) {
            console.log("== Player ==");
            this.playerName = playerName;
        },
        createPlayerCard: function() {
            console.log("== createPlayerCard ==");
            var playerBoard = $('#playerBoard');
            for (var i = 0; i < this.myPlayers.length; i++) {
                nextPlayer = this.myPlayers[i];
                console.log("nextPlayer:", nextPlayer);
                var playerBox = $("<div>", {id: "player_" + i, class: "players"});
                $('#playerBoard').append(playerBox);
                $('#playerBoard').children().last().html(nextPlayer);
            };
        },
        // ======= Enable Game Start =======
        activateStartBTN: function() {
            console.log("== activateStartBTN ==");
            var self = this;
            $('#startBTN').on('click', function(e){
                console.log('-- startBTN --');
            self.loadGameBoard();
            // this.activateGameTimer();
            // this.activateNewGameBTN();
            });
        },
        // ===== Enable Game Timer =====
        activateGameTimer: function() {
        },
        // Enable New Game
        activateNewGameBTN: function() {
        },
        // ===== Load Game Board =====
        loadGameBoard: function() {
            console.log("== loadGameBoard ==");
            // var gameBoard = $('#gameBoard');
            var activePhrase = this.phrase[0];
            for (var i = 0; i < activePhrase.length; i++) {
                nextLetter = activePhrase[i];
                console.log("nextLetter:", nextLetter);
                var letterBox = $("<div>", {id: "letter_" + i, class: "letters"});
                $('#board').append(letterBox);
                $('#board').children().last().html(nextLetter);
            };
        },
        // Create Turn Method
        activatePlayerTurn: function() {
            // this.activateSpinBTN();
        },
        // Enable Spin Button
        activateSpinBTN: function() {
            // displaySpinResult();
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
        // Display Initial Phrase
        displayInitalPhrase: function() {
        },
        // Enable Player Guess Field
        activatePlayerGuess: function() {
            // activateAnswerBTN();
        },
        // Enable Answer Button
        activateAnswerBTN: function() {
        },
        // Display Player Guess
        displayGuess: function() {
        },
        // End Game
        displayWinner: function() {
        }




    }; // CLOSE fortune object
    fortune.Initialize(); // Kick off App

}); // CLOSE jQuery

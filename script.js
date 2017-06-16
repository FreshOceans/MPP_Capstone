$(document).ready(function() {
  console.log("jQuery ready");

    var fortune = {
        // Arrays for items of game
        vowelsArray: [ "A", "E", "I", "O", "U" ],
        consonantsArray: [ "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z" ],
        wheel_1: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "2500", "Lose a Turn", "1000000"],
        myPlayers: [],
        activePlayer: null,
        phrasesArray: [
            { name: "Casablanca", category: "Movies"},
            { name: "Inception", category: "Movies"},
            { name: "Toy Story", category: "Movies" },
            { name: "Soccer", category: "Sports"},
            { name: "Tennis", category: "Sports"}
        ],
        activePhrase: null,
        guesesArray: [],
        // ======= Initialize App =========
        Initialize: function() {
            console.log("== Initialize ==");
            this.activateUserInterface();
        },
        // ====== Enable User Interaction =======
        activateUserInterface: function() {
            // console.log("== activateUserInterface ");
            var self = this;
            $('#registerBTN').on('click', function(e){
                // console.log('-- registerBTN --');
                self.addNewPlayer();
            });
            $('#clearBTN').on('click', function(e){
                // console.log("-- clearBTN --");
                $('#playerForm')[0].reset();
            });
        },
        // ======= Enable Add New Player =======
        addNewPlayer: function() {
            // console.log("== addNewPlayer ==");
            var playerName = $('#playerName').val();
            // ===== Player Instance ====
            var nextPlayer = new fortune.Player(playerName);
            // console.log(this.myPlayers[this.myPlayers.length - 1]);
            console.log(fortune.myPlayers);
            if (fortune.myPlayers.length < 1) {
                this.activateStartBTN();
            };
            fortune.myPlayers.push(nextPlayer);
        },
        // ======= Player Constructor =======
        Player: function(playerName) {
            // console.log("== Player ==");
            this.playerName = playerName;
        },
        createPlayerCard: function() {
            // console.log("== createPlayerCard ==");
            var playerBoard = $('#playerBoard');
            for (var i = 0; i < this.myPlayers.length; i++) {
                nextPlayer = this.myPlayers[i];
                // console.log("nextPlayer:", nextPlayer);
                var playerBox = $("<div>", {id: "player_" + i, class: "players"});
                $('#playerBoard').append(playerBox);
                $('#playerBoard').children().last().html(nextPlayer.playerName);
            };
        },
        // ======= Enable Game Start =======
        activateStartBTN: function() {
            // console.log("== activateStartBTN ==");
            var self = this;
            $('#startBTN').on('click', function(e){
                console.log('-- startBTN --');
            fortune.createPlayerCard();
            fortune.loadGameBoard();
            fortune.displayCategory();
            // this.activateNewGameBTN();
            fortune.activateGuessBTN();
            });
        },
        // ======= Enable New Game ======
        activateNewGameBTN: function() {
        },
        // ======= Load Category =======
        displayCategory: function() {
            console.log("== loadCategory ==");
            var activeCategory = fortune.activePhrase.category;
            $('#category').html("<p>" + activeCategory + "</p>");
        },
        // ===== Load Game Board =====
        loadGameBoard: function() {
            console.log("== loadGameBoard ==");
            var phraseIndex = Math.floor(Math.random() * fortune.phrasesArray.length) + 1;
            console.log(phraseIndex);
            var activePhrase = fortune.phrasesArray[phraseIndex].name;
            console.log("activePhrase:", activePhrase);
            fortune.activePhrase = fortune.phrasesArray[phraseIndex];
            for (var i = 0; i < activePhrase.length; i++) {
                nextLetter = activePhrase[i];
                console.log("nextLetter:", nextLetter);
                var letterBox = $("<div>", {id: "letter_" + i, class: "letters"});
                $('#board').append(letterBox);
                $('#board').children().last().html(nextLetter);
            };
        },
        // Enable Player Guess Field
        activateGuessBTN: function() {
            console.log("== activatePlayerGuess ==");
            $('#guessBTN').on('click', function(e){
                console.log('-- guessBTN --');
                // fortune.playerGuess();
            });
        },
        // Check GuessText with Phrase
        playerGuess: function() {
            console.log("== playerGuess ==");
            var guessText = $('#guessText').text();
            console.log(guessText);
            for (var i = 0; i < this.activePhrase.length; i++) {
                nextLetter = activePhrase[i];
                console.log("nextLetter:", nextLetter);
            };
        },

        // Display Player Guess
        displayGuess: function() {
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
        increaseRdTotal: function() {
        },
        // Game Total Increment
        increaseGameTotal: function() {
        },
        // Round Total Decrement
        decreaseRdTotal: function() {
        },
        // Game Total Decrement
        decreaseGameTotal: function() {
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
        // End Game
        displayWinner: function() {
        }




    }; // CLOSE fortune object
    fortune.Initialize(); // Kick off App

}); // CLOSE jQuery

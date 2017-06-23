$(document).ready(function() {
  console.log("jQuery ready");

    var fortune = {
        // ======= Arrays for items of game=======
        vowelsArray: [ "A", "E", "I", "O", "U" ],
        consonantsArray: [ "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z" ],
        wheel_1: ["Bankrupt", "Bankrupt", "800", "800", "900", "900", "900", "600", "600", "700", "700", "700", "550", "650", "650", "2500", "Lose a Turn", "1000000"],
        myPlayers: [],
        activePlayer: null,
        phrasesArray: [
            { name: "casablanca", category: "Movies"},
            { name: "inception", category: "Movies"},
            { name: "psycho", category: "Movies" },
            { name: "gozilla", category: "Movies"},
            { name: "scarface", category: "Movies"},
            { name: "titanic", category: "Movies"},
            { name: "underworld", category: "Movies"}
        ],
        activePhrase: null,
        currentLetter: null,
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
        // ======= Create Player Board with Scores ======
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
        createPlayerScore: function() {
            // console.log("== createPlayerCard ==");
            var playerBoard = $('#playerBoard');
            for (var i = 0; i < this.myPlayers.length; i++) {
                nextPlayer = this.myPlayers[i];
                // console.log("nextPlayer:", nextPlayer);
                var playerScore = $("<div>", {id: "playerScore_" + i, class: "playerScores"});
                $('#playerBoard').append(playerScore);
                $('#playerBoard').children().last().html('Score: 0');
            };
        },
        // ======= Enable Game Start =======
        activateStartBTN: function() {
            // console.log("== activateStartBTN ==");
            var self = this;
            $('#startBTN').on('click', function(e){
                console.log('-- startBTN --');
            fortune.createPlayerCard();
            fortune.createPlayerScore();
            fortune.loadGameBoard();
            fortune.displayCategory();
            fortune.activateNewGameBTN();
            fortune.activateGuessBTN();
            });
        },
        // ======= Enable New Game ======
        activateNewGameBTN: function() {
            console.log("== activateNewGameBTN ==");
            $('#newGameBTN').on('click', function(e){
                console.log('-- newGameBTN --');
                fortune.newGame();
            });
        },
        // ====== New Game (Reset) =======
        newGame: function() {
            console.log("== newGame ==");
            location.reload();
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
            var phraseIndex = Math.floor(Math.random() * fortune.phrasesArray.length);
            console.log(phraseIndex);
            var activePhrase = fortune.phrasesArray[phraseIndex].name;
            console.log("activePhrase:", activePhrase);
            fortune.activePhrase = fortune.phrasesArray[phraseIndex];
            for (var i = 0; i < activePhrase.length; i++) {
                nextLetter = activePhrase[i];
                console.log("nextLetter:", nextLetter);
                // var letterBox = $("<div>", {id: "letter_" + i, class: "letters"});
                var letterBox = "<div id='letter_" + i + "'class='letterBox'><p id='text_" + i + "'class='letter'>" + nextLetter + "</p></div>"
                // console.log(letterBox);
                $('#board').append(letterBox);
                // $('#board').children().last().html(nextLetter);
            };
        },
        // ======= Enable Player Guess Field =======
        activateGuessBTN: function() {
            console.log("== activatePlayerGuess ==");
            $('#guessBTN').on('click', function(e){
                console.log('-- guessBTN --');
                fortune.playerGuess();
            });
        },
        // ======= Check GuessText with Phrase =======
        playerGuess: function() {
            console.log("== playerGuess ==");
            var guessText = $('#guessText').val();
            console.log("guessText:", guessText);
            console.log("fortune.activePhrase:", fortune.activePhrase);
            // get current cash total
            for (var i = 0; i < fortune.activePhrase.name.length; i++) {
            // console.log("fortune.activePhrase:", fortune.activePhrase);
                var checkLetter = fortune.activePhrase.name[i];
                console.log("checkLetter:", checkLetter);
                if (guessText == checkLetter) {
                    $('#board').find('#text_' + i).css('visibility', 'visible');
                };
            };
        }





    }; // CLOSE fortune object
    fortune.Initialize(); // Kick off App

}); // CLOSE jQuery




// console.log();
// reveal letter
// math total rd cash increase by spin value
// };
//         // if (checkLetter == " ") {
//         //     $('#letter_' + i).css('visibility', 'hidden');
//         //     // change css to background-color
//         // };
//     };
//     // get current cash value, if increased then spin, else same next player turn.

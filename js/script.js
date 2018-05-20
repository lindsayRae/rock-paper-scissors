$(document).ready(function () {
        console.log("Hello Gamer");

        var options = ["rock", "paper", "scissors"]

        //console.log(options[2]);
        function checkWinner(user, comp) {

                var winner
                var computerChoice = Math.floor((Math.random() * 3) + 1);

                if (user == "rock") {

                        if (comp == 1) {
                                return "Player 1 you tie! You selected rock and computer selected " + options[0];

                        } else if (comp == 2) {
                                return "Player 1 you lose. You selected rock and computer selected " + options[1];

                        } else {
                                return "Player 1 you WIN!!! You selected rock and computer selected " + options[2];
                        }
                }

                if (user == "paper") {
                        if (comp == 1) {
                                return "Player 1 you WIN!!! You selected paper and computer selected " + options[0];
                        } else if (comp == 2) {
                                return "Player 1 you tie. You selected paper and computer selected " + options[1];
                        } else {
                                return "Player 1 you lose..You selected paper and computer selected " + options[2];
                        }
                }

                if (user == "scissors") {
                        if (comp == 1) {
                                return "Player 1 you lose..You selected scissors and computer selected " + options[0];
                        } else if (comp == 2) {
                                return "Player 1 you WIN!!! You selected scissors and computer selected " + options[1];
                        } else {
                                return "Player 1 you tie. You selected paper and computer selected " + options[2];
                        }
                }
        }

        // KEY 1 is Rock, 2 is Paper, 3 is Scissors

        $("#rock").click(function () {
                console.log("Test rock");
                event.preventDefault();
                $("#resultBox").empty();
                var computerChoice = Math.floor((Math.random() * 3) + 1);
                var result = checkWinner("rock", computerChoice);
                $("#resultBox").append(result);

        });

        $("#paper").click(function () {
                event.preventDefault();
                $("#resultBox").empty();
                var computerChoice = Math.floor((Math.random() * 3) + 1);
                var result = checkWinner("paper", computerChoice);
                $("#resultBox").append(result);
        });

        $("#scissors").click(function () {
                event.preventDefault();
                $("#resultBox").empty();
                var computerChoice = Math.floor((Math.random() * 3) + 1);
                var result = checkWinner("scissors", computerChoice);
                $("#resultBox").append(result);

        });

});
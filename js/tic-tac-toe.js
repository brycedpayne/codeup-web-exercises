// (function () {

    'use strict'


    // function ticTacToe() {


        // Tic-Tac-Toe

        class Player // player
        {
            constructor(name) // construction of player requires only a name
            {
                this.name = name;
            }
        }

        const Display = array => // Display the grid by using the array parameter values and text mecanics
        {
            console.log(`\n ${array[0]} | ${array[1]} | ${array[2]}\n ---------\n ${array[3]} | ${array[4]} | ${array[5]}\n ---------\n ${array[6]} | ${array[7]} | ${array[8]}\n \n`);
        }

        const InitTicTacToe = tictactoeArray => // Initialize the array to make an empty grid
        {
            for (let i = 0; i < 9; i++) {
                tictactoeArray[i] = " ";
            }
        }

        const WinTicTacToe = (tictactoeArray, lastPlayer) => // Return 1 if a winning condition is true
        {
            if ((((tictactoeArray[0] === tictactoeArray[1]) && (tictactoeArray[1] === tictactoeArray[2])) && ((tictactoeArray[0] === "X") || (tictactoeArray[0] === "O"))) // Top horizontal
                || (((tictactoeArray[3] === tictactoeArray[4]) && (tictactoeArray[4] === tictactoeArray[5])) && ((tictactoeArray[3] === "X") || (tictactoeArray[3] === "O"))) // Middle horizontal
                || (((tictactoeArray[6] === tictactoeArray[7]) && (tictactoeArray[7] === tictactoeArray[8])) && ((tictactoeArray[6] === "X") || (tictactoeArray[6] === "O"))) // Bottom horizontal
                || (((tictactoeArray[0] === tictactoeArray[3]) && (tictactoeArray[3] === tictactoeArray[6])) && ((tictactoeArray[0] === "X") || (tictactoeArray[0] === "O"))) // Left vertical
                || (((tictactoeArray[1] === tictactoeArray[4]) && (tictactoeArray[4] === tictactoeArray[7])) && ((tictactoeArray[1] === "X") || (tictactoeArray[1] === "O"))) // Middle vertical
                || (((tictactoeArray[2] === tictactoeArray[5]) && (tictactoeArray[5] === tictactoeArray[8])) && ((tictactoeArray[2] === "X") || (tictactoeArray[2] === "O"))) // Right vertical
                || (((tictactoeArray[0] === tictactoeArray[4]) && (tictactoeArray[4] === tictactoeArray[8])) && ((tictactoeArray[0] === "X") || (tictactoeArray[0] === "O"))) // Left top bottom right diagonal
                || (((tictactoeArray[2] === tictactoeArray[4]) && (tictactoeArray[4] === tictactoeArray[6])) && ((tictactoeArray[2] === "X") || (tictactoeArray[2] === "O")))) {
                console.log(`${lastPlayer.name} won !`); // Display the victory
                return 1; // return 1
            }
        }


        const GameTicTacToe = (tictactoeArray, player1, player2) => // Play the game itself
        {
            InitTicTacToe(tictactoeArray); // Initialize the array
            let usedLocation = []; // Array of locations already used
            let i = 0; // while loop variable
            let winner = "no"; // winner detection
            while ((i < tictactoeArray.length) && (winner != "yes")) // 9 turns or less if there is a winner
            {
                let lastPlayer = ""; // Last player
                let location = ""; // Location where you want to put your mark
                if ((i % 2) === 0) // Player 1 turn
                {
                    location = Number(prompt(`${player1.name}, choose your X`)); // Location where you want to put your mark
                    for (let i = 0; i < usedLocation.length; i++) // Look in the array of locations already used
                    {
                        while ((location === usedLocation[i]) || ((location !== 1) && (location !== 2) && (location !== 3) && (location !== 4)
                            && (location !== 5) && (location !== 6) && (location !== 7) && (location !== 8) && (location !== 9))) // Any used location or wrong location
                        {
                            alert("Please make a valid location choice");
                            location = Number(prompt(`${player1.name}, choose your X`)); // Re-enter a valid choice
                        }
                    }
                    tictactoeArray[location - 1] = "X"; // Update the grid with the mark
                    lastPlayer = player1; // Update the last player
                } else // Player 2 turn
                {
                    location = Number(prompt(`${player2.name}, choose your O`)); // Location where you want to put your mark
                    for (let i = 0; i < usedLocation.length; i++) // Look in the array of locations already used
                    {
                        while ((location === usedLocation[i]) || ((location !== 1) && (location !== 2) && (location !== 3) && (location !== 4)
                            && (location !== 5) && (location !== 6) && (location !== 7) && (location !== 8) && (location !== 9))) // Any used location or wrong location
                        {
                            alert("Please make a valid location choice");
                            location = Number(prompt(`${player2.name}, choose your O`)); // Re-enter a valid choice
                        }
                    }
                    tictactoeArray[location - 1] = "O"; // Update the grid with the mark
                    lastPlayer = player2; // Update the last playe
                }
                usedLocation.push(location); // Update the array with the previous used location
                for (let i = 0; i < usedLocation.length; i++) {
                    console.log(`${usedLocation[i]}	`);                ///////////////////////////
                }
                console.log(`Round ${i + 1} :\n`); // Display the round no at the end of the round
                Display(tictactoeArray); // Display the grid at the end of the round
                if (WinTicTacToe(tictactoeArray, lastPlayer) === 1) // Check if someone just won, function return 1
                {
                    winner = "yes"; // winner string changed to yes if someone won
                }
                ;
                i++; // while incrementation
            }
        }

        const player1 = new Player(prompt("Choose player 1 name :")); // Create player 1
        const player2 = new Player(prompt("Choose player 2 name :")); // Create player 2
        alert("TIC-TAC-TOE !"); // Beginning message
        let choice = ""; // choice
        choice = Number(prompt("Make your choice :\n 1 : Play \n 2 : Change Name\n 0 : Quit")); // Turn the choice into a number
        while (choice !== 0) // While user don't choose to leave
        {
            switch (choice) // switch the choice
            {
                case 1:
                    const tictactoeArray = [];
                    GameTicTacToe(tictactoeArray, player1, player2); // Play the game
                    break;

                case 2:
                    player1.name = prompt("Choose player 1 name :"); // Change player 1 name
                    player2.name = prompt("Choose player 2 name :"); // Change player 2 name
                    break;
            }
            choice = Number(prompt("Make your choice :\n 1 : Play \n 2 : Change Name\n 0 : Quit")); // Turn the choice into a number
        }

        alert("Goodbye !"); // End message

    // }

// })();
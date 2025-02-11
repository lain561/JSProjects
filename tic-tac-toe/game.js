"use strict";

const Game = (() => {
    const winCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    let playerTurn = 1; 
    let gameResult = false; 

    const playText = document.querySelector(".game-turn"); // displays player 1/2's turn
    // Player factory function
    const createPlayer = (name, value) => ({ name, value }); 
    
    let player1 = createPlayer("Player 1", "X");
    let player2 = createPlayer("Player 2", "O");

    const startButton = document.querySelector(".start"); // starts game and renders board
    startButton.addEventListener("click", (event) => {
        const player1Name = document.getElementById("player1").value;
        const player2Name = document.getElementById("player2").value;
        start(player1Name, player2Name);
        gameResult = false;
        event.preventDefault();
    }); 

    const start = (player1Name, player2Name) => {
        if (player1Name && player2Name){
            player1 = createPlayer(player1Name, "X");
            player2 = createPlayer(player2Name, "O");
        }
        
        if(!gameBoard.checkBoard()){
            gameBoard.renderBoard();
        } else{
            gameBoard.clearBoard();
        }

        playText.innerHTML = `${player1.name}'s Turn (X)`;
    };

    // Button to reset the game board
    const restartButton = document.querySelector(".restart"); 
    restartButton.addEventListener("click", (event) => { 
        gameBoard.clearBoard();
        playerTurn = 1;

        if(playText.innerHTML){
            playText.innerHTML = `${player1.name}'s Turn (X)`;
        }

        event.preventDefault(); // prevent form from submitting
        gameResult = false;
    }); 

     // Inserts X/O accordingly based on turn
     const insertMove = (tile) => {
        //check if game is ongoing
        if(!gameResult){
            // If tile has not been used
            if(!tile.innerHTML){
                const index = tile.id.split('-')[1];;
                
                // / Player 1's turn
                if(playerTurn === 1){
                    gameBoard.setBoard(index, "X");
                    tile.innerHTML = player1.value;
                    playText.innerHTML = `${player2.name}'s Turn (O)`;
                    checkWin(); 
                    playerTurn = 2;
                }
                // Player 2's turn
                else if(playerTurn === 2){
                    gameBoard.setBoard(index, "O");
                    tile.innerHTML = player2.value;
                    playText.innerHTML = `${player1.name}'s Turn (X)`; 
                    checkWin(); 
                    playerTurn = 1; 
                }       
            }
        }
    }

    const checkWin = () => {
        const board = gameBoard.getBoard();
        console.log(board);
        

        for(let i = 0; i < winCombos.length; i++){
            const combo = winCombos[i];
            const cell1 = board[combo[0]];
            const cell2 = board[combo[1]];
            const cell3 = board[combo[2]];

            if(cell1 === "" && cell2 === "" && cell3 === ""){
                continue;
            }

            if((cell1 === cell2) && (cell2 === cell3)){
                gameResult = true; 
                break;
            }
        }

        if(gameResult){
            if(playerTurn === 1){
                playText.innerHTML = `${player1.name} (X) WINS!`
            } else{
                playText.innerHTML = `${player2.name} (O) WINS!`
            }
        }

        else if(!board.includes("")){
            playText.innerHTML = `DRAW!`
        }
    };

    return { insertMove }
})(); 

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""]; // create board with 9 tiles 

    const gameTiles = document.querySelector(".game-tiles"); // container to store the game tiles

    // Renders gameboard tiles onto the DOM
    const renderBoard = () => {
        for(let i = 0; i < 9; i++){
            const tile = document.createElement("button"); 
            tile.classList.add("tile"); // add appropriate styling
            tile.id = `square-${i}`; // assign id for future indexing
            tile.addEventListener("click", () => Game.insertMove(tile)); // create event-listener for player's move
            gameTiles.appendChild(tile); // insert into grid
        }
    };

    // Resets the game board
    const clearBoard = () => {
        const tiles = document.querySelectorAll(".tile"); // gets list of tiles for the game

        // For each tile in the grid
        tiles.forEach((tile) => {
            tile.innerHTML = ""; // clear current game
        });

        board = ["", "", "", "", "", "", "", "", ""];
    };
    
    const checkBoard = () => {
        return gameTiles.innerHTML;
    };  

    const setBoard = (index, symbol) => {
        board[index] = symbol;
    };

    const getBoard = () => {
        return board;
    };

    return { renderBoard, clearBoard, checkBoard, setBoard, getBoard }; // return function as object 
})();


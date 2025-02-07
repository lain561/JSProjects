const Game = (() => {
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

        playText.innerHTML = `${player1.name}'s Turn`;
    };

    // Inserts X/O accordingly based on turn
    const insertMove = (tile) => {
        // If tile has not been used
        if(!tile.innerHTML){
            // / Player 1's turn
            if (playerTurn === 1){
                tile.innerHTML = player1.value;
                playText.innerHTML = `${player2.name}'s Turn`;
                playerTurn = 2;
            }
            // Player 2's turn
            else if (playerTurn === 2){
                tile.innerHTML = player2.value;
                playText.innerHTML = `${player1.name}'s Turn`; 
                playerTurn = 1;
            }        
        }
    }

    // Button to reset the game board
    const restartButton = document.querySelector(".restart"); 
    restartButton.addEventListener("click", (event) => { 
        gameBoard.clearBoard();
        playerTurn = 1;

        if(playText.innerHTML){
            playText.innerHTML = `${player1.name}'s Turn`;
        }

        event.preventDefault(); // prevent form from submitting
    }); 

    return { insertMove }
})(); 

const gameBoard = (() => {
    let board = new Array(9); // create board with 9 tiles 

    const gameTiles = document.querySelector(".game-tiles"); // container to store the game tiles

    // Renders gameboard tiles onto the DOM
    const renderBoard = () => {
        for(let i = 0; i < 9; i++){
            const tile = document.createElement("button"); 
            tile.classList.add("tile"); // add appropriate styling
            tile.id = `square${i}`; // assign id for future indexing
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
    };
    
    const checkBoard = () => {
        return gameTiles.innerHTML;
    };  

    return { renderBoard, clearBoard, checkBoard }; // return function as object 
})();
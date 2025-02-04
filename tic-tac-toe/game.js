// Object to control flow of game
const Game = {
    "gameBoard": [],
    "gameResult": false,
    "playerTurn": 1
}

// Start new game
const player1 = new Player(1);
const player2 = new Player(2);

const gameBoard = document.querySelector(".game-tiles"); // container to store the game tiles
const playText = document.querySelector(".turn"); // displays player 1/2's turn
const restartButton = document.querySelector(".restart"); // button to clear the game board
restartButton.addEventListener("click", clearGame); 
createTiles(); // create tic-tac-toe grid
const tiles = document.querySelectorAll(".tile"); //gets list of tiles for the game

function Player(){
    this.score = 0;
}

// Creates the 3x3 grid for the game
function createTiles(){
    for(let i = 0; i < 9; i++){
        const tile = document.createElement("button"); 
        tile.classList.add("tile"); // add appropriate styling
        tile.addEventListener("click", () => insertMove(tile)); // create event-listener for player's move
        gameBoard.appendChild(tile); //insert into grid
    }
}

// Inserts X/O accordingly based on turn
function insertMove(tile){
    // If tile has not been used
    if(tile.innerHTML == ""){
        // / Player 1's turn
        if (Game.playerTurn === 1){
            tile.innerHTML = "X";
            playText.innerHTML = "Player 2's Turn (O)";
            Game.playerTurn = 2;
        }
        // Player 2's turn
        else if (Game.playerTurn === 2){
            tile.innerHTML = "O";
            playText.innerHTML = "Player 1's Turn (X)";
            Game.playerTurn = 1;
        }        
    }
}

function clearGame(){   
    // For each tile in the grid
    tiles.forEach((tile) => {
        tile.innerHTML = ""; // clear current game
    });

    playText.innerHTML = "Player 1's Turn (X)"; // reset turns
    Game.playerTurn = 1;
}
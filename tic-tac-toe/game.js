const gameBoard = document.querySelector(".game-tiles"); // container to store the game tiles
const playerTurn = document.querySelector(".turn"); // displays player 1/2's turn
const restartButton = document.querySelector(".restart"); // button to clear the game board
restartButton.addEventListener("click", clearGame);
createTiles(); // create tic-tac-toe grid

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
    if (playerTurn.innerHTML === "Player 1's Turn"){
        tile.innerHTML = "X";
        playerTurn.innerHTML = "Player 2's Turn";
    }
    else if (playerTurn.innerHTML === "Player 2's Turn"){
        tile.innerHTML = "O";
        playerTurn.innerHTML = "Player 1's Turn";
    }
}

function clearGame(){
    for(let i = 0; i < 9; i++){

    }
}
// Run function with 16 boxes initially to start program

// Create grid with drawable boxes
function createGrid(boxes) {

    const container = document.querySelector("canvas"); // retrive sketch container

    // For each x by x, dimension
    for (let i = 0; i < boxes; boxes++) 
        for (let j = 0; i < boxes; boxes++) {
            const newDiv = document.createElement("div"); // create grid box 
            newDiv.classList.add(); // add styling for box 
            container.appendChild(newDiv); // append box into parent container
        }
}


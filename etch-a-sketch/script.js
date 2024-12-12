document.addEventListener("DOMContentLoaded", createCanvas(16));

function createCanvas(size){
    const canvas = document.querySelector(".canvas");
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let dimensions = size*size; 

    for(let i = 0; i < dimensions; dimensions++){
        const newDiv = document.createElement("div"); 
        canvas.insertAdjacentElement("beforeend", newDiv);
    }
}
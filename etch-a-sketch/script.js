let color, click = false;
document.addEventListener("DOMContentLoaded", createCanvas(16)); // create 16x16 canvas by default

document.querySelector("body").addEventListener("click", (event) => {
    if(event.target.tagName != "BUTTON"){
        click = !click; 
        const status = document.getElementById("status"); 
        if(click){
            status.innerHTML = "Enabled";
            status.classList.replace("text-danger", "text-success");
        }
    
        else{
            status.innerHTML = "Disabled";
            status.classList.replace("text-success", "text-danger");
        }
    }
});

// Create canvas with inputted size
function createCanvas(size){
    const canvas = document.querySelector(".canvas");
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let dimensions = size*size; 

    for(let i = 0; i < dimensions; i++){
        const newDiv = document.createElement("div");  
        newDiv.addEventListener("mouseover", selectColor);
        newDiv.classList.add("box");
        canvas.insertAdjacentElement("beforeend", newDiv);
    } 
}

// Changes color to
function selectColor(){
    if(click){
        if(color) {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        // If color button was toggled 
        else
            this.style.backgroundColor = "black";
    }
}

// Resizes canvas
function selectSize(){
    let input = prompt("Enter a number from 1-100 for the canvas dimensions.\n(Default size is 16)"); 
    
    // Input empty or is not number
    if(input == null || isNaN(input)){
        alert("Please enter a number between 1 and 100."); 
    }
    // Input is invalid number
    else if(input <= 0 || input > 100){
        alert("Please enter a number between 1 and 100."); 
    }

    // Input is valid
    else{
        createCanvas(parseInt(input)); // resize canvas
        alert("Canvas successfully resized."); 
    }
}

// Reset canvas
function clearCanvas(){
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => { box.style.backgroundColor = "white"}); 
}
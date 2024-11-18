const calcDisplay = document.querySelector(".results-box-text"); // calculator display
let result = ""; // mathematical expression for calculation 

// Updates input into calculator's display
function updateDisplay(input) {
  // If error message in display
  if (calcDisplay.textContent === "Error") 
    clearDisplay(); // clear display

  // If input will not overflow text 
  if (calcDisplay.textContent.length < 12 || calcDisplay.classList.contains("overflow")) {
    // If first input is a minus
    if (input === "-" && calcDisplay.textContent === "") 
      calcDisplay.textContent += input; // do not include spaces
    
    // If input is an operator
    else if (
      input === "%" ||
      input === "/" ||
      input === "*" ||
      input === "-" ||
      input === "+"
    ) 
      calcDisplay.textContent += ` ${input} `; // add spacing
    
    // If first input is a number or decimal
    else if (calcDisplay.textContent === "0" && input !== "0") 
      calcDisplay.textContent = input; // display input
    
    // if input is a number or decimal
    else 
      calcDisplay.textContent += input; // append to display
  }

  result += input; // build expression for evaluation 
}

// Clears the calculator's display and expression
function clearDisplay() {
  calcDisplay.textContent = ""; 
  result = ""; 
  calcDisplay.classList.remove("overflow"); 
}

// Remove character from display 
function backspace() {
  const len = calcDisplay.textContent.length; 

  if (calcDisplay.textContent === "Error") 
    clearDisplay(); // clear display if error

  else if (calcDisplay.textContent.charAt(len-1) === " ")
    calcDisplay.textContent = calcDisplay.textContent.substring(0, len-3) // remove operator with spacing

  else
    calcDisplay.textContent = calcDisplay.textContent.substring(0, len-1) // remove most-recent character 
}

// Calculate expressions
function calculate() {
  try {
    // If evaluation is possible
    calcDisplay.textContent = eval(result); // evalaute expression
    handleOverflow();
  } 
  catch (error) {
    // If evlauation is impossible
    calcDisplay.textContent = "Error"; // output error message
  }
}

// Handle overflowing numbers 
function handleOverflow() {
  // If num will cause overflow
  if(calcDisplay.textContent.length > 12)
    calcDisplay.classList.add("overflow"); // decrease font size 

  else
    calcDisplay.classList.remove("overflow"); 
}
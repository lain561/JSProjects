const calcDisplay = document.querySelector(".results-box-text"); // retrives calculator's display

// Updates input into calculator's display
function updateDisplay(input) {
  // If error message in display
  if (calcDisplay.textContent === "Error") {
    calcDisplay.textContent = ""; // clear display
  }

  // If first input is a minus
  if (input === "-" && calcDisplay.textContent === "") {
    calcDisplay.textContent += `${input}`; // do not include spaces
  }

  // If input is an operator
  else if (
    input === "%" ||
    input === "/" ||
    input === "*" ||
    input === "-" ||
    input === "+"
  ) {
    calcDisplay.textContent += ` ${input} `; // add spacing
  }

  //If first input is a number or decimal
  else if (calcDisplay.textContent === "0" && input !== "0") {
    calcDisplay.textContent = `${input}`; // display input
  }

  //if input is a number or decimal
  else {
    calcDisplay.textContent += `${input}`; //appenmd to display
  }
}

// Clears the calculator's display
function clearDisplay() {
  calcDisplay.textContent = ""; // reset the display
}

// Calculate expressions
function calculate() {
  try {
    // If evaluation is possible
    calcDisplay.textContent = eval(calcDisplay.textContent);
  } catch (error) {
    // If evlauation is impossible
    calcDisplay.textContent = "Error";
  }
}

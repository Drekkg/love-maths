//wait for the DOM to load before running the game
//get the button elements ana add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswer();
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
  }
  runGame("addition");
});

document.getElementById("answer-box").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
  checkAnswer();
}
})

/**
 * The main game loop first loaded when the script is called
 * and after the users answer has been processed
 */
function runGame(gameType) {
   //clear the answer box
  document.getElementById("answer-box").value = "";
  document.getElementById("answer-box").focus();


  //creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
  } else if (gameType === "subtract") {
    displaySubtractQuestion(num1, num2);
  } else if (gameType === "multiply") {
    displayMultiplyQuestion(num1, num2);
  } else if (gameType === "division") {
    displayDivideQuestion(num1, num2);               
  } else {
    alert(`Unknown Gametype ${gameType}`);
    throw `Unknown Gametype ${gameType} aborting`;
  }
}

/** checks the answer against the first element of returned
 * array from calculate answer */
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById("answer-box").value);
  let calculatedAnswer = calculateCorrectAnswer();
  let isCorrect = calculatedAnswer[0] === userAnswer;
  if (isCorrect) {
    incrementScore();
    alert("Hey Well done! :D");
  } else {
    alert(
      `Awww you answered ${userAnswer} the correct answer is ${calculatedAnswer[0]}`     
    );
    incrementWrongAnswer();
  }
  
  runGame(calculatedAnswer[1]);
}
/**Gets the operands and operator from the dom
 * and returns the correct answer
 */
function calculateCorrectAnswer() {
  let operand1 = parseInt(document.getElementById("operand1").innerText);
  let operand2 = parseInt(document.getElementById("operand2").innerText);
  let operator = document.getElementById("operator").innerText;
  if (operator === "+") {
    return [operand1 + operand2, "addition"];
  } else if(operator === "x"){
    return [operand1 * operand2, "multiply"];
  }else if(operator === "-"){
    return[operand1 - operand2, "subtract"];
  }else if(operator === "/"){
     return[operand1 / operand2, "division"];
  }
  else {
    alert("umimplemented operator");
  }
}

/**Gets current score from the dom and increments the score by 1  */
function incrementScore() {
  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;
}

/**Gets current incorrect from the dom and increments the incorrect answer by 1  */
function incrementWrongAnswer() {
  let oldIncorrect = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++oldIncorrect;
}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent = operand2 > operand1 ? operand1 : operand2;
  document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "x";
}

function displayDivideQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
  document.getElementById("operand2").textContent = operand2 > operand1 ? operand1 :  operand2;
  if(operand1 % operand2 != 0 || operand1 === operand2) {
    
    runGame("division");
  }
  document.getElementById("operator").textContent = "/";
}

//wait for the DOM to load before running the game
//get the button elements ana add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
               runGame(gameType);
            }
        });
    }
    runGame("addition")
})





/**
 * The main game loop first loaded when the script is called 
 * and after the users answer has been processed
 */
function runGame(gameType){
    //creates two random numbers between 1 and 25 
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;
  if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
   
  } else if (gameType === "subtract"){
    displaySubtractQuestion(num1, num2);
  }
  else if (gameType === "multiply"){
    displayMultiplyQuestion(num1, num2);
  } 
  else if (gameType === "division"){
    displayDivideQuestion(num1, num2);
  } else {
    alert(`Unknown Gametype ${gameType}` );
    throw(`Unknown Gametype ${gameType} aborting`);
  }


};

/** checks the answer against the first element of returned 
 * array from calculate answer */
function checkAnswer() {

let userAnswer = parseInt(document.getElementById("answer-box").value);
let calculatedAnswer = calculateCorrectAnswer();
let isCorrect = calculatedAnswer[0] === userAnswer;
if(isCorrect){
    alert("Hey Well done! :D")
} else {
    `Awww you answered ${userAnswer} the correct answer is ${calculatedAnswer[0]}`;
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
    if(operator === "+"){
        return [operand1 + operand2, "addition"];
    }else {
        alert("umimplemented operator");
    }
    
}

function  incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivideQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
}

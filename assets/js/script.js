//wait for the DOM to load before running the game
//get the button elements ana add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute === "submit") {
                alert("You clicked the submit button")
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

function checkAnswer() {

}
function calculateCorrectAnswer() {

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

//wait for the DOM to load before running the game
//get the button elements ana add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute === "submit") {
                alert("You clicked the submit bittton")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`)
            }
        });
    }
})





/**
 * The main game loop first loaded when the script is called 
 * and after the users answer has been processed
 */
function rungame(){
    //creates two random numbers between 1 and 25 
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;
};

function checkAnswer() {

}
function calculateCorrectAnswer() {

}

function  incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion(){

}

function displayDivideQuestion(){
    
}

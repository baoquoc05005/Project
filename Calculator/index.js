let compWin = 0;
let userWin = 0;

function computerMove(){
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    if(randomNumber > 6){
        return "Rock";
    } else if(randomNumber < 3){
        return "Paper";
    } else{
        return "Scissor";
    }
}

function comPare(playerMove){
    let compMove = computerMove();
    let display = document.querySelector("#display");
    let result;
    
    if(compMove === "Rock"){
        if(playerMove === "Rock"){
            result = "Tie";
        } else if(playerMove === "Paper"){
            result = "You Win!";
        } else { 
            result = "You Lose!"; 
        }

    } else if(compMove === "Paper"){
        if(playerMove === "Rock"){
            result = "You Lose!";
        } else if(playerMove === "Paper"){
            result = "Tie";
        } else { 
            result = "You Win!"; 
        }

    } else if(compMove === "Scissor"){
        if(playerMove === "Rock"){
            result = "You Win!";
        } else if(playerMove === "Paper"){
            result = "You Lose!";
        } else { 
            result = "Tie"; 
        }
    }
    
    display.textContent = result;
    return result;
}

function updateScore(result) {
    if(result === "You Lose!") {
        compWin++;
    } else if(result === "You Win!") {
        userWin++;
    } 

}

document.querySelectorAll("#btn").forEach(button => {
    button.addEventListener("click", (event) => {
        let playerMove = event.target.value;
        let result = comPare(playerMove);
        updateScore(result);
    });
});

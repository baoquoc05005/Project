let compWin = 0;
let userWin = 0;
function loadScore() {
    let data = JSON.parse(localStorage.getItem("user"));
    if (data) {
        compWin = data.computerWin || 0;
        userWin = data.user || 0;
    }
}

loadScore();

function resetScore(){
    let reset = document.querySelector("button");
    compWin = 0;
    userWin = 0;
    displayScore()
    localStorage.setItem("user", JSON.stringify({computerWin: compWin, user: userWin}))
}


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


function displayScore(){
    let display = document.querySelector("#score");
    display.textContent = `Score: ${compWin} | ${userWin}`;
    const jsonData = JSON.stringify({computerWin: compWin, user: userWin});
    localStorage.setItem("user", jsonData);
}


document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", (event) => {
        let playerMove = event.target.value;
        if (playerMove === "Reset"){
            resetScore()
        } else{
            let result = comPare(playerMove);
            updateScore(result);
            displayScore();
        }
    });
});

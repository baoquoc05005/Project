function computerMove(){
    let compMove;
    let randomNumber = Math.floor(Math.random() * 9 + 1)
    if(randomNumber > 6){
        return compMove = "Rock";
    } else if(randomNumber < 3){
        return compMove = "Paper";
    } else{
        return compMove = "Scissor";
    };
};
function comPare(playerMove){
    let compMove = computerMove();
    let display = document.querySelector("#display");
    if(compMove === "Rock"){
        if(playerMove === "Rock"){
            display.textContent = "Tie";
        }
        else if(playerMove === "Paper"){
            display.textContent = "You Win!";
        } else {display.textContent = "You Lose!"};

    } else if(compMove === "Paper"){
        if(playerMove === "Rock"){
            display.textContent = "You Lose!";
        }
        else if(playerMove === "Paper"){
            display.textContent = "Tie";
        } else {display.textContent = "You Win!"};

    } else if(compMove === "Scissor"){
        if(playerMove === "Rock"){
            display.textContent = "You Win!";
        }
        else if(playerMove === "Paper"){
            display.textContent = "You Lose!";
        } else {display.textContent = "Tie"};

    }

    return display.textContent
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        let playerMove = this.value;
        comPare(playerMove);

    });
});
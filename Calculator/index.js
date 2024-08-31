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
let playerMove = document.querySelector("button").value;
function comPare(){
    let compMove = computerMove();
    if(compMove === "Rock"){
        if(playerMove === "Rock"){
            console.log("Tie");
        }
        else if(playerMove === "Paper"){
            console.log("You Win!");
        } else {console.log("You Lose!")};

    } else if(compMove === "Paper"){
        if(playerMove === "Rock"){
            console.log("You Lose!");
        }
        else if(playerMove === "Paper"){
            console.log("Tie");
        } else {console.log("You Win!")};

    } else if(compMove === "Scissor"){
        if(playerMove === "Rock"){
            console.log("You Win!");
        }
        else if(playerMove === "Paper"){
            console.log("You Lose!");
        } else {console.log("Tie")};

    }
}

document.querySelectorAll("button").forEach(element => {
    
});
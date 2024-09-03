//Query Selector
let show = document.querySelector("#display");
let arithmetic = document.querySelector(".operation");
let = document.querySelector("");

//Event Listener
arithmetic.addEventListener("click",operation);

//Operation
function operation(){
    try{
        show.value = eval(show.value);
    }
    catch{
        show.value = "Error";
    }
}
function display(input){
    show.value += input;
}

function clearDisplay(){
    show.value = ""
}




//Save Data
function saveData(){}

function retrieveData(){}
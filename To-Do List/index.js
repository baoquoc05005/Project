// QuerySelector
let input = document.querySelector("input");
let listItem = document.querySelector("#taskList"); 
let add = document.querySelector("#add");

// AddEventlistener
add.addEventListener("click", addItem);
listItem.addEventListener("click", deleteItem); // Listen for clicks on the task list

// Method
function addItem(event) {
    event.preventDefault(); // Prevent form submission

    if (input.value === "") {
        alert("You must enter something");
    } else {
        let li = document.createElement("li");
        li.textContent = input.value;
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // The '×' symbol
        span.className = "close"; 
        li.appendChild(span);
        listItem.appendChild(li);
        input.value = "";
    }
    saveData();
}

function deleteItem(event) {
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData(); // Save data after deletion
    }
}

// Data Saving
function saveData() {
    let dataArr = [];
    listItem.querySelectorAll("li").forEach(li => dataArr.push(li.textContent.replace("\u00D7", "")));
    localStorage.setItem("data", JSON.stringify(dataArr));
}

function retrieveData() {
    let retrieveItem = JSON.parse(localStorage.getItem("data")) || [];
    retrieveItem.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        span.className = "close";
        li.appendChild(span);
        listItem.appendChild(li);
    });
}

retrieveData();

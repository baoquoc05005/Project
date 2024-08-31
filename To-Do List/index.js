let input = document.querySelector('#input');
let tasklist = document.querySelector('#taskList');
function addItem(event){
    event.preventDefault();
    if(input.value === ''){
        alert('You must enter something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = `${input.value}         <button onclick="removeItem(event)">Remove</button>`;
        tasklist.appendChild(li);
        localStorage.setItem('li', JSON.stringify(score));
        input.value = '';
    }
}

function removeItem(event) {
    let li = event.target.parentElement;
    tasklist.removeChild(li);
}
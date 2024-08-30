let input = document.querySelector('#input');
let tasklist = document.querySelector('#taskList');
function addItem(event){
    event.preventDefault();
    if(input.value === ''){
        alert('You must enter something');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value; 
        tasklist.appendChild(li);
        input.value = '';
    }
}
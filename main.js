let form = document.querySelector('form');
let inputText = document.querySelector('input');
let todoList = document.querySelector('#todo-ul');
let completedTasks = [];
let completedButon = document.querySelector('#completedButon');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let newListItem = document.createElement('li');
    newListItem.style.listStyleType = 'none';
    newListItem.innerText = inputText.value
    todoList.appendChild(newListItem);
    inputText.value = '';
})

todoList.addEventListener('click', function(event){
    console.log(event.target);
    console.log(event.target.type)
    if (event.target.type == 'li'){
        console.log('in the block');
        console.log(event.target);
    }
})


let form = document.querySelector('form');
let inputText = document.querySelector('input');
let todoList = document.querySelector('#todo-ul');
let todoListItems = document.querySelectorAll("#todo-ul li");
let completedButton = document.querySelector('#completedButton');
let removeAllButton = document.querySelector('#removeAllButton');


form.addEventListener('submit', function(event){
    event.preventDefault();
    if (inputText.value !== ''){
        let newListItem = document.createElement('li');
        newListItem.innerText = inputText.value;
        todoList.appendChild(newListItem);
        inputText.value = '';
        console.log('Whatever.')
    } 
});

todoList.addEventListener('click', function(event){
    if (event.target.style.textDecorationLine === 'line-through'){
        event.target.style.textDecorationLine = 'none';
    } else {
        event.target.style.textDecorationLine = "line-through";
    }
});

completedButton.addEventListener('click', function(){
    todoListItems = document.querySelectorAll("#todo-ul li");
    for (let i = 0; i < todoListItems.length; i++){
        if (todoListItems[i].style.textDecorationLine == 'line-through'){
            todoListItems[i].remove()
        }
    }
});

removeAllButton.addEventListener('click', function(){
    todoListItems = document.querySelectorAll("#todo-ul li");
    for (let i = 0; i < todoListItems.length; i++){
        todoListItems[i].remove();
    }
})


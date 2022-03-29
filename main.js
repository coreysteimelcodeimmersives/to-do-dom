let form = document.querySelector('form');
let inputText = document.querySelector('input');
let todoList = document.querySelector('#todo-ul');
let completedTasks = [];
let completedButton = document.querySelector('#completedButton');
let removeAllButton = document.querySelector('#removeAllButton');
let listItems = [];

form.addEventListener('submit', function(event){
    event.preventDefault();
    let newListItem = document.createElement('li');
    newListItem.style.listStyleType = 'none';
    newListItem.innerText = inputText.value;
    newListItem.id = inputText.value;
    newListItem.className = 'todo-item';
    listItems.push(inputText.value);
    todoList.appendChild(newListItem);
    inputText.value = '';
});

todoList.addEventListener('click', function(event){
    if (event.target.className == 'todo-item'){
        if (event.target.style.textDecorationLine === 'line-through'){
            event.target.style.textDecorationLine = 'none';
            let index = completedTasks.indexOf(event.target.innerText);
            completedTasks.splice(index, 1);
            console.log(completedTasks)
        } else {
            event.target.style.textDecorationLine = 'line-through'
            completedTasks.push(event.target.innerText);
            console.log(completedTasks)
        }
    }
});

completedButton.addEventListener('click', function(){
    console.log(listItems);
    for (let i = 0; i < completedTasks.length; i++){
        let listItem = document.querySelector(`#${completedTasks[i]}`);
        listItem.remove();
        console.log(listItem.innerText);
        let index = listItems.indexOf(listItem.innerText);
        listItems.slice(index,1);
        console.log(listItems);
    }
    completedTasks = [];
});

removeAllButton.addEventListener('click', function(){
    console.log(listItems);
    for (let i = 0; i < listItems.length; i++){
        let item = document.querySelector('.todo-item');
        console.log(item)
        item.remove();
    }
    completedTasks = [];
    listItems = [];
})


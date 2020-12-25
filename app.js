//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners

todoButton.addEventListener("click" , addTodo);

//Functions

function addTodo(event) {
    //preventing from submiting form
    event.preventDefault();
    // Todo DIV
    // Main div in  <ul class="todo-list">...</ul>
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    //append LI in todoDiv
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    //append CHECK MARK BUTTON in todoDiv
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    //CHECK TRASH BUTTON
    //append CHECK TRASH BUTTON in todoDiv
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);
}
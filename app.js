//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener("DOMContentLoaded" , getTodos)
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteCheck);
filterOption.addEventListener("click" , filterTodo);

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

    // Add todo to local storage
    saveLocalTodos(todoInput.value);

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

    //Clear Todo Input Value as an Default
    todoInput.value = "";

    
}


// Delete Todo List Item
function deleteCheck(e) {
    const item = e.target;
    // DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;

        // "fall" class contain delete animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        // transitionend It'll wait until the animation end and after that Element should be remove
        todo.addEventListener("transitionend" , function(){
            todo.remove();
        });
        
    }

    //Check Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// Filter Function
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } 
                else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } 
                else {
                    todo.style.display = "none";
                }
                break;

        }
    })
}



// Storing Todos into Local storage
function saveLocalTodos(todo) {
    // Check If todos already stored
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(todos));
}


// Fetcing Todos from localstorage

function getTodos(){
    // Check If todos already stored
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){

        // Todo DIV
    // Main div in  <ul class="todo-list">...</ul>
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    //append LI in todoDiv
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
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

    });
     
}


function removeLocalTodos(todo){

    // Check If todos already stored
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos" , JSON.stringify(todos));


}


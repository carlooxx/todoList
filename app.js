const input = document.querySelector('.todo-input');
const inputBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filter-todo');


inputBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('click', filterTodo);

function addTodo(e){
    if(input.value.length > 0){
        e.preventDefault();
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
    
        const newTodo = document.createElement('li');
        newTodo.innerText = input.value;
        input.value = '';
        newTodo.classList.add('todo-items');
        todoDiv.appendChild(newTodo);
    
        const checkBtn = document.createElement('button');
        checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
        checkBtn.classList.add('check-btn');
        todoDiv.appendChild(checkBtn);
    
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
        deleteBtn.classList.add('delete-btn');
        todoDiv.appendChild(deleteBtn);
        todoList.appendChild(todoDiv);
    }
};
function deleteCheck(event){
    const item = event.target;
    const todo = item.parentElement;
    if(item.className === "delete-btn"){
        todo.classList.add('fade');
        todo.addEventListener('transitionend', () =>{
            todo.remove();
        });
    }if(item.className === 'check-btn'){
        todo.classList.toggle('crossLine');
    }
};
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("crossLine")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("crossLine")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }
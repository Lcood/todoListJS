
const inputField = document.getElementById('input_field');
const addButton = document.getElementById('addButton');
const todoList = document.querySelector('.todoList');


function addList(e) {
   e.preventDefault();
   const todo = document.createElement('div');
   todo.classList.add('todo');
   const listTasks = document.createElement('li');
   listTasks.classList.add('task');
   listTasks.innerText = inputField.value;
   todo.appendChild(listTasks);
   const completedTask = document.createElement('button');
   completedTask.innerHTML = '<i class="fa-solid fa-check"></i>';
   todo.appendChild(completedTask);
   const trashedTask = document.createElement('button');
   trashedTask.classList.add('trashed');
   trashedTask.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
   todo.appendChild(trashedTask);
   todoList.appendChild(todo);
   inputField.value = '';
   
   completedTask.addEventListener('click', () =>{
      listTasks.classList.add('completedStyle');
   });

   trashedTask.addEventListener('click', () => {
      todo.remove();
   });

};



addButton.addEventListener('click', addList);

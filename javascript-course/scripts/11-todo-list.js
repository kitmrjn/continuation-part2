const todoList = [{
   name:'make dinner', 
   dueDate:'2025-02-20'
}, {
   name:'wash dishes',
   dueDate: '2025-02-20'
}];

renderTodoList();


function renderTodoList() {

let todoListHTML = '';

   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // below is the same code and is a shorcut of this const name = todoObject.name;
      const { name,dueDate } = todoObject;
      // above is the same code above it is just a shortcut of this code const dueDate = todoObject.dueDate;
      const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button onclick="
         todoList.splice(${i, 1});
         renderTodoList ();
      " class="delete-todo-button">Delete</button>
      `;
      todoListHTML += html;
   }
   document.querySelector('.js-todo-list').innerHTML = todoListHTML;
   }

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value

   todoList.push({
      // if the property and variable name are the same like this you can type it only once like the code below and will still do the same as this code ---> name: name,
      //dueDate: dueDate
      name,
      dueDate
   });

inputElement.value = '';

renderTodoList ();
}

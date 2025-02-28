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

   todoList.forEach((todoObject, index) => {
      const { name,dueDate } = todoObject;
      const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button onclick="
         todoList.splice(${index, 1});
         renderTodoList ();
      " class="delete-todo-button">Delete</button>
      `;
      todoListHTML += html;
   });
   
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

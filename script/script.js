let addMessage = document.querySelector(".message");

let addButton = document.querySelector(".add");

let todo = document.querySelector('.todo');


let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages();
}



addButton.addEventListener("click", () => {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };
todoList.push(newTodo);
displayMessages();
localStorage.setItem('todo', JSON.stringify(todoList))
});

function displayMessages() {
    let displayMessage = '';
    todoList.forEach(function(item, i) { 
    displayMessage += 
    `
    <li> 
    <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
    <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
    }
    )

} 

todo.addEventListener('change', function(evt) {
let idInput = evt.target.getAttribute('id');
let valueLabel = todo.querySelector(`[for=${idInput}`).innerHTML;

todoList.forEach(function(item, i){
    if (valueLabel === item.todo) {
        item.checked = !item.checked;
        localStorage.setItem('todo', JSON.stringify(todoList))
    }
})
})

todo.addEventListener('contextmenu', function(evt){
    evt.preventDefault();
    
})
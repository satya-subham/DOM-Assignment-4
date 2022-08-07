let input = document.getElementById('input');
let add_item = document.getElementById('box_1');
let todos = document.getElementById('box_2');
let complete = document.getElementById('box_3'); 
let add_button = document.getElementById('add_button');
add_button.addEventListener('click', (event)=>{
    todos.innerHTML += 
    `<div style="margin: 10px;" id="new_div">
    <input type="checkbox" id="todos_checkbox">
    <input type="text" id="todo_input" value ="${input.value}" style="width: 200px; text-align: center;" >
    <button id="edit">&#9998;</button>
    <button id="delete">&#10006;</button>
    </div>
    
    `;
})


let delete_el = document.getElementById('new_div');
let delete_button = document.getElementById('delete');
delete_button.addEventListener('click', (event)=>{
  todos.remove(delete_el);
// todos.closest('div').remove();
// console.log(event);
  
})

// let todo_input = document.getElementById('todo_input');
// let checkbox = document.getElementById('todos_checkbox');
// checkbox.addEventListener('checked', (event)=>{
//     complete.innerHTML += 
//     `<div style="margin: 10px;">
//     <input type="checkbox" id="checkbox" checked>
//     <input type="text" id="complete_input" value ="${todo_input.value}" style="width: 200px;" >
//     <button id="edit">&#9998;</button>
//     <button id="delete">&#10006;</button>
//     </div>
    
//     `;
// })

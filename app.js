let input = document.getElementById('input');
let add_item = document.getElementById('box_1');
let todos = document.getElementById('box_2');
let complete = document.getElementById('box_3'); 
let add_button = document.getElementById('add_button');

// add_button.addEventListener('click', (event)=>{
//     todos.innerHTML += 
//     `<div style="margin: 10px;" id="new_div">
//     <input type="checkbox" id="todos_checkbox">
//     <input type="text" id="todo_input" value ="${input.value}" style="width: 200px; text-align: center;" >
//     <button id="edit">&#9998;</button>
//     <button id="delete">&#10006;</button>
//     </div>
    
//     `;
// })


// let delete_el = document.getElementById('new_div');
// let delete_button = document.getElementById('delete');
// document.getElementById('delete').addEventListener('click', (event)=>{
  // todos.getElementById('new_div').remove();
 // todos.closest('div').remove();
 // console.log(event);
  
// })

add_button.addEventListener('click', (event)=>{
  let key = input.value;
  let new_div = document.createElement('div');
  new_div.setAttribute('id','newDiv');

  let todos_checkbox = document.createElement('input');
  todos_checkbox.type = "checkbox";
  todos_checkbox.setAttribute('id','checkbox');
  new_div.append(todos_checkbox);
  
  let todos_input = document.createElement('input');
  todos_input.type = "text";
  todos_input.setAttribute('id','todoInput');
  todos_input.setAttribute('readonly', 'readonly');
  todos_input.value = key;
  new_div.append(todos_input)

  let todos_edit_button = document.createElement('button');
  todos_edit_button.setAttribute('id','edit');
  todos_edit_button.innerText = "Edit";
  new_div.append(todos_edit_button);

  let todos_delete_button = document.createElement('button');
  todos_delete_button.setAttribute('id','delete');
  todos_delete_button.innerText = "Delete";
  new_div.append(todos_delete_button);
  
  todos.append(new_div);
})
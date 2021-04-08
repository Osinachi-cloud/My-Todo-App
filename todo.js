const todoinput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deletecheck);
filterOption.addEventListener('click',filterTodo);


function addTodo(event){
   event.preventDefault()
    // console.log('hello');
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    const newTodo = document.createElement('li')
    newTodo.innerText = todoinput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"> </>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"> </>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // console.log(todoDiv);
    todoList.appendChild(todoDiv);

    todoinput.value="";


}
function deletecheck(e){
    // console.log(e.target);
    const item = e.target;
    if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        // todo.remove();

        todo.addEventListener('transitionend', function(){
        todo.remove();

        });
    }
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

// console.log(todoList);


// remove.io
// weworkremotely.io

// function filterTodo(e){
//     const todos = todoList.childNodes;
//     // console.log(todos)
//     todos.forEach(function(todo){
//         switch(e.target.value)
//     });
// }


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.innerHTML){
            case "all": todo.style.display = 'flex';
                // todo.style.display ='flex';
                break;
                case "completed":
                    if (todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    } else {
                        todo.style.display ="none";
                    }
                    break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display ="flex";
                } else{
                    todo.style.display ="none"
                }
                break;

        }
    }
    
    );
}
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const task = document.querySelector('.task')
let todos = []

todoButton.addEventListener('click', addTask)
document.addEventListener('DOMContentloaded',getTodoOnLoad())

function addTask(e){
    e.preventDefault()
    if(todoInput.value){
    let taskDiv = document.createElement('div')
    task.appendChild(taskDiv)

    let newTask = document.createElement('li')
    newTask.innerText = todoInput.value
    taskDiv.appendChild(newTask)

    saveToLocalStorage(todoInput.value)
    todoInput.value=""

    const check=document.createElement("input");
    check.type="checkbox";
    check.setAttribute("class","check")
    newTask.appendChild(check);

    const trash =document.createElement("i");
    trash.classList.add("far", "fa-trash-alt", "trashButton");
    newTask.appendChild(trash); 
    trash.addEventListener("click",dele);

    const edit=document.createElement("i"); 
    edit.classList.add("fal","fa-edit");
    newTask.appendChild(edit); 
    task.value="";
}
}

function saveToLocalStorage(todo){
    if(localStorage.getItem('todos')==null){
        todos = []
    }else{
        todos =JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodoOnLoad(){
    if(localStorage.getItem('todos')){
       todos =JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach((todo)=>{
        let taskDiv = document.createElement('div')
        task.appendChild(taskDiv)

        let newTask = document.createElement('li')
        newTask.innerText=todo
        taskDiv.appendChild(newTask)

        const check=document.createElement("input");
        check.type="checkbox";
        check.setAttribute("class","check")
        newTask.appendChild(check);
    
        const trash =document.createElement("i");
        trash.classList.add("far", "fa-trash-alt", "trashButton");
        newTask.appendChild(trash); 
        trash.addEventListener("click",dele);
    
        const edit=document.createElement("i"); 
        edit.classList.add("fal","fa-edit");
        newTask.appendChild(edit); 
        task.value="";

    })
}


function dele(e){

    const value=e.target;
    const delItem=value.parentElement;
    delItem.remove(); 
    if (localStorage.getItem("todos") === null) {
       itemafterdelet= [];
      } else{
        itemafterdelet=JSON.parse(localStorage.getItem("todos"))
      }
    const delet=itemafterdelet.splice(itemafterdelet.indexOf(value));
    localStorage.setItem("todos",JSON.stringify(itemafterdelet))
   
    };
 

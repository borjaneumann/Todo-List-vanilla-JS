//Consts
const taskInput = document.getElementById('task');
const taskList = document.getElementById("collection");
const form = document.getElementById('task-form');
const clear=document.querySelector('#clearAll');
const filter = document.querySelector('#filter');

//Event Listeners
form.addEventListener('submit', addTasks);
taskList.addEventListener('click', deleteTasks);
clear.addEventListener('click', deleteAllTasks);
filter.addEventListener('keyup', filterTasks)

//Functions
function addTasks(e){
    if (taskInput.value!==''){
    
    const li = document.createElement('li');
    li.className= 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('button');
    link.className = 'delete-item';
    link.innerHTML = 'Delete me';
    li.appendChild(link);
    
    taskList.appendChild(li);
    console.log(li);
    e.preventDefault();
    taskInput.value='';
    }  
    else {
        alert('Please Enter Your Task');
    }
}

function deleteTasks(e){
    console.log(e.target);
    if(e.target.classList.contains('delete-item')){
        e.target.parentElement.remove();
    }
}


function deleteAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
function filterTasks(e){
    const text= e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.collection-item').forEach(function(task){
        const listItem=task.firstChild.textContent;
        if(listItem.toLowerCase().indexOf(text) !== -1){
            task.style.display='block';        

        }else{
            task.style.display="none";        
        }
        console.log(listItem);
    })

}

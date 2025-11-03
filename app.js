console.log('Todo Manager شروع شد')
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const message = document.getElementById('message')
addTaskBtn.addEventListener('click',function(){
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        message.textContent = "لطفا یک کار وارد کنید";
        message.style.color = "red";
        return;
     }
    const li = document.createElement("li");
    const span = document.createElement('span')
    
    span.className = 'task-text';
    span.textContent = taskText;
    li.appendChild(span);
    

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "حذف";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);


    span.addEventListener('click',function(){
        li.classList.toggle('completed');
        saveTasks();
    });

    taskList.appendChild(li);

    taskInput.value = "";
    message.textContent = "کار با موفقیت اضافه شد!"
    message.style.color = "green";

    deleteBtn.addEventListener('click',function(e){
        e.stopPropagation();
        li.remove();
        message.textContent = "کار حذف شد!";
        message.style.color = 'orange';
        saveTasks();
    });
    saveTasks();
    
});
function saveTasks(){
       const  tasks = [];
       document.querySelectorAll('#taskList li').forEach(li => {
        const textEl =li.querySelector('.task-text');
        const text = textEl ? textEl.textContent.trim() : '';
        const completed = li.classList.contains('completed');
        tasks.push({text,completed});
       });
       try{
        localStorage.setItem('tasks',JSON.stringify(tasks));
       }catch(err){
        console.error('Could not save tasks :',err)
       }
}
document.addEventListener('DOMContentLoaded',loadTasks);

function loadTasks(){
    let savedTasks = [];
    try{
        savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }catch(err){
        console.warn('Saved tasks parse failed, resetting.',err);
        savedTasks = [];
    }
    savedTasks.forEach(task =>{
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text || '';
        li.appendChild(span);
        
        if (task.completed) li.classList.add('completed');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        deleteBtn.addEventListener('click',function(e){
            e.stopPropagation();
            li.remove();
            message.textContent = 'کار حذف شد !';
            message.style.color = 'orange';
            saveTasks();
        });
        span.addEventListener('click',function(){
            li.classList.toggle('completed');
            saveTasks();
        });
        taskList.appendChild(li);
    });

}

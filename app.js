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
    li.textContent = taskText;
    taskList.appendChild(li);
    

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "حذف";
    deleteBtn.classList.add("delete-btn");
    li.appendChild(deleteBtn);


    li.addEventListener('click',function(){
        li.classList.toggle('completed');
    });

    

    taskInput.value = "";
    message.textContent = "کار با موفقیت اضافه شد!"
    message.style.color = "green";

    deleteBtn.addEventListener('click',function(){
        li.remove();
        message.textContent = "کار حذف شد!";
        message.style.color = 'orange';

    });

})

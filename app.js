console.log('Todo Manager شروع شد')
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const message = document.getElementById('message')
addTaskBtn.addEventListener('click',function(){
    const taskText = taskInput.nodeValue.trim();

    if (taskText === "") {
        message.textContent = "لطفا یک کار وارد کنید";
        message.style.color = "red";
        return;
     }
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.nodeValue = "";
    message.textContent = "کار با موفقیت اضافه سد!"ک
    message.style.color = "green";

})

console.log('Todo Manager شروع شد')
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const message = document.getElementById('message')
addTaskBtn.addEventListener('click',function(){
    const taskText = taskInput.nodeValue.trim();

    if (taskText === "") {
        message.innerHTML = "لطفا یک کار وارد کنید";
        return;
     }
    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.nodeValue = "";
})

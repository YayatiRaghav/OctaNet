function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        
        newTask.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;
        newTask.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}

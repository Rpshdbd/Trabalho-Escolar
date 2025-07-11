document.getElementById('addTaskBtn').addEventListener('click', function () {
const input = document.getElementById('taskInput');
const taskText = input.value.trim();

if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    document.getElementById('taskList').appendChild(li);
    input.value = '';
} else {
    alert('Por favor, digite uma tarefa.');
}
});

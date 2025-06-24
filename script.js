function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');
  const tasks = taskList.getElementsByTagName('li');


  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].firstChild.textContent.trim() === taskText) {
      alert(`Task already exists: "${taskText}"`);
      return;
    }
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.className = 'remove';
  removeBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent toggling on delete
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  input.value = '';
}

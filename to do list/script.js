    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const li = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        taskSpan.classList.toggle('completed');
      });

      const taskSpan = document.createElement('span');
      taskSpan.className = 'task-text';
      taskSpan.textContent = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.className = 'btn-delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      li.appendChild(checkbox);
      li.appendChild(taskSpan);
      li.appendChild(deleteBtn);

      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus();
    });

    // Optional: add task on Enter key
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addBtn.click();
    });

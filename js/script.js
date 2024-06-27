let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderHtml();

function addTodo() {
  const taskInputElement = document.querySelector('.js-task-input');
  const task = taskInputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;

  if (taskInputElement.value === '') {
    document.querySelector('.warning-text').innerHTML = `<span>Input can't be empty!</span>`;
    setTimeout(() => {
      document.querySelector('.warning-text').innerHTML = ''; // Clear warning text after 3 seconds
    }, 3000);
    return;
  } else {
    todoList.push({
    task, date
  })
  }

  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderHtml();
  taskInputElement.value = '';
  dateInputElement.value = '';
}

function renderHtml() {
  let list = '';

  for (let i = 0; i < todoList.length; i++) {
    
  
    const task = todoList[i].task;
    const date = todoList[i].date;
  
    const html = `
      <li class="task-item">
        <p class="task">${task}</p>
        <p class="date">${date}</p>
        <button class="js-delete-task" onclick="deleteTask(${i});">Delete</button>
      </li>
    `;
  
    list += html;
  }

  document.querySelector('.js-list').innerHTML = list;
}

function deleteTask(index) {
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
  renderHtml();
}

function pressEnter() {
  if (event.key === 'Enter') {
    addTodo();
  }
}
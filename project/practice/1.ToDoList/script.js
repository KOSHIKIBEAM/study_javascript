const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByTagName("ul")[0];

if (taskValue.value == "") {
  taskSubmit.disabled = true;
}

taskValue.addEventListener("input", (e) => {
  taskSubmit.disabled = false;
});

const addTasks = (task) => {
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  listItem.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    deleteTasks(deleteBtn);
  });
};

const deleteTasks = (deleteBtn) => {
  const chosenTask = deleteBtn.closest("li");
  taskList.removeChild(chosenTask);
};

taskSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const task = taskValue.value;
  addTasks(task);
  taskValue.value = "";
  taskSubmit.disabled = true;
});

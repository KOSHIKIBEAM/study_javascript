const taskValue = document.getElementsByClassName("task_value")[0];
const taskSubmit = document.getElementsByClassName("task_submit")[0];
const taskList = document.getElementsByTagName("ul")[0];

const addTasks = (task) => {
  // 入力したタスクを追加・表示
  const listItem = document.createElement("li");
  const showItem = taskList.appendChild(listItem);
  showItem.innerHTML = task;

  // タスクに削除ボタンを付与
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
});

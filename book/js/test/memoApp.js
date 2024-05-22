const addMemoButton = document.querySelector(".add-memo");
addMemoButton.addEventListener("click", function () {
  const newMemoInput = document.querySelector(".new-memo");
  const newMemo = document.createElement("li");
  newMemo.textContent = newMemoInput.value;
  const newMemoList = document.querySelector(".memo-list");
  newMemoList.append(newMemo);
  newMemoInput.value = " ";
});

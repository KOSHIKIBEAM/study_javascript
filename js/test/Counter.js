// Counter
const number = document.querySelector(".count");
const plusButton = document.querySelector("#increment");
const minusButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");

let count = 0;

plusButton.addEventListener("click", () => {
  count++;
  number.innerHTML = count;
});
minusButton.addEventListener("click", () => {
  count--;
  number.innerHTML = count;
});
resetButton.addEventListener("click", () => {
  count = 0;
  number.innerHTML = count;
});

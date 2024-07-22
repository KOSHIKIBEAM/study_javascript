let menuToggle = document.querySelector(".menuToggle");
const container = document.querySelector(".container");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  container.classList.toggle("active");
};

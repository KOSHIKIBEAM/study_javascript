const accordions = document.querySelectorAll("dt");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.parentNode.classList.toggle("appear");
  });
});

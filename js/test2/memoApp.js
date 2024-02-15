const dummyContent = document.querySelector(".dummy");
for (let i = 0; i < 2000; i++) {
  dummyContent.textContent += `テキスト ${i}`;
}

const ToTopButton = this.document.querySelector(".moveToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    ToTopButton.style.display = "block";
  } else {
    ToTopButton.style.display = "none";
  }
});

ToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

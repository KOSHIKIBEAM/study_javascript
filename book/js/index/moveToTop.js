// moveToTop

const dummyContent = document.querySelector(".dummy");
for (let i = 0; i < 2000; i++) {
  dummyContent.textContent += ` テキスト ${i} `;
}

window.addEventListener("scroll", function () {
  const button = document.querySelector(".moveToTop");
  if (window.scrollY >= 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});

const button = document.querySelector(".moveToTop");
button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

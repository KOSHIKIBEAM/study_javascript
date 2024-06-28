function loadedPage() {
  const blocks = document.querySelectorAll(".js-loading");
  blocks.forEach((block) => {
    //処理
    block.classList.add("js-loaded");
  });
}

const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});

document.addEventListener("DOMContentLoaded", () => {
  const boxElement = document.querySelectorAll(".box");
  const textElement = document.querySelectorAll(".text-animation");

  document.addEventListener("scroll", () => {
    for (let i = 0; i < boxElement.length; i++) {
      const getElement =
        boxElement[i].getBoundingClientRect().top + boxElement[i].clientHeight;

      if (window.innerHeight > getElement) {
        textElement[i].classList.add("show");
      }
    }
  });

  for (let i = 0; i < textElement.length; i++) {
    const textElements = textElement[i],
      animeText = textElements.textContent,
      animeTextArray = [];

    textElements.textContent = "";

    for (let j = 0; j < animeText.split("").length; j++) {
      const t = animeText.split("")[j];

      if (t === " ") {
        animeTextArray.push(" ");
      } else {
        animeTextArray.push(
          '<span class="text-animation-span"><span style="animation-delay: ' +
            j * 0.1 +
            's">' +
            t +
            "</span></span>"
        );
      }
    }

    for (let k = 0; k < animeTextArray.length; k++) {
      textElements.innerHTML += animeTextArray[k];
    }
  }
  setTimeout(loadedPage, 3000);
});

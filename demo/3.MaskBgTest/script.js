const loading = document.querySelector(".js-loading");
window.addEventListener("load", () => {
  loading.classList.add("js-loaded");
});

const maskBg = document.querySelector(".mask-bg");
window.addEventListener(
  "load",
  () => {
    maskBg.classList.add("hide");
  },
  false
);

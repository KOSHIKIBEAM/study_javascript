// 代入
const mouse = document.getElementById("js-mouse");
const link = document.getElementsByTagName("a")[0];

// マウスを動かした時のイベント
document.addEventListener("mousemove", function (e) {
  mouse.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
  mouse.style.opacity = "1";
});

// ホバーイベント
link.addEventListener(
  "mouseenter",
  () => {
    mouse.classList.add("js-hover");
  },
  false
);
link.addEventListener(
  "mouseleave",
  () => {
    mouse.classList.remove("js-hover");
  },
  false
);

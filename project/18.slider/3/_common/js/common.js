let menuToggle = document.querySelector(".menuToggle");
const container = document.querySelector(".container");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  container.classList.toggle("active");
};

const swiper = new Swiper(".swiper", {
  loop: true, // ループさせる
  speed: 500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 4, // スライドの表示枚数
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

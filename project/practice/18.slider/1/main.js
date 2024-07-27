"use strict";

{
  const images = [
    "./img/pc1.png",
    "./img/pc2.png",
    "./img/pc3.png",
    "./img/pc4.png",
  ];

  const slideImg = document.getElementById("slide_img");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const page = document.getElementById("page");

  let current = 0;

  page.textContent = `1/${images.length}`;

  next.addEventListener("click", () => {
    if (current + 1 < images.length) {
      current++;
      slideImg.src = images[current];
    }
    page.textContent = `${current + 1}/${images.length}`;
  });

  prev.addEventListener("click", () => {
    if (current > 0) {
      current--;
      slideImg.src = images[current];
    }
    page.textContent = `${current + 1}/${images.length}`;
  });
}

// "user strict";
// {
//   const images = [
//     "./img/pc1.png",
//     "./img/pc2.png",
//     "./img/pc3.png",
//     "./img/pc4.png",
//   ];

//   const slideImg = document.getElementById("slide_img");
//   const prev = document.getElementById("prev");
//   const next = document.getElementById("next");
//   const page = document.getElementById("page");
//   let current = 0;

//   page.textContent = `1/${images.length}`;

//   next.addEventListener("click", function () {
//     if (current + 1 < images.length) {
//       current++;
//       slideImg.src = images[current];
//     }
//     page.textContent = `${current + 1}/${images.length}`;
//   });

//   prev.addEventListener("click", function () {
//     if (current > 0) {
//       current--;
//       slideImg.src = images[current];
//     }
//     page.textContent = `${current + 1}/${images.length}`;
//   });
// }

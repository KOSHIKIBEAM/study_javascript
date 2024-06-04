// 仕様の確認〜画像を一枚表示しよう
// 複数画像を順番に表示できるようにしよう
// 画像を自動で更新し見た目を整えて完成

class PhotoViewer {
  constructor(rootElm, images) {
    this.rootElm = rootElm;
    this.images = images;
    this.currentIndex = 0;
  }
  init() {
    const nextButtonElm = this.rootElm.querySelector(".nextButton");
    nextButtonElm.addEventListener("click", () => {
      this.next();
    });

    const prevButtonElm = this.rootElm.querySelector(".prevButton");
    prevButtonElm.addEventListener("click", () => {
      this.prev();
    });
    this.renderImageUrls();
    this.updatePhoto();
  }

  updatePhoto() {
    const frameEle = this.rootElm.querySelector(".frame");
    const imageIndex = this.currentIndex + 1;
    const image = this.images[this.currentIndex];
    frameEle.innerHTML = `<div class="currentImage">
    <p>${imageIndex}枚目</p>
    <img src="${image}" />
    </div>`;
    this.startTimer();
  }

  startTimer() {
    if (this.timerKey) {
      clearTimeout(this.timerKey);
    }

    this.timerKey = setTimeout(() => {
      this.next();
    }, 300);
  }

  next() {
    const lastIndex = this.images.length - 1;
    if (lastIndex === this.currentIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.updatePhoto();
  }

  prev() {
    const lastIndex = this.images.length - 1;
    if (this.currentIndex === 0) {
      this.currentIndex = lastIndex;
    } else {
      this.currentIndex--;
    }
    this.updatePhoto();
  }
  renderImageUrls() {
    const imagesElm = this.rootElm.querySelector(".images");
    let imageUrlsHtml = "";
    for (const image of this.images) {
      imageUrlsHtml += `<li><a href="${image}" target="_blank">${image}</a></li>`;
    }
    imagesElm.innerHTML = imageUrlsHtml;
  }
}

const images = [
  "https://fakeimg.pl/250x150/81DAF5",
  "https://fakeimg.pl/250x150/F781F3",
  "https://fakeimg.pl/250x150/81F7D8",
];

new PhotoViewer(document.getElementById("photoViewer"), images).init();

// "https://fakeimg.pl/250x150/81DAF5",
// "https://fakeimg.pl/250x150/F781F3",
// "https://fakeimg.pl/250x150/81F7D8",

// 同じ画面の中に二つのフォトビューアーを表示してみる。ただし、photoViewerクラスの中身を修正せずに行う

// photoViewerクラスを修正して、画像の切り替わり時間を指定できるようにする。デフォルトは3秒とする。

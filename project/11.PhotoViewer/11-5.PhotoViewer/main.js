// "https://fakeimg.pl/250x150/81DAF5",
// "https://fakeimg.pl/250x150/F781F3",
// "https://fakeimg.pl/250x150/81F7D8"

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
    const frameElm = this.rootElm.querySelector(".frame");
    const imageIndex = this.currentIndex + 1;
    const image = this.images[this.currentIndex];

    frameElm.innerHTML = `
    <div class="currentImage">
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
    }, 1000);
  }

  next() {
    // currentIndexのが画像の最後のindexだったら、0に変更する
    const lastIndex = this.images.length - 1;
    if (lastIndex === this.currentIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.updatePhoto();
  }
  prev() {
    // currentIndexのが0ったら、画像の最後のindexに変更する
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

// 要素を表示する関数
const slideDown = function (el) {
  el.style.height = "auto"; //いったんautoに
  let h = el.offsetHeight; //autoにした要素から高さを取得
  el.animate(
    {
      // 高さ0から取得した高さまでのアニメーション
      height: [0, h + "px"],
    },
    {
      duration: 300, // アニメーションの時間
    }
  );
  el.style.height = "auto"; //ブラウザの表示幅を途中で閲覧者が変えた時を考慮してautoに戻す
  el.setAttribute("aria-hidden", "false"); //WAI-ARIA対応、閉じた状態であることを支援技術に伝える
};

// 要素を非表示にする関数
const slideUp = function (el) {
  let h = el.offsetHeight;
  el.style.height = h + "px";
  el.animate(
    {
      height: [h + "px", 0],
    },
    {
      duration: 300,
    }
  );
  el.style.height = 0;
  el.setAttribute("aria-hidden", "true"); //WAI-ARIA対応、開いた状態であることを支援技術に伝える
};

let activeIndex = null; //開いているアコーディオン

//アコーディオンコンテナ全てで実行
const accordions = document.querySelectorAll(".include-accordion");
accordions.forEach(function (accordion) {
  //アコーディオンボタン全てで実行
  const accordionBtns = accordion.querySelectorAll(".accordionBtn");
  accordionBtns.forEach(function (accordionBtn, index) {
    accordionBtn.addEventListener("click", function (e) {
      activeIndex = index; //クリックされたボタンを把握
      const isActive = e.target.parentNode.classList.toggle("active"); //ボタンの親要素(ul>li)にクラスを付与／削除
      accordionBtn.setAttribute("aria-expanded", isActive ? "true" : "false"); //WAI-ARIA対応、開いた状態かどうかを示す
      const content = accordionBtn.nextElementSibling; //ボタンの次の要素を取得
      if (isActive) {
        slideDown(content); //クラス名がactive（＝閉じていた）なら上記で定義した開く関数を実行
      } else {
        slideUp(content); //クラス名にactiveがない（＝開いていた）なら上記で定義した閉じる関数を実行
      }
      accordionBtns.forEach(function (accordionBtn, index) {
        if (activeIndex !== index) {
          accordionBtn.parentNode.classList.remove("active");
          accordionBtn.setAttribute("aria-expanded", "false"); //WAI-ARIA対応、開いた状態かどうかを示す
          const openedContent = accordionBtn.nextElementSibling;
          // slideUp(openedContent); //現在開いている他のメニューを閉じる
        }
      });
      //スクロール制御のために上位階層のクラス名を変える
      let container = accordion.closest(".scroll-control"); // クラス名がscroll-controlである近傍の要素
      if (!isActive && container) {
        container.classList.remove("active");
      } else if (container !== null) {
        container.classList.add("active");
      }
    });
  });
});

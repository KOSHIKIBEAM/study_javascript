(() => {
  class Accordion {
    // 初期化・・一番最初に実行したいものをここに入れる。
    constructor(obj) {
      console.log("obj", obj);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
        index++;
      }
    }

    // クリックしたら実行される処理
    clickHandler = (e) => {
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;

      if ($content.style.display === "block") {
        $content.style.display = "none";
      } else {
        $content.style.display = "block";
      }
    };
  }

  const AccordionElm1 = new Accordion({
    hookName: "#js-faq",
    tagName: "p",
  });

  const AccordionElm2 = new Accordion({
    hookName: "#js-accordion",
    tagName: "a",
  });

  const AccordionElm3 = new Accordion({
    hookName: "#js-accordion-mini",
    tagName: "dt",
  });
})();

class WordQuiz {
  constructor(rootElm) {
    this.rootElm = rootElm;
  }

  async init() {
    try {
      const response = await fetch("quiz.json");
      this.quizData = await response.json();
    } catch (e) {
      this.rootElm.innerText = "問題の読み込みに失敗しました。";
      console.log(e);
    }
  }
}

new WordQuiz(document.getElementById("app")).init();

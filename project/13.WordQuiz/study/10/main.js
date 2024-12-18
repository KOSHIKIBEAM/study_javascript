class WordQuiz {
  constructor(rootElm) {
    this.rootElm = rootElm;

    this.gameStatus = {
      level: null,
      step: 1,
    };
  }

  async init() {
    await this.fetchQuizData();
    this.displayStartView();
  }

  async fetchQuizData() {
    try {
      const response = await fetch("quiz.json");
      this.quizData = await response.json();
    } catch (e) {
      this.rootElm.innerText = "問題の読み込みに失敗しました。";
      console.log(e);
    }
  }

  nextStep() {
    this.gameStatus.step++;
    this.displayQuestionView();
  }

  displayStartView() {
    const levelStrs = Object.keys(this.quizData);
    this.gameStatus.level = levelStrs[0];

    const optionStrs = [];
    for (let i = 0; i < levelStrs.length; i++) {
      optionStrs.push(
        `<option value="${levelStrs[i]}" name="level">レベル${i + 1}</option>`
      );
    }

    const html = `
    <select class="levelSelector">
    ${optionStrs.join("")}
    </select>
    <button class="startBtn">スタート</button>
    `;
    const parentElm = document.createElement("div");
    parentElm.innerHTML = html;

    const selectElm = parentElm.querySelector(".levelSelector");
    selectElm.addEventListener("change", (event) => {
      this.gameStatus.level = event.target.value;
    });

    const startBtnElm = parentElm.querySelector(".startBtn");
    startBtnElm.addEventListener("click", () => {
      this.displayQuestionView();
    });

    this.replaceView(parentElm);
  }

  displayQuestionView() {
    console.log(`選択中のレベル:${this.gameStatus.level}`);
    const stepKey = `step${this.gameStatus.step}`;
    const currentQuestion = this.quizData[this.gameStatus.level][stepKey];

    const choiceStrs = [];
    for (const choice of currentQuestion.choices) {
      choiceStrs.push(`<label>
      <input type="radio" name="choice" value="${choice}" />
      ${choice}
      </label>`);
    }

    const html = `
    <p>${currentQuestion.word}</p>
    <div>${choiceStrs.join("")}</div>
    <div class="actions">
    <button class="nextBtn">解答する</button>
    </div>
    `;

    const parentElm = document.createElement("div");
    parentElm.className = "question";
    parentElm.innerHTML = html;

    const nextBtnElm = parentElm.querySelector(".nextBtn");
    nextBtnElm.addEventListener("click", () => {
      this.nextStep();
    });

    this.replaceView(parentElm);
  }

  displayResultView() {
    const html = `
    <h2>ゲーム終了</h2>
    <button class="resetBtn">開始画面に戻る</button>
    `;

    const parentElm = document.createElement("div");
    parentElm.className = "results";
    parentElm.innerHTML = html;

    const resetBtn = parentElm.querySelector(".resetBtn");
    resetBtn.addEventListener("click", () => {
      this.displayStartView();
    });

    this.replaceView(parentElm);
  }

  replaceView(elm) {
    this.rootElm.innerHTML = "";
    this.rootElm.appendChild(elm);
  }
}

new WordQuiz(document.getElementById("app")).init();

// １、経過時刻をカウントし、見た目を整えよう

// var displayElm = document.getElementsByClassName("display")[0];
// var startButton = document.getElementsByClassName("startButton")[0];

// startButton.addEventListener("click", function () {
//   console.log("start");
//   var seconds = 0;
//   setInterval(function () {
//     seconds++;
//     displayElm.innerHTML = seconds;
//     console.log(seconds);
//   }, 1000);
// });

// ２、カウント停止を実現し、バグに対応しよう

// var displayElm = document.getElementsByClassName("display")[0];
// var timer = null;

// var startButton = document.getElementsByClassName("startButton")[0];

// startButton.addEventListener("click", function () {
//   if (timer === null) {
//     var seconds = 0;
//     timer = setInterval(function () {
//       seconds++;
//       displayElm.innerHTML = seconds;
//       console.log(seconds);
//     }, 1000);
//   }
// });

// var stopButton = document.getElementsByClassName("stopButton")[0];
// stopButton.addEventListener("click", function () {
//   if (timer !== null) {
//     clearInterval(timer);
//     timer = null;
//   }
// });

// ３、どんどん増えるログを出してみよう

// function addMessage(message) {
//   var messageElm = document.createElement("div");
//   var now = new Date();
//   messageElm.innerText =
//     now.getHours() +
//     "時" +
//     now.getMinutes() +
//     "分" +
//     now.getSeconds() +
//     "秒" +
//     message;
//   messageElm.classList = ["message"];
//   logElm.appendChild(messageElm);
// }

// var displayElm = document.getElementsByClassName("display")[0];
// var logElm = document.querySelector(".log");
// var timer = null;

// var startButton = document.getElementsByClassName("startButton")[0];
// startButton.addEventListener("click", function () {
//   if (timer === null) {
//     var seconds = 0;
//     timer = setInterval(function () {
//       seconds++;
//       displayElm.innerHTML = seconds;
//       console.log(seconds);
//     }, 1000);

//     addMessage("開始");
//   }
// });

// var stopButton = document.getElementsByClassName("stopButton")[0];
// stopButton.addEventListener("click", function () {
//   if (timer !== null) {
//     clearInterval(timer);
//     timer = null;
//     addMessage("終了");
//   }
// });

// ４、リファクタリング

// function stopWatch(options) {
//   function addMessage(message) {
//     var messageElm = document.createElement("div");
//     var now = new Date();
//     messageElm.innerText =
//       now.getHours() +
//       "時" +
//       now.getMinutes() +
//       "分" +
//       now.getSeconds() +
//       "秒" +
//       message;
//     messageElm.classList = ["message"];
//     logElm.appendChild(messageElm);
//   }

//   options = options || {};
//   var color = options.color || "lightblue";
//   var backgroundColor = options.backgroundColor || "black";
//   var displayElm = document.getElementsByClassName("display")[0];
//   displayElm.style.color = color;
//   displayElm.style.backgroundColor = backgroundColor;

//   var logElm = document.querySelector(".log");
//   var timer = null;

//   var startButton = document.getElementsByClassName("startButton")[0];
//   startButton.addEventListener("click", function () {
//     if (timer === null) {
//       var seconds = 0;
//       timer = setInterval(function () {
//         seconds++;
//         displayElm.innerHTML = seconds;
//         console.log(seconds);
//       }, 1000);

//       addMessage("開始");
//     }
//   });

//   var stopButton = document.getElementsByClassName("stopButton")[0];
//   stopButton.addEventListener("click", function () {
//     if (timer !== null) {
//       clearInterval(timer);
//       timer = null;
//       addMessage("終了");
//     }
//   });
// }
// var options = {
//   color: "limegreen",
//   backgroundColor: "#333",
// };

// stopWatch(options);

// ５、（ES6にリファクタリング）

const stopWatch = (options = {}) => {
  const addMessage = (message) => {
    const messageElm = document.createElement("div");
    const now = new Date();
    messageElm.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
    // @see https://books.circlearound.co.jp/step-up-javascript/errata.html#errata-class-list
    messageElm.classList.add("message");
    logElm.appendChild(messageElm);
  };

  let { color, backgroundColor } = options;

  color = color || "lightblue";
  backgroundColor = backgroundColor || "black";

  const display = document.getElementsByClassName("display")[0];
  display.style.color = color;
  display.style.backgroundColor = backgroundColor;

  const logElm = document.querySelector(".log");
  let timer = null;

  const startButton = document.getElementsByClassName("startButton")[0];
  startButton.addEventListener("click", () => {
    if (timer === null) {
      let seconds = 0;
      display.innerText = seconds;

      timer = setInterval(() => {
        seconds++;
        display.innerText = seconds;
      }, 1000);

      addMessage("開始");
    }
  });

  const stopButton = document.getElementsByClassName("stopButton")[0];
  stopButton.addEventListener("click", () => {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;

      addMessage("終了");
    }
  });
};

const options = {
  color: "limegreen",
  backgroundColor: "#333",
};
stopWatch(options);

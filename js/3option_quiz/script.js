'use strict';

var answers = {
  "question1" : 2,  // name属性 : 正解のvalue値
  "question2" : 3,
  "question3" : 2,
};
var modal = document.getElementById("modal");
var mask = document.getElementById("mask");
var result = document.getElementById("result");
var close = document.getElementById("close");

document.getElementById("answer").addEventListener("click", () => {
  var count = 0;  // 正解数
  var answer = document.querySelectorAll("input");
  for (var i = 0; i < answer.length; i++) {
    if ((answer[i].checked) && (answer[i].value == answers[answer[i].name])) {
      count++;
    }
  }
  var correct = Math.floor(count / 3 * 100);  // 正答率
  mask.classList.remove("hidden");
  modal.classList.add("show");
  modal.style.opacity = 1;
  result.textContent = `正答率は${correct}％でした。`;
});

close.addEventListener("click", () => {  // 閉じるボタンを押したとき
  modal.classList.remove("show");
  mask.classList.add("hidden");
});

mask.addEventListener("click", () => {   // 閉じるボタンの外を押したとき
  close.click();
});


'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
const txt1 = document.getElementById("txt1");
console.log(txt1);

// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
const txt2 = document.getElementById("txt2");
console.log(txt2.innerHTML);
console.log(txt2.textContent);

// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
txt2.innerHTML = "書き換えました";

// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
document.getElementById("btn1").addEventListener("click", () => {
  const txt3 = document.getElementById("txt3").textContent;
  const txt4 = document.getElementById("txt4");
  txt4.textContent = txt3;
});
// document.getElementById("btn1").onclick = () => {
//   const txt3 = document.getElementById("txt3").textContent;
//   txt4.textContent = txt3;
// };

// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
document.getElementById("form1").addEventListener("submit", e => {
  e.preventDefault();
  const input1 = document.getElementById("input1").value;
  const txt5 = document.getElementById("txt5");
  txt5.textContent = input1;
});

// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
document.getElementById("form2").addEventListener("submit", e => {
  e.preventDefault();
  const country = document.querySelector("select");
  const result1 = document.getElementById("result1");
  result1.textContent = country.value;
});

// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。
document.getElementById("form3").addEventListener("submit", e => {
  e.preventDefault();
  const languages = document.getElementsByName("check");
  const selectedLanguages = [];
  languages.forEach(language => {
    if (language.checked) selectedLanguages.push(language.value);
  });
  const result2 = document.getElementById("result2");
  result2.textContent = selectedLanguages;
});

// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
document.getElementById("form4").addEventListener("submit", e=> {
  e.preventDefault();
  const languages = document.getElementsByName("radio");
  let selectedLanguage;
  languages.forEach(language => {
    if (language.checked) selectedLanguage = language.value;
  });
  const result3 = document.getElementById("result3");
  result3.textContent = selectedLanguage;
});

// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、処理を中断してください。
document.getElementById("form5").addEventListener("submit", e=> {
  e.preventDefault();
  const company = document.getElementsByName("company");
  console.log(company[0].value);
  if (company[0].value) {
    return true;
  } else {
    alert("会社名が未入力です。");
    return false;
  }
});

// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
const txt6 = document.getElementById("txt6");
txt6.style.color = "red";
txt6.style.fontSize = "32px";

// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。
document.getElementById("btn2").addEventListener("click", () => {
  const createdP = document.createElement("p");
  createdP.textContent = "ノード追加テキスト";
  document.getElementById("parent").appendChild(createdP);
});

// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
document.getElementById("btn3").addEventListener("click", () => {
  const parent = document.getElementById("parent");
  // parent.textContent = null;
  while (parent.firstChild) parent.removeChild(parent.firstChild);
});

// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
document.getElementById("btn4").addEventListener("click", () => {
  const link1 = document.getElementById("link1");
  console.log(link1.href);
  link1.href = "https://www.yahoo.co.jp";
});

// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
const li = document.getElementById("list1").querySelectorAll("li");
li.forEach((selectedLi) =>{
  selectedLi.addEventListener("click", () => {
    console.log(selectedLi.dataset.num);
  });
});

// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
const txt7 = document.getElementById("txt7");
document.getElementById("btn5").addEventListener("click", () => {
  txt7.classList.add("red");
});

// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
document.getElementById("btn6").addEventListener("click", () => {
  txt7.classList.remove("red");
});

// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
document.getElementById("btn7").addEventListener("click", () => {
  txt7.classList.toggle("red");
});
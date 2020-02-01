'use strict';

document.getElementById("submit").addEventListener("click", e => {
  var formGroup = document.getElementsByClassName("form-group");
  var text;      // 入力内容
  var err;       // エラーメッセージを表示するpタグ
  var reg;       // 正規表現
  var errMes;    // エラーメッセージ

  for (var i = 0; i < formGroup.length; i++) {
    text = formGroup[i].querySelector("input");
    err = formGroup[i].querySelector("p");
    switch (text.name) {
      case "name":
        reg = /.*/;
        errMes = "名前が未入力です";
        break;
      case "kana":
        reg = /^[ァ-ヶー　]+$/;
        errMes = "全角カナで入力してください。";
        break;
      case "tel":
        reg = /^\d{10,11}$/;
        errMes = "電話番号をハイフンなしで入力してください。";
        break;
      case "mail":
        reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  // これがとりあえず無難っぽい？
        errMes = "メールアドレスの形式ではありません。";
        break;
    }

    if ((!text.value) || (!reg.test(text.value))) {  // 入力内容が空か正規表現と一致しないとき
      err.textContent = errMes;                      // エラーメッセージを表示
      err.classList.add("red");                      // クラスを追加
      e.preventDefault();                            // イベントを停止
    } else {
      err.textContent = "";                          // 複数回送信ボタンを押したときの前回のエラーメッセージをクリア
    }
  }
});
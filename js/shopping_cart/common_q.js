'use strict';
(function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var pc = document.getElementById('pc');
  var tablet = document.getElementById('tablet');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  // 定数は全て大文字で書くことが多い
  var TAXRATE = 8;

  btn.addEventListener("click", () => {
    // 小計
    var quantity_tablet = tablet.value;
    var quantity_pc = pc.value;
    var tabletPrice = parseInt(document.getElementById("tabletPrice").innerText);
    var pcPrice = parseInt(document.getElementById("pcPrice").innerText);
    var subtotal_price = tabletPrice * quantity_tablet + pcPrice * quantity_pc;
    subtotal.innerText = subtotal_price;
    // 税額
    var tax_price = subtotal_price * TAXRATE / 100;
    tax.innerText = tax_price;
    // 合計
    total.innerText = subtotal_price + tax_price;
  });
}());
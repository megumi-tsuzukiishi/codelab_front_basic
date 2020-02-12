'use strict'

$(function(){

  $("#accordion > dd:not(:first)").css("display", "none");
  $("#accordion > dt").click(function() {
  // $("#accordion").on("click", "dt", function() { // onを使いたい場合
    // $("dd").slideUp(); // 一旦全部閉じると、既に開いてあるメニューをクリックしたときの挙動が気になる
    $("#accordion > dt").not($(this)).next("dd").slideUp();
    $(this).next("dd").slideDown();

  })

});
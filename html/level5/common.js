'use strict';

$(function(){
// ハンバーガーメニュー
  $("#open, #close, #mask").on("click", () => {
    $("body").toggleClass("active");
  });
// slick
  $('.app-designs').slick({
    dots: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
  // スクロールして可動範囲に入ったらアニメーション
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 200){
          $(this).addClass('active');
        }
    });
  });
});



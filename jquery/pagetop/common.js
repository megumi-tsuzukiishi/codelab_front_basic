'use strict';

$(function () {

  var pageTop = $("#pageTop");
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 150) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  })

  pageTop.on("click", () => {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

});
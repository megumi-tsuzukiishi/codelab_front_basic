'use strict';

$(function() {

  $("#open, #close, #mask").on("click", () => {
    $("body").toggleClass("active");
  });

});
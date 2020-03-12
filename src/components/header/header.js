import * as $ from "jquery";

$(document).ready(function() {
  $(".hamburger, .header__fog-area, .header__link").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $(".header__nav").slideToggle();
  });

  $(window).resize(function() {
    if ($(window).width() > 768) {
      $(".header__nav").removeAttr("style");
      if ($(".hamburger").hasClass("is-active")) {
        $(".hamburger").removeClass("is-active");
      }
    }
  });
});

$(document).ready(function() {
  $(".hamburger, .header__fog-area").on("click", function() {
    $(".hamburger").toggleClass("is-active");
    $(".header__nav").slideToggle();
  });

  $(".header__link").on("click", function() {
    if ($(window).width() < 768) {
      $(".hamburger").toggleClass("is-active");
      $(".header__nav").slideToggle();
    } else {
      return;
    }
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

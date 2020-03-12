import * as $ from "jquery";

$(document).ready(function() {
  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
    $(".header__nav").slideToggle();
  });
});

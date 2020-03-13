$(document).ready(function() {
  $(".title-section__slider").slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    prevArrow: "<div class='title-section__prev-arrow'><i class='fas fa-chevron-left'></i></div>",
    nextArrow: "<div class='title-section__next-arrow'><i class='fas fa-chevron-right'></i></div>",
    autoplay: true,
    autoplaySpeed: 7000,
    initialSlide: 1
  });
});

$(function() {

  $('.header__slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick__btn"><img src="images/left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick__btn"><img src="images/right.png" alt=""></button>',
    infinite: false,
    dots: true
  });

  $('.recent__slider').slick({
    prevArrow: '<button type="button" class="recent-prev recent__btn"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="recent-next recent__btn"><img src="images/arrow-right.png" alt=""></button>',
    infinite: false,
  });

  $('.burger__menu').on('click', function() {
    $('.header__menu').slideToggle();
  });

});
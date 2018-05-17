import 'slick-carousel';
let slider = $('.js-slider');
slider.slick({
  prevArrow: '.js-prev-arrow',
  nextArrow: '.js-next-arrow',

});
function counter() {
  let counterAll = $('.js-counter-all');

  slider.on('init afterChange', function() {
    let currentSlide = $(this).slick('slickCurrentSlide') + 1;
    let counterCurrent = $('.js-counter-current');
    counterCurrent.text(currentSlide);
  });

}
counter();



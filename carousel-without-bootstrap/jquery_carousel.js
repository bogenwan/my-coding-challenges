$(document).ready(function () {
  // set interval for rotation
  var interval = null;
  interval = setInterval(function () {
      autoSlide()
    }, 4000);
  // find each item width
  const itemWidth = $('.carousel ul li').outerWidth(false);
  // get left shift width value with negative number
  const leftShiftValue = itemWidth * (-1);

  // move last item before first item incase user click prev to fill empty spot
  $('.carousel ul li:first').before($('.carousel ul li:last'));

  $('.previous-button').click(function() {
    $('.carousel ul').animate({'margin-left': itemWidth}, 1000, function () {
      // then move last item before the first
      $('.carousel ul li:first').before($('.carousel ul li:last'));
      // reset margin left to 0px
      $('.carousel ul').css({'margin-left': '0px'});
    });
  });

  $('.next-button').click(function() {
    $('.carousel ul').animate({'margin-left': leftShiftValue}, 1000, function () {
      //move first item after last
      $('.carousel ul li:last').after($('.carousel ul li:first'));
      $('.carousel ul').css({'margin-left': '0px'});
    });
  });

  // stop interval once hover over buttons
  $('.button').hover(
    function() {
      clearInterval(interval);
    },
    function () {
    interval = setInterval(function () {
      autoSlide()}, 3000);
    });

});
// function for auto slide
function autoSlide () {
  $('.next-button').click();
};
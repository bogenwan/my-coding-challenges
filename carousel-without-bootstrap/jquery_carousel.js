$(document).ready(function () {
  // set interval for rotation
  var interval = null;
  interval = setInterval(function () {
      autoSlide()
    }, 4000);
  // find each item width
  const itemWidth = $('.carousel ul li').outerWidth(false);
  // get left shift value
  const leftShiftValue = itemWidth * (-1)
  console.log(leftShiftValue);
  // var number = parseInt($('.carousel ul').css('left'));
  // console.log(number)

  // move last item before first item
  $('.carousel ul li:first').before($('.carousel ul li:last'));
  // set default item to correct position
  // $('.carousel ul').css({'margin-left': '0px'});

  $('.previous-button').click(function() {
    // var left_indent = parseInt($('.carousel ul').css('left')) + itemWidth;
    $('.carousel ul').animate({'margin-left': '1000px'}, 1000, function () {
      // move last item before the first
      $('.carousel ul li:first').before($('.carousel ul li:last'));
      $('.carousel ul').css({'margin-left': '0px'});
      // set default item to correct position
      // $('.carousel ul').css({'left': leftShiftValue});
    });
  });

  $('.next-button').click(function() {
    // var left_indent = parseInt($('.carousel ul').css('left')) - itemWidth;
    $('.carousel ul').animate({'margin-left': '-1000px'}, 1000, function () {
      //move first item after last
      $('.carousel ul li:last').after($('.carousel ul li:first'));
      //set default item to correct position
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
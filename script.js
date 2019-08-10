$(document).ready(function() {
  $('.work-examples__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
      breakpoint: 1250,
      settings: {
      dots: true,
      slidesToShow: 2,
      arrows: false
      }
    }, {
      breakpoint: 850,
      settings: {
      dots: true,
      slidesToShow: 1,
      arrows: false
      }
    }]
  });
});

$('.open_fast').click(function(){
  $('.popup_fast').addClass('active');
  $('.bg_popup').fadeIn();
  $('.bg_popup').click(function(){
    $('.popup_fast').removeClass('active');
    $('.bg_popup').fadeOut();
  });
});

$('.icon-menu').click(function() {
    $(".menu").toggle(400);
    if ($(this).hasClass('active')) {
      $('.close-js').hide();
      $('.icon-menu-js').show();
      $(this).removeClass('active');
    } else {
      $('.close-js').show();
      $('.icon-menu-js').hide();
      $(this).addClass('active');
    }
  });
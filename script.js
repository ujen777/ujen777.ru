$(document).ready(function() {
  $('.work-examples').slick({
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
  $('.popup_fast').css({'top': $(window).scrollTop() +100}).addClass('active');
  $('.bg_popup').fadeIn();
  $('.bg_popup').click(function(){
    $('.popup_fast').removeClass('active');
    $('.bg_popup').fadeOut();
  });
});
$(window).scroll(function(){
  $('.popup_fast').css({'top': $(window).scrollTop() +100});
}).scroll();

$('.icon-menu').click(function() {
    $("#small-menu").toggle(400);
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
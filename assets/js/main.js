jQuery(document).ready(function($) {
  $('.header__menu-toggle').on('click', function(e) {
    e.preventDefault();
    
    $('.header__navigation-container').addClass('nav-open');

    $('body').css('overflow', 'hidden');
  });
  $('.header__menu-toggle--close').on('click', function(e) {
    e.preventDefault();
    
    $('.header__navigation-container').removeClass('nav-open');

    $('body').css('overflow', 'scroll');
  });
});
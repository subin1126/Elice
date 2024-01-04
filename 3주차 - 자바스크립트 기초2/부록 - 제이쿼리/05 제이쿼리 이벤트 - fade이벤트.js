$(function () {
    $('#fade-out').click(function () {
      $('h1').fadeOut();
    });
  
    $('#fade-in').click(function () {
      $('h1').fadeIn();
    });
  
    $('#fade-toggle').click(function () {
      $('h1').fadeToggle();
    });
  });
  
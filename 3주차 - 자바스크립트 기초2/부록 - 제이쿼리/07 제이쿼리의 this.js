$(function () {
    var $favorites_icon = $('.favorites_icon'); //i태그에 해당된 3개 박스가 다 들어감
  
    $favorites_icon.click(function () {
      $(this).toggleClass('on');
    });
  });
  
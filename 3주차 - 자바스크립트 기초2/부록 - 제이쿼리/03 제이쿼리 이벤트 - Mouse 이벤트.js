$(function() {
    $("h1").mouseenter(function(){
        $("#mouse-event").css("background-color", "yellow");
    });
  
    $("h1").mouseleave(function(){
        $("#mouse-event").css("background-color", "pink");
    });
  
    $("h1").click(function(){
        $("#mouse-event").css("background-color", "gray");
    });
  });
$(function() {
    $(".addClass").click(function(){
        $("h1").addClass("blue");
        $("h2").addClass("important");
    });

    $(".removeClass").click(function(){
        $("h1").removeClass("blue");
        $("h2").removeClass("important");
    });


    $(".hasClass").click(function(){
        $("h1").toggleClass("blue");
        $("h2").toggleClass("important");
    });
    

/*
    $(".hasClass").click(function(){
        if($("h1").hasClass("blue") && $("h2").hasClass("important")){
            $("h1").removeClass("blue");
            $("h2").removeClass("important");
        } else {
            $("h1").addClass("blue");
            $("h2").addClass("important");
        }
    });*/

});
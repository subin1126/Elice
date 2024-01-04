$(function(){
    $("button").click(function(){
        $("#move").width(600);
        $("#move").height(600);
        $("#move").animate({left: "-=300px"}, "slow");
    });
});



// $(function () {
//   $('button').click(function () {
//     $('#move').animate({
//       width: 600,
//       height: 600,
//       left: "-=300px"
//     });
//   });
// });

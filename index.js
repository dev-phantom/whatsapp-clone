$(window).on('load', function() {
    $('.preloader').fadeOut(5000);
});
$(function (){
    $("#item").click(function(){
        $("#submenu").slideToggle(500);
    });
});
$(function (){
    $("#camera").click(function(){
        alert("sorry, camera can't function for now try again later");
    });
});
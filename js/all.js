$(document).ready(function(){
  $("header .menu-btn").click(function(){
    $("header nav").toggleClass('open');
    $("header .menu-btn").toggleClass('click');
  });
});
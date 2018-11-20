$(document).ready(function() {
  $('.nav-dropdown-content').hover(function() {
    $(this).find('.nav-dropdown-content').stop(true, true).delay(200).fadeIn(500);
    }, function() {
    $(this).find('.nav-dropdown-content').stop(true, true).delay(200).fadeOut(500);
  });
  
});
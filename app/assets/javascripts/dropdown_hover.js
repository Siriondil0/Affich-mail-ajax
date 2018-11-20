$(document).ready(function() {
  

  $('.nav-dropdown').hover(
    function () {
      $('.nav-dropdown-content', this).stop(true, true).delay(200).fadeIn(500);
    },
    function () {
      $('.nav-dropdown-content', this).stop(true, true).delay(200).fadeOut(500);
    }
  );


});
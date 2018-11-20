$(document).ready(function() {

  var paused = false
  var interval;
  $('#previous').on('click', function(){
    paused = true;
    // Change to the previous image
    $('#img_' + currentImage).stop().fadeOut(100);
    decreaseImage();
    $('#img_' + currentImage).stop().fadeIn(100);
    interval.reset(5000)
    paused = false
  }); 
  $('#next').on('click', function(){
    paused = true;
    // Change to the next image
    $('#img_' + currentImage).stop().fadeOut(100);
    increaseImage();
    $('#img_' + currentImage).stop().fadeIn(100);
    clearInterval(interval);
    interval.reset(5000)
    paused = false
  }); 
  $('#dots ').on('click', 'span', function(){
    paused = true;
    //change image to selected span
    var spanId = $(this).attr('id');
    $('#img_' + currentImage).stop().fadeOut(100);
    showImage(spanId);
    $('#img_' + currentImage).stop().fadeIn(100);
    interval.reset(5000)
    paused = false
  }); 

  var currentImage = 1;
  var totalImages = $("div.img").length;
  // Thumbnail image controls

  function increaseImage() {
    /* Increase currentImage by 1.
    * Resets to 1 if larger than totalImages
    */
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    /* Decrease currentImage by 1.
    * Resets to totalImages if smaller than 1
    */
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }
  function showImage(id) {
    currentImage = id;
  }

  interval = new Timer(function() {
		if (paused === false) { 
			$('#img_' + currentImage).stop().fadeOut(100);
      increaseImage();
      $('#img_' + currentImage).stop().fadeIn(100);
		};
  },  5000);

  
});
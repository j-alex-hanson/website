function start_hover(e, o) {
  // Don't propagate the event
  e.stopPropagation();
  
  var hoverElement = o.querySelector(".teaser_hover");
  hoverElement.style.opacity = "1";
  
  // If there's a video in the hover element, play it
  var video = hoverElement.querySelector("video");
  if (video) {
    video.play();
  }
}

function stop_hover(e, o) {
  // Don't propagate the event
  e.stopPropagation();
  
  var hoverElement = o.querySelector(".teaser_hover");
  hoverElement.style.opacity = "0";
  
  // If there's a video in the hover element, pause it
  var video = hoverElement.querySelector("video");
  if (video) {
    // pasue video
    //video.pause();
    // reset video to start
     video.currentTime = 0;
  }
}

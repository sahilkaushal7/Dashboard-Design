// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");
//Change container height
$(document).ready(function () {
  'use strict';
  
  var orientationChange = function () {
    var con = $('.con').height();
          document.getElementById("con-line").style.height = con + 'px';
  };

  var s = screen;
  var o = s.orientation || s.msOrientation || s.mozOrientation;
  o.addEventListener('change', function () {
    setTimeout(function () {
      orientationChange();
    }, 250);
  }, false);
  orientationChange();
});

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}
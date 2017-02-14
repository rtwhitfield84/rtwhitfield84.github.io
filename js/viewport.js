"use strict";

// triggers animation when element is in viewport
function onViewport(el, elClass, offset, callback) {
   let didScroll = false,
   this_top,
   height,
   top;
  
  if(!offset) { let offset = 0; }
 
  $(window).scroll(function() {
      didScroll = true;
  });
 
  setInterval(function() {
    if (didScroll) {
      didScroll = false;
      top = $(this).scrollTop();
 
      $(el).each(function(i){
        this_top = $(this).offset().top - offset;
        height   = $(this).height();
 
        // Scrolled within current section
        if (top >= this_top && !$(this).hasClass(elClass)) {
          $(this).addClass(elClass);
 
          if (typeof callback == "function") callback(el);
        }
      });
    }
  }, 100);
}

onViewport(".tech", "fadeIn", 500, function() {
});

onViewport(".enter", "slideLeft", 500, function() {
});

onViewport(".nugacity", "fadeIn", 500, function() {
});
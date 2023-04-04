window.addEventListener('load', function() {
  
    var monancreP = document.querySelector('#monancre p:first-child');
    var scrollToMonancreP = monancreP.getBoundingClientRect().top + window.pageYOffset;
    
    // Ajusta esta velocidad a tu preferencia
    var scrollSpeed = 1; // Píxeles por iteración
    var scrollInProgress = false; // Variable para controlar el desplazamiento en progreso
    var disableSmoothScrolling = false; // Variable para controlar el desplazamiento manual
    
    function customSmoothScroll() {
      var currentScroll = window.pageYOffset;
      if (currentScroll < scrollToMonancreP) {
        window.scrollTo(0, currentScroll + scrollSpeed);
        requestAnimationFrame(customSmoothScroll);
      } else {
        scrollInProgress = false;
      }
    }
    
    function runCustomSmoothScroll() {
      if (!scrollInProgress && window.pageYOffset < scrollToMonancreP && !disableSmoothScrolling) {
        scrollInProgress = true;
        customSmoothScroll();
      }
    }
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset !== 0) {
        disableSmoothScrolling = true;
      }
    });
    
    setInterval(function() {
      if (window.pageYOffset === 0 && !disableSmoothScrolling) {
        runCustomSmoothScroll();
      }
    }, 16);
    
  });
  
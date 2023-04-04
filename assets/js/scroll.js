window.addEventListener('load', function() {
  
  var monancreP = document.querySelector('#monancre p:first-child');
  var scrollToMonancreP = monancreP.getBoundingClientRect().top + window.pageYOffset;
  
  // Ajusta esta velocidad a tu preferencia
  var scrollSpeed = 1; // 1 pixel por iteración
  var scrollInProgress = false; // Variable para controlar el desplazamiento en progreso
  
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
    if (!scrollInProgress && window.pageYOffset < scrollToMonancreP) {
      scrollInProgress = true;
      customSmoothScroll();
    }
  }
  
  // Utilizamos debounce para retrasar la ejecución de la función
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  

  
  setInterval(function() {
    // Ejecutamos el desplazamiento suave si el scroll está en la parte superior y no hay un desplazamiento manual en progreso
    if (window.pageYOffset === 0 && !scrollInProgress) {
      runCustomSmoothScroll();
    }
  }, 16);
  
  // Detener el desplazamiento suave al hacer clic o tocar la pantalla
  window.addEventListener('click', function() {
    scrollInProgress = false;
  });
  window.addEventListener('touchstart', function() {
    scrollInProgress = false;
  });
  
});

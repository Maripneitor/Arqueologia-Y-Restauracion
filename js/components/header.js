// Header functionality - Versión Mejorada
document.addEventListener('DOMContentLoaded', function() {
  // Selección de elementos
  const header = document.querySelector('.header');
  const toggleButton = document.getElementById('header-toggle');
  const nav = document.getElementById('header-nav');
  const searchToggle = document.getElementById('search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const progressBar = document.getElementById('progress-bar');
  const languageBtn = document.querySelector('.header__language-btn');
  const languageDropdown = document.querySelector('.header__language-dropdown');
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  // ===== TOGGLE MOBILE NAVIGATION =====
  if (toggleButton && nav) {
    toggleButton.addEventListener('click', function() {
      const isOpening = !nav.classList.contains('active');
      
      nav.classList.toggle('active');
      toggleButton.classList.toggle('active');
      document.body.classList.toggle('no-scroll', isOpening);
      
      // Toggle aria-expanded attribute for accessibility
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      
      // Cerrar otros elementos abiertos
      if (isOpening) {
        closeSearchOverlay();
        closeLanguageDropdown();
      }
    });
  }
  
  // ===== SEARCH OVERLAY FUNCTIONALITY =====
  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', function() {
      searchOverlay.classList.add('active');
      document.body.classList.add('no-scroll');
      
      // Enfocar el input después de un pequeño delay
      setTimeout(() => {
        const searchInput = searchOverlay.querySelector('.header__search-input');
        if (searchInput) searchInput.focus();
      }, 100);
      
      // Cerrar otros elementos abiertos
      closeMobileNav();
      closeLanguageDropdown();
    });
    
    if (searchClose) {
      searchClose.addEventListener('click', closeSearchOverlay);
    }
  }
  
  // ===== LANGUAGE DROPDOWN FUNCTIONALITY =====
  if (languageBtn && languageDropdown) {
    languageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      languageDropdown.classList.toggle('active');
      
      // Cerrar otros elementos abiertos
      if (languageDropdown.classList.contains('active')) {
        closeMobileNav();
        closeSearchOverlay();
      }
    });
    
    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', function(e) {
      if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        closeLanguageDropdown();
      }
    });
  }
  
  // ===== HEADER SCROLL EFFECTS =====
  if (header) {
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const handleScroll = function() {
      const scrolled = window.scrollY;
      const headerHeight = header.offsetHeight;
      
      // Progress bar
      if (progressBar) {
        const winHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercent = winHeight > 0 ? (scrolled / winHeight) * 100 : 0;
        progressBar.style.width = Math.min(scrolledPercent, 100) + '%';
      }
      
      // Header background on scroll
      if (scrolled > 50) {
        header.classList.add('scrolled');
        
        // Hide header on scroll down, show on scroll up
        if (scrolled > lastScrollY && scrolled > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      } else {
        header.classList.remove('scrolled');
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollY = scrolled;
      ticking = false;
    };
    
    const requestScrollUpdate = function() {
      if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    handleScroll(); // Initial check
  }
  
  // ===== CLOSE MOBILE NAV ON LINK CLICK =====
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeMobileNav();
    });
  });
  
  // ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
  document.addEventListener('click', function(event) {
    if (nav.classList.contains('active') && 
        !nav.contains(event.target) && 
        !toggleButton.contains(event.target)) {
      closeMobileNav();
    }
  });
  
  // ===== KEYBOARD NAVIGATION =====
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllElements();
    }
    
    // Navegación por tab en menú móvil
    if (e.key === 'Tab' && nav.classList.contains('active')) {
      handleMobileTabNavigation(e);
    }
  });
  
  // ===== HELPER FUNCTIONS =====
  function closeMobileNav() {
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (toggleButton) {
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('no-scroll');
    }
  }
  
  function closeSearchOverlay() {
    if (searchOverlay && searchOverlay.classList.contains('active')) {
      searchOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }
  
  function closeLanguageDropdown() {
    if (languageDropdown && languageDropdown.classList.contains('active')) {
      languageDropdown.classList.remove('active');
    }
  }
  
  function closeAllElements() {
    closeMobileNav();
    closeSearchOverlay();
    closeLanguageDropdown();
  }
  
  function handleMobileTabNavigation(e) {
    const focusableElements = nav.querySelectorAll(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey && document.activeElement === firstElement) {
      // Shift + Tab desde el primer elemento
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      // Tab desde el último elemento
      e.preventDefault();
      firstElement.focus();
    }
  }
  
  // ===== TOUCH DEVICE SUPPORT =====
  let touchStartY = 0;
  
  document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  
  document.addEventListener('touchmove', function(e) {
    if (!nav.classList.contains('active')) return;
    
    const touchY = e.changedTouches[0].screenY;
    const diff = touchY - touchStartY;
    
    // Prevenir scroll del body cuando el menú está abierto
    if (diff > 0 && e.cancelable) {
      e.preventDefault();
    }
  }, { passive: false });
  
  // ===== RESIZE HANDLER =====
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      // Cerrar menú móvil en resize si estamos en desktop
      if (window.innerWidth >= 1024 && nav.classList.contains('active')) {
        closeMobileNav();
      }
    }, 250);
  });
  
  // ===== INITIALIZATION =====
  // Asegurar que el body tenga la clase inicial correcta
  document.body.classList.remove('no-scroll');
  
  // Inicializar atributos ARIA
  if (toggleButton) {
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-haspopup', 'true');
    toggleButton.setAttribute('aria-controls', 'header-nav');
  }
  
  if (searchToggle) {
    searchToggle.setAttribute('aria-haspopup', 'true');
    searchToggle.setAttribute('aria-controls', 'search-overlay');
  }
  
  if (languageBtn) {
    languageBtn.setAttribute('aria-haspopup', 'true');
    languageBtn.setAttribute('aria-expanded', 'false');
  }
});

// Exportar funciones para uso global si es necesario
window.headerFunctions = {
  closeMobileNav: function() {
    const nav = document.getElementById('header-nav');
    const toggleButton = document.getElementById('header-toggle');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (toggleButton) {
        toggleButton.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('no-scroll');
    }
  },
  
  openSearch: function() {
    const searchOverlay = document.getElementById('search-overlay');
    if (searchOverlay) {
      searchOverlay.classList.add('active');
      document.body.classList.add('no-scroll');
      setTimeout(() => {
        const searchInput = searchOverlay.querySelector('.header__search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  }
};
// Hero Section functionality
document.addEventListener('DOMContentLoaded', function() {
  const heroSection = document.querySelector('.hero');
  const scrollIndicator = document.querySelector('.hero__scroll-indicator');
  
  // Smooth scroll for the scroll indicator
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the next section (the one after hero)
      const nextSection = document.querySelector('#next-section');
      
      if (nextSection) {
        // Calculate the position to scroll to (considering fixed header)
        const headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 70;
        const targetPosition = nextSection.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
  
  // Parallax effect for hero background (optional)
  const setupParallax = function() {
    if (!heroSection) return;
    
    const heroImage = heroSection.querySelector('.hero__image');
    if (!heroImage) return;
    
    // Only apply parallax on larger screens where it looks good
    if (window.innerWidth < 768) return;
    
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      heroImage.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
  };
  
  // Initialize parallax if needed
  // setupParallax();
  
  // Reinit on resize
  window.addEventListener('resize', function() {
    // setupParallax();
  });
});
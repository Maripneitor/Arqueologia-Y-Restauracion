// About Section functionality
document.addEventListener('DOMContentLoaded', function() {
  // Timeline animation on scroll
  const timelineItems = document.querySelectorAll('.timeline__item');
  
  if (timelineItems.length > 0) {
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe each timeline item with a delay
    timelineItems.forEach((item, index) => {
      // Add delay based on index for staggered animation
      item.style.transitionDelay = `${index * 0.1}s`;
      timelineObserver.observe(item);
    });
  }
  
  // Optional: Add interactive elements to values list
  const valuesItems = document.querySelectorAll('.about__values li');
  
  valuesItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });
  
  // Image hover effect enhancement
  const aboutImage = document.querySelector('.about__image-container');
  
  if (aboutImage) {
    aboutImage.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    
    aboutImage.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }
});
// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const joinButton = document.querySelector(".btn-primary")

  //Animação de entrada
  joinButton.classList.add("btn-entrance")

  //Animação de clique
  joinButton.addEventListener("click", function() {
    this.classList.add("btn-click")
    setTimeout(() => {
      this.classList.remove("btn-click")
    }, 300)
  })
  
  // Check for saved theme preference or use default
  const savedTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', savedTheme);
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update navbar appearance based on theme
    updateNavbarAppearance();
  });
  
  // Update navbar appearance on scroll
  window.addEventListener('scroll', () => {
    updateNavbarAppearance();
  });
  
  // Initial navbar appearance update
  updateNavbarAppearance();
  
  // Function to update navbar appearance
  function updateNavbarAppearance() {
    const navbar = document.getElementById('mainNav');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
      navbar.style.padding = '10px 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.padding = '15px 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
  }
  
  // Animation for elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('animated');
      }
    });
  };
  
  // Add scroll event listener for animations
  window.addEventListener('scroll', animateOnScroll);
  
  // Initial check for animations
  animateOnScroll();
});
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Responsive toggle menu
const navbar = document.querySelector('.navbar');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.textContent = '☰';
navbar.appendChild(menuToggle);

const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

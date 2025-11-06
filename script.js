// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Intersection Observer for scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .card').forEach(el => {
  el.classList.add('fade-out');
  observer.observe(el);
});

// Active navigation highlighting based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

function highlightNavOnScroll() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Add subtle hover effect to skill pills
document.querySelectorAll('.pill-list li').forEach(pill => {
  pill.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  
  pill.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Staggered animation for skill pills
const skillPills = document.querySelectorAll('.pill-list li');
skillPills.forEach((pill, index) => {
  pill.style.animationDelay = `${index * 0.05}s`;
});

// Card hover effect enhancement
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Typing animation for tagline (runs once on load)
const tagline = document.querySelector('.tagline');
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = '';
  tagline.style.opacity = '1';
  
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Start typing after a brief delay
  setTimeout(typeWriter, 500);
}

// Set current year (already exists, but keeping it)
document.getElementById('year').textContent = new Date().getFullYear();


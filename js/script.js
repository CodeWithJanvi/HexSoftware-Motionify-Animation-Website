// Navbar toggle for mobile
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const navLinks = document.getElementById('nav-links');

menuOpen.addEventListener('click', () => {
  navLinks.classList.add('active');
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuClose.style.display = 'none';
  menuOpen.style.display = 'block';
});

// Auto close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
  });
});


// Auto close when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
  });
});


// Fade-in Animation on Scroll
const fadeEls = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;
    if (rect < triggerPoint) {
      el.classList.add('show');
    }
  });
});
  const elements = document.querySelectorAll('.fade-left, .fade-right');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));

  AOS.init();

  // Swiper initialization
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

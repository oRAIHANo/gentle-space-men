// JS for Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Sidebar menu switching and image swapping
  const menuItems = document.querySelectorAll('.sidebar-menu li');
  const appContents = document.querySelectorAll('.app-content');
  const phoneImage = document.getElementById('phone-image');

  // helper to change image with a small fade
  function changePhoneImage(src, alt) {
    if (!phoneImage) return;
    // if same src, do nothing
    if (phoneImage.src && phoneImage.src.endsWith(src)) return;

    // fade out
    phoneImage.classList.add('is-fading');

    // after fade duration, swap src and fade in
    setTimeout(() => {
      phoneImage.src = src;
      phoneImage.alt = alt || '';
      // force reflow then remove fading to fade in
      void phoneImage.offsetWidth;
      phoneImage.classList.remove('is-fading');
    }, 200); // must match CSS transition timing (250ms in CSS) — short delay for effect
  }

  menuItems.forEach((item, index) => {
    item.addEventListener('click', function () {
      // update active menu item
      menuItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      // update content panes
      appContents.forEach(content => content.classList.remove('active'));
      if (appContents[index]) {
        appContents[index].classList.add('active');
      }

      // image swapping using data attributes:
      const imgSrc = this.getAttribute('data-image');
      const imgAlt = this.getAttribute('data-alt') || '';
      if (imgSrc) {
        changePhoneImage(imgSrc, imgAlt);
      }
    });
  });

  // Scroll to Top visibility
  window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn && window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else if (scrollTopBtn) {
      scrollTopBtn.classList.remove('visible');
    }
  });
});

// expose scrollToTop globally so inline onclick continues to work
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// how seection
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const modals = document.querySelectorAll('.modal');
  const closes = document.querySelectorAll('.close');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const modalId = this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  closes.forEach(close => {
    close.addEventListener('click', function () {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  });

  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // Handle Try button (example: alert or redirect)
  const tryButtons = document.querySelectorAll('.btn-try');
  tryButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      alert('Try 14 days free - Redirecting to signup...');
    });
  });
});

// pricing section
document.addEventListener('DOMContentLoaded', function () {
  const tryButtons = document.querySelectorAll('.btn-try');
  tryButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const plan = this.closest('.pricing-card').querySelector('h3').textContent;
      alert(`Starting ${plan} plan - Redirecting to signup...`);
    });
  });
});

// FAQ section 
document.addEventListener('DOMContentLoaded', function () {
  const plusSigns = document.querySelectorAll('.plus-sign');

  plusSigns.forEach(plus => {
    plus.addEventListener('click', function () {
      const faqItem = this.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const isActive = answer.classList.contains('active');

      // Close all other answers
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('active'));
      document.querySelectorAll('.plus-sign').forEach(p => p.textContent = '+');

      if (!isActive) {
        answer.classList.add('active');
        this.textContent = '-';
      }
    });
  });
});
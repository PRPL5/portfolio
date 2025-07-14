// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', (e) => {
    // Prevent reload for Home link
    if (headerSmallMenuLinks[i].querySelector('a').getAttribute('href') === './index.html' ||
        headerSmallMenuLinks[i].querySelector('a').getAttribute('href') === 'index.html') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    smallMenu.classList.remove('header__sm-menu--active');
    headerHamMenuBtn.classList.remove('d-none');
    headerHamMenuCloseBtn.classList.add('d-none');
    // Removed: Preserve dark mode when navigating
  });
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})



  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        emailjs.sendForm(
          'service_argovyd',    // Your EmailJS service ID
          'template_ikv0l4r',   // Your EmailJS template ID
          form
        ).then(
          function(result) {
            alert('Message sent successfully!');
            form.reset();
          },
          function(error) {
            alert('Failed to send message.');
            console.log(error.text);
          }
        );
      });
    }
  });
  
  function setVantaEffect(id, options) {
    if (window.vantaEffect) window.vantaEffect.destroy();
    window.vantaEffect = VANTA.NET({
      el: id,
      ...options
    });
  }

  function setVantaGlobeEffect(id, options) {
    if (window.vantaGlobeEffect) window.vantaGlobeEffect.destroy();
    window.vantaGlobeEffect = VANTA.GLOBE({
      el: id,
      ...options
    });
  }

  

  document.addEventListener('DOMContentLoaded', function () {
    const moonIcon = document.querySelector('.feather-moon');
    const homeHero = document.querySelector('.home-hero');
    let darkMode = false;

    // Initial Vanta effect
    setVantaEffect("#vanta-bg", {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x7aed4,
      backgroundColor: 0x15153c
    });

    // Initial Globe effect for contact section
    setVantaGlobeEffect("#contact", {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x00ffff,
      backgroundColor: 0x15153c
    });

    moonIcon.addEventListener('click', function () {
      darkMode = !darkMode;
      document.body.classList.toggle('dark-mode');
      if (darkMode) {
        homeHero.id = "vanta-bg2";
        setVantaEffect("#vanta-bg2", {
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7aed4,
          backgroundColor: 0xf0f0f0
        });
        setVantaGlobeEffect("#contact", {
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7aed4, // pinkish globe
          backgroundColor: 0xf0f0f0 // dark background
        });
      } else {
        homeHero.id = "vanta-bg";
        setVantaEffect("#vanta-bg", {
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7aed4,
          backgroundColor: 0x15153c
        });
        setVantaGlobeEffect("#contact", {
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x00ffff,
          backgroundColor: 0x15153c
        });
      }
    });
  });

document.addEventListener('DOMContentLoaded', function () {
  // Removed: Restore dark mode on page load using localStorage
  const textPrimary = document.querySelector('.text-primary');
  if (textPrimary) {
    textPrimary.addEventListener('animationend', function (e) {
      if (e.animationName === 'typing') {
        textPrimary.classList.add('typed-done');
      }
    });
  }
});


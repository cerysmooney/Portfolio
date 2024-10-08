document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  const scrollSections = document.querySelectorAll('.scroll-reveal');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalText = document.getElementById('modal-text'); 
  const closeBtn = document.querySelector('.close'); 
  const modalGallery = document.querySelector('.modal-gallery');
  const galleries = {
      'buzzy-gallery': [
          'Imgs/BuzzyStride/login_buzzy.png',
          'Imgs/BuzzyStride/buzzy_home.png',
          'Imgs/BuzzyStride/buzzy_ava_routes.png',
          'Imgs/BuzzyStride/buzzy_busy_route.png',
          'Imgs/BuzzyStride/buzzy_map.png',
          'Imgs/BuzzyStride/buzzy_built.png',
          'Imgs/BuzzyStride/8EAC7A.png',
          'Imgs/BuzzyStride/EE9B01.png',
          'Imgs/BuzzyStride/EE8434.png',
          'Imgs/BuzzyStride/da6a00.png',
          'Imgs/BuzzyStride/597393.png'
      ],
      'kaiffa-gallery': [
          'Imgs/Kaiffa/Group 55.png',
          'Imgs/Kaiffa/Frame 58.png',
          'Imgs/Kaiffa/Group 49.png',
          'Imgs/Kaiffa/Group 47.png',
          'Imgs/Kaiffa/white.png',
          'Imgs/Kaiffa/Almost White.png',
          'Imgs/Kaiffa/egg.png',
          'Imgs/Kaiffa/Grey Blue.png',
          'Imgs/Kaiffa/Deep Blue.png',
      ],
      'cham-gallery': [
          'Imgs/Noise/waveform.JPG',
          'Imgs/Noise/vls.JPG',
          'Imgs/Noise/psd.JPG',
          'Imgs/Noise/example.JPG',
          "Imgs/Noise/greysquare.png",
          "Imgs/Noise/greensquare.png",
          "Imgs/Noise/purplesquare.png",
          "Imgs/Noise/offwhitesquare.png",
          'Imgs/Kaiffa/Almost White.png',
      ],
      'washing-gallery': [
          'Imgs/Washing/contact.JPG',
          'Imgs/Washing/cafe.JPG',
          'Imgs/Washing/events.JPG',
          'Imgs/Washing/function.JPG',
          'Imgs/Washing/purplesquare.png',
          'Imgs/Washing/dgreensquare.png',
          'Imgs/Washing/lbrownsquare.png',
          'Imgs/Washing/lgreen.png',
          'Imgs/Washing/lgrey.png',
      ]
  };

  modal.style.display = 'none';
  // Toggle off-screen menu
  hamburgerMenu.addEventListener('click', function() {
      hamburgerMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');
  });

  const anchorLinks = offScreenMenu.querySelectorAll('a');
  anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); 
          const targetId = this.getAttribute('href'); 
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
          hamburgerMenu.classList.remove('active');
          offScreenMenu.classList.remove('active');
      });
  });

  document.addEventListener('click', function(event) {
      if (!hamburgerMenu.contains(event.target) && !offScreenMenu.contains(event.target)) {
          if (offScreenMenu.classList.contains('active')) {
              hamburgerMenu.classList.remove('active');
              offScreenMenu.classList.remove('active');
          }
      }
  });

  // Scroll reveal sections
  window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      scrollSections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionBottom = section.getBoundingClientRect().bottom;
          if (sectionTop < window.innerHeight && sectionBottom > 0) {
              section.classList.add('scrolled');
          } else {
              section.classList.remove('scrolled');
          }
      });
      if (scrollTop === 0) {
          scrollSections.forEach(section => {
              section.classList.remove('scrolled');
          });
      }
  });

  document.querySelectorAll('#gallery a').forEach(item => {
      item.addEventListener('click', function(e) {
          e.preventDefault();
          const galleryKey = this.getAttribute('data-gallery');
          const text = this.getAttribute('data-text');

          modalGallery.innerHTML = ''; 
          if (galleries[galleryKey]) {
              galleries[galleryKey].forEach(src => {
                  const img = document.createElement('img');
                  img.src = src;
                  modalGallery.appendChild(img);
              });
          }

          modalText.innerHTML = text;  
          modal.style.display = 'block';
          document.body.classList.add('modal-open');
      });
  });

  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutFade = document.querySelector(".about-fade");
  const aboutImageWrapper = document.querySelector(".about-image-wrapper");

  const revealAboutInfo = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("reveal");
          } else {
              entry.target.classList.remove("reveal");
          }
      });
  };

  const observer = new IntersectionObserver(revealAboutInfo, {
      threshold: 0.3
  });

  observer.observe(aboutFade);
  observer.observe(aboutImageWrapper);
});

document.addEventListener("DOMContentLoaded", () => {
  const workInfo = document.querySelector(".work-fade");

  const revealWorkInfo = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("reveal");
          } else {
              entry.target.classList.remove("reveal");
          }
      });
  };

  const observer = new IntersectionObserver(revealWorkInfo, {
      threshold: 0.1
  });

  observer.observe(workInfo);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactInfo = document.querySelector(".contact-fade");

  const revealContactInfo = (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("reveal");
          } else {
              entry.target.classList.remove("reveal");
          }
      });
  };

  const observer = new IntersectionObserver(revealContactInfo, {
      threshold: 0.8
  });

  observer.observe(contactInfo);
});

document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('backToTopButton');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 350) {
          backToTopButton.classList.add('show'); 
      } else {
          backToTopButton.classList.remove('show'); 
      }
  });

  backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
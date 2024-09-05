document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const scrollSections = document.querySelectorAll('.scroll-reveal');
    
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text'); 
    const closeBtn = document.querySelector('.close'); 
  
    modal.style.display = 'none';
    
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        scrollSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (sectionTop < window.innerHeight && sectionBottom > 0) {
                section.classList.add('scrolled');
            } else {
                section.classList.remove('scrolled');
            }
        });
    });

    document.querySelectorAll('#gallery a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-src');
            const text = this.getAttribute('data-text'); 

            modalImg.src = imgSrc;
            modalText.textContent = text; 
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


document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalGallery = document.querySelector('.modal-gallery');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close');

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
            'Imgs/washing-1.JPG',
          'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG'
        ],
        'cham-gallery': [
            'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG'
        ],
        'washing-gallery': [
            'Imgs/washing.JPG',
            'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG',
            'Imgs/washing-1.JPG'
        ]
    };

    document.querySelectorAll('#gallery a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const galleryKey = this.getAttribute('data-gallery');
            const text = this.getAttribute('data-text');

            modalGallery.innerHTML = ''; 
            galleries[galleryKey].forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                modalGallery.appendChild(img);
            });

            modalText.textContent = text;
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
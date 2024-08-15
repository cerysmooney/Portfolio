document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const scrollSections = document.querySelectorAll('.scroll-reveal');
    
   
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text'); 
    const closeBtn = document.querySelector('.close'); 
  
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

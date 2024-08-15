document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const scrollSections = document.querySelectorAll('.scroll-reveal');
    
    // modal variables
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.getElementsByClassName("close")[0];

    // ham menu toggle
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    // Scroll reveal effect
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

    // open modal when an image is clicked
    document.querySelectorAll('#gallery a').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('data-src');
            modal.style.display = "block";
            modalImg.src = imgSrc;
        });
    });

    // close the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    // close the modal when clicking outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

// const track = document.getElementById("image-track");

// window.onmousedown = e => {
//     track.dataset.mouseDownAt = e.clientX;
// }

// window.onmousemove = e => {

//     if(track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//           maxDelta = window.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * -100;
//     let nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
//     nextPercentage = Math.max(Math.min(nextPercentage, 0), -100);  // Clamps to between -100% and 0%
    
//     track.dataset.percentage = nextPercentage;

//     // Animate track movement
//     track.animate(
//         { transform: `translate(${nextPercentage}%, -50%)` },
//         { duration: 1200, fill: "forwards" }
//     );

//     // Apply a super dramatic parallax effect to each image
//     document.querySelectorAll("#image-track > .image").forEach(image => {
//         const parallaxAmount = nextPercentage * 2.5; // Increasing the scaling factor for a dramatic effect
//         image.animate(
//             { objectPosition: `${100 + parallaxAmount}% center` },
//             { duration: 1200, fill: "forwards" }
//         );
//     });
// }

// window.onmouseup = () => {
//     track.dataset.mouseDownAt = "0";
//     track.dataset.prevPercentage = track.dataset.percentage;
// }
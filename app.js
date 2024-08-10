document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const scrollSections = document.querySelectorAll('.scroll-reveal');

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
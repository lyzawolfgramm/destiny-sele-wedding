/* =========================
   WEDDING PHOTO CAROUSEL
========================== */


// Start with the first slide

let currentSlide = 0;


// Find all carousel slides

const slides = document.querySelectorAll(".carousel-slide");



/* =========================
   SHOW A SLIDE
========================== */

function showSlide(index) {

    // Remove "active" from every slide

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });



    // If we go past the last photo,
    // return to the first photo

    if (index >= slides.length) {

        currentSlide = 0;

    }


    // If we go backward from the first photo,
    // go to the last photo

    else if (index < 0) {

        currentSlide = slides.length - 1;

    }


    // Otherwise use the requested slide

    else {

        currentSlide = index;

    }



    // Show the current slide

    slides[currentSlide].classList.add("active");

}

/* =========================
         PROPOSAL VIDEO
   ========================== */

function openProposalVideo() {

    const modal = document.getElementById("proposalModal");

    const video = document.getElementById("proposalVideo");

    video.src =
        "https://www.youtube.com/embed/d80FEDz3lf4?autoplay=1";

    modal.classList.add("active");

}


function closeProposalVideo() {

    const modal = document.getElementById("proposalModal");

    const video = document.getElementById("proposalVideo");

    modal.classList.remove("active");

    video.src = "";

}

/* =========================
   NEXT / PREVIOUS BUTTON
========================== */

function changeSlide(direction) {

    showSlide(currentSlide + direction);

}



/* =========================
   AUTO PLAY

   Changes photo every
   5 seconds
========================== */

setInterval(function() {

    changeSlide(1);

}, 5000);
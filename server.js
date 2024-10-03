let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); // Hide all slides
        if (i === index) {
            slide.classList.add('active'); // Show the current slide
        }
    });
}

function moveSlide(step) {
    currentSlide += step; // Update the current slide index
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    }
    showSlide(currentSlide); // Show the updated slide
}

// Show the first slide initially
showSlide(currentSlide);

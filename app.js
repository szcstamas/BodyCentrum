const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {

    document.body.classList.toggle("nav-open");
});


$('#mainCarousel').carousel({
    interval: 1000
});



// CAROUSEL FUNKCIÓ



const carLeftArrow = document.getElementById("carousel-left");
const carRightArrow = document.getElementById("carousel-right");
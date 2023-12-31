/// Button fixed
window.addEventListener('scroll', e => {
    let btn = document.getElementById('button').classList;
    let active_class = 'button_scrolled';

    if(scrollY > 0) btn.add(active_class);
    else btn.remove(active_class);
})

/// Slider
const slides = document.querySelectorAll('.slider-image');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = slides.length;
    }
    if (n < 1) {
        slideIndex = 1;
    }

    if (n === 1) {
        prev.classList.add('notActiv');
    }
    if (n === slides.length) {
        next.classList.add('notActiv');
    }
    if (n > 1) {
        prev.classList.remove('notActiv');
    }
    if (n < slides.length) {
        next.classList.remove('notActiv');
    }

    slides.forEach((item) => {
        item.style.display = 'none';
    })
    slides[slideIndex - 1].style.display = 'block';
}

function plusSlide(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () =>{
    plusSlide(-1);
})

next.addEventListener('click', () =>{
    plusSlide(1);
})
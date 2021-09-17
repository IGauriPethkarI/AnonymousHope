//Header
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){


    if(header.classList.contains('open')){ // Close Hamburger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');    
        fadeElems.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
        });
        
    }
    else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    } 
    
});


//featured articles slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide__item");
    var dots = document.getElementsByClassName("slide__dot__items");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//modal functioning
const modalshow = document.querySelector('#modalButton');
const modal = document.querySelector('.modal-container');
const selctionModal = document.querySelector('.modal--selection');
const successModal = document.querySelector('.modal--success');
const selectionSubmit = document.querySelector('.selection-submit');

//close button
const closeModalBtn = document.querySelector('.btn--close-modal');
const closeModal = document.querySelector('.close-modal');

modalshow.addEventListener('click', function(){
    modal.style.display = "block";
    successModal.style.display = 'none';
    body.style.overflow  = "hidden";          
});

selectionSubmit.addEventListener('click', function(){
    successModal.style.display = "block";
    selctionModal.style.display = "none";
    body.style.overflow  = "hidden";
});

//close modal
closeModalBtn.addEventListener('click', function(){
    modal.style.display = "none";
    body.style.overflow  = "visible";  
});

closeModal.addEventListener('click', function(){
    modal.style.display = "none";
    body.style.overflow  = "visible";  
});

//--------faq toggle-------//
var items = document.getElementsByClassName(".accordion-a");
var i;

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
  
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener("click", toggleAccordion));
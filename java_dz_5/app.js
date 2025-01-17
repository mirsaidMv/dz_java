let images = [
    { src: 'images/image-2.webp', alt: 'Слайд 1' },
    { src: 'images/pexels-kampus-production-5940842%201.webp', alt: 'Слайд 2' },
    { src: 'images/pexels-david-jakab-1130683%201.webp', alt: 'Слайд 3' }
];
let currentSlide = 0;

let imgElement = document.getElementById('slide-image');
let slideNumberElement = document.getElementById('slide-number');
let nextButton = document.getElementById('next-slide');

nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % images.length;
    let currentImage = images[currentSlide];

    imgElement.setAttribute('src', currentImage.src);
    imgElement.setAttribute('alt', currentImage.alt);
    slideNumberElement.textContent = currentSlide + 1;
});
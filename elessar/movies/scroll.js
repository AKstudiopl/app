
var scrollBox = document.querySelector(".content-scroll");

const featuredBox = document.querySelector('.movie-description-box');
const galleryBox = document.querySelector('.movie-description-gallery');

const checkIsVisible = (element) => {
    const rect = element.getBoundingClientRect();
    if(rect.bottom <= window.innerHeight){
        element.classList.add("scrolled")
    }
};

scrollBox.addEventListener('scroll', () => {
    checkIsVisible(featuredBox);
    checkIsVisible(galleryBox);
})

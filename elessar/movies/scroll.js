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

function featuredMovieContent() {
    const resultsData = document.querySelector(".movie-description-box");
    const resultFilterData = document.querySelector(".movie-top-categories p").innerText;
    const resultTitleData = document.querySelector(".movie-top-title h1").innerText;
    var favoritIt = movies.filter(x => x.tag === resultFilterData && x.name != resultTitleData);
    resultsData.innerHTML = "";
    for (let i = 0; i < 7; i++) {
      let resultData =
         `<div class="movie-description-item">
         <a href="${favoritIt[i].pageLink}"></a>
         <div class="movie-description-item-data">
             <h3>${favoritIt[i].name}</h3>
             <p>${favoritIt[i].director}</p>
         </div>
         <img src="${favoritIt[i].art}">
     </div>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
    }
  }

featuredMovieContent();

$('.content-scroll').scroll(function(){
    if($(this).scrollTop() >0){
        $('.header-controls-bg').css({'webkit-filter':'blur(5px)', 'filter':'blur(5px)', 'transform':'scale(1.1)', 'opacity':'0.5'});
        $('.header-title').css({'transform':'scale(1)'});
    }else{
        $('.header-controls-bg').css({'webkit-filter':'', 'filter':'', 'transform':'scale(1)', 'opacity':'1'});
        $('.header-title').css({'transform':'scale(1)'});
    }
});

function setMovieData(e){
    let sourceData = e.getAttribute('src-data');
    localStorage.setItem('sourceLink', sourceData)
}
window.addEventListener('load', () => {
    document.querySelector(".loader").classList.remove("active");
})
function imgView(e){
    document.querySelector(".img-view").classList.add("active");
    document.querySelector(".img-view img").src = e.src;
}
function imgHide(){
    document.querySelector(".img-view").classList.remove("active");
}
$('.content-scroll').scroll(function(){
    if($(this).scrollTop() >0){
        $('.header-controls-bg').css({'webkit-filter':'blur(5px)', 'filter':'blur(5px)', 'transform':'scale(1.1)', 'opacity':'0.5'});
        $('.header-title').css({'transform':'scale(1.35)'});
    }else{
        $('.header-controls-bg').css({'webkit-filter':'', 'filter':'', 'transform':'scale(1)', 'opacity':'1'});
        $('.header-title').css({'transform':'scale(1)'});
    }
});

$('.content-scroll').scroll(function(){
    if($(this).scrollTop() >100){
        $('.content-scroll-alert').css({'bottom':'-150px'});
    }else{
        $('.content-scroll-alert').css({'bottom':'0'});
    }
});
function backToIndex(){
    history.back();
}

jQuery(document).ready(function ($) {
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  
function movieHref(e){
    let urlSrc = e.getAttribute('url');
    window.location.replace("movies/" + urlSrc);
}

function premierContent() {
    const resultsData = document.querySelector(".premierBox");
    var favoritIt = movies.filter(x => x.date >= 2019);
    for (let i = 0; i < favoritIt.length; i++) {
      let resultData =
         `<div class="content-item" onclick="movieHref(this)" url="${favoritIt[i].pageLink}">
             <img src="${favoritIt[i].art}">
                <div class="content-data">
                    <h3>${favoritIt[i].name}</h3>
                    <p>${favoritIt[i].director}</p>
                    <span>${favoritIt[i].date}</span>
                </div>
         </div>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
        
        $("#premierBox").html($(".content-item").sort(function(){
            return Math.random()-0.5;
          }));
    }
}
  
function popularContent() {
    const resultsData = document.querySelector(".popularBox");
    var favoritIt = movies;
    for (let i = 0; i < favoritIt.length; i++) {
      let resultData =
         `<div class="content-item" onclick="movieHref(this)" url="${favoritIt[i].pageLink}">
             <img src="${favoritIt[i].art}">
                <div class="content-data">
                    <h3>${favoritIt[i].name}</h3>
                    <p>${favoritIt[i].director}</p>
                    <span>${favoritIt[i].date}</span>
                </div>
         </div>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
        
        $("#popularBox").html($(".content-item").sort(function(){
            return Math.random()-0.5;
          }));
    }
}

function fantasyContent() {
    const resultsData = document.querySelector(".fantasyBox");
    var favoritIt = movies.filter(x => x.category === 'fantasy');
    for (let i = 0; i < favoritIt.length; i++) {
      let resultData =
         `<div class="content-item" onclick="movieHref(this)" url="${favoritIt[i].pageLink}">
             <img src="${favoritIt[i].art}">
                <div class="content-data">
                    <h3>${favoritIt[i].name}</h3>
                    <p>${favoritIt[i].director}</p>
                    <span>${favoritIt[i].date}</span>
                </div>
         </div>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
        
        $("#popularBox").html($(".content-item").sort(function(){
            return Math.random()-0.5;
          }));
    }
}

premierContent();
popularContent();
fantasyContent();
loadHeaderContent();

function contentRight(s){
    let contentBox = s.parentElement.parentElement.querySelector(".content-box");
    let contentWidth = contentBox.clientWidth / 2;

    contentBox.scrollBy({
    top: 0,
    left: contentWidth,
    behavior: "smooth"
    });
}
function contentLeft(s){
    let contentBox = s.parentElement.parentElement.querySelector(".content-box");
    let contentWidth = contentBox.clientWidth / 2;

    contentBox.scrollBy({
    top: 0,
    left: -contentWidth,
    behavior: "smooth"
    });
}

function loadHeaderContent(){
    const headerImg = document.querySelector(".header-controls-bg img");
    const headerTitle = document.querySelector(".header-title p");
    const headerCategory = document.querySelector(".header-title span");
    const headerDate = document.querySelector(".header-title .date");
    const headerHref = document.querySelector(".header-watch");
    
    var randomIndex = Math.floor(Math.random() * movies.length);

    headerImg.src = movies[randomIndex].preview;
    headerTitle.innerText = movies[randomIndex].name;
    headerCategory.innerText = movies[randomIndex].category;
    headerDate.innerText = movies[randomIndex].date;
    headerHref.href = 'movies/' + movies[randomIndex].pageLink;
}
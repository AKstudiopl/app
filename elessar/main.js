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
document.querySelector(".nav-menu .fa-film").addEventListener('click', () => {
    window.location.replace("../index.html");
})
document.querySelector(".nav-menu .fa-compass").addEventListener('click', () => {
    window.location.replace("../index.html");
})
document.querySelector(".nav-menu .fa-fire").addEventListener('click', () => {
    window.location.replace("../hot-list.html");
})

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

function popularMainContent() {
    const resultsData = document.querySelector("#slider ul");
    var favoritIt = movies;
    resultsData.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultData =
         `<li>
            <div class="slider-bg" onclick="movieHref(this)" url="${favoritIt[i].pageLink}">
                <img src="${favoritIt[i].art}">
            </div>
            <div class="slider-content">
                <h3>${favoritIt[i].name}</h3>
                <p>${favoritIt[i].director}</p>
                <span>${favoritIt[i].date}</span>
            </div>
         </li>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
        
        $("#slider ul").html($("li").sort(function(){
            return Math.random()-0.5;
          }));
    }
  }

popularMainContent();
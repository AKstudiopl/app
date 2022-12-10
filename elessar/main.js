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
    }else{
        $('.header-controls-bg').css({'webkit-filter':'', 'filter':'', 'transform':'scale(1)', 'opacity':'1'});
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
    window.location.href="../index.html";
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
    window.open("movies/" + urlSrc, '_blank').focus();
}
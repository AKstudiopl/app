$(function(){
  var boxes = $('.hero_img'),
      $window = $('.content-welcome-container');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (125 - (-val/45)) + '%)');
      })
  });
})
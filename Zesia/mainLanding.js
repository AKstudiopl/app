var testimonials = document.getElementById('testimonials');
var control1 = document.getElementById('control1');
var control2 = document.getElementById('control2');
var control3 = document.getElementById('control3');


control1.onclick=function(){
    testimonials.style.transform = "translateX(870px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
}

control2.onclick=function(){
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
}

control3.onclick=function(){
    testimonials.style.transform = "translateX(-870px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 300;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


  function more() {
    const amount = 3;
    const hiddenPosts = document.querySelectorAll(".social-item.hidden");
    const counterPosts = document.querySelector(".socialCounter");
    const remaining = hiddenPosts.length;

    if (remaining > 0) {
      for (let i = 0; i < (remaining >= amount ? amount : remaining); i++) {
        hiddenPosts[i].classList.remove("hidden");
      }
    }
    }


    function moreSocial() {
      const amount = 3;
      const hiddenPosts = document.querySelectorAll(".social-item.hidden");
      const loadItem = document.querySelector(".load-item");
      const hiddenPostsPopup = document.querySelector(".socialNumber");
      const remaining = hiddenPosts.length;
      const moreSocialBtn = document.querySelector(".socialCounter");

      if (remaining > 0) {
        for (let i = 0; i < (remaining >= amount ? amount : remaining); i++) {
          setTimeout(() => {
            hiddenPosts[i].classList.remove("hidden");
            loadItem.classList.add("active");
            hiddenPostsPopup.textContent = $('#socialContainer > .hidden').length;
          }, 300 * i);
        }
      }
      setTimeout(function(){
               loadItem.classList.remove("active");
               if (hiddenPostsPopup.textContent === "0"){
                 loadItem.classList.remove("active");
                 moreSocialBtn.style.opacity = "0.5";
                 moreSocialBtn.classlist.add("disable");
               }
         }, 2000);
    }


window.addEventListener('load', function() {
    const loadItem = document.querySelector(".load-item");
    const hiddenPostsPopup = document.querySelector(".socialNumber");
    hiddenPostsPopup.textContent = $('#socialContainer > .hidden').length;
    loadItem.classList.toggle("active");
})

function menuToggle() {
  const mobileMenu = document.querySelector(".navbar-menu-mobile");
  mobileMenu.classList.toggle("inuse");
}

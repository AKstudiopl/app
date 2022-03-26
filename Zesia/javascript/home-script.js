const menuBtn = document.getElementsByClassName('navbar-btn')[0]
const menuScreen = document.getElementsByClassName('navbar-menu')[0]
const menuBtnExit = document.getElementsByClassName('nav-menu-exit')[0]
const body = document.getElementsByTagName('body')[0]
menuBtn.addEventListener('click', () => {
  menuScreen.classList.toggle('active')
  body.classList.toggle('active')
})
menuBtnExit.addEventListener('click', () => {
  menuScreen.classList.toggle('active')
  body.classList.toggle('active')
})
const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider .drag-line");
slider.oninput = ()=>{
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
}

const menuBtn = document.getElementsByClassName('navbar-btn')[0]
const menuScreen = document.getElementsByClassName('navbar-menu')[0]
const menuBtnExit = document.getElementsByClassName('nav-menu-exit')[0]
const body = document.getElementsByTagName('body')[0]
menuBtn.addEventListener('click', () => {
  menuScreen.classList.toggle('active')
  menuBtn.classList.toggle('active')
  body.classList.toggle('menu')
})

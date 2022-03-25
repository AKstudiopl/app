const menuBtn = document.getElementsByClassName('navbar-btn')[0]
const menuScreen = document.getElementsByClassName('navbar-menu')[0]
const contentHome = document.getElementsByClassName('content')[0]
menuBtn.addEventListener('click', () => {
  menuScreen.classList.toggle('active')
  contentHome.classList.toggle('active')
  menuBtn.classList.toggle('active')
})

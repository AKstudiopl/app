var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const toggleSettings = document.getElementsByClassName('settings-btn')[0]
const menuSettings = document.getElementsByClassName('Settings-menu')[0]

toggleSettings.addEventListener('click', () => {
  menuSettings.classList.toggle('active')
})

const exitSettings = document.getElementsByClassName('fa-times')[0]
const menuexitSettings = document.getElementsByClassName('Settings-menu')[0]

exitSettings.addEventListener('click', () => {
  menuexitSettings.classList.toggle('active')
})

const acceptCokies = document.getElementsByClassName('accept-btn-action')[0]
const cookiesMenu = document.getElementsByClassName('Cookies')[0]

acceptCokies.addEventListener('click', () => {
  cookiesMenu.classList.toggle('accepted')
})

const settingsCokies = document.getElementsByClassName('cookies-settings')[0]
const cookiessettingsMenu = document.getElementsByClassName('Cookies')[0]

settingsCokies.addEventListener('click', () => {
  cookiessettingsMenu.classList.remove('accepted')
})

const accountLogin = document.getElementsByClassName('account-btn')[0]
const loginForm = document.getElementsByClassName('login')[0]

accountLogin.addEventListener('click', () => {
  loginForm.classList.toggle('active')
})


var button = document.getElementById("play");
var audio = document.getElementById("player");
audio.loop = true;
audio.volume = 0.2;


button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

const fullscreenButton = document.getElementsByClassName('fullscreen-btn')[0]
const fullscreenImg = document.getElementsByClassName('imagecontainer')[0]

fullscreenButton.addEventListener('click', () => {
  fullscreenImg.classList.toggle('fullscreen')
})

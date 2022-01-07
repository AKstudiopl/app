const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var button = document.getElementById("play");
var audio = document.getElementById("player");
audio.loop = true;


button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

function myFunction(x) {
  x.classList.toggle("fa-stop");
}

const toggleAnimation = document.getElementsByClassName('fas fa-play')[0]
const cover = document.getElementsByClassName('coverimg')[0]

toggleAnimation.addEventListener('click', () => {
  cover.classList.toggle('active')
})

var audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = 0.25;

function changevolume(amount) {
  var audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = amount;
}

const toggleProgresbar = document.getElementsByClassName('fas fa-play')[0]
const progresbar = document.getElementsByClassName('progresbardone')[0]

toggleProgresbar.addEventListener('click', () => {
  progresbar.classList.toggle('active')
})

const toggleButtonplaylsit = document.getElementsByClassName('playlistbtn')[0]
const playlistopen = document.getElementsByClassName('menu_lastlistenings')[0]

toggleButtonplaylsit.addEventListener('click', () => {
  playlistopen.classList.toggle('active')
})

const toggleButtonsettings = document.getElementsByClassName('settingsbtn')[0]
const settingsMenu = document.getElementsByClassName('menu_settings')[0]

toggleButtonsettings.addEventListener('click', () => {
  settingsMenu.classList.toggle('active')
})

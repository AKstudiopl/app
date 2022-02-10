var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

const activeHomeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
const activeHomeScreen = document.getElementsByClassName('navbar-bottom-btn 1')[0]

activeHomeBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
})

const activeSearchBtn = document.getElementsByClassName('navbar-bottom-btn-search')[0]
const activeSearchScreen = document.getElementsByClassName('navbar-bottom-btn 2')[0]

activeSearchBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.add('active')
  activeHomeScreen.classList.remove('active')
})

const activeLibraryBtn = document.getElementsByClassName('navbar-bottom-btn-library')[0]
const activeLibraryScreen = document.getElementsByClassName('navbar-bottom-btn 3')[0]

activeLibraryBtn.addEventListener('click', () => {
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.remove('active')
  activeLibraryScreen.classList.add('active')
})

const activeSettingsBtn = document.getElementsByClassName('settings-action-btn')[0]
const activeSettingsScreen = document.getElementsByClassName('settings-screen')[0]

activeSettingsBtn.addEventListener('click', () => {
  activeSettingsScreen.classList.add('active')
})

const disableSettingsBtn = document.getElementsByClassName('setting-disable-btn')[0]
const disableSettingsScreen = document.getElementsByClassName('settings-screen')[0]

disableSettingsBtn.addEventListener('click', () => {
  disableSettingsScreen.classList.remove('active')
})

list.onclick = function(e) {
  e.preventDefault();

  var elm = e.target;
  var audio = document.getElementById('audio');

  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-value');


  audio.load(); //call this to just preload the audio without playing
  audio.play(); //call this to play the song right away
};

var button = document.getElementById("play-stop-main-btn-action");
var audio = document.getElementById("audio");
audio.loop = true;
audio.volume = 0.2;


button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
  } else {
    audio.pause();
  }
});

const activePlayStopMusicbtn = document.getElementsByClassName('play-stop-main-btn')[0]
const activeIconPlayStop = document.getElementsByClassName('fa-solid fa-play')[0]

activePlayStopMusicbtn.addEventListener('click', () => {
  activeIconPlayStop.classList.toggle('fa-play')
  activeIconPlayStop.classList.toggle('fa-stop')
})

const hideMusicMenubtn = document.getElementsByClassName('hide-Music-Menu')[0]
const musicMenuHide = document.getElementsByClassName('main-music')[0]

hideMusicMenubtn.addEventListener('click', () => {
  musicMenuHide.classList.toggle('active')
})

const showMusicMenubtn = document.getElementsByClassName('show-Music-Menu')[0]
const musicMenuShow = document.getElementsByClassName('main-music')[0]

showMusicMenubtn.addEventListener('click', () => {
  musicMenuShow.classList.toggle('active')
})

const showCurrentPlaylist = document.getElementsByClassName('current-playlist-btn')[0]
const currentPlaylist = document.getElementsByClassName('audio-src')[0]

showCurrentPlaylist.addEventListener('click', () => {
  currentPlaylist.classList.toggle('active')
})

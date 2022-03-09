var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('light');
})

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

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

const hideMusicMenubtn = document.getElementsByClassName('hide-Music-Menu')[0]
const musicMenuHide = document.getElementsByClassName('main-music')[0]

hideMusicMenubtn.addEventListener('click', () => {
  musicMenuHide.classList.toggle('active')
  topOption.classList.remove('active');
    topQueueMenuShow.classList.remove('active');
})

const showMusicMenubtn = document.getElementsByClassName('show-Music-Menu')[0]
const musicMenuShow = document.getElementsByClassName('main-music')[0]

showMusicMenubtn.addEventListener('click', () => {
  musicMenuShow.classList.toggle('active')
})

const favoritBtn = document.getElementsByClassName('fa-heart')[0]
const favAlert = document.getElementsByClassName('fav-alert')[0]
favoritBtn.addEventListener('click', () => {
  favoritBtn.classList.toggle('active')
  favAlert.classList.toggle('active')
})









const wrapper = document.querySelector(".main-music"),
musicImg = wrapper.querySelector(".main-music-header img"),
musicName = wrapper.querySelector(".main-information-title .name"),
musicArtist = wrapper.querySelector(".main-information-title .artist"),
mainAudio = wrapper.querySelector("#audio"),
playstopButton = wrapper.querySelector("#play-stop-main-btn-action"),
prevButton = wrapper.querySelector("#prev"),
nextButton = wrapper.querySelector("#next"),
progressBar = wrapper.querySelector(".progress-bar-done"),
progressArea = wrapper.querySelector(".progress"),
repeatBtn = wrapper.querySelector("#repeat"),
shuffleBtn = wrapper.querySelector("#shuffle"),
queueName = wrapper.querySelector(".queue-container .name"),
queueImg = wrapper.querySelector(".queue-container img"),
queueArtist = wrapper.querySelector(".queue-container .artist");


const smallView = document.querySelector(".music-controls"),
smallImg = smallView.querySelector(".music-img img"),
smallName = smallView.querySelector(".music-title .fasttitle"),
smallArtist = smallView.querySelector(".music-title .fastartist"),
smallPlayStopbtn = smallView.querySelector("#smallplaystop");

var musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
})

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
  smallName.innerText = allMusic[indexNumb - 1].name;
  smallArtist.innerText = allMusic[indexNumb - 1].artist;
  smallImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.volume = 0.5;
}

function playMusic(){
  wrapper.classList.add("paused");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-play");
  playstopButton.querySelector(".fa-solid").classList.add("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-stop");
  mainAudio.play();
}

function pauseMusic(){
  wrapper.classList.remove("paused");
  playstopButton.querySelector(".fa-solid").classList.add("fa-play");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-stop");
  mainAudio.pause();
}

function nextMusic(){
  musicIndex++;
  musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
}

function prevMusic(){
  musicIndex--;
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
}

smallPlayStopbtn.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  isMusicPlay ? pauseMusic() : playMusic();
});

playstopButton.addEventListener("click", ()=>{
  const isMusicPlay = wrapper.classList.contains("paused");
  isMusicPlay ? pauseMusic() : playMusic();
});

nextButton.addEventListener("click", ()=>{
  nextMusic();
});

prevButton.addEventListener("click", ()=>{
  prevMusic();
});

mainAudio.addEventListener("timeupdate", (e)=>{
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;

  let musicCurrentTime = wrapper.querySelector(".current-time"),
  musicDuartion = wrapper.querySelector(".max-duration");
  mainAudio.addEventListener("loadeddata", ()=>{
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){
      totalSec = `0${totalSec}`;
    }
    musicDuartion.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if(currentSec < 10){
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressBar.addEventListener("timeubdate", (e)=>{
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
})

progressArea.addEventListener("click", (e)=>{
  let progressWidth = progressArea.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = mainAudio.duration;

  mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic();
});

repeatBtn.addEventListener("click", ()=>{
  if (mainAudio.loop == false) {mainAudio.loop = true}
    else {mainAudio.loop = false};
  repeatBtn.classList.toggle('active');
  shuffleBtn.classList.remove('active');
});

shuffleBtn.addEventListener("click", ()=>{
  mainAudio.loop = false;
  shuffleBtn.classList.toggle('active');
  repeatBtn.classList.remove('active');
  shuffle();
});

mainAudio.addEventListener("ended", ()=>{
      nextMusic();
});

function shuffle() {
  musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(musicIndex);
  playMusic();
}


const topOptionBtn = document.getElementsByClassName('top-controls-more-btn')[0]
const topOption = document.getElementsByClassName('top-controls-more')[0]
topOptionBtn.addEventListener('click', () => {
  topOption.classList.toggle('active');
})

const currentPlaylistBtn = document.getElementsByClassName('current-playlist-btn')[0]
const topQueueMenuShow = document.getElementsByClassName('queue-container')[0]
currentPlaylistBtn.addEventListener('click', () => {
  topQueueMenuShow.classList.add('active');
})

const topQueue = document.getElementsByClassName('exit-queue')[0]
const topQueueMenuHide = document.getElementsByClassName('queue-container')[0]
topQueue.addEventListener('click', () => {
  topQueueMenuHide.classList.remove('active');
})

const navbarSearchBtn = document.getElementsByClassName('navbar-bottom-btn-search')[0]
const searchScreen = document.getElementsByClassName('search-container')[0]
navbarSearchBtn.addEventListener('click', () => {
  searchScreen.classList.add('active');
  libraryScreen.classList.remove('active');
})

const navbarLibraryBtn = document.getElementsByClassName('navbar-bottom-btn-library')[0]
const libraryScreen = document.getElementsByClassName('library-container')[0]
navbarLibraryBtn.addEventListener('click', () => {
  libraryScreen.classList.add('active');
  searchScreen.classList.remove('active');
})

const homeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
homeBtn.addEventListener('click', () => {
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  disableSettingsScreen.classList.remove('active');
})


const ulTag = wrapper.querySelector(".queue-item ul");
for (let i = 0; i < allMusic.length; i++) {
  let liTag = `<li li-index="${i + 1}" onclick="clicked(this)">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration-setup">3:40</span>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag);
  let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
  let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if(totalSec < 10){
      totalSec = `0${totalSec}`;
    };
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
  });
}

function playingSong(){
  const allLiTag = ulTag.querySelectorAll("li");
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".audio-duration-setup");

    if(allLiTag[j].classList.contains("playing")){
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }
    if(allLiTag[j].getAttribute("li-index") == musicIndex){
      allLiTag[j].classList.add("playing");
    }
    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}

const correctSoundBtn = document.getElementsByClassName('device-screen-btn')[0]
const correctSoundScreen = document.getElementsByClassName('device-screen')[0]
const correctSoundExit = document.getElementsByClassName('device-screen-exit')[0]

correctSoundBtn.addEventListener('click', () => {
  correctSoundScreen.classList.add('active')
})
correctSoundExit.addEventListener('click', () => {
  correctSoundScreen.classList.remove('active')
})


const results = document.querySelector(".search-results");
for (let i = 0; i < allMusic.length; i++) {
  let result = `<li li-index="${i + 1}" onclick="clicked(this)">
                <div class="result-box">
                  <div class="result-box-cover">
                  <h1 class="result-name">${allMusic[i].name}</h1>
                  <p class="result-artist">${allMusic[i].artist}</p>
                  </div>
                </div>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  results.insertAdjacentHTML("beforeend", result);
}


function searchName() {
  input = document.getElementById('search-item');
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("search-results");
  li = document.querySelectorAll('.search-results li');

  for (i = 0; i < li.length; i++) {
    nameResult = li[i].getElementsByClassName("result-name")[0];
    webkitresults = document.getElementsByClassName("search-results")[0];
    nameResult = nameResult.textContent || nameResult.innerText;
    if (nameResult.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.visibility = "visible";
      webkitresults.classList.remove("webkit-hidden");
    } else {
      li[i].style.display = "none";
      li[i].style.visibility = "hidden";
    } if (input.value.length == 0)
    {
      li[i].style.visibility = "hidden";
      webkitresults.classList.add("webkit-hidden");
    }
  }
}

function ClearFields() {
     input.value = "";
}

const artistProfileBtn = document.getElementsByClassName('head-content-item')[0]
const artistProfile = document.getElementsByClassName('artist-card')[0]
const artistProfileExit = document.getElementsByClassName('artist-exit')[0]
artistProfileBtn.addEventListener('click', () => {
  artistProfile.classList.add('active');
})
artistProfileExit.addEventListener('click', () => {
    artistProfile.classList.remove('active');
})

function setvolume(){
  mainAudio.volume = document.getElementById("volumeslider").value;
}


  function nameQuestion() {
    inputName = document.getElementById('username');
    namePlace = document.getElementById('nameUser');
    profilName = document.getElementById('profilName');
    namePlace.innerHTML = inputName.value;
    profilName.innerHTML = inputName.value;
  }

  const nameAsk = document.getElementsByClassName('name-ask')[0]
  const nameInputBtn = document.getElementsByClassName('usernameNext')[0]
  nameInputBtn.addEventListener('click', () => {
      nameAsk.classList.toggle('confirmed');
  })

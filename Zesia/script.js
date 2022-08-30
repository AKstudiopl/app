var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('green');
    content.classList.toggle('blue');
    if (content.classList.contains('green')) {
        document.documentElement.style.setProperty('--maincolor', '#A1D91F');
        document.documentElement.style.setProperty('--maincolorhover', '#1ed760');
        document.documentElement.style.setProperty('--border', '1px #A1D91F50 solid');
        document.documentElement.style.setProperty('--background', '#121212');
        document.documentElement.style.setProperty('--backgroundsecond', '#242424');
        document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, rgba(18,18,18,1) 0%, rgba(36,36,36,1) 100%)');
    }
    if (content.classList.contains('blue')) {
        document.documentElement.style.setProperty('--maincolor', '#1764CC');
        document.documentElement.style.setProperty('--maincolorhover', '#4C97DE');
        document.documentElement.style.setProperty('--border', '1px #1764CC50 solid');
        document.documentElement.style.setProperty('--background', '#040511');
        document.documentElement.style.setProperty('--backgroundsecond', '#04061a');
        document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, rgba(23,100,204,1) 0%, rgba(12,18,77,1) 39%, rgba(4,6,26,1) 85%)');
    }
})

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
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
musicViral = wrapper.querySelector(".main-music-video"),
mainAudio = wrapper.querySelector("#audio"),
playstopButton = wrapper.querySelector("#play-stop-main-btn-action"),
prevButton = wrapper.querySelector("#prev"),
nextButton = wrapper.querySelector("#next"),
progressBar = wrapper.querySelector(".progress-bar-done"),
progressArea = wrapper.querySelector(".progress"),
repeatBtn = wrapper.querySelector("#repeat"),
shuffleBtn = wrapper.querySelector("#shuffle"),
songRate = wrapper.querySelector(".lyrics-container #song-rate"),
queueName = wrapper.querySelector(".queue-container .name"),
queueImg = wrapper.querySelector(".queue-container img"),
reviewArtist = wrapper.querySelector(".artist-review-artist"),
reviewName = wrapper.querySelector(".artist-review-name"),
reviewImg = wrapper.querySelector(".lyrics-container img"),
musicBackgroundImage = wrapper.querySelector(".background-music-img img"),
queueArtist = wrapper.querySelector(".queue-container .artist");


const smallView = document.querySelector(".music-controls"),
smallImg = smallView.querySelector(".music-img img"),
smallName = smallView.querySelector(".music-title .fasttitle"),
smallArtist = smallView.querySelector(".music-title .fastartist"),
progressBarNavDone = smallView.querySelector(".music-controls-progresbar-done"),
progressBarNav = smallView.querySelector(".music-controls-progresbar"),
smallPlayStopbtn = smallView.querySelector("#smallplaystop");


var musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

function personalLIst() {
  wrapper.classList.toggle('personal-Music');
}
window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  checkQuestion();
})

musicImg.addEventListener("click", ()=>{
  musicImg.classList.toggle('active');
});

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  musicBackgroundImage.src = `maingif.gif`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
  songRate.innerText = allMusic[indexNumb - 1].rate;
  smallName.innerText = allMusic[indexNumb - 1].name;
  smallArtist.innerText = allMusic[indexNumb - 1].artist;
  smallImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  reviewName.innerText = allMusic[indexNumb - 1].name;
  reviewArtist.innerText = allMusic[indexNumb - 1].artist;
  reviewImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  mainAudio.volume = document.getElementById("volumeslider").value;


  if (wrapper.classList.contains('personal-Music')) {
    musicName.innerText = personalMusic[indexNumb - 1].name;
    musicArtist.innerText = personalMusic[indexNumb - 1].artist;
    musicImg.src = `images/${personalMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${personalMusic[indexNumb - 1].src}.mp3`;
    songRate.innerText = personalMusic[indexNumb - 1].rate;
    smallName.innerText = personalMusic[indexNumb - 1].name;
    smallArtist.innerText = personalMusic[indexNumb - 1].artist;
    smallImg.src = `images/${personalMusic[indexNumb - 1].img}.jpg`;
    playMusic();
  }
  else {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
    songRate.innerText = allMusic[indexNumb - 1].rate;
    smallName.innerText = allMusic[indexNumb - 1].name;
    smallArtist.innerText = allMusic[indexNumb - 1].artist;
    smallImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  }

    if (wrapper.classList.contains('save-data')) {
      musicImg.src = `maingif.gif`;
      smallImg.src = `maingif.gif`;
    }


    navigator.mediaSession.metadata = new MediaMetadata({
      title: allMusic[indexNumb - 1].name,
      artist: allMusic[indexNumb - 1].artist,
      artwork:  [
      { src: `images/${allMusic[indexNumb - 1].img}.jpg`, sizes: '96x96',   type: 'image/png' },
      { src: `images/${allMusic[indexNumb - 1].img}.jpg`, sizes: '128x128', type: 'image/png' },
      { src: `images/${allMusic[indexNumb - 1].img}.jpg`, sizes: '192x192', type: 'image/png' },
      { src: `images/${allMusic[indexNumb - 1].img}.jpg`, sizes: '256x256', type: 'image/png' },
      { src: `images/${allMusic[indexNumb - 1].img}.jpg`, sizes: '384x384', type: 'image/png' },
      { src: `images/${allMusic[indexNumb - 1].img}.jpg`, sizes: '512x512', type: 'image/png' },
                ]
      });

      navigator.mediaSession.setActionHandler('play', function() {
        playMusic();
      });
      navigator.mediaSession.setActionHandler('pause', function() {
        pauseMusic();
      });
      navigator.mediaSession.setActionHandler('previoustrack', function() {
        nextMusic();
      });
      navigator.mediaSession.setActionHandler('nexttrack', function() {
        prevMusic();
      });


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
  loadMusic(musicIndex);
  playMusic();
  playingSong();
  if ( wrapper.classList.contains("shuffle")) {
    musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
  }
  else if (wrapper.classList.contains("personal-Music")) {
    musicIndex = Math.floor((Math.random() * personalMusic.length) + 1);
  }
  else {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
  }
}

function prevMusic(){
  musicIndex--;
  musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}

function randomIndex() {
  var musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(musicIndex);
  playMusic();
  playingSong();
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
  progressBarNavDone.style.width = `${progressWidth}%`;

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
  wrapper.classList.remove("shuffle");
  wrapper.classList.toggle("repeat");
});

shuffleBtn.addEventListener("click", ()=>{
  mainAudio.loop = false;
  shuffleBtn.classList.toggle('active');
  repeatBtn.classList.remove('active');
  wrapper.classList.toggle("shuffle");
  wrapper.classList.remove("repeat");
});

mainAudio.addEventListener("ended", ()=>{
      nextMusic();
});


const topOptionBtn = document.getElementsByClassName('top-controls-more-btn')[0]
const topOptionExit = document.getElementsByClassName('exit-top-more-head')[0]
const topOption = document.getElementsByClassName('top-controls-more')[0]
topOptionBtn.addEventListener('click', () => {
  topOption.classList.toggle('active')
  shortcutCheck();
  rateBtn.style.visibility = "hidden";
})
topOptionExit.addEventListener('click', () => {
  topOption.classList.toggle('active');
  shortcutCheck();
  rateBtn.style.visibility = "visible";
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
      audioTag.innerHTML = '<img src="sources/equaliser-animated-green.f93a2ef4.gif">';
    }
    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}

function playingSongPersonal(){
  const allLiPersonalTag = personalUl.querySelectorAll("li");
  for (let j = 0; j < allLiPersonalTag.length; j++) {
    let personalPlayIcon = allLiPersonalTag[j].querySelector(".playPersonal");

    if(allLiPersonalTag[j].classList.contains("playing")){
      allLiPersonalTag[j].classList.remove("playing");
      personalPlayIcon.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    if(allLiPersonalTag[j].getAttribute("li-index") == musicIndex){
      allLiPersonalTag[j].classList.add("playing");
      personalPlayIcon.innerHTML = '<img src="sources/equaliser-animated-green.f93a2ef4.gif">';
    }
    allLiPersonalTag[j].setAttribute("onclick", "clicked(this)");
  }
}

function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();
  playingSongPersonal()
}





const personalUl = document.querySelector(".music-style-item-content ul");
for (let i = 0; i < personalMusic.length; i++) {
  let liTag = `<li li-index="${i + 1}" onclick="clicked(this)">
                  <div class="music-style-item-fast">
                  <p>${personalMusic[i].artist} - ${personalMusic[i].name}</p>
                  <span id="${allMusic[i].src}" class="audio-duration-setup">3:40</span>
                  </div>
                  <a class="playPersonal"><i class="fa-solid fa-play"></i></a>
                  <audio class="${personalMusic[i].src}" src="songs/${personalMusic[i].src}.mp3"></audio>
              </li>`;
  personalUl.insertAdjacentHTML("beforeend", liTag);
  let liAudioDuartionTag = personalUl.querySelector(`#${personalMusic[i].src}`);
  let liAudioTag = personalUl.querySelector(`.${personalMusic[i].src}`);
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








const correctSoundBtn = document.getElementsByClassName('device-screen-btn')[0]
const correctSoundScreen = document.getElementsByClassName('device-screen')[0]
const correctSoundExit = document.getElementsByClassName('device-screen-exit')[0]

correctSoundBtn.addEventListener('click', () => {
  correctSoundScreen.classList.toggle('active')
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
    artistResult = li[i].getElementsByClassName("result-artist")[0];
    webkitresults = document.getElementsByClassName("search-results")[0];
    nameResult = nameResult.textContent || nameResult.innerText;
    artistResult = artistResult.textContent || artistResult.innerText;
    if (nameResult.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.visibility = "visible";
      webkitresults.classList.remove("webkit-hidden");
    }
    else if (artistResult.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.visibility = "visible";
      webkitresults.classList.remove("webkit-hidden");
    }
    else {
      li[i].style.display = "none";
      li[i].style.visibility = "hidden";
    }


    if (input.value.length == 0)
    {
      li[i].style.visibility = "hidden";
      webkitresults.classList.add("webkit-hidden");
    }
  }
}

function filterByName() {
  if (filterStatus.classList.contains("Hip-Hop")) {
    var result = allMusic.filter((x)=>x.style === "Hip-Hop");
    console.log(result);
  }
  if (filterStatus.classList.contains("Energic")) {
    var result = allMusic.filter((x)=>x.style === "Energic");
    console.log(result);
  }
}

function filterName(x) {
  filterStatus = document.querySelector(".search-filter");
  if (x==1)
  {
      filterStatus.classList.toggle("Hip-Hop");
      filterByName();
  }
  if (x==2)
  {
      filterStatus.classList.toggle("Energic");
      filterByName();
  }
  if (x==3)
  {
      filterStatus.classList.toggle("Workout");
      filterByName();
  }
  if (x==4)
  {
      filterStatus.classList.toggle("Chill");
      filterByName();
  }
  if (x==5)
  {
      filterStatus.classList.toggle("Sad-Lofi");
      filterByName();
  }
  if (x==6)
  {
      filterStatus.classList.toggle("Rock");
      filterByName();
  }
}

function ClearFields() {
     input.value = "";
}

const artistProfile = document.getElementsByClassName('artist-card')[0]
const artistProfileExit = document.getElementsByClassName('artist-exit')[0]

document.querySelectorAll('.head-content-item').forEach(artistProfileBtn => {
  artistProfileBtn.addEventListener('click', event => {
    artistProfile.classList.add('active');
  })
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
    localStorage.setItem("userData", inputName.value);
  }
  function checkQuestion(){
    namePlace = document.getElementById('nameUser');
    namePlace.innerHTML = localStorage.userData;
    profilName.innerHTML = localStorage.userData;
      if (localStorage.getItem("userData") === null) {
        nameAsk.classList.remove('confirmed');
    }else {
        nameAsk.classList.add('confirmed');
    }
  }

  const nameAsk = document.getElementsByClassName('name-ask')[0]
  const nameInputBtn = document.getElementsByClassName('usernameNext')[0]
  nameInputBtn.addEventListener('click', () => {
      nameAsk.classList.toggle('confirmed');
  })


  const rateBtn = document.getElementsByClassName('rateBtn')[0]
  const rateScreen = document.getElementsByClassName('lyrics')[0]
  const rateIcon = document.getElementsByClassName('OpinieIcon')[0]
  rateBtn.addEventListener('click', () => {
      rateScreen.classList.toggle('active');
      rateIcon.classList.toggle('fa-angle-up');
      rateIcon.classList.toggle('fa-angle-down');
      if (rateScreen.classList.contains('active')) {
        topShourcutButtonRate.classList.add('active');
      }
      else {
        topShourcutButtonRate.classList.remove('active');
      }
      if (topShourcutButtonRate.classList.contains('active')) {
        rateBtn.style.visibility = "visible";
      }
      else {
        rateBtn.style.visibility = "hidden";
      }
  })


  const personaDiv = document.querySelectorAll('.personal-item')[0]
  const personalItem = document.querySelectorAll('.music-style-item')[0]
  const musicstyleexit = document.querySelectorAll('.music-1-exit')[0]
  personaDiv.addEventListener('click', () => {
      personalItem.classList.add('active')
  })
  musicstyleexit.addEventListener('click', () => {
      personalItem.classList.remove('active')
  })


function shortcutCheck() {
  if (wrapper.classList.contains("repeat")) {
    mainAudio.loop = true;
    topShourcutButtonRepeat.classList.add('active');
    repeatBtn.classList.add('active');
  }
  else {
    mainAudio.loop = false;
    topShourcutButtonRepeat.classList.remove('active');
    repeatBtn.classList.remove('active');
  }
  if (wrapper.classList.contains("shuffle")) {
      shuffleBtn.classList.add('active');
      topShourcutButtonShuffle.classList.add('active');
      shuffleBtn.classList.add('active');
  }
  else {
      topShourcutButtonShuffle.classList.remove('active');
      shuffleBtn.classList.remove('active');
  }
}

  const topShourcutButtonRepeat = document.querySelector('.shortcut-repeat')
    topShourcutButtonRepeat.addEventListener('click', () => {
      topShourcutButtonRepeat.classList.toggle('active');
      if (topShourcutButtonRepeat.classList.contains('active')) {
        mainAudio.loop = true;
        repeatBtn.classList.add('active');
        wrapper.classList.add("repeat");
      }
      else {
        mainAudio.loop = false;
        repeatBtn.classList.remove('active');
        wrapper.classList.remove("repeat");
      }
      if (topShourcutButtonRepeat.classList.contains('active')) {
        topShourcutButtonShuffle.classList.remove('active')
        wrapper.classList.add("repeat");
        wrapper.classList.remove("shuffle");
      }
  })

  const topShourcutButtonRate = document.querySelector('.shortcut-rate')
    topShourcutButtonRate.addEventListener('click', () => {
      topShourcutButtonRate.classList.toggle('active');
      rateScreen.classList.toggle('active');
      if (topShourcutButtonRate.classList.contains('active')) {
        rateBtn.style.visibility = "visible";
      }
      else {
        rateBtn.style.visibility = "hidden";
      }
  })

  const topShourcutButtonShuffle = document.querySelector('.shortcut-shuffle')
    topShourcutButtonShuffle.addEventListener('click', () => {
      topShourcutButtonShuffle.classList.toggle('active');
      if (topShourcutButtonShuffle.classList.contains('active')) {
        mainAudio.loop = false;
        wrapper.classList.add("shuffle");
        wrapper.classList.remove("repeat");
      }
      else {
        wrapper.classList.remove("shuffle");
      }
      if (topShourcutButtonShuffle.classList.contains('active')) {
        topShourcutButtonRepeat.classList.remove('active')
        wrapper.classList.add("shuffle");
        wrapper.classList.remove("repeat");
      }
  })

  const dataSwitch = document.getElementsByClassName('save-data')[0]
  dataSwitch.addEventListener('click', () => {
      wrapper.classList.toggle('save-data')
  })

  const viralSwitch = document.getElementsByClassName('viral-mode')[0]
  const musicBackgroundViral = document.getElementsByClassName('background-music-img')[0]
  viralSwitch.addEventListener('click', () => {
      wrapper.classList.toggle('viral')
      musicImg.classList.toggle('viral')
      musicViral.classList.toggle('viral')
      musicBackgroundViral.classList.toggle('viral')
  })

  const timerToggle = document.getElementsByClassName('timer-toggle')[0]
  const timerView = document.getElementsByClassName('timer-view')[0]
  const timerExit = document.getElementsByClassName('timer-exit')[0]
  timerToggle.addEventListener('click', () => {
      timerView.classList.add('active');
  })
  timerExit.addEventListener('click', () => {
      timerView.classList.remove('active');
  })

  const timerItems = document.querySelectorAll('.timer-item').forEach(timerItems => {
    timerItems.addEventListener('click', event => {
      timerView.classList.remove('active');
    })
  })


  const timerOptions = document.querySelector(".timer-option-container"),
  timerItem10 = timerOptions.querySelector("#timer10");
  timerItem20 = timerOptions.querySelector("#timer20");
  timerItem30 = timerOptions.querySelector("#timer30");
  timerItem40 = timerOptions.querySelector("#timer40");
  timerItem50 = timerOptions.querySelector("#timer50");
  timerItem60 = timerOptions.querySelector("#timer60");
  timerItem90 = timerOptions.querySelector("#timer90");
  timerItem120 = timerOptions.querySelector("#timer120");

  timerItem10.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 600000);
  })

  timerItem20.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 1200000);
  })

  timerItem30.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 1800000);
  })

  timerItem40.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 2400000);
  })

  timerItem50.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 3000000);
  })

  timerItem60.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 3600000);
  })

  timerItem90.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 5400000);
  })

  timerItem120.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 7200000);
  })


  const searchFilter = document.querySelectorAll('.search-item').forEach(searchFilter => {
    searchFilter.addEventListener('click', event => {
      searchFilter.classList.toggle('checked');
    })
  })

function copyUrlClipboard(){
  var copyText = document.getElementById("pageurl").value;
  navigator.clipboard.writeText(copyText)
}

const copyUrlBtn = document.querySelector('.copyUrl')
const alertCopy = document.querySelector('.copy-alert')
copyUrlBtn.addEventListener('click', () => {
    alertCopy.classList.add('active');
    setTimeout(
      function() {
        alertCopy.classList.remove('active');
      }, 2000);
})

function alertTimer(){
  const alertTimer = document.querySelector(".timer-alert")
        alertTimer.classList.add('active');
        document.addEventListener('click', () => {
          alertTimer.classList.remove('active');
        })
}

function searchBarUse(){
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.add('active')
  activeHomeScreen.classList.remove('active')
  searchScreen.classList.add('active')
}

const profileSettingsBtn = document.querySelector('.profile-settins-btn')
const loginPopup = document.querySelector('.login-popup')
const questSelectBtn = document.querySelector('.questBtn')
profileSettingsBtn.addEventListener('click', () => {
  loginPopup.classList.add('active')
})
questSelectBtn.addEventListener('click', () => {
  loginPopup.classList.remove('active')
})

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
});

const activeHomeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
const activeHomeScreen = document.getElementsByClassName('navbar-bottom-btn 1')[0]

activeHomeBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  playlistItemScreen.classList.remove("active")
  playlistCreateScreen.classList.remove("active")
})

const activeSearchBtn = document.getElementsByClassName('navbar-bottom-btn-search')[0]
const activeSearchScreen = document.getElementsByClassName('navbar-bottom-btn 2')[0]

activeSearchBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.add('active')
  activeHomeScreen.classList.remove('active')
  musicArtistScreen.classList.remove('active')
  albumScreen.classList.remove('active')
  bioCard.classList.remove("active")
  playlistItemScreen.classList.remove("active")
  playlistCreateScreen.classList.remove("active")
})

const activeLibraryBtn = document.getElementsByClassName('navbar-bottom-btn-library')[0]
const activeLibraryScreen = document.getElementsByClassName('navbar-bottom-btn 3')[0]

activeLibraryBtn.addEventListener('click', () => {
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.remove('active')
  activeLibraryScreen.classList.add('active')
  musicArtistScreen.classList.remove('active')
  albumScreen.classList.remove('active')
  bioCard.classList.remove("active")
  playlistItemScreen.classList.remove("active")
})

const activeSettingsBtn = document.getElementsByClassName('settings-action-btn')[0]
const librarySettingsBtn = document.getElementsByClassName('librarySettingsBtn')[0]
const activeSettingsScreen = document.getElementsByClassName('settings-screen')[0]

activeSettingsBtn.addEventListener('click', () => {
  activeSettingsScreen.classList.add('active')
})
librarySettingsBtn.addEventListener('click', () => {
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
const musicMenuShowSec = document.getElementsByClassName('music-title')[0]

showMusicMenubtn.addEventListener('click', () => {
  musicMenuShow.classList.toggle('active')
  toggleSequence();
})
musicMenuShowSec.addEventListener('click', () => {
  musicMenuShow.classList.toggle('active')
  toggleSequence();
})

function viewSearchHomeItems(){
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.add('active')
  activeHomeScreen.classList.remove('active')
  searchScreen.classList.add('active');
  libraryScreen.classList.remove('active');
}

const showFavoriteScreen = document.getElementsByClassName('favorite-library-show')[0]
const favortieScreen = document.getElementsByClassName('library-favorite-screen')[0]
const exitFavoriteScreen = document.getElementsByClassName('library-favorite-exit')[0]

showFavoriteScreen.addEventListener('click', () => {
  favoriteLibraryScreen();
})

function favoriteLibraryScreen(){
  favortieScreen.classList.add('active')
}
exitFavoriteScreen.addEventListener('click', () => {
  favortieScreen.classList.toggle('active')
})

function favoriteLoadItems() {

  const resultsFAV = document.querySelector(".library-favorite-container");
  var favoritIt = allMusic.filter(x => x.status === "favorite");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="library-favorite-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <div class="library-favorite-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].artist}</span>
          </div>
         <i onclick="clickedSingleDelete(this)" class="fa-heart fa-regular"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  favoriteItemsNumber.innerText = $('.library-favorite-item').length;
}

function clickedSingle(element){
  let getLiIndex = element.getAttribute("li-index");
  let i = getLiIndex; i++;
  indexNumb = i;
  loadMusic(indexNumb);
  playMusic();
  playingSong();
  favoriteItemsNumber.innerText = $('.library-favorite-item').length;
}

function clickedSingleDelete(element){
  let getLiIndex = element.parentElement.getAttribute("li-index");
  let i = getLiIndex;
  allMusic[i].status = "nostatus";
  element.classList.add('fa-solid');
  element.classList.add('fa-heart-crack');
  element.classList.remove('fa-heart');
  element.classList.remove('fa-regular');
  element.classList.add('active');
  element.parentElement.classList.add('active');
  favoriteItemDel = element.parentElement;
  setTimeout(deleteParent, 3000);
  setTimeout(favoriteLoadItems, 4000);
}

function deleteParent(element){
  favoriteItemDel.remove();
}

const favoriteItemsNumber = document.querySelector('.library-favorite-items-number');
const favoriteContainer = document.querySelector('.library-favorite-container');
const wrapper = document.querySelector(".main-music"),
musicImg = wrapper.querySelector(".main-music-header img"),
musicName = wrapper.querySelector(".main-information-title .name"),
musicStatusData = wrapper.querySelector(".main-information"),
musicArtist = wrapper.querySelector(".main-information-title .artist"),
musicViral = wrapper.querySelector(".main-music-video"),
musicViralMp4 = wrapper.querySelector(".main-music-video video"),
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
musicBackgroundImage = wrapper.querySelector(".background-music-img img"),
musicNextTiptool = wrapper.querySelector(".main-music-next-music"),
musicNextTitle = wrapper.querySelector(".main-music-next-music .next-music-title"),

lyricsDataArtist = wrapper.querySelector(".device-main-audio-data .device-main-audio-data-artist"),
lyricsDataTitle = wrapper.querySelector(".device-main-audio-data .device-main-audio-data-title"),
lyricsDataVerse_1 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-1"),
lyricsDataVerse_2 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-2"),
lyricsDataVerse_3 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-3"),
lyricsDataVerse_4 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-4"),
lyricsDataVerse_5 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-5"),
lyricsDataVerse_6 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-6"),
lyricsDataVerse_7 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-7"),
lyricsDataVerse_8 = wrapper.querySelector(".device-lyrics-container .lyrics-item-number-verse-8"),
lyricsNoDataAlert = wrapper.querySelector(".device-lyrics-nolyrics-alert"),
lyricsAllVerses = wrapper.querySelectorAll(".device-lyrics-container p"),

queueArtist = wrapper.querySelector(".queue-container .artist");


const smallView = document.querySelector(".music-controls"),
smallImg = smallView.querySelector(".music-img img"),
smallName = smallView.querySelector(".music-title .fasttitle"),
smallArtist = smallView.querySelector(".music-title .fastartist"),
progressBarNavDone = smallView.querySelector(".music-controls-progresbar-done"),
progressBarNav = smallView.querySelector(".music-controls-progresbar"),
smallPlayStopbtn = smallView.querySelector("#smallplaystop");
const favoritBtn = document.querySelector('#heartBtnMain');

var str = window.location.hash;
const char = str[0];
const replaced = str.replace(char, '');

var indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
musicIndex = indexNumb;

if(replaced){
  var indexNumb = replaced;
}

window.addEventListener("load", ()=>{
  loadMusic(indexNumb);
  checkQuestion();
})

musicImg.addEventListener("click", ()=>{
  musicImg.classList.toggle('active');
  showMusicMenubtn.classList.toggle('active');
});

favoritBtn.addEventListener('click', () => {
  if (allMusic[indexNumb - 1].status === "favorite") {
    allMusic[indexNumb - 1].status = "nostatus";
  }else if (allMusic[indexNumb - 1].status === "nostatus") {
    allMusic[indexNumb - 1].status = "favorite";
  }
  favoriteLoadItems();
  if (allMusic[indexNumb - 1].status === "favorite") {
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
  }
})

function lyricsSupport(){
  lyricsDataVerse_1.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_1;
  lyricsDataVerse_2.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_2;
  lyricsDataVerse_3.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_3;
  lyricsDataVerse_4.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_4;
  lyricsDataVerse_5.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_5;
  lyricsDataVerse_6.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_6;
  lyricsDataVerse_7.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_7;
  lyricsDataVerse_8.innerText = allMusic[indexNumb - 1].lyrics.lyrics_verse_8;
  if (lyricsDataVerse_1.innerText === ""){
    lyricsNoDataAlert.classList.add("active");
    for (lyricsAllVerse of lyricsAllVerses) {
      lyricsAllVerse.style.display = "none";
    }
  }else{
    lyricsNoDataAlert.classList.remove("active");
    for (lyricsAllVerse of lyricsAllVerses) {
      lyricsAllVerse.style.display = "flex";
    }
  }
}

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  musicBackgroundImage.src = `assets/maingif.gif`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
  smallName.innerText = allMusic[indexNumb - 1].name;
  smallArtist.innerText = allMusic[indexNumb - 1].artist;
  smallImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  lyricsDataArtist.innerText = allMusic[indexNumb - 1].artist;
  lyricsDataTitle.innerText = allMusic[indexNumb - 1].name;
  musicViralMp4.pause();
  window.location.hash = indexNumb;

  if (localStorage.getItem("user_Volume") === null) {
    mainAudio.volume = document.getElementById("volumeslider").value;
  }else{
    mainAudio.volume = currentVolume;
    document.getElementById("volumeslider").value = currentVolume;
  }

  if(allMusic[indexNumb] === undefined){
    musicNextTitle.innerText = allMusic[indexNumb - 1].name;
  }else{
    musicNextTitle.innerText = allMusic[indexNumb].name;
  }

  if (allMusic[indexNumb - 1].status === "favorite") {
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
  }



    if (wrapper.classList.contains('save-data')) {
      musicImg.src = `assets/maingif.gif`;
      smallImg.src = `assets/maingif.gif`;
    }


    navigator.mediaSession.metadata = new MediaMetadata({
      title: allMusic[musicIndex - 1].name,
      artist: allMusic[musicIndex - 1].artist,
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
  musicViralMp4.play();
}

function pauseMusic(){
  wrapper.classList.remove("paused");
  playstopButton.querySelector(".fa-solid").classList.add("fa-play");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-stop");
  mainAudio.pause();
  musicViralMp4.pause();
}

function nextMusic(){

  if (wrapper.classList.contains("shuffle")) {
    indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  }

  toggleSequence();
  indexNumb++;
  indexNumb > allMusic.length ? indexNumb = 1 : indexNumb = indexNumb;
  loadMusic(indexNumb);
  playMusic();
  playingSong();
}

function toggleSequence() {
  if (musicNextTiptool.classList.contains("active"))
  {
    return;
  } else{
  setTimeout(() => {
    musicNextTiptool.classList.toggle("active");
  }, 1000)
  setTimeout(() => {
    musicNextTiptool.classList.toggle("active");
  }, 5000)
  }
}

function prevMusic(){
  
  if (wrapper.classList.contains("shuffle")) {
    indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  }

  toggleSequence();
  indexNumb--;
  indexNumb < 1 ? indexNumb = allMusic.length : indexNumb = indexNumb;
  loadMusic(indexNumb);
  playMusic();
  playingSong();
}

function randomIndex() {
  var indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
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
})
topOptionExit.addEventListener('click', () => {
  topOption.classList.toggle('active');
  shortcutCheck();
})

function topOptionFastExit(){
  topOption.classList.remove('active')
}

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
  favortieScreen.classList.remove('active')
  libraryScreen.classList.remove('active');
})

const navbarLibraryBtn = document.getElementsByClassName('navbar-bottom-btn-library')[0]
const libraryScreen = document.getElementsByClassName('library-container')[0]
navbarLibraryBtn.addEventListener('click', () => {
  libraryScreen.classList.add('active');
  favortieScreen.classList.remove('active')
  searchScreen.classList.remove('active');
})

const homeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
homeBtn.addEventListener('click', () => {
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  favortieScreen.classList.remove('active')
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

function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  indexNumb = getLiIndex;
  loadMusic(indexNumb);
  playMusic();
  playingSong();
}
function clickedStyleContainer(element){
  const itemStyleData = element.querySelector(".personal-item span").innerText;
  const itemTitleData = element.querySelector(".personal-item h1").innerText;
  const itemImgData = element.querySelector(".personal-item img");
  const screenTitle = document.querySelectorAll(".music-style-item-title h1");
  const screenImg = document.querySelector(".music-style-item-title img");
  for (const screenTitleItem of screenTitle) {
    screenTitleItem.innerText = itemTitleData;
  }
  screenImg.src = itemImgData.src;
  personalItem.classList.add('active');

  const resultsFAV = document.querySelector(".music-style-item-container");
  var favoritIt = allMusic.filter(x => x.style === itemStyleData);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-style-container-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
      <div class="music-style-item-artist-container">
       <img src="images/${favoritIt[i].img}.jpg">
          <div class="music-style-container-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].artist}</span>
          </div>
        </div>
        <span id="${favoritIt[i].src}" class="audio-duration-setup">3:40</span>
        <audio class="${favoritIt[i].src}" src="songs/${favoritIt[i].src}.mp3"></audio>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    let liAudioDuartionTag = resultsFAV.querySelector(`#${favoritIt[i].src}`);
    let liAudioTag = resultsFAV.querySelector(`.${favoritIt[i].src}`);
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
}


function styleContentAction() {
}








const correctSoundBtn = document.getElementsByClassName('device-screen-btn')[0]
const correctSoundScreen = document.getElementsByClassName('device-screen')[0]
const correctSoundExit = document.getElementsByClassName('device-screen-exit')[0]
const menuLyricsBtn = document.getElementsByClassName('shortcut-rate-btn')[0]
const menuLyricsFullscreen = document.getElementsByClassName('device-screen-fullscreen')[0]
correctSoundBtn.addEventListener('click', () => {
  correctSoundScreen.classList.toggle('active')
  lyricsSupport();
})
correctSoundExit.addEventListener('click', () => {
  correctSoundScreen.classList.remove('active')
  correctSoundScreen.classList.remove('fullscreen');
})
menuLyricsBtn.addEventListener('click', () => {
  correctSoundScreen.classList.add('active')
})
menuLyricsFullscreen.addEventListener('click', () => {
  correctSoundScreen.classList.toggle('fullscreen');
  correctSoundScreen.classList.toggle('active');
})

const musicContenLike = document.getElementsByClassName('music-content-like')[0]
musicContenLike.addEventListener('click', () => {
  musicContenLike.classList.toggle('active')
  if (musicContenLike.classList.contains("active")){
    musicContenLike.innerHTML = '<i class="fa-regular fa-heart"></i> Polubiono';
  }else{
    musicContenLike.innerHTML = '<i class="fa-regular fa-heart"></i> Polub';
  }
})

function clearFilterStatus(){
  let boxes = document.querySelectorAll('.search-filter .search-item');
    for (const box of boxes) {
    box.classList.add('active');
    }
  filterList();
}


const [search,filter,results] = ["#search-item",".search-filter",".search-results"].map(sel=>document.querySelector(sel));
results.innerHTML=allMusic.map((a,i)=>
`<li li-index="${i + 1}" onclick="clicked(this)">
  <div class="result-box">
   <div class="result-box-cover">
     <h1 class="result-name">${a.name}</h1>
     <p class="result-artist">${a.artist}</p>
   </div>
  </div>
  <audio class="songs/${a.src}.mp3"" src="songs/${a.src}.mp3">${a.src}.mp3"></audio>
 </li>`).join("\n");

// show which item was clicked:
function clickedSearchResults(o){
  console.log("Index "+o.getAttribute("li-index")+" was clicked.");
  let getLiIndex = o.getAttribute("li-index");
  indexNumb = getLiIndex;
  loadMusic(indexNumb);
  playMusic();
  playingSong();
}

// main filter function
function filterList(){
  // get all styles by collecting the textContent of .active buttons:
  let styles=[...filter.querySelectorAll(".active")].map(b=>b.textContent),
  // get current search string from input field:
    srch=search.value.toLowerCase();
  allMusic.forEach((m,i)=>{ // both conditions must be met: style and search pattern
    results.children[i].style.display=(m.name+"|"+m.artist).toLowerCase().includes(srch)&&styles.includes(m.style)?"":"none";
  })
}
// attach filterList() to input event of text-input and click event of style buttons:
search.addEventListener("input",filterList);
filter.onclick = ev =>{
 if(ev.target.tagName == "BUTTON"){
   ev.target.classList.toggle("active");
   filterList()
}};
// do initial filtering:
filterList()


const artistProfile = document.getElementsByClassName('artist-card')[0]
const artistProfileExit = document.getElementsByClassName('artist-exit')[0]

document.querySelectorAll('.head-content-item').forEach(artistProfileBtn => {
})

artistProfileExit.addEventListener('click', () => {
    artistProfile.classList.remove('active');
})

const currentVolume = localStorage.getItem('user_Volume');

function setvolume(){
  mainAudio.volume = document.getElementById("volumeslider").value;
  localStorage.setItem("user_Volume", mainAudio.volume);
  console.log(currentVolume);
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


  const personaDiv = document.querySelectorAll('.personal-item')[0]
  const personalItem = document.querySelectorAll('.music-style-item')[0]
  const musicstyleexit = document.querySelectorAll('.music-1-exit')[0]
  musicstyleexit.addEventListener('click', () => {
      personalItem.classList.remove('active')
  })

  const musicArtistExit = document.querySelectorAll('.music-artist-exit')[0]
  const musicArtistScreen = document.querySelectorAll('.music-artist-item')[0]
  musicArtistExit.addEventListener('click', () => {
    musicArtistScreen.classList.remove('active')
  })

  function artistScreenView(){
    musicArtistScreen.classList.add('active')
    musicMenuHide.classList.remove('active')
    artistScreenDataLoad(indexNumb);
    albumScreen.classList.remove('active');
    playlistItemScreen.classList.remove("active");
    activeLibraryScreen.classList.remove('active')
    activeSearchScreen.classList.remove('active')
    activeHomeScreen.classList.add('active')
    libraryScreen.classList.remove('active');
    searchScreen.classList.remove('active');
  }

  const popularPop = document.querySelector(".popular-music");
  const popularCounter = document.querySelector(".popular-content-length");

function popularLoad(){
    popularPop.classList.toggle('active');
    popularDataLoad();
}

  function popularDataLoad(){

    const resultsFAV = document.querySelector(".popular-container");
    var favoritIt = allMusic.filter(x => x.tag === "Popular");
    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="popular-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img src="images/${favoritIt[i].img}.jpg">
            <div class="popular-item-data">
              <h1>${favoritIt[i].name}</h1>
              <p>${favoritIt[i].artist}</p>
            </div>
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    }

      $(".popular-container").html($(".popular-container .popular-item").sort(function(){
        return Math.random()-0.5;
    }));

    popularCounter.innerText = $('.popular-item').length;

  }


  const gallery = document.querySelector("#container");
  const gallery_scroller = gallery.querySelector("#gallery");
  const gallery_item_size = gallery.querySelector("div").clientWidth;
  
  gallery.querySelector(".btn.next").addEventListener("click", scrollToNextPage);
  gallery.querySelector(".btn.prev").addEventListener("click", scrollToPrevPage);
  
  function scrollToNextPage() {
    gallery_scroller.scrollBy({
      top: 0,
      left: gallery_item_size,
      behavior: "smooth"
    });
  }
  
  function scrollToPrevPage() {
    gallery_scroller.scrollBy({
      top: 0,
      left: -gallery_item_size,
      behavior: "smooth"
    });
  }
  
  const bioCard = document.querySelector(".music-artist-bio");

  function loadBio(){
    bioCard.classList.toggle("active");
    loadBioData();
  }

  function loadBioData(){
    let artistData = artistItemTitle.innerText;
    let artistDataName = document.querySelector(".music-artist-bio-data-name");
    let artistDataNameTop = document.querySelector(".music-artist-bio-controls-data");

    artistDataName.innerText = artistData;
    artistDataNameTop.innerText = artistData;

    const resultsFAV = document.querySelector(".music-artist-bio-gallery .container .gallery");
    var favoritIt = allMusic.filter(x => x.artist === artistData);
    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="card">
          <img src="artists/${favoritIt[i].avatar}.jpg">
         </div>
         <div class="card">
          <img src="${favoritIt[i].artist_img}">
         </div>
         <div class="card">
         <img src="${favoritIt[i].album_cover}">
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

      if(favoritIt[i].social.instagram === "" ){
        artistDataBioInstagram.style.display = "none";
      }else{
        artistDataBioInstagram.style.display = "flex";
        artistDataBioInstagram.href = favoritIt[i].social.instagram;
      }
      
      if(favoritIt[i].social.twitter === "" ){
        artistDataBioTwitter.style.display = "none";
      }else{
        artistDataBioTwitter.style.display = "flex";
        artistDataBioTwitter.href = favoritIt[i].social.twitter;
      }

      if(favoritIt[i].social.facebook === "" ){
        artistDataBioFacebook.style.display = "none";
      }else{
        artistDataBioFacebook.style.display = "flex";
        artistDataBioFacebook.href = favoritIt[i].social.facebook;
      }

      if(favoritIt[i].bio === "" ){
        artistDataBio.innerText = "";
      }else{
        artistDataBio.innerText = favoritIt[i].bio;
      }
    }

    const parent = document.querySelector(".container .gallery");
    [...parent.children].slice(+3).forEach(parent.removeChild.bind(parent));

  }


  const artistContainer = document.querySelector(".music-artist-container"),
  artistItemImg = artistContainer.querySelector(".music-artist-item-title img"),
  artistItemTitle = artistContainer.querySelector(".music-artist-item-data-artist"),
  artistItemFollow = artistContainer.querySelector(".music-artist-like"),
  artistItemFollowers = artistContainer.querySelector(".music-artist-number-data"),
  artistCardBackgroundImg = artistContainer.querySelector(".music-artist-information-box"),
  artistCardDataName = artistContainer.querySelector(".music-artist-information-bottom-name"),
  artistCardDataBio = artistContainer.querySelector(".music-artist-information-bottom-bio");

  const artistDataBio = document.querySelector(".music-artist-bio-data-about");
  const artistDataBioInstagram = document.querySelector(".music-artist-bio-social-instagram");
  const artistDataBioTwitter = document.querySelector(".music-artist-bio-social-twitter");
  const artistDataBioFacebook = document.querySelector(".music-artist-bio-social-facebook");

  artistItemFollow.addEventListener('click', () => {
    artistItemFollow.classList.toggle('active')
    if (artistItemFollow.classList.contains('active')){
      artistItemFollow.innerHTML = '<i class="fa-solid fa-heart"></i> Obserwujesz';
      artistItemFollowers.innerText = +artistItemFollowers.innerText +1;
    } else{
      artistItemFollow.innerHTML = '<i class="fa-regular fa-heart"></i> Obserwuj';
      artistItemFollowers.innerText = +artistItemFollowers.innerText -1;
    }
  })

  function artistScreenDataLoad(indexNumb){
    artistItemTitle.innerText = allMusic[indexNumb - 1].artist;
    artistItemImg.src = `artists/${allMusic[indexNumb - 1].avatar}.jpg`;
    artistCardDataName.innerText = allMusic[indexNumb - 1].artist;
    artistCardBackgroundImg.style.backgroundImage = `url(${allMusic[indexNumb - 1].artist_img})`;

    var randomnumber = Math.floor(Math.random() * 150000) + 1;
    artistItemFollowers.innerText = randomnumber;

    artistSongsDataLoad();
    fastLoadingPop();
    filteredAlbums();
  }

  function fastLoadingPop(){
    const fastloader = document.querySelector(".fast-loader");
    setTimeout(() => {
      fastloader.classList.toggle("active");
    }, 0000)
    setTimeout(() => {
      fastloader.classList.toggle("active");
    }, 750)
  }

  function artistSongsDataLoad() {

    let artistNameData = artistItemTitle.innerText;

    const resultsFAV = document.querySelector(".music-artist-content-container");
    var favoritIt = allMusic.filter(x => x.artist === artistNameData);
    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-content-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img src="images/${favoritIt[i].img}.jpg">
            <div class="music-artist-content-item-data">
              <h1>${favoritIt[i].name}</h1>
              <span>${favoritIt[i].artist}</span>
            </div>
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    }

    $(".music-artist-content-container").html($(".music-artist-content-container .music-artist-content-item").sort(function(){
      return Math.random()-0.5;
  }));

    const artistLibrary = document.querySelectorAll(".music-artist-content-item");
    const artistLibraryBtn = document.querySelector(".music-artist-content-btn"); 

    artistLibraryBtn.addEventListener('click', () => {
      for (const artistLibraryItem of artistLibrary){
        artistLibraryItem.classList.add('active')
        artistLibraryBtn.style.display="none";
      }
      fastLoadingPop();
    })

    if (artistLibrary.length < 5){
      artistLibraryBtn.style.display="none";
    }else{
      artistLibraryBtn.style.display="flex";
    }
  }


function filteredAlbums(){

    let artistNameData = artistItemTitle.innerText;

    const resultsFAV = document.querySelector(".music-artist-information-albums");
    var favoritIt = allMusic.filter(x => x.artist === artistNameData);
    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-information-albums-item" onclick="fastLoadingPop(); clickedSingleAlbum(this)" data-album='${favoritIt[i].album}'>
            <img class="music-artist-information-albums-item-img" src="${favoritIt[i].album_cover}">
            <img class="music-artist-information-albums-item-artist-img" style="display: none;" src="${favoritIt[i].artist_img}">
            <p><span class="music-artist-information-albums-item-name">${favoritIt[i].album}</span> <span class="data-premiere">${favoritIt[i].album_premiere}</span></p>
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    }

    var productIds={};
    $('.music-artist-information-albums-item').each(function(){
        var prodId = $(this).attr('data-album');
        if(productIds[prodId]){
           $(this).remove();
        }else{
           productIds[prodId] = true;
        }
    });
}

const albumScreenExit = document.querySelector(".music-artist-album-screen-exit");
const albumScreen = document.querySelector(".music-artist-album-screen");
const albumScreenTitle = document.querySelector(".music-artist-album-fast-data-name");
const albumScreenPremiere = document.querySelector(".music-artist-album-fast-data-premiere");
const albumScreenAlbumImg = document.querySelector(".music-artist-album-fast-data-img");
const albumScreenArtistImg = document.querySelector(".music-artist-album-screen-img-background img");
const albumScreenSongsNumber = document.querySelector(".music-artist-album-screen-length");
const albumScreenAlbumText = document.querySelector(".music-artist-album-screen-length-name");
albumScreenExit.addEventListener('click', () => {
  albumScreen.classList.remove('active')
})


function clickedSingleAlbum(element){
    const albumNameData = element.getAttribute("data-album");
    const albumPremiereData = element.querySelector(".data-premiere");
    const albumImgData = element.querySelector(".music-artist-information-albums-item-img");
    const albumArtistImgData = element.querySelector(".music-artist-information-albums-item-artist-img");
    albumScreen.classList.add("active");
    albumScreenTitle.innerText = albumNameData;
    albumScreenPremiere.innerText = albumPremiereData.innerText;
    albumScreenAlbumImg.src = albumImgData.src;
    albumScreenArtistImg.src = albumArtistImgData.src;
    singleAlbumDataLoad();
}

function clickedSingleAlbumPlaylist(element){
  const albumNameData = element.parentElement.parentElement.parentElement.id;
  var albumName = allMusic[albumNameData].album;
  var albumPremier = allMusic[albumNameData].album_premiere;
  var albumAlbumImg = allMusic[albumNameData].album_cover;
  var albumArtistImg = allMusic[albumNameData].artist_img;

  albumScreen.classList.add("active");
  albumScreenTitle.innerText = albumName;
  albumScreenPremiere.innerText = albumPremier;
  albumScreenAlbumImg.src = albumAlbumImg;
  albumScreenArtistImg.src = albumArtistImg;

  const resultsFAV = document.querySelector(".music-artist-album-screen-container");
  var favoritIt = allMusic.filter(x => x.album === albumName);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img class="music-artist-information-albums-item-img" src="${favoritIt[i].album_cover}">
            <div class="music-artist-album-item-data">
                <h1>${favoritIt[i].name}</h1>
                <span>${favoritIt[i].artist}</span>
            </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    albumScreenSongsNumber.innerText = $('.music-artist-album-item').length;
  }
  let albumNumberSongs = $('.music-artist-album-item').length;
  if(albumNumberSongs > 1){
    albumScreenAlbumText.innerText = "Album";
  }else if(albumNumberSongs = 1){
    albumScreenAlbumText.innerText = "Singiel";
  }

  playlistItemOption.classList.remove("active");
  playlistItemScreen.classList.remove("active");
}
function singleAlbumDataLoad(){

  const albumNameData = document.querySelector(".music-artist-information-albums-item").getAttribute("data-album");
  let albumName = albumNameData;

  const resultsFAV = document.querySelector(".music-artist-album-screen-container");
  var favoritIt = allMusic.filter(x => x.album === albumName);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img class="music-artist-information-albums-item-img" src="${favoritIt[i].album_cover}">
            <div class="music-artist-album-item-data">
                <h1>${favoritIt[i].name}</h1>
                <span>${favoritIt[i].artist}</span>
            </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    albumScreenSongsNumber.innerText = $('.music-artist-album-item').length;
  }
  let albumNumberSongs = $('.music-artist-album-item').length;
  if(albumNumberSongs > 1){
    albumScreenAlbumText.innerText = "Album";
  }else if(albumNumberSongs = 1){
    albumScreenAlbumText.innerText = "Singiel";
  }
}


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

  $(document).ready(function(){
      $(".search-filter .search-item").click(function() {
      $(".search-filter .search-item").not($(this)).removeClass('active');
  });
  });

  $(".variation_form_section .select div").click(function() {
  $(".variation_form_section .select div").not($(this)).removeClass('active');
});

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


const playlistsContainer = document.querySelector(".center-container-scrollable");
const playlistCreateScreen = document.querySelector(".playlist");
playlistTitleInputData = playlistCreateScreen.querySelector("#playlist-setup-name"),
playlistTitleInputData = playlistCreateScreen.querySelector("#playlist-setup-name");

function createPlaylist(){
  playlistTitleInputData.value = "";
  playlistCreateScreen.classList.toggle("active");
}

function createItemPlaylist(){
  playlistTitleData = playlistTitleInputData.value;
  var element = document.createElement("div");
  element.classList.add('center-container-item');
  element.innerHTML = '<i class="fa-solid fa-music" onclick="clickedPlaylist(this)"></i><span class="created-playlist-id" style="display:none;"></span><span class="created-playlist-date" style="display:none;"></span><h2 class="center-container-item-title-data"></h2>';
  let playlistItemTitle = element.querySelector(".center-container-item-title-data");
  let playlistItemCreateDate = element.querySelector(".created-playlist-date");
  let playlistItemId = element.querySelector(".created-playlist-id");
  playlistItemTitle.innerText = playlistTitleData;
  playlistsContainer.prepend(element); 
  playlistTitleInputData.value = "";
  if (playlistItemTitle.innerText.length < 3)
  {
    playlistItemTitle.innerText = "Playlista";
  }

  localStorage.setItem('user_playlist_1', playlistTitleData);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  playlistItemId.innerText = playlistItemTitle.innerText;
  playlistItemCreateDate.innerText = currentDate;
}

const playlistItemExit = document.querySelector("#user_playlist_controls_exit");
const playlistItemScreen = document.querySelector(".user_playlist");
const playlistItemControlsTitle = document.querySelector(".user_playlist_controls_title");

const playlistItemTitleData = playlistItemScreen.querySelector(".user_playlist_content_title_data");
playlistItemDate = playlistItemScreen.querySelector(".user_playlist_date");
mainPlaylistData_counter = playlistItemScreen.querySelector(".user_playlist_content_header_counter");

playlistItemExit.addEventListener('click', () => {
  playlistItemScreen.classList.remove("active");
})

function clickedPlaylist(element){

  let playlistData = element.parentElement;
  mainPlaylistData = playlistData.querySelector(".center-container-item-title-data").innerText;
  mainPlaylistData_date = playlistData.querySelector(".created-playlist-date").innerText;

  playlistItemScreen.classList.add("active");
  playlistItemTitleData.innerText = mainPlaylistData;
  playlistItemControlsTitle.innerText = mainPlaylistData;
  playlistItemDate.innerText = mainPlaylistData_date;
  playlistContent();
  playlistFeatured();
  playlistFeaturedRandom();
}

function playlistFeatured(){

  const resultsFAV = document.querySelector(".user_playlist_featured");
  var favoritIt = allMusic.filter(x => x.user_playlist_1 === "");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="user_playlist_featured_item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <div class="user_playlist_featured_item_main">
          <img src="images/${favoritIt[i].img}.jpg">
            <div class="user_playlist_featured_item_main_data">
                <p>${favoritIt[i].name}</p>
                <span>${favoritIt[i].artist}</span>
            </div>
        </div>
        <a class="user_playlist_featured_item_action" onclick="playlistItemAdd(this)">Dodaj</a>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

function featuredHideShow(){
  const featuredContent = document.querySelector(".user_playlist_featured");
  const hideshow = document.querySelector(".user_playlist_content_header_featured_hide");
  const featuredContentAction = document.querySelector(".user_playlist_featured_action");
  featuredContent.classList.toggle("hidden");
  if(featuredContent.classList.contains("hidden"))
  {
    hideshow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>'
    featuredContentAction.style.display="none";
  }else{
    hideshow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>'
    featuredContentAction.style.display="flex";
  }
}

function playlistFeaturedRandom(){
  $(".user_playlist_featured").html($(".user_playlist_featured .user_playlist_featured_item").sort(function(){
    return Math.random()-0.5;
  }));
}

function playlistContent(element){

  const resultsFAV = document.querySelector(".user_playlist_content_list");
  var favoritIt = allMusic.filter(x => x.user_playlist_1 === mainPlaylistData);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="user_playlist_content_list_item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <div class="user_playlist_content_list_item_main">
          <img src="images/${favoritIt[i].img}.jpg">
            <div class="user_playlist_content_list_item_data">
                <p>${favoritIt[i].name}</p>
                <span>${favoritIt[i].artist}</span>
            </div>
        </div>
        <p class="user_playlist_content_item_option" onclick="playlistItemOptions(this)"><i class="fa-solid fa-ellipsis-vertical"></i></p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  mainPlaylistData_counter.innerText = $('.user_playlist_content_list_item').length;
}

const deleteAlert = document.querySelector(".user_playlist_alert");

function deletePlaylistAlert(){
  deleteAlert.classList.toggle("active");
}

function playlistItemAdd(element){
  const playlistTitleAdd = playlistItemTitleData.innerText;
  let getLiIndex = element.parentElement.getAttribute("li-index");
  let i = getLiIndex;
  allMusic[i].user_playlist_1 = playlistTitleAdd;
  playlistContent();
  playlistFeatured();
}

function playlistRemove(element){
  var aTags = document.querySelectorAll(".center-container-item");
  let playlistPost = element.parentElement.parentElement.parentElement.parentElement;
  playlistTitle = playlistPost.querySelector(".user_playlist_controls_title").innerText;

  for (const a of aTags) {
    if (a.textContent.includes(playlistTitle)) {
      a.remove();
      playlistItemScreen.classList.remove("active");
    }
  }
}

function libraryPlaylistFast(){
  activeLibraryScreen.classList.add('active');
  libraryScreen.classList.add('active');
  createPlaylist();
}

function shareSong(){
  var shareLink = document.createElement('input'),
  text = window.location.href;
  document.body.appendChild(shareLink);
  shareLink.value = text;
  shareLink.select();
  document.execCommand('copy');
  document.body.removeChild(shareLink);
}

const playlistItemOption = document.querySelector(".user_playlist_item_option");

function playlistItemOptions(element){
  playlistItemOption.classList.toggle("active");
  const optionItemName = document.querySelector(".user_playlist_item_option_header_name");
  const optionItemArtist = document.querySelector(".user_playlist_item_option_header_artist");
  const optionItemImg = document.querySelector(".user_playlist_item_option_header img");
  
  let optionItem = element.parentElement;
  let getLiIndex = element.parentElement.getAttribute("li-index");
  const clickedItemImg = optionItem.querySelector(".user_playlist_content_list_item_main img")
  const clickedItemName = optionItem.querySelector(".user_playlist_content_list_item_data p")
  const clickedItemArtist = optionItem.querySelector(".user_playlist_content_list_item_data span")

  optionItemName.innerText = clickedItemName.innerText;
  optionItemArtist.innerText = clickedItemArtist.innerText;
  optionItemImg.src = clickedItemImg.src;
  playlistItemOption.id = getLiIndex;
}

function playlistItemOptionsExit(){
  playlistItemOption.classList.remove("active");
}

function playlistItemRemove(element){
  let getLiIndex = element.parentElement.parentElement.parentElement.id;
  let i = getLiIndex;
  allMusic[i].user_playlist_1 = "";
  playlistContent();
  playlistFeatured();
  playlistItemOption.classList.remove("active");
}

function addFavoriteItem(element){
  let getLiIndex = element.parentElement.parentElement.parentElement.id;
  let i = getLiIndex;

  if (allMusic[indexNumb - 1].status === "favorite") {
    allMusic[indexNumb - 1].status = "nostatus";
  }else if (allMusic[indexNumb - 1].status === "nostatus") {
    allMusic[indexNumb - 1].status = "favorite";
  }

  favoriteLoadItems();
  if (allMusic[indexNumb - 1].status === "favorite") {
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
    element.innerHTML = '<i class="fa-solid fa-heart"></i> Polubiono';
    element.parentElement.classList.add("active");
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    element.innerHTML = '<i class="fa-regular fa-heart"></i> Dodaj Do Ulubionych'
    element.parentElement.classList.remove("active");
  }
}

function playlistSearchShow(element){
  const playlistInput = document.querySelector(".user_playlist_content_title_action_search");
  playlistInput.classList.toggle("active");
  playlist_search.value = "";
  filterListPlaylist();
  element.classList.toggle("active")
}

playlist_search = document.getElementById('user_playlist_content_search');
playlist_search_content = document.querySelector('.user_playlist_content_list');
playlist_search.addEventListener("input",filterListPlaylist);

// main filter function
function filterListPlaylist(){
  let input = playlist_search.value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('user_playlist_content_list_item');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="flex";                 
      }
  }
}

artistCardTitle = document.querySelector(".artist-main-name");
artistCardImage = document.querySelector(".artist-card-img img");
artistCardBio = document.querySelector(".artist-info");
artistCardCounter = document.querySelector(".artist-main-counter");

function artistFast(e) {
  
  let artistCard = e;
  artistProfile.classList.add('active');
  artistClickedName = artistCard.querySelector(".head-content-item-name");
  artistClickedImg = artistCard.querySelector("img");
  artistClickedBio = artistCard.querySelector(".head-content-item-data-bio");
  artistClickedImgPng = artistCard.querySelector(".head-content-item .head-content-item-png");

  artistCardImage.src = artistClickedImg.src;
  artistCardTitle.innerText = artistClickedName.innerText;
  const artistDataName = artistClickedName.innerText;

  const resultsData = document.querySelector(".artist-main-content");
  var favoritIt = allMusic.filter(x => x.artist === artistDataName);
  resultsData.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultData =
      `<div class="artist-main-content-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <img src="images/${favoritIt[i].img}.jpg">
        <div class="artist-main-content-item-data">
                <p>${favoritIt[i].name}</p>
                <span>${favoritIt[i].artist}</span>
        </div>
        <div class="artist-main-content-item-premiere">
                <p>${favoritIt[i].album_premiere}</p>
        </div>
       </div>`;
      resultsData.insertAdjacentHTML("beforeend", resultData);
  }
  artistCardCounter.innerText = $('.artist-main-content-item').length + " utworów";
}

function artistFastExit(){
  artistProfile.classList.remove('active');
}

function sampleContent(){

  const resultsData = document.querySelector(".artist-main-content");
  var favoritIt = allMusic.filter(x => x.artist === artistDataName);
  resultsData.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultData =
      `<div class="artist-main-content-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <img src="images/${favoritIt[i].img}.jpg">
        <div class="artist-main-content-item-data">
                <p>${favoritIt[i].name}</p>
                <span>${favoritIt[i].artist}</span>
        </div>
        <div class="artist-main-content-item-premiere">
                <p>${favoritIt[i].album_premiere}</p>
        </div>
       </div>`;
      resultsData.insertAdjacentHTML("beforeend", resultData);
  }
}

var today = new Date();
var time = today.getHours();
const timeZoneText = document.querySelector(".timeZoneData");

if (time < 18){
  timeZoneText.innerText = "Dzień dobry"
}
if (time > 18){
  timeZoneText.innerText = "Dobry wieczór"
}

const searchArtistFilter = document.querySelector(".search-option-artist");
const searchTrackFilter = document.querySelector(".search-option-track");
const searchFilters = document.querySelector(".search-filter");
const aristsSearchResults = document.querySelector(".search-artist-results");

searchTrackFilter.addEventListener('click', () => {
  searchTrackFilter.classList.add('active')
  searchArtistFilter.classList.remove('active')
  searchFilters.style.display="flex";
  results.style.display="block";
  aristsSearchResults.style.display="none";
})

searchArtistFilter.addEventListener('click', () => {
  searchArtistFilter.classList.add('active')
  searchTrackFilter.classList.remove('active')
  searchFilters.style.display="none";
  results.style.display="none";
  aristsSearchResults.style.display="flex";
})
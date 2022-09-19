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
  favortieScreen.classList.toggle('active')
})
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

queueArtist = wrapper.querySelector(".queue-container .artist");


const smallView = document.querySelector(".music-controls"),
smallImg = smallView.querySelector(".music-img img"),
smallName = smallView.querySelector(".music-title .fasttitle"),
smallArtist = smallView.querySelector(".music-title .fastartist"),
progressBarNavDone = smallView.querySelector(".music-controls-progresbar-done"),
progressBarNav = smallView.querySelector(".music-controls-progresbar"),
smallPlayStopbtn = smallView.querySelector("#smallplaystop");
const favoritBtn = document.querySelector('#heartBtnMain');

var indexNumb = 5;
musicIndex = indexNumb;

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
  }else{
    lyricsNoDataAlert.classList.remove("active");
  }
}

function loadMusic(indexNumb){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  musicBackgroundImage.src = `maingif.gif`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
  smallName.innerText = allMusic[indexNumb - 1].name;
  smallArtist.innerText = allMusic[indexNumb - 1].artist;
  smallImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  lyricsDataArtist.innerText = allMusic[indexNumb - 1].artist;
  lyricsDataTitle.innerText = allMusic[indexNumb - 1].name;
  mainAudio.volume = document.getElementById("volumeslider").value;
  musicViralMp4.pause();

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
      musicImg.src = `maingif.gif`;
      smallImg.src = `maingif.gif`;
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



function styleContentAction() {

  const resultsFAV = document.querySelector(".music-style-item-container");
  var favoritIt = allMusic.filter(x => x.style === "Pop");
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


  const personaDiv = document.querySelectorAll('.personal-item')[0]
  const personalItem = document.querySelectorAll('.music-style-item')[0]
  const musicstyleexit = document.querySelectorAll('.music-1-exit')[0]
  personaDiv.addEventListener('click', () => {
      personalItem.classList.add('active')
  })
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
  }

  const artistContainer = document.querySelector(".music-artist-container"),
  artistItemImg = artistContainer.querySelector(".music-artist-item-title img"),
  artistItemTitle = artistContainer.querySelector(".music-artist-item-data-artist"),
  artistItemFollow = artistContainer.querySelector(".music-artist-like"),
  artistItemFollowers = artistContainer.querySelector(".music-artist-number-data"),
  artistCardBackgroundImg = artistContainer.querySelector(".music-artist-information-box"),
  artistCardDataName = artistContainer.querySelector(".music-artist-information-bottom-name"),
  artistCardDataBio = artistContainer.querySelector(".music-artist-information-bottom-bio");
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
        `<div class="music-artist-information-albums-item" onclick="fastLoadingPop()" data-album='${favoritIt[i].album}'>
            <img src="${favoritIt[i].album_cover}">
            <p><span class="music-artist-information-albums-item-name">${favoritIt[i].album}</span> <span>${favoritIt[i].album_premiere}</span></p>
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

artistCardTitle = document.querySelector(".artist-main-name");
artistCardImage = document.querySelector(".artist-card-img img");
artistCardBio = document.querySelector(".artist-info");

function readMore(e){
  let artistCard = e;

  artistClickedName = artistCard.querySelector(".head-content-item-name");
  artistClickedImg = artistCard.querySelector("img");
  artistClickedBio = artistCard.querySelector(".head-content-item-data-bio");
  artistClickedImgPng = artistCard.querySelector(".head-content-item .head-content-item-png");

  if (artistClickedImgPng === null) {
    artistCardImage.src = artistClickedImg.src;
    artistCardImage.style.transform = "scale(2)";
  }else {
    artistCardImage.src = artistClickedImgPng.src;
    artistCardImage.style.transform = "scale(1.3)";
  }

  artistCardTitle.innerText = artistClickedName.innerText;
  artistCardBio.innerText = artistClickedBio.innerText;

  }

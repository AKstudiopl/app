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
    randomHomeArtist();
});

const activeHomeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
const activeHomeScreen = document.getElementsByClassName('navbar-bottom-btn 1')[0]

activeHomeBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  playlistItemScreen.classList.remove("active")
  playlistCreateScreen.classList.remove("active")
  userProfile.classList.remove("active")
  popularPop.classList.remove('active')
  artistProfile.classList.remove('active')
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
  userProfile.classList.remove("active")
  popularPop.classList.remove('active')
  artistProfile.classList.remove('active')
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
  userProfile.classList.remove("active")
  popularPop.classList.remove('active')
  artistProfile.classList.remove('active')
  libraryLastPosts();
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
  popularPop.classList.remove('active');
  artistProfile.classList.remove('active');
}

const showFavoriteScreen = document.getElementsByClassName('favorite-library-show')[0]
const favortieScreen = document.getElementsByClassName('library-favorite-screen')[0]
const exitFavoriteScreen = document.getElementsByClassName('library-favorite-exit')[0]

showFavoriteScreen.addEventListener('click', () => {
  favoriteLibraryScreen();
  checkLocalStorageData();
})

function favoriteLibraryScreen(){
  favortieScreen.classList.add('active')
}
exitFavoriteScreen.addEventListener('click', () => {
  favortieScreen.classList.toggle('active')
})

function favoriteLoadItems() {

  const resultsFAV = document.querySelector(".library-favorite-container");
  var favoritIt = allMusicView.filter(x => x.status === "favorite");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="library-favorite-item" li-index='${favoritIt[i].id}' onclick="favoritesQueue()">
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
  indexNumb = getLiIndex;indexNumb--;
  allMusic = allMusicView.filter(x => x.status !== "");
  loadMusic(indexNumb);
  nextMusic();
  playMusic();

  favoriteItemsNumber.innerText = $('.library-favorite-item').length;
}

function clickedSingleDelete(element){
  let getLiIndex = element.parentElement.getAttribute("li-index");
  let i = getLiIndex;
  allMusicView[i - 1].status = "nostatus";

  localStorage.setItem(allMusicView[i - 1].id, "nostatus");

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
musicImgShadow = wrapper.querySelector(".main-music-header .header-shadow img"),
musicName = wrapper.querySelector(".main-information-title .name"),
musicStatusData = wrapper.querySelector(".main-information"),
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
queueName = wrapper.querySelector(".queue-container .name"),
queueImg = wrapper.querySelector(".queue-container img"),
queueCurrentImg = wrapper.querySelector(".queue-current-item img"),
queueCurrentTrack = wrapper.querySelector(".queue-current-data p"),
queueCurrentArtist = wrapper.querySelector(".queue-current-data span"),
queueCurrentBackgroundImg = wrapper.querySelector(".queue-gif img");
musicBackgroundImage = wrapper.querySelector(".background-music-img img"),
musicTopOptionsImage = wrapper.querySelector(".top-more-head-image img"),
musicTopOptionsName = wrapper.querySelector(".top-more-head-name"),
musicTopOptionsArtist = wrapper.querySelector(".top-more-head-artist"),
musicTopOptionsFavorite = wrapper.querySelector(".top-menu-list-favorite"),
musicNextTiptool = wrapper.querySelector(".main-music-next-music"),
musicImgNext = wrapper.querySelector(".main-music-header-back"),
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
smallBackgroundImg = smallView.querySelector(".music-controls-background"),
smallImg = smallView.querySelector(".music-img img"),
smallName = smallView.querySelector(".music-title .fasttitle"),
smallArtist = smallView.querySelector(".music-title .fastartist"),
progressBarNavDone = smallView.querySelector(".music-controls-progresbar-done"),
progressBarNav = smallView.querySelector(".music-controls-progresbar"),
leftTime = smallView.querySelector(".music-icon-timer");
smallPlayStopbtn = smallView.querySelector("#smallplaystop");
const favoritBtn = document.querySelector('#heartBtnMain');
const filterData = document.querySelector('.filter-data-bar');


var str = window.location.hash;
const char = str[0];
const replaced = str.replace(char, '');
var indexNumb = Math.floor((Math.random() * allMusic.length) + 1);

var allMusicView = allMusic.filter(x => x.artist !== "");
var indexNumbAll = allMusicView.length;

if(replaced){
  var indexNumb = replaced;
}

window.addEventListener("load", ()=>{
  loadMusic(indexNumb);
  checkQuestion();
})

musicImg.addEventListener("click", ()=>{
  showMusicMenubtn.classList.toggle('active');
});

favoritBtn.addEventListener('click', () => {
  if (allMusic[indexNumb - 1].status === "favorite") {
    allMusic[indexNumb - 1].status = "nostatus";
    localStorage.setItem(allMusic[indexNumb - 1].id, allMusic[indexNumb - 1].status);
  }else if (allMusic[indexNumb - 1].status === "nostatus") {
    allMusic[indexNumb - 1].status = "favorite";
    localStorage.setItem(allMusic[indexNumb - 1].id, allMusic[indexNumb - 1].status);
  }
  favoriteLoadItems();
  if (allMusic[indexNumb - 1].status === "favorite") {
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
    musicTopOptionsFavorite.classList.add('active')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i> Polubiono';
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    musicTopOptionsFavorite.classList.remove('active')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-regular fa-heart"></i> Dodaj Do Ulubionych';
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
  if(allMusic[indexNumb - 1].colaboration != ""){
  musicArtist.innerText = allMusic[indexNumb - 1].artist + ", " + allMusic[indexNumb - 1].colaboration;}
  else{musicArtist.innerText = allMusic[indexNumb - 1].artist;}
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
  smallName.innerText = allMusic[indexNumb - 1].name;
  smallArtist.innerText = allMusic[indexNumb - 1].artist;
  if(allMusic[indexNumb - 1].colaboration != ""){smallArtist.innerText = allMusic[indexNumb - 1].artist + ", " + allMusic[indexNumb - 1].colaboration;}
  smallImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  smallBackgroundImg.style.backgroundImage = `url(images/${allMusic[indexNumb - 1].img}.jpg)`;
  musicTopOptionsName.innerText = allMusic[indexNumb - 1].name;
  musicTopOptionsArtist.innerText = allMusic[indexNumb - 1].artist;
  musicTopOptionsImage.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  topOption.setAttribute("id", allMusic[indexNumb - 1].id);
  lyricsDataArtist.innerText = allMusic[indexNumb - 1].artist;
  lyricsDataTitle.innerText = allMusic[indexNumb - 1].name;
  window.location.hash = allMusic[indexNumb - 1].id;

  smallBackgroundImg.classList.add("active");
  setTimeout(() => {
    smallBackgroundImg.classList.remove("active");
  }, 500)

  musicImg.classList.add("animation-next");
  musicImgShadow.classList.add("animation-next");
  musicBackgroundViral.classList.add("in_Change");

  setTimeout(() => {
    musicImg.classList.remove("animation-next");
    musicImgShadow.classList.remove("animation-next");
  }, 500)

  setTimeout(() => {
    musicBackgroundViral.classList.remove("in_Change");
  }, 1000)


  if (wrapper.classList.contains('save-data')) {
    musicImg.src="assets/897fb9c3-72da-4ed8-9653-83e65af3768a.png";
    smallImg.src="assets/897fb9c3-72da-4ed8-9653-83e65af3768a.png";
    smallBackgroundImg.style.backgroundImage = 'url("assets/897fb9c3-72da-4ed8-9653-83e65af3768a.png")';
  }else{
    setTimeout(() => {
      musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
      musicImgShadow.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    }, 500)
  }
  

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
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i> Polubiono';
    musicTopOptionsFavorite.classList.add('active')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-regular fa-heart"></i> Dodaj Do Ulubionych';
    musicTopOptionsFavorite.classList.remove('active')
  }

  const nameProfile = document.querySelector('.library-profile-data p');
  nameProfile.innerText = localStorage.userData;


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

      leftTime.classList.remove("active");

      queueCurrentImg.parentElement.classList.add("active");
      setTimeout(() => {
        queueCurrentImg.parentElement.classList.remove("active");
        queueCurrentImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
        queueCurrentTrack.innerText = allMusic[indexNumb - 1].name;
        queueCurrentArtist.innerText = allMusic[indexNumb - 1].artist;
        queueCurrentBackgroundImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
        
      }, 500)

      queueDataLoad();
      overflowingText();
}

function queueDataLoad(){
  const resultsFAV = wrapper.querySelector(".queue-item ul");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < allMusic.length; i++) {
    let resultFAV = `<li li-index="${i + 1}" onclick="clickedQueueItem(this)">
    <div class="row">
      <span>${allMusic[i].name}</span>
      <p>${allMusic[i].artist}</p>
    </div>
  </li>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

function clickedQueueItem(element){
  let getLiIndex = element.getAttribute("li-index");
  indexNumb = getLiIndex;
  loadMusic(indexNumb);
}


function playMusic(){
  wrapper.classList.add("paused");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-play");
  playstopButton.querySelector(".fa-solid").classList.add("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-stop");
  mainAudio.play();
  setTimeout(() => {
    leftTime.classList.add("active");
    setTimeout(() => {
      leftTime.classList.remove("active");
    }, 5000)
  }, 5000)
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

  if (wrapper.classList.contains("shuffle")) {
    indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  }
    toggleSequence();
    indexNumb++;
    indexNumb > allMusic.length ? indexNumb = 1 : indexNumb = indexNumb;
    loadMusic(indexNumb);
    setTimeout(() => {
      playMusic();
    }, 500)
    playingSong();
}

function toggleSequence() {
  if (musicNextTiptool.classList.contains("active"))
  {musicNextTiptool.classList.remove("active")
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
  setTimeout(() => {
    playMusic();
  }, 500)
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

  maxDuration = mainAudio.duration;
  musicLeftTime = maxDuration - currentTime;
  let totalMin = Math.floor(musicLeftTime / 60);
  let totalSec = Math.floor(musicLeftTime % 60);
  if(totalSec < 10){
    totalSec = `0${totalSec}`;
  }
  totalMin = `- ${totalMin}`;
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  if(leftTime.classList.contains("active")){
    leftTime.innerText = `${totalMin}:${totalSec}`;
  }else{
    leftTime.innerText = "-0:00";
  }

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
const topHeadQueue = document.getElementsByClassName('queue-head')[0]
const topQueueMenuHide = document.getElementsByClassName('queue-container')[0]
topQueue.addEventListener('click', () => {
  topQueueMenuHide.classList.remove('active');
})
topHeadQueue.addEventListener('click', () => {
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


function playingSong(){
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
  var favoritIt = allMusicView.filter(x => x.style === itemStyleData);
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
const menuLyricsExit = document.getElementsByClassName('device-exit')[0]
const menuLyricsBtn = document.getElementsByClassName('shortcut-rate-btn')[0]
correctSoundBtn.addEventListener('click', () => {
  correctSoundScreen.classList.toggle('fullscreen')
  lyricsSupport();
})
correctSoundExit.addEventListener('click', () => {
  correctSoundScreen.classList.remove('fullscreen');
})
menuLyricsExit.addEventListener('click', () => {
  correctSoundScreen.classList.remove('fullscreen');
})
menuLyricsBtn.addEventListener('click', () => {
  correctSoundScreen.classList.add('fullscreen')
})


function clearFilterStatus(){
  let boxes = document.querySelectorAll('.search-filter .search-item');
    for (const box of boxes) {
    box.classList.add('active');
    }
  filterList();
}

const searchNoResults = document.querySelector(".search-noresults");
const searchNoResultsValue = document.querySelector(".search-noresults-keyword");
const [search,filter,results] = ["#search-item",".search-filter",".search-results"].map(sel=>document.querySelector(sel));
results.innerHTML=allMusicView.map((a,i)=>
`<li li-index="${i + 1}" onclick="resultItemQueue(this);">
  <div class="result-box">
   <img src="images/${a.img}.jpg">
   <div class="result-box-cover">
     <h1 class="result-name">${a.name}</h1>
     <p class="result-artist">${a.artist}</p>
   </div>
  </div>
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

function resultItemQueue(element){
  let itemNameData = element.querySelector(".result-name").innerText;
  allMusic = allMusicView.filter(x => x.name === itemNameData);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function artistQueue(element){
  let artistData = element.parentElement.parentElement.parentElement;
  itemArtistData = artistData.querySelector(".music-artist-item-data-artist").innerText;
  allMusic = allMusicView.filter(x => x.artist === itemArtistData || x.colaboration === itemArtistData);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function albumQueue(element){
  let albumData = element.parentElement.parentElement.parentElement;
  itemAlbumData = albumData.querySelector(".music-artist-album-fast-data-name").innerText;
  allMusic = allMusicView.filter(x => x.album === itemAlbumData);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function favoritesQueue(){
  allMusic = allMusicView.filter(x => x.status === "favorite");
  if(allMusic.length < 1){
    allMusic = allMusicView;
  }
  indexNumb = 1;
  loadMusic(indexNumb);
  playMusic();
}

function styleQueue(element){
  let styleItem = element.parentElement.parentElement.parentElement;
  let styleData = styleItem.querySelector(".music-style-item-title").id
  allMusic = allMusicView.filter(x => x.style === styleData);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function popularQueue(){
  allMusic = allMusicView.filter(x => x.tag === "Popular");
  indexNumb = 1;
  loadMusic(indexNumb);
  playMusic();
}

function heartActive(element){
  element.classList.add("active");
}

function searchFavorite(element){
  let favInputContainer = document.querySelector(".library-favorite-search")
  element.classList.toggle("active");
  if(element.classList.contains("active")){
    favInputContainer.classList.add("active")
  }else{
    favInputContainer.classList.remove("active")
  }
}

// main filter function
function filterList(){
  // get all styles by collecting the textContent of .active buttons:
  let styles=[...filter.querySelectorAll(".active")].map(b=>b.textContent),
  // get current search string from input field:
    srch=search.value.toLowerCase();
    allMusicView.forEach((m,i)=>{ // both conditions must be met: style and search pattern
    results.children[i].style.display=(m.name+"|"+m.artist).toLowerCase().includes(srch)&&styles.includes(m.style)?"":"none";
    results.children[i].classList.add=(m.name+"|"+m.artist).toLowerCase().includes(srch)&&styles.includes(m.style)?"":"searched";
  })

  let xSearched = document.querySelector('.search-results');
  if(xSearched.offsetHeight < 10){
    searchNoResults.style.display="flex";
    searchNoResultsValue.innerText = search.value;
    if(search.value === ""){
      searchNoResults.style.display="none";
    }
  }else{
    searchNoResults.style.display="none";
  }
  
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
    nameProfile.innerText = inputName.value;
    localStorage.setItem("userData", inputName.value);
  }
  function checkQuestion(){
    namePlace = document.getElementById('nameUser');
    namePlace.innerHTML = localStorage.userData;

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
    artistPopular.style.display="flex";
    artistAlbums.style.display="none";
    artistAbout.style.display="none";
    artistMenuPopular.classList.add('active');
    artistMenuAlbums.classList.remove('active');
    artistMenuAbout.classList.remove('active');
    checkFollowStatus();
    bioCard.classList.remove("active");
  }

  const popularPop = document.querySelector(".popular-music");
  const popularCounter = document.querySelector(".popular-content-length");
  const popularBackgroundImg = document.querySelector(".popular-header-background img")

function popularLoad(){
    popularPop.classList.toggle('active');
    popularDataLoad();
}

  function popularDataLoad(){
    const resultsFAV = document.querySelector(".popular-container");
    var favoritIt = allMusicView.filter(x => x.tag === "Popular");
    let randomIndex = Math.floor((Math.random() * favoritIt.length) + 1);
    popularBackgroundImg.src = favoritIt[randomIndex].gallery_img_1;
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

  function removeThis(element){
    if(element.getAttribute('src') == "undefined"){
      element.parentElement.remove();
    }
  }

  function loadBioData(){
    let artistData = artistItemTitle.innerText;
    let artistDataName = document.querySelector(".music-artist-bio-data-name");
    let artistDataNameTop = document.querySelector(".music-artist-bio-controls-data");

    artistDataName.innerText = artistData;
    artistDataNameTop.innerText = artistData;

    const resultsFAV = document.querySelector(".music-artist-bio-gallery .container .gallery");
    var favoritIt = allMusicView.filter(x => x.artist === artistData);
    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="card" data-src='${favoritIt[i].avatar}'>
          <img src="artists/${favoritIt[i].avatar}.jpg" onerror="removeThis(this)">
         </div>
         <div class="card"  data-src='${favoritIt[i].artist_img}'>
          <img src="${favoritIt[i].artist_img}" onerror="removeThis(this)">
         </div>
         <div class="card"  data-src='${favoritIt[i].gallery_img_1}'>
         <img src="${favoritIt[i].gallery_img_1}" onerror="removeThis(this)">
         </div>
         <div class="card"  data-src='${favoritIt[i].gallery_img_2}'>
         <img src="${favoritIt[i].gallery_img_2}" onerror="removeThis(this)">
         </div>
         <div class="card"  data-src='${favoritIt[i].gallery_img_3}'>
         <img src="${favoritIt[i].gallery_img_3}" onerror="removeThis(this)">
         </div>
         <div class="card"  data-src='${favoritIt[i].gallery_img_4}'>
         <img src="${favoritIt[i].gallery_img_4}" onerror="removeThis(this)">
         </div>
         <div class="card"  data-src='${favoritIt[i].gallery_img_5}'>
         <img src="${favoritIt[i].gallery_img_5}" onerror="removeThis(this)">
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

      var productIds={};
      $('.card').each(function(){
          var prodId = $(this).attr('data-src');
          if(productIds[prodId]){
             $(this).remove();
          }else{
             productIds[prodId] = true;
          }
      });

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

  }


  const artistContainer = document.querySelector(".music-artist-container"),
  artistItemImg = artistContainer.querySelector(".music-artist-item-title img"),
  artistItemTitle = artistContainer.querySelector(".music-artist-item-data-artist"),
  artistItemFeatured = artistContainer.querySelector(".music-artist-item-featured-artist"),
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
    var str = window.location.hash;
    const char = str[0];
    const replaced = str.replace(char, '');

    var indexNumb = allMusic[indexNumb - 1].id;
    indexNumb = indexNumb;

    if(replaced){
      var indexNumb = replaced;
    }

    artistItemTitle.innerText = allMusicView[indexNumb - 1].artist;
    artistItemImg.src = `artists/${allMusicView[indexNumb - 1].avatar}.jpg`;
    artistCardDataName.innerText = allMusicView[indexNumb - 1].artist;
    artistCardBackgroundImg.style.backgroundImage = `url(${allMusicView[indexNumb - 1].artist_img})`;
    artistItemFeatured.innerText = allMusicView[indexNumb - 1].artist;

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
    var favoritIt = allMusicView.filter(x => x.artist === artistNameData);
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

    artistsSongsFeaturedLoad();

    $(".music-artist-content-container").html($(".music-artist-content-container .music-artist-content-item").sort(function(){
      return Math.random()-0.5;
  }));

  function artistsSongsFeaturedLoad() {

    let artistNameData = artistItemTitle.innerText;

    const resultsFAV = document.querySelector(".featured-content");
    var favoritIt = allMusicView.filter(x => x.colaboration === artistNameData);
    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-content-item-featured" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img src="images/${favoritIt[i].img}.jpg">
            <div class="music-artist-content-item-data-featured">
              <h1>${favoritIt[i].name}</h1>
              <span>${favoritIt[i].artist}, ${favoritIt[i].colaboration}</span>
            </div>
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    }
    const artistLibrary = document.querySelectorAll(".music-artist-content-item");
    const artistLibraryBtn = document.querySelector(".music-artist-content-btn"); 
    const featuredLibrary = document.querySelectorAll(".music-artist-content-item-featured");
    const featuredContainer = document.querySelector(".music-artist-item-featured");

    artistLibraryBtn.addEventListener('click', () => {
      for (const artistLibraryItem of artistLibrary){
        artistLibraryItem.classList.add('active')
        artistLibraryBtn.style.display="none";
      }
      fastLoadingPop();
    })

    if (artistLibrary.length < 5){
      artistLibraryBtn.style.display="none";
    }else
    {
      artistLibraryBtn.style.display="flex";
    }

    if (featuredLibrary.length < 1){
      featuredContainer.style.display="none";
    }else
    {
      featuredContainer.style.display="flex";
    }
  }}


function filteredAlbums(){

    let artistNameData = artistItemTitle.innerText;

    const resultsFAV = document.querySelector(".music-artist-information-albums");
    var favoritIt = allMusicView.filter(x => x.artist === artistNameData);
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
    albumScreenArtistImg.src = albumImgData.src;

    const resultsFAV = document.querySelector(".music-artist-album-screen-container");
    var favoritIt = allMusicView.filter(x => x.album === albumNameData);
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

function clickedSingleAlbumPlaylist(element){
  const albumNameData = element.parentElement.parentElement.parentElement.id;
  var albumName = allMusicView[albumNameData].album;
  var albumPremier = allMusicView[albumNameData].album_premiere;
  var albumAlbumImg = allMusicView[albumNameData].album_cover;
  var albumArtistImg = allMusicView[albumNameData].artist_img;

  albumScreen.classList.add("active");
  albumScreenTitle.innerText = albumName;
  albumScreenPremiere.innerText = albumPremier;
  albumScreenAlbumImg.src = albumAlbumImg;
  albumScreenArtistImg.src = albumArtistImg;

  const resultsFAV = document.querySelector(".music-artist-album-screen-container");
  var favoritIt = allMusicView.filter(x => x.album === albumName);
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

  timerItem10.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 30000);
  })

  timerItem20.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 600000);
  })

  timerItem30.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 900000);
  })

  timerItem40.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 1800000);
  })

  timerItem50.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 2700000);
  })

  timerItem60.addEventListener('click', () => {
    setTimeout(
      function() {
        pauseMusic();
        alertTimer();
      }, 3600000);
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
  if (playlistItemTitle.innerText.length < 2)
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
  var favoritIt = allMusicView.filter(x => x.user_playlist_1 === "");
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
  var favoritIt = allMusicView.filter(x => x.user_playlist_1 === mainPlaylistData);
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
  allMusicView[i - 1].user_playlist_1 = playlistTitleAdd;
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
  allMusicView[i - 1].user_playlist_1 = "";
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
  if (allMusicView[indexNumb - 1].status === "favorite") {
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
    element.innerHTML = '<i class="fa-solid fa-heart"></i> Polubiono';
    element.parentElement.classList.add("active");
  }
  if (allMusicView[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    element.innerHTML = '<i class="fa-regular fa-heart"></i> Dodaj Do Ulubionych'
    element.parentElement.classList.remove("active");
  }
}

function playlistSearchShow(element){
  const playlistInput = document.querySelector(".user_playlist_content_title_action_search");
  const playlistTitle = document.querySelector(".user_playlist_content_title")
  const playlistImgs = document.querySelector(".user_playlist_content_image")
  playlistInput.classList.toggle("active");
  playlistTitle.classList.toggle("searchUse");
  playlistImgs.classList.toggle("searchUse");
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
  var favoritIt = allMusicView.filter(x => x.artist === artistDataName);
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

const artisActionUI = document.querySelector(".artist-main-action");

function clickedQueue(){
  let filterName = artistCardTitle.innerText;
  allMusic = allMusic.filter(x => x.artist === filterName);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function artistFastExit(){
  artistProfile.classList.remove('active');
}

var today = new Date();
var time = today.getHours();
const timeZoneText = document.querySelector(".timeZoneData");


if (time < 18){
  var array = ["Dzień Dobry", "Miłego Dnia", "Jak Się Masz", "Miłego Słuchania"];
  var index = Math.floor(Math.random() * array.length);
  var timeZoneRandomText = array[index];
  timeZoneText.innerText = timeZoneRandomText;
}
if (time > 17){
  var array = ["Dobry Wieczór", "Miłego Słuchania", "Miłego Wieczoru"];
  var index = Math.floor(Math.random() * array.length);
  var timeZoneRandomText = array[index];
  timeZoneText.innerText = timeZoneRandomText;
}

const searchArtistFilter = document.querySelector(".search-option-artist");
const searchTrackFilter = document.querySelector(".search-option-track");
const searchFilters = document.querySelector(".search-filter");
const aristsSearchResults = document.querySelector(".search-artist-results");
const searchBarArtist = document.querySelector("#search-bar-artist");
const searchBarName = document.querySelector("#search-bar-name");

searchBarArtist.style.display="none";

searchTrackFilter.addEventListener('click', () => {
  searchTrackFilter.classList.add('active')
  searchArtistFilter.classList.remove('active')
  searchFilters.style.display="flex";
  results.style.display="block";
  aristsSearchResults.style.display="none";
  searchBarArtist.style.display="none";
  searchBarName.style.display="flex";
  searchArtist.value='';
  filterList();
})

searchArtistFilter.addEventListener('click', () => {
  searchArtistFilter.classList.add('active')
  searchTrackFilter.classList.remove('active')
  searchFilters.style.display="none";
  results.style.display="none";
  aristsSearchResults.style.display="flex";
  searchBarArtist.style.display="flex";
  searchBarName.style.display="none";
  searchForArtist();
  search.value='';
  filterByArtist();
})

const searchArtist = document.querySelector("#search-artist");
searchArtist.addEventListener('input', filterByArtist);

function searchForArtist(){
  const resultsData = document.querySelector(".search-artist-results");
  var favoritIt = allMusicView;
  resultsData.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultData =
      `<div class="search-artist-item" data-id='${favoritIt[i].id}' data-artist='${favoritIt[i].artist}' onclick="artistScreenSearchBar(this);">
       <img class="search-artist-item-background" src="artists/${favoritIt[i].avatar}.jpg">
       <div class="search-artist-item-img">
          <img src="${favoritIt[i].artist_img}">
        </div>
        <div class="search-artist-item-data">
        <p>${favoritIt[i].artist}</p>
        </div>
       </div>`;
      resultsData.insertAdjacentHTML("beforeend", resultData);
  }

  var productIds={};
  $('.search-artist-item').each(function(){
      var prodId = $(this).attr('data-artist');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });

  artistPopular.style.display="flex";
  artistAlbums.style.display="none";
  artistAbout.style.display="none";
  artistMenuPopular.classList.add('active');
  artistMenuAlbums.classList.remove('active');
  artistMenuAbout.classList.remove('active');

  filterByArtist();
}

function artistScreenSearchBar(element){
  var dataAttribute = element.getAttribute('data-id');
  musicArtistScreen.classList.add('active')
  musicMenuHide.classList.remove('active')
  albumScreen.classList.remove('active');
  playlistItemScreen.classList.remove("active");
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  newsScreen.classList.remove("active");
  bioCard.classList.remove("active");
  userProfile.classList.remove("active");
  fastLoadingPop();
  artistSongsDataLoad();

  currentIndexNumb = indexNumb;
  indexNumb = dataAttribute;
  indexNumb--;
  
  

  artistItemTitle.innerText = allMusicView[indexNumb].artist;
  artistItemImg.src = `artists/${allMusicView[indexNumb].avatar}.jpg`;
  artistCardDataName.innerText = allMusicView[indexNumb].artist;
  artistCardBackgroundImg.style.backgroundImage = `url(${allMusicView[indexNumb].artist_img})`;
  var randomnumber = Math.floor(Math.random() * 150000) + 1;
  artistItemFollowers.innerText = randomnumber;
  
  let artistNameData = artistItemTitle.innerText;
  const resultsFAV = document.querySelector(".music-artist-content-container");
  var favoritIt = allMusicView.filter(x => x.artist === artistNameData);
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

  indexNumb = currentIndexNumb;

  checkFollowStatus();
  artistsSongsSearchBarFeaturedLoad();

  $(".music-artist-content-container").html($(".music-artist-content-container .music-artist-content-item").sort(function(){
    return Math.random()-0.5;
}));

function artistsSongsSearchBarFeaturedLoad() {
  let artistNameData = artistItemTitle.innerText;

  const resultsFAV = document.querySelector(".featured-content");
  var favoritIt = allMusicView.filter(x => x.colaboration === artistNameData);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item-featured" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <img src="images/${favoritIt[i].img}.jpg">
          <div class="music-artist-content-item-data-featured">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].artist}, ${favoritIt[i].colaboration}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  const artistLibrary = document.querySelectorAll(".music-artist-content-item");
  const artistLibraryBtn = document.querySelector(".music-artist-content-btn"); 
  const featuredLibrary = document.querySelectorAll(".music-artist-content-item-featured");
  const featuredContainer = document.querySelector(".music-artist-item-featured");

  artistLibraryBtn.addEventListener('click', () => {
    for (const artistLibraryItem of artistLibrary){
      artistLibraryItem.classList.add('active')
      artistLibraryBtn.style.display="none";
    }
    fastLoadingPop();
  })

  if (artistLibrary.length < 5){
    artistLibraryBtn.style.display="none";
  }else
  {
    artistLibraryBtn.style.display="flex";
  }

  if (featuredLibrary.length < 1){
    featuredContainer.style.display="none";
  }else
  {
    featuredContainer.style.display="flex";
  }
};


  const resultsAlbum = document.querySelector(".music-artist-information-albums");
  var resultsFiltered = allMusicView.filter(x => x.artist === artistNameData);
  resultsAlbum.innerHTML = "";
  for (let i = 0; i < resultsFiltered.length; i++) {
    let resultAlbum =
      `<div class="music-artist-information-albums-item" onclick="fastLoadingPop(); clickedSingleAlbum(this)" data-album='${favoritIt[i].album}'>
          <img class="music-artist-information-albums-item-img" src="${resultsFiltered[i].album_cover}">
          <img class="music-artist-information-albums-item-artist-img" style="display: none;" src="${resultsFiltered[i].artist_img}">
          <p><span class="music-artist-information-albums-item-name">${resultsFiltered[i].album}</span> <span class="data-premiere">${favoritIt[i].album_premiere}</span></p>
      </div>`;
      resultsAlbum.insertAdjacentHTML("beforeend", resultAlbum);
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

function searchBarArtistScreenDataLoad(){
  artistItemTitle.innerText = allMusicView[indexNumb - 1].artist;
  artistItemImg.src = `artists/${allMusicView[indexNumb - 1].avatar}.jpg`;
  artistCardDataName.innerText = allMusicView[indexNumb - 1].artist;
  artistCardBackgroundImg.style.backgroundImage = `url(${allMusicView[indexNumb - 1].artist_img})`;

  var randomnumber = Math.floor(Math.random() * 150000) + 1;
  artistItemFollowers.innerText = randomnumber;

  artistSongsDataLoad();
  fastLoadingPop();
  filteredAlbums();
}

function filterByArtist(){
  let input = searchArtist.value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('search-artist-item');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
          x[i].classList.remove("searched")
      }
      else {
          x[i].style.display="flex";    
          x[i].classList.add("searched")             
      }
  }

  if(searchArtist.value === ""){
    for (i = 0; i < x.length; i++) { 
          x[i].style.display="none";
   }
  }

  let xSearched = document.getElementsByClassName('search-artist-item searched');
  if(xSearched.length === 0){
    searchNoResults.style.display="flex";
    searchNoResultsValue.innerText = input;
  }else{
    searchNoResults.style.display="none";
  }
}

const uiRandomArtistCard = document.querySelector("#head_content_item")
uiRandomArtistCardName = uiRandomArtistCard.querySelector(".head-content-item-name");
uiRandomArtistCardImg = uiRandomArtistCard.querySelector("img");

function randomHomeArtist(){
  var indexNumb = Math.floor((Math.random() * allMusicView.length) + 1);
  uiRandomArtistCardName.innerText = allMusicView[indexNumb - 1].artist;
  uiRandomArtistCardImg.src = allMusicView[indexNumb - 1].artist_img;
}

const artistMenuPopular = document.querySelector("#music-artist-menu-popular");
const artistMenuAlbums = document.querySelector("#music-artist-menu-albums");
const artistMenuAbout = document.querySelector("#music-artist-menu-about");
const artistPopular = document.querySelector(".music-artist-content-screen");
const artistAlbums = document.querySelector(".music-artist-information");
const artistAbout = document.querySelector(".music-artist-information-screen");
const featuredLibrary = document.querySelectorAll(".music-artist-content-item-featured");
const featuredContainer = document.querySelector(".music-artist-item-featured");

artistMenuPopular.addEventListener('click', () => {
  artistMenuPopular.classList.add('active');
  artistMenuAlbums.classList.remove('active');
  artistMenuAbout.classList.remove('active');
  artistPopular.style.display="flex";

  if (featuredLibrary.length < 1){
    featuredContainer.style.display="none";
  }else{
    featuredContainer.style.display="flex";
  }

  artistAlbums.style.display="none";
  artistAbout.style.display="none";
  artistSongsDataLoad();
})
artistMenuAlbums.addEventListener('click', () => {
  artistMenuPopular.classList.remove('active')
  artistMenuAlbums.classList.add('active')
  artistMenuAbout.classList.remove('active')
  artistPopular.style.display="none";
  featuredContainer.style.display="none";
  artistAlbums.style.display="flex";
  artistAbout.style.display="none";
})
artistMenuAbout.addEventListener('click', () => {
  artistMenuPopular.classList.remove('active')
  artistMenuAlbums.classList.remove('active')
  artistMenuAbout.classList.add('active')
  artistPopular.style.display="none";
  featuredContainer.style.display="none";
  artistAlbums.style.display="none";
  artistAbout.style.display="flex";
})

smallView.addEventListener('touchstart', handleTouchStart, false);        
smallView.addEventListener('touchmove', handleTouchMove, false);
musicImg.addEventListener('touchstart', handleTouchStart, false);        
musicImg.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            nextMusic();
        } else {
            prevMusic();
        }                       
    } else {
        if ( yDiff > 0 ) {
            favoriteLibraryScreen();
        } else { 

        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

function favoriteItemOption(){
  if (allMusic[indexNumb - 1].status === "favorite") {
    allMusic[indexNumb - 1].status = "nostatus";
  }else if (allMusic[indexNumb - 1].status === "nostatus") {
    allMusic[indexNumb - 1].status = "favorite";
  }
  if (allMusic[indexNumb - 1].status === "favorite") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i> Polubiono';
    musicTopOptionsFavorite.classList.add('active')
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-regular fa-heart"></i> Dodaj Do Ulubionych'
    musicTopOptionsFavorite.classList.remove('active')
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
  }
    
  favoriteLoadItems();
}

const newsArtistsSmallViewAction = document.querySelector(".news_artists_header_hide_action");

newsArtistsSmallViewAction.addEventListener('click', () => {
  smallView.classList.toggle('news-hide');
  if(smallView.classList.contains('news-hide')){
    newsArtistsSmallViewAction.style.color="var(--color)";
    newsArtistsSmallViewAction.style.opacity="0.5";
  }else{
    newsArtistsSmallViewAction.style.color="var(--maincolor)";
    newsArtistsSmallViewAction.style.opacity="1";
  }
})

function newsArtistsScreen(){
  newsScreen.classList.toggle("active");
  if(newsScreen.classList.contains("active")){
    fastLoadingPop();
    newsDataLoad();
  }
  if(smallView.classList.contains('news-hide')){
    smallView.classList.remove('news-hide');
    newsArtistsSmallViewAction.style.color="var(--maincolor)";
    newsArtistsSmallViewAction.style.opacity="1";
  }
}
const newsScreen = document.querySelector(".news_artists_screen"),
newsScreenTodayDate = newsScreen.querySelector(".news_artists_date");
newsScreenFilterNew = newsScreen.querySelector(".news_artists_filter_new");
newsScreenFilterFollowed = newsScreen.querySelector(".news_artists_filter_followed");
newsScreenFilterPopular = newsScreen.querySelector(".news_artists_filter_popular");

newsScreenFilterNew.addEventListener('click', () => {
  newsScreenFilterNew.classList.add("active");
  newsScreenFilterFollowed.classList.remove("active");
  newsScreenFilterPopular.classList.remove("active");
  newsDataLoad();
  fastLoadingPop();
})
newsScreenFilterFollowed.addEventListener('click', () => {
  newsScreenFilterNew.classList.remove("active");
  newsScreenFilterFollowed.classList.add("active");
  newsScreenFilterPopular.classList.remove("active");
  newsFollowedDataLoad();
  fastLoadingPop();
})
newsScreenFilterPopular.addEventListener('click', () => {
  newsScreenFilterNew.classList.remove("active");
  newsScreenFilterFollowed.classList.remove("active");
  newsScreenFilterPopular.classList.add("active");
  newsPopularDataLoad();
  fastLoadingPop();
})

var event = new Date();
var options = { weekday: 'long', month: 'long', day: 'numeric' };

newsScreenTodayDate.innerText = event.toLocaleDateString('en-us', options) + "th";

var newsIndex = allPosts.length;

function newsDataLoad(){

  const resultsData = document.querySelector(".news_artists_content");
  resultsData.innerHTML = "";
  for (let i = 0; i < allPosts.length; i++) {
    let resultData =
      `<div class="news_artists_content_item">
      <img class="news_artists_content_item_background" src="${allPosts[i].artist_img}">
        <div class="news_artists_content_item_data">
          <h1>${allPosts[i].post_title}</h1>
          <p class="news_artists_content_item_data_main">${allPosts[i].post_content}</p>
          <div class="news_artists_content_item_action">
            <a onclick="ubdatedHrefLinkTo()" href="${allPosts[i].post_link}">Odtwórz</a>
            <p><span data-id='${allPosts[i].id}' onclick="artistScreenSearchBar(this)">${allPosts[i].autor_name}</span><span>${allPosts[i].add_date}</span></p>
          </div>
        </div>
    </div>`;
    resultsData.insertAdjacentHTML("beforeend", resultData);
  }
}
function newsFollowedDataLoad(){

  const resultsData = document.querySelector(".news_artists_content");
  var favoritIndex = allPosts.filter(x => x.artist_status === "followed");
  resultsData.innerHTML = "";
  for (let i = 0; i < favoritIndex.length; i++) {
    let resultData =
      `<div class="news_artists_content_item">
      <img class="news_artists_content_item_background" src="${favoritIndex[i].artist_img}">
        <div class="news_artists_content_item_data">
          <h1>${favoritIndex[i].post_title}</h1>
          <p class="news_artists_content_item_data_main">${favoritIndex[i].post_content}</p>
          <p><span data-id='${favoritIndex[i].id}' onclick="artistScreenSearchBar(this)">${favoritIndex[i].autor_name}</span><span>${favoritIndex[i].add_date}</span></p>
        </div>
    </div>`;
      resultsData.insertAdjacentHTML("beforeend", resultData);
  }
}
function newsPopularDataLoad(){

  const resultsData = document.querySelector(".news_artists_content");
  var favoritIndex = allPosts.filter(x => x.popular_status === "popular");
  resultsData.innerHTML = "";
  for (let i = 0; i < favoritIndex.length; i++) {
    let resultData =
      `<div class="news_artists_content_item">
      <img class="news_artists_content_item_background" src="${favoritIndex[i].artist_img}">
        <div class="news_artists_content_item_data">
          <h1>${favoritIndex[i].post_title}</h1>
          <p class="news_artists_content_item_data_main">${favoritIndex[i].post_content}</p>
          <p><span data-id='${favoritIndex[i].id}' onclick="artistScreenSearchBar(this)">${favoritIndex[i].autor_name}</span><span>${favoritIndex[i].add_date}</span></p>
        </div>
    </div>`;
      resultsData.insertAdjacentHTML("beforeend", resultData);
  }
}

function libraryLastPosts(){

  const resultsData = document.querySelector(".last-reviews");
  var favoritIndex = allPosts;
  resultsData.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    let resultData =
      `<div class="review-item">
          <img src="${favoritIndex[i].artist_img}">
          <a class="review-item-title">${favoritIndex[i].autor_name}</a>
          <p class="review-item-info">${favoritIndex[i].post_content}</p>
      </div>`;
      resultsData.insertAdjacentHTML("beforeend", resultData);
  }
}

function ubdatedHrefLinkTo(){
  var str = window.location.hash;
  const char = str[0];
  const replaced = str.replace(char, '');
  var indexNumb = replaced;
  loadMusic(indexNumb);
}

const searchProfileBy = document.querySelector("#user_profile_search_bar");
const userProfile = document.querySelector(".user_profile_screen");
searchProfileBy.addEventListener('input', filterInProfile);

function filterInProfile(){
  let input = searchProfileBy.value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('user_profile_content_item_song');
  let xData = document.getElementsByClassName('user_profile_content_item_song_data');
    
  for (i = 0; i < x.length; i++) { 
      if (!xData[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
          x[i].classList.remove("searched")
      }
      else {
          x[i].style.display="flex";    
          x[i].classList.add("searched")             
      }
  }
}

function loadUserProfile(){
  checkLocalStorageData();
  checkLocalStorageDataArtist();
  userProfile.classList.toggle("active");
  userProfileFilterFavorite.classList.add("active");
  userProfileFilterPlaylist.classList.remove("active");
  userProfileFilterFollowed.classList.remove("active");
  favoriteLoadItemsProfile();
  document.querySelector(".user_profile_header_content_name").innerText = localStorage.userData;
}

function favoriteLoadItemsProfile() {

  const resultsFAV = document.querySelector(".user_profile_content");
  var favoritIt = allMusicView.filter(x => x.status === "favorite");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="user_profile_content_item_song" li-index='${favoritIt[i].id}' onclick="favoritesQueue();">
          <div class="user_profile_content_item_song_data">
            <p>${favoritIt[i].name}</p>
            <span>${favoritIt[i].artist}</span>
          </div>
         <i onclick="clickedSingleDelete(this)" class="fa-heart fa-solid"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  favoriteItemsNumber.innerText = $('.library-favorite-item').length;
}

const userProfileActionSearch = document.querySelector(".user_profile_action_search");
userProfileActionSearch.addEventListener('click', () => {
  searchProfileBy.parentElement.classList.toggle("active");
})

const userProfileFilterFavorite = document.querySelector(".user_profile_header_filter_by_favorite");
const userProfileFilterPlaylist = document.querySelector(".user_profile_header_filter_by_playlist");
const userProfileFilterFollowed = document.querySelector(".user_profile_header_filter_by_followed");

userProfileFilterFavorite.addEventListener('click', () => {
  userProfileFilterFavorite.classList.add("active");
  userProfileFilterPlaylist.classList.remove("active");
  userProfileFilterFollowed.classList.remove("active");
  favoriteLoadItemsProfile();
})
userProfileFilterPlaylist.addEventListener('click', () => {
  userProfileFilterFavorite.classList.remove("active");
  userProfileFilterPlaylist.classList.add("active");
  userProfileFilterFollowed.classList.remove("active");
  createdPlaylistsContent();
})
userProfileFilterFollowed.addEventListener('click', () => {
  userProfileFilterFavorite.classList.remove("active");
  userProfileFilterPlaylist.classList.remove("active");
  userProfileFilterFollowed.classList.add("active");
  followedArtistsContent();
})

function followArtist(){
  var followName = artistItemTitle.innerText;
  var followFilter = allMusicView.filter(x => x.artist === followName);

  for (let i = 0; i < followFilter.length; i++) {

    if (followFilter[i].artist_status === "followed") {
      followFilter[i].artist_status = "none";
      localStorage.setItem(followFilter[i].artist, followFilter[i].artist_status)
    }else if (followFilter[i].artist_status === "none") {
      followFilter[i].artist_status = "followed";
      localStorage.setItem(followFilter[i].artist, followFilter[i].artist_status)
    }

  }
  homeFavortiesArtists();
  moreFromArtistGlobal();
}

function checkFollowStatus(){
  var followName = artistItemTitle.innerText;
  var followFilter = allMusicView.filter(x => x.artist === followName);

  for (let i = 0; i < followFilter.length; i++) {
    if (followFilter[i].artist_status === "followed") {
      artistItemFollow.innerHTML = '<i class="fa-solid fa-heart"></i> Obserwujesz';
      artistItemFollowers.innerText = +artistItemFollowers.innerText +1;
      artistItemFollow.classList.add("active");
    }else if (followFilter[i].artist_status === "none") {
      artistItemFollow.innerHTML = '<i class="fa-regular fa-heart"></i> Obserwuj';
      artistItemFollow.classList.remove("active");
      artistItemFollowers.innerText = +artistItemFollowers.innerText -1;
    }}

}

function createdPlaylistsContent() {

  const resultsFAV = document.querySelector(".user_profile_content");

  var favoritIt = allMusicView.filter(x => x.user_playlist_1 != "");
  resultsFAV.innerHTML = "";
  let resultFAV =
      `<div class="user_profile_content_friends" id="user_friend_list_0">
            <p>Twoja Lista Znajomych Jest Pusta</p>
            <span>Połącz Swoje Social Media, Aby Uzyskać Propozycje</span>
            <a>Ustawienia</a>
       </div>`;
  resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

}

function followedArtistsContent() {

  const resultsFAV = document.querySelector(".user_profile_content");
  var favoritIt = allMusicView.filter(x => x.artist_status === "followed");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="user_profile_content_item_song artist" onclick="artistScreenSearchBar(this);" data-id="${favoritIt[i].id}" artist-data='${favoritIt[i].artist}'>
          <img src="${favoritIt[i].artist_img}">
          <h1>${favoritIt[i].artist}</h1>
          <div class="user_profile_content_item_song_data">
            <p>${favoritIt[i].artist}</p>
          </div>
         <i class="fa-heart fa-solid"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.user_profile_content_item_song').each(function(){
      var prodId = $(this).attr('artist-data');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });
}


function homeFavortiesArtists() {
  const resultsFAV = document.querySelector(".favorites-artists-container .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.artist_status === "followed");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="artistScreenSearchBar(this);" data-id='${favoritIt[i].id}' artist-data='${favoritIt[i].artist}'>
          <img src="artists/${favoritIt[i].avatar}.jpg">
          <h2>${favoritIt[i].artist}</h2>
          <p>Zweryfikowany</p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.favorites-artists-container .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('artist-data');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });
}


const DOMINANT_COLOR_QUALITY = 5;

const image = document.querySelector(".music-img img");
const mainMusicBackgroundGradient = document.querySelector(".background-music-img")
const colorThief = new ColorThief();

const getRandomNumber = (max = 10) => Math.round(Math.random() * max);

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('');


image.addEventListener('load', () => {
  const hexColor = rgbToHex(...colorThief.getColor(image, DOMINANT_COLOR_QUALITY));
  musicBackgroundViral.style.background =
  "linear-gradient(" 
  + hexColor
  + ", " 
  + "rgba(18,18,18,1) 100%"
  + ")";
});

function changeCurrentQueueBySearchBar(element){
  let getLiIndex = element.getAttribute("li-index");
  indexNumb = getLiIndex;
  allMusic = allMusicView.filter(x => x.name !== "");
  loadMusic(indexNumb);
  playMusic();
}

const dailyUserMixScreen = document.querySelector(".daily_user_mix"),
dailyUserTitle = dailyUserMixScreen.querySelector(".daily_user_mix_header p"),
dailyUserBackgroundImg_1 = dailyUserMixScreen.querySelector(".daily_user_mix_background_1"),
dailyUserBackgroundImg_2 = dailyUserMixScreen.querySelector(".daily_user_mix_background_2"),
dailyUserData1 = dailyUserMixScreen.querySelector(".daily_user_mix_data .data_1"),
dailyUserData2 = dailyUserMixScreen.querySelector(".daily_user_mix_data .data_2"),
dailyUserData3 = dailyUserMixScreen.querySelector(".daily_user_mix_data .data_3"),
dailyUserArtists = dailyUserMixScreen.querySelector(".daily_user_mix_header span");

function dailyMixClicked(element){
  fastLoadingPop();
  dailyUserMixScreen.classList.add("active")
  dailyMixItemImg = element.querySelector(".center-container-item .dailyMixImg");
  dailyMixData = element.querySelector(".center-container-item h2").innerText;
  dailyUserTitle.innerText = dailyMixData;
  
  if(dailyUserTitle.innerText === "MIX 1"){
    mixData1 = "Imagine Dragons";
    mixData2 = "Twenty one pilots";
    mixData3 = "Zara Larsson";
  }else if(dailyUserTitle.innerText === "MIX 2"){
    mixData1 = "Against The Current";
    mixData2 = "DJ Regard";
    mixData3 = "Anne Marie";
  }else if(dailyUserTitle.innerText === "MIX 3"){
    mixData1 = "NF";
    mixData2 = "Post Malone";
    mixData3 = "Kevin Rudolf";
  }

  dailyUserArtists.innerText = mixData1 + ", " + mixData2 + ", " + mixData3;


  const resultsFAV = document.querySelector(".daily_user_mix_content");
  var favoritIt = allMusicView.filter(x => x.artist === mixData1 || x.artist === mixData2 || x.artist === mixData3);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="daily_user_mix_content_item" li-index='${favoritIt[i].id}' onclick="clickedMixItem(this)">
       <img src="images/${favoritIt[i].img}.jpg">
          <div class="daily_user_mix_content_item_data">
            <p>${favoritIt[i].name}</p>
            <span>${favoritIt[i].artist}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var randomImg1 = Math.floor((Math.random() * favoritIt.length) + 1);
  var randomImg2 = Math.floor((Math.random() * favoritIt.length) + 1);
  dailyUserBackgroundImg_1.src = favoritIt[randomImg1].album_cover;
  dailyUserBackgroundImg_2.src = favoritIt[randomImg2].album_cover;

  dailyUserData1.innerText = mixData1;
  dailyUserData2.innerText = mixData2;
  dailyUserData3.innerText = mixData3;

  setTimeout(() => {
    dailyMixItemImg.src = favoritIt[randomImg2].gallery_img_1;
    if(dailyMixItemImg.src = "https://i.scdn.co/image/ab67706c0000bebb282fbddcc3f29db9ecbbc1a0"){
      dailyMixItemImg.src = favoritIt[randomImg1].gallery_img_1;
    }
  }, 500)

  $(".daily_user_mix_content").html($(".daily_user_mix_content_item").sort(function(){
    return Math.random()-0.5;
  }));
}

function mixQueue(){
  mixData1 = dailyUserData1.innerText;
  mixData2 = dailyUserData2.innerText;
  mixData3 = dailyUserData3.innerText;
  allMusic = allMusicView.filter(x => x.artist === mixData1 || x.artist === mixData2 || x.artist === mixData3);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function clickedMixItem(element){
  let getLiIndex = element.getAttribute("li-index");
  allMusic = allMusicView;
  indexNumb = getLiIndex;indexNumb--;
  loadMusic(indexNumb);
  nextMusic();
  playMusic();
}

function dailyMixExit(){
  dailyUserMixScreen.classList.remove("active")
}

const artistsForFans = document.querySelector(".more_from_artists"),
artistsForFansTitle = artistsForFans.querySelector(".more_from_artists_header p"),
artistsForFansDescription = artistsForFans.querySelector(".more_from_artists_header span"),
artistsForFansImg = artistsForFans.querySelector(".more_from_artists_header img"),
artistsForFansBackground = artistsForFans.querySelector(".artists_header_background_img");


function moreFromArtists(element){
  artistsForFans.classList.add("active");
  itemDescription = element.querySelector(".artist-more-description").innerText;
  itemImgSrc = element.querySelector("img").src;
  itemArtistData = element.querySelector(".artist-more-cover-data-artist").innerText;

  artistsForFansTitle.innerText = element.id;
  artistsForFansDescription.innerText = itemDescription;
  artistsForFansImg.src = itemImgSrc;
  artistsForFansBackground.src = itemImgSrc;
  artistsForFansTitle.id = itemArtistData;

  const resultsFAV = document.querySelector(".more_from_artists_content");
  var favoritIt = allMusicView.filter(x => x.artist === itemArtistData || x.colaboration === itemArtistData);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="more_from_artists_item" li-index='${favoritIt[i].id}' onclick="clickedMixItem(this)">
       <img src="images/${favoritIt[i].img}.jpg">
          <div class="more_from_artists_item_data">
            <p>${favoritIt[i].name}</p>
            <span>${favoritIt[i].artist}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

function moreFromArtistsExit(){
  artistsForFans.classList.remove("active")
}

function moreFromArtistQueue(element){
  let artistData = artistsForFansTitle.id;
  allMusic = allMusicView.filter(x => x.artist === artistData || x.colaboration === artistData );
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function clickedAlbumFromArtistMore(element){
  const albumNameData = element.getAttribute("data-album");
  const albumPremiereData = element.querySelector("p");
  const albumImgData = element.querySelector("img");

  albumScreen.classList.add("active");
  albumScreenTitle.innerText = albumNameData;
  albumScreenPremiere.innerText = albumPremiereData.innerText;
  albumScreenAlbumImg.src = albumImgData.src;
  albumScreenArtistImg.src = albumImgData.src;

  const resultsFAV = document.querySelector(".music-artist-album-screen-container");
  var favoritIt = allMusicView.filter(x => x.album === albumNameData);
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

const moreFromArtistGlobalData = document.querySelector(".artist-more-profile-data");
const thisIsArtistBox = document.querySelector(".center-container-item.artist-more"),
thisIsArtistBoxDescriptionArtist = document.querySelector(".artist-more-description-artist");
thisIsArtistBoxImg = thisIsArtistBox.querySelector("img");
const thisIsArtistBoxArtistTitle = document.querySelector(".artist-more-cover-data-artist");
const top100ArtistBox = document.querySelector(".center-container-item.top-list");
const top100ArtistImg = document.querySelector(".center-container-item.top-list img");
const moreFromArtistContainer = document.querySelector("#followed-random-artist-content");
const radioBox = document.querySelector(".center-container-item.radio-box");
const radioBoxImg = document.querySelector(".center-container-item.radio-box img");


checkArtistsNumber();

function checkArtistsNumber(){
  checkLocalStorageDataArtist();

  var moreFromArtistFollowed = allMusicView.filter(x => x.artist_status === "followed");
  if(moreFromArtistFollowed.length > 0){
    moreFromArtistGlobal();
    homeFavortiesArtists();
  }
}

function moreFromArtistGlobal(){

  var moreFromArtistFollowed = allMusicView.filter(x => x.artist_status === "followed");
  var artistIndex = Math.floor((Math.random() * moreFromArtistFollowed.length));
  moreFromArtistGlobalData.innerText = moreFromArtistFollowed[artistIndex].artist;
  thisIsArtistBox.id = moreFromArtistFollowed[artistIndex].artist;
  thisIsArtistBoxArtistTitle.innerText = moreFromArtistFollowed[artistIndex].artist;
  thisIsArtistBoxImg.src = moreFromArtistFollowed[artistIndex].gallery_img_1;
  thisIsArtistBoxDescriptionArtist.innerText = moreFromArtistFollowed[artistIndex].artist;

  top100ArtistImg.src = moreFromArtistFollowed[artistIndex].gallery_img_2;
  top100ArtistBox.id = moreFromArtistFollowed[artistIndex].artist;

  radioBox.id = moreFromArtistFollowed[artistIndex].artist;
  radioBoxImg.src = moreFromArtistFollowed[artistIndex].gallery_img_4;

  moreFromArtistContainer.classList.remove("active");

  moreFromArtistGlobalAlbums();
}

function moreFromArtistGlobalAlbums(){

  let artistNameData = thisIsArtistBoxArtistTitle.innerText;

  const resultsFAV = document.querySelector(".artist-more-album");
  var favoritIt = allMusicView.filter(x => x.artist === artistNameData);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="fastLoadingPop(); clickedAlbumFromArtistMore(this)" data-album='${favoritIt[i].album}'>
          <img src="${favoritIt[i].album_cover}">
          <h2>${favoritIt[i].album}</h2>
          <p>${favoritIt[i].album_premiere}</p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.artist-more-album .center-container-item').each(function(){
      var prodId = $(this).attr('data-album');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });
}

const topListHits = document.querySelector(".top_list_hits");
const topListHitsArtist = document.querySelector(".top_list_hits_header_artist");
const topListHitsImg = document.querySelector(".top_list_hits_header_background_img");

function topListShow(element){
  topListHits.classList.add("active");

  topListHitsArtist.innerText = element.id;
  topListHitsImg.src = element.querySelector("img").src;

  topListData = topListHits.id;

  const resultsFAV = document.querySelector(".top_list_hits_content");
  var favoritIt = allMusicView;
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="top_list_hits_item" li-index='${favoritIt[i].id}' onclick="clickedMixItem(this)">
       <img src="images/${favoritIt[i].img}.jpg">
          <div class="top_list_hits_item_data">
            <p>${favoritIt[i].name}</p>
            <span>${favoritIt[i].artist}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

function topListHide(){
  topListHits.classList.remove("active");
}

const radioScreen = document.querySelector(".radio_screen");
const radioArtist = document.querySelector(".radio_screen_header span span");
const radioImg = document.querySelector(".radio_screen_background_img");
const radioUiImg = document.querySelector(".radio_screen_background img");

function radioLoad(element){
  radioScreen.classList.add("active");

  radioScreen.id = element.id;
  radioArtist.innerText = element.id;
  radioImg.src = element.querySelector("img").src;
  radioUiImg.src = element.querySelector("img").src;

  radioArtistData = element.id;
  var artistCategoryFilter = allMusicView.filter(x => x.artist === radioArtistData);
  radioCategoryData = artistCategoryFilter[0].style;

  const resultsFAV = document.querySelector(".radio_screen_content");
  var favoritIt = allMusicView.filter(x => x.artist === radioArtistData || x.style === radioCategoryData || x.colaboration === radioArtistData || x.status === "favorite");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="radio_screen_item" li-index='${favoritIt[i].id}' onclick="clickedMixItem(this)">
       <img src="images/${favoritIt[i].img}.jpg">
          <div class="radio_screen_item_data">
            <p>${favoritIt[i].name}</p>
            <span>${favoritIt[i].artist}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  $(".radio_screen_content").html($(".radio_screen_item").sort(function(){
    return Math.random()-0.5;
}));
}

function radioHide(){
  radioScreen.classList.remove("active");
}

function radioOn(){
  radioArtistData = radioScreen.id;
  var artistCategoryFilter = allMusicView.filter(x => x.artist === radioArtistData);
  radioCategoryData = artistCategoryFilter[0].style;
  allMusic = allMusicView.filter(x => x.artist === radioArtistData || x.style === radioCategoryData || x.colaboration === radioArtistData || x.status === "favorite");
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

let container2 = document.querySelector(".main-information-title");
let text2 = document.querySelector(".main-information-title h1");

function overflowingText(){
  if (container2.clientWidth < text2.clientWidth) {
    text2.classList.add("animate");
  }else{
    text2.classList.remove("animate");
  }
}


function moreFromArtists(){

  resultsFAV = document.querySelector(".center-container.popular-artists-container .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.tag === "Popular");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item popular-artist" data-id='${favoritIt[i].id}' data-artist='${favoritIt[i].artist}' onclick="artistScreenSearchBar(this);">
       <img src="artists/${favoritIt[i].avatar}.jpg">
       <h2>${favoritIt[i].artist}</h2>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  $(".center-container.popular-artists-container .center-container-scrollable").html($(".center-container-item.popular-artist").sort(function(){
    return Math.random()-0.5;
}));

  var productIds={};
  $('.center-container.popular-artists-container .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('data-artist');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });
}

function saveUserData(){
  localStorage.setItem("user_Volume", mainAudio.volume);
}

function checkLocalStorageData(){

  var followFilter = allMusicView;

  for (let i = 0; i < followFilter.length; i++) {

    if (localStorage.getItem(followFilter[i].id) === null) {
  
    }else if (localStorage.getItem(followFilter[i].id) === "favorite"){
      followFilter[i].status = "favorite";
    }else if (localStorage.getItem(followFilter[i].id) === "nostatus"){
      followFilter[i].status = "nostatus";
    }

  }
  favoriteLoadItems();
}

function checkLocalStorageDataArtist(){

  var followFilter = allMusicView;

  for (let i = 0; i < followFilter.length; i++) {

    if (localStorage.getItem(followFilter[i].artist) === null) {
  
    }else if (localStorage.getItem(followFilter[i].artist) === "followed"){
      followFilter[i].artist_status = "followed";
    }else if (localStorage.getItem(followFilter[i].artist) === "none"){
      followFilter[i].artist_status = "none";
    }

  }
  followedArtistsContent();
}

moreFromArtists();
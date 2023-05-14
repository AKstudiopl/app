var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('green');
    content.classList.toggle('blue');
    if (content.classList.contains('green')) {
        localStorage.setItem("user_theme", "green");
        document.documentElement.style.setProperty('--maincolor', '#ef5466');
        document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
        document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
        document.documentElement.style.setProperty('--background', '#191922');
        document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
        document.documentElement.style.setProperty('--color', '#DEE4EA');
        document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
    }
    if (content.classList.contains('blue')) {
        localStorage.setItem("user_theme", "blue");
        document.documentElement.style.setProperty('--maincolor', '#ef5466');
        document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
        document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
        document.documentElement.style.setProperty('--background', '#EAEAEA');
        document.documentElement.style.setProperty('--backgroundsecond', '#D1D1D6');
        document.documentElement.style.setProperty('--color', '#191919');
        document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
    }
    if (content.classList.contains('amoled')) {
      document.documentElement.style.setProperty('--maincolor', '#ef5466');
      document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
      document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
      document.documentElement.style.setProperty('--background', '#000000');
      document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
      document.documentElement.style.setProperty('--color', '#DEE4EA');
      document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
  }
})

function amoledMode(){
  content.classList.toggle('green');
  content.classList.toggle('amoled');

  if (content.classList.contains('green')) {
    document.documentElement.style.setProperty('--maincolor', '#ef5466');
    document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
    document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
    document.documentElement.style.setProperty('--background', '#191922');
    document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
    document.documentElement.style.setProperty('--color', '#DEE4EA');
    document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
}
  if (content.classList.contains('blue')) {
    document.documentElement.style.setProperty('--maincolor', '#ef5466');
    document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
    document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
    document.documentElement.style.setProperty('--background', '#EAEAEA');
    document.documentElement.style.setProperty('--backgroundsecond', '#D1D1D6');
    document.documentElement.style.setProperty('--color', '#191919');
    document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
}
  if (content.classList.contains('amoled')) {
    document.documentElement.style.setProperty('--maincolor', '#ef5466');
    document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
    document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
    document.documentElement.style.setProperty('--background', '#000000');
    document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
    document.documentElement.style.setProperty('--color', '#DEE4EA');
    document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
}
}

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    if (content.classList.contains('green')) {
      document.documentElement.style.setProperty('--maincolor', '#ef5466');
      document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
      document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
      document.documentElement.style.setProperty('--background', '#191922');
      document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
      document.documentElement.style.setProperty('--color', '#DEE4EA');
      document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
  }
    if (content.classList.contains('blue')) {
      document.documentElement.style.setProperty('--maincolor', '#ef5466');
      document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
      document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
      document.documentElement.style.setProperty('--background', '#EAEAEA');
      document.documentElement.style.setProperty('--backgroundsecond', '#D1D1D6');
      document.documentElement.style.setProperty('--color', '#191919');
      document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
  }
  if (content.classList.contains('amoled')) {
    document.documentElement.style.setProperty('--maincolor', '#ef5466');
    document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
    document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
    document.documentElement.style.setProperty('--background', '#000000');
    document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
    document.documentElement.style.setProperty('--color', '#DEE4EA');
    document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
  }

    randomHomeArtist();
    loadDailyPlaylists();
    loadUserStylePlaylists();
});

const activeHomeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
const activeHomeScreen = document.getElementsByClassName('navbar-bottom-btn 1')[0]

function home_fs(){
  musicMenuHide.classList.remove('active')
  albumScreen.classList.remove('active');
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  favortieScreen.classList.remove('active');
  playlistScreen.classList.remove('active');
  userProfile.classList.remove('active');
}

activeHomeBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  userProfile.classList.remove("active")
  playlistScreen.classList.remove('active');
  yourStyleScreen.classList.remove('active');
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
  userProfile.classList.remove("active")
  playlistScreen.classList.remove('active');
  yourStyleScreen.classList.remove('active');
  userProfile.classList.remove('active');
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
  userProfile.classList.remove("active")
  playlistScreen.classList.remove('active');
  yourStyleScreen.classList.remove('active');
  userProfile.classList.remove('active');
})

const activeSettingsBtn = document.getElementsByClassName('settings-action-btn')[0]
const librarySettingsBtn = document.getElementsByClassName('librarySettingsBtn')[0]
const activeSettingsScreen = document.getElementsByClassName('settings-screen')[0]

activeSettingsBtn.addEventListener('click', () => {
  activeSettingsScreen.classList.add('active')
  userProfile.classList.remove("active");
})

const navbarSettings = document.querySelector('#navbar-settings')
navbarSettings.addEventListener('click', () => {
  activeSettingsScreen.classList.add('active')
  userProfile.classList.remove("active");
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
      `<div class="music-artist-content-item" queue-index="${i + 1}" li-index='${favoritIt[i].id}' onclick="clickedSingleFavQueue(this)">
        <img src="${favoritIt[i].img_mini}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  loseFocus();

  favoriteItemsNumber.innerText = $('.library-favorite-container .music-artist-content-item').length;
}

function clickedSingle(element){
  let getLiIndex = element.getAttribute("li-index");
  let itemFilterBar = element.parentElement;

  let clickedAllMusic = allMusicView;

  if(itemFilterBar.getAttribute('artist-data')){
    let filterArtist = itemFilterBar.getAttribute('artist-data');
    clickedAllMusic = clickedAllMusic.filter(x => x.artist_id === filterArtist);
  }
  
  if(itemFilterBar.getAttribute('data-album')){
    let filterAlbum = itemFilterBar.getAttribute('data-album');
    clickedAllMusic = clickedAllMusic.filter(x => x.album === filterAlbum);
  }

  if(itemFilterBar.getAttribute('artist-style')){
    let filterStyle = itemFilterBar.getAttribute('artist-style');
    clickedAllMusic = clickedAllMusic.filter(x => x.style === filterStyle);
  }

  if(itemFilterBar.getAttribute('playlist-style')){
    let filterPlaylistStyle = itemFilterBar.getAttribute('playlist-style');
    let filterArtist = itemFilterBar.getAttribute('artist-data');

    var playlistStyleContent = allMusicView.filter(x => x.artist_id === filterArtist && x.style === filterPlaylistStyle);
    var playlistStyleArtist = allMusicView.filter(x => x.style === filterPlaylistStyle && x.artist_id != filterArtist);

    clickedAllMusic = playlistStyleContent.concat(playlistStyleArtist).slice(0, 50);
  }

  if(itemFilterBar.getAttribute('playlist-filter')){
    let filterPlaylistStyle = itemFilterBar.getAttribute('playlist-style');
    let filterPlaylistName = itemFilterBar.getAttribute('artist-name');
    let filterStyle = itemFilterBar.getAttribute('artist-style');
    let filterArtist = itemFilterBar.getAttribute('artist-data');
    if(filterPlaylistStyle === "Radio"){
      clickedAllMusic = allMusicView.filter(x => x.artist_id === filterArtist || x.colaboration === filterPlaylistName || x.style === filterStyle).slice(0, 50);
    }
  }

  if(itemFilterBar.getAttribute('playlist-filter')){
    let filterPlaylistStyle = itemFilterBar.getAttribute('playlist-style');
    let filterPlaylistName = itemFilterBar.getAttribute('artist-name');
    let filterArtist = itemFilterBar.getAttribute('artist-data');

    if(filterPlaylistStyle === "Complete"){
      clickedAllMusic = allMusicView.filter(x => x.artist_id === filterArtist || x.colaboration === filterPlaylistName);
    }
  }

  allMusic = clickedAllMusic;

  const index = clickedAllMusic.findIndex(object => {
    return object.id === getLiIndex;
  });


  indexNumb = index + 1;
  loadMusic(indexNumb);
  playMusic();
}

function clickedSingleFavQueue(element){
  queueId = element.getAttribute("queue-index");
  allMusic = allMusicView.filter(x => x.status === "favorite");
  indexNumb = queueId++;
  loadMusic(indexNumb);
  playMusic();
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
musicImgBox = wrapper.querySelector(".main-music-header"),
musicImgShadow = wrapper.querySelector(".main-music-header .header-shadow img"),
musicCanvas = wrapper.querySelector(".background-canvas"),
musicCanvasVideo = wrapper.querySelector(".background-canvas video"),
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
queueCurrentBackgroundImg = wrapper.querySelector(".queue-gif img"),
musicTopOptionsRadio = wrapper.querySelector(".top-menu-list-radio-item"),
musicBackgroundImage = wrapper.querySelector(".background-music-img img"),
musicTopOptionsImage = wrapper.querySelector(".top-more-head-image img"),
musicTopOptionsName = wrapper.querySelector(".top-more-head-name"),
musicTopOptionsArtist = wrapper.querySelector(".top-more-head-artist"),
musicTopOptionsFavorite = wrapper.querySelector(".top-menu-list-favorite"),
musicNextTiptool = wrapper.querySelector(".main-music-next-music"),
musicImgNext = wrapper.querySelector(".main-music-header-back"),
musicNextTitle = wrapper.querySelector(".main-music-next-music .next-music-title"),
musicTopArtistBtn = wrapper.querySelector(".top-menu-list-artist"),

lyricsDataArtist = wrapper.querySelector(".device-main-audio-data .device-main-audio-data-artist"),
lyricsDataTitle = wrapper.querySelector(".device-main-audio-data .device-main-audio-data-title"),

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

const lyricsBox = document.querySelector(".main-music-lyrics-box");



var str = window.location.hash;
const char = str[0];
const replaced = str.replace(char, '');
var indexNumb = Math.floor((Math.random() * allMusic.length) + 1);

var allMusicView = allMusic.filter(x => x.artist !== "");
var indexNumbAll = allMusicView.length;

checkLocalStorageData();
checkLocalStorageAlbum();

if(replaced){
  var indexNumb = replaced;
}

window.addEventListener("load", ()=>{
  loadMusic(indexNumb);
  checkUserData();
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
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Liked</span>';
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    musicTopOptionsFavorite.classList.remove('active')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-regular fa-heart"></i><span> Like</span>';
  }
})


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
  musicTopOptionsRadio.id = allMusic[indexNumb - 1].artist;
  topOption.setAttribute("id", allMusic[indexNumb - 1].id);
  lyricsDataArtist.innerText = allMusic[indexNumb - 1].artist;
  lyricsDataTitle.innerText = allMusic[indexNumb - 1].name;
  trackTextContainer.setAttribute("id", allMusic[indexNumb - 1].id);
  musicTopArtistBtn.setAttribute("id", allMusic[indexNumb - 1].id);
  window.location.hash = allMusic[indexNumb - 1].id;
  document.title = allMusic[indexNumb - 1].name + ' • ' + allMusic[indexNumb - 1].artist; 
  
  tracksHistory();
  recentTracksLoad();
  reset_animation();

  if (localStorage.getItem("user_Volume") != null) {
    mainAudio.volume = localStorage.getItem("user_Volume");
  }

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
    mainAudio.volume = 1;
  }

  if (allMusic[indexNumb - 1].status === "favorite") {
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Liked</span>';
    musicTopOptionsFavorite.classList.add('active')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Like</span>';
    musicTopOptionsFavorite.classList.remove('active')
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

      leftTime.classList.remove("active");

      queueCurrentImg.parentElement.classList.add("active");
      setTimeout(() => {
        queueCurrentImg.parentElement.classList.remove("active");
        queueCurrentImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
        queueCurrentTrack.innerText = allMusic[indexNumb - 1].name;
        queueCurrentArtist.innerText = allMusic[indexNumb - 1].artist;
        queueCurrentBackgroundImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
        
      }, 500)

      
      if(localStorage.hasOwnProperty("lastViewedAlbum_2")){
        if (localStorage.getItem("lastViewedAlbum_2").length > 0) {
          uiLastViewedAlbumsLoad();
        }else{
            uiLastViewedAlbum_1.style.display="none";
            uiLastViewedAlbum_2.style.display="none";
        }
      }
      queueDataLoad();
      overflowingText();

      if(wrapper.classList.contains("canvas")){
        if(allMusic[indexNumb - 1].canvas != ""){
          document.querySelector(".background-canvas video").src = allMusic[indexNumb - 1].canvas;
          document.querySelector(".background-canvas video").style.display="flex";
          document.querySelector(".background-canvas img").style.display="none";
        }else{
          document.querySelector(".background-canvas video").style.display="none";
          document.querySelector(".background-canvas img").src = `images/${allMusic[indexNumb - 1].img}.jpg`;
          document.querySelector(".background-canvas img").style.display="flex";
        }
      }

      lyricsBox.innerHTML = '';
      clearLyricStatus();
}

function queueDataLoad(){
  const resultsFAV = wrapper.querySelector(".queue-item ul");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < allMusic.length && i < 50; i++) {
    let resultFAV = `<li li-index="${i + 1}" onclick="clickedQueueItem(this)">
    <p>${i + 1}</p>
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
  playMusic();
}


function playMusic(){
  wrapper.classList.add("paused");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-play");
  playstopButton.querySelector(".fa-solid").classList.add("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-stop");
  mainAudio.play();
  musicCanvasVideo.play();

  setTimeout(() => {
    leftTime.classList.add("active");
    setTimeout(() => {
      leftTime.classList.remove("active");
    }, 5000)
  }, 5000)
  if(musicCanvas.classList.contains("active")){
  }
}

function pauseMusic(){
  wrapper.classList.remove("paused");
  playstopButton.querySelector(".fa-solid").classList.add("fa-play");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-stop");
  mainAudio.pause();
  musicCanvasVideo.pause();
}

function nextMusic(){
  if (wrapper.classList.contains("shuffle")) {
    indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  }
    indexNumb++;
    indexNumb > allMusic.length ? indexNumb = 1 : indexNumb = indexNumb;
    loadMusic(indexNumb);
    setTimeout(() => {
      playMusic();
    }, 500)

  toggleSequence(); 
}

function toggleSequence() {
  musicNextTiptool.innerHTML = '';
  i = indexNumb;
  i++;
  if(allMusic[i] != undefined){
  let nextSongInfo = 
  `<div class="next-music-item active">
    <p class="next-music-info">Next • </p>
    <p class="next-music-title">${allMusic[i].name}</p>
  </div>`
  musicNextTiptool.insertAdjacentHTML("beforeend", nextSongInfo);  
  }
}

function prevMusic(){
  
  if (wrapper.classList.contains("shuffle")) {
    indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  }
    indexNumb--;
    indexNumb < 1 ? indexNumb = allMusic.length : indexNumb = indexNumb;
    loadMusic(indexNumb);
    setTimeout(() => {
      playMusic();
    }, 500)

  toggleSequence();
}

function randomIndex() {
  var indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
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

  if(musicImgBox.classList.contains('lyrics')){
    lyricsBox.innerHTML = '';
    lyricsBox.scrollTo(0, lyricsBox.scrollHeight);
    clearLyricStatus();
  }
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
  if(wrapper.classList.contains("stop-end")){
    pauseMusic();
    mainAudio.currentTime=0;
  }else{
    nextMusic();
    var trackFinished = localStorage.getItem("trSts") || 0;
    trackFinished++;
    localStorage.setItem("trSts", trackFinished)
  }
});

function toggleStopEnd(element){
  wrapper.classList.toggle("stop-end");
}


$(function(){
  var boxes = $('.music-artist-item-title .pespective_object'),
      $window = $('.music-artist-item');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (125 - (-val/15)) + '%) translateY(' + (-val * 1.5) + 'px)');
      $this.css('filter', 'blur(' + (-val / 10) + 'px)');
      $this.css('opacity', '' + (100 - (-val/5)) + '%');
      })
  });
})

$(function(){
  var boxes = $('.music-artist-album-screen .pespective_object'),
      $window = $('.music-artist-album-screen');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (110 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
      $this.css('filter', 'blur(' + (5 -val/10) + 'px)');
      })
  });
})

$(function(){
  var boxes = $('.library-favorite-screen .pespective_object'),
      $window = $('.library-favorite-screen');
      $window.scroll(function(){
        var scrollTop = $window.scrollTop() + 1;
        boxes.each(function(){
        var $this = $(this),
            scrollspeed = parseInt($this.data('scroll-speed')),
            val = - scrollTop / scrollspeed;
        $this.css('transform', 'scale(' + (125 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
        $this.css('filter', 'blur(' + (-val / 10) + 'px)');
        $this.css('opacity', '' + (100 - (-val/5)) + '%');
        })
    });
  })

$(function(){
  var boxes = $('.music-playlist-album-screen-img-background .pespective_object'),
      $window = $('.music-playlist-album-screen');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (105 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
      $this.css('filter', 'blur(' + (-val / 10) + 'px)');
      $this.css('opacity', '' + (100 - (-val/5)) + '%');
      })
  });
})

$(function(){
  var boxes = $('.history-screen .pespective_object'),
      $window = $('.history-screen');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (125 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
      $this.css('filter', 'blur(' + (-val / 10) + 'px)');
      $this.css('opacity', '' + (100 - (-val/5)) + '%');
      })
  });
})

$(function(){
  var boxes = $('.user_profile_screen .pespective_object'),
      $window = $('.user_profile_screen');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (105 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
      $this.css('filter', 'blur(' + (-val / 10) + 'px)');
      $this.css('opacity', '' + (100 - (-val/5)) + '%');
      })
  });
})

$(function(){
  var boxes = $('.notification_screen .pespective_object'),
      $window = $('.notification_screen');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (105 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
      $this.css('filter', 'blur(' + (-val / 10) + 'px)');
      $this.css('opacity', '' + (100 - (-val/5)) + '%');
      })
  });
})

$(function(){
  var boxes = $('.yourStyle-container .pespective_object'),
      $window = $('.yourStyle-container');
  $window.scroll(function(){
      var scrollTop = $window.scrollTop() + 1;
      boxes.each(function(){
      var $this = $(this),
          scrollspeed = parseInt($this.data('scroll-speed')),
          val = - scrollTop / scrollspeed;
      $this.css('transform', 'scale(' + (105 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
      $this.css('filter', 'grayscale(1)' + 'blur(' + (-val / 10) + 'px)');
      $this.css('opacity', '' + (100 - (-val/5)) + '%');
      })
  });
})


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
  favortieScreen.classList.remove('active');
  libraryScreen.classList.remove('active');
  disableSettingsScreen.classList.remove('active');
})

const navbarLibraryBtn = document.getElementsByClassName('navbar-bottom-btn-library')[0]
const libraryScreen = document.getElementsByClassName('library-container')[0]
navbarLibraryBtn.addEventListener('click', () => {
  libraryScreen.classList.add('active');
  favortieScreen.classList.remove('active')
  searchScreen.classList.remove('active');
  disableSettingsScreen.classList.remove('active');
})

const homeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
homeBtn.addEventListener('click', () => {
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  favortieScreen.classList.remove('active')
  disableSettingsScreen.classList.remove('active');
})


function clicked(element){
  let getLiIndex = element.getAttribute("li-index");
  indexNumb = getLiIndex;
  loadMusic(indexNumb);
  playMusic();
}

const correctSoundBtn = document.getElementsByClassName('device-screen-btn')[0]
const correctSoundScreen = document.getElementsByClassName('device-screen')[0]
const correctSoundExit = document.getElementsByClassName('device-screen-exit')[0]
const menuLyricsExit = document.getElementsByClassName('device-exit')[0]
correctSoundBtn.addEventListener('click', () => {
  correctSoundBtn.classList.toggle('active');
  trackLyrics();
})

function resultItemQueue(element){
  let itemNameData = element.getAttribute('li-index');
  allMusic = allMusicView.filter(x => x.id === itemNameData);
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

function favoritesQueue(element){
  allMusic = allMusicView.filter(x => x.status === "favorite");
  if(allMusic.length < 1){
    allMusic = allMusicView;
  }

  let indexNumb = 1;

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

const currentVolume = localStorage.getItem('user_Volume');
const nameUserMain = document.querySelector("#nameUser");

  const musicArtistExit = document.querySelectorAll('.music-artist-exit')[0]
  const musicArtistScreen = document.querySelectorAll('.music-artist-item')[0]
  musicArtistExit.addEventListener('click', () => {
    musicArtistScreen.classList.remove('active')
  })

function loseFocus(){
  $('.music-artist-content-item i').click(function(event) {
    event.stopPropagation();
  });
  $('.music-artist-album-item i').click(function(event) {
    event.stopPropagation();
  });
  $('.user_profile_content_item_song i').click(function(event) {
    event.stopPropagation();
  });
  $('.results-box i').click(function(event) {
    event.stopPropagation();
  });
}

function checkUserData(){
  if(!localStorage.getItem('personalization-data-name')){
    firstLoginUser();
  }else{
    nameUserMain.innerText = localStorage.getItem('personalization-data-name');
  }
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
    bioCard.classList.add("active");
    loadBioData();
  }

  function exitBio(){
    bioCard.classList.remove("active");
  }

  function removeThis(element){
    if(element.getAttribute('src') == "undefined"){
      element.parentElement.remove();
    }
  }

  function loadBioData(){
    let artistData = artistItemTitle.innerText;
    let artistDataName = document.querySelector(".music-artist-bio-data-name");

    artistDataName.innerText = artistData;

    var randomnumber = Math.floor(Math.random() * 250000) + 1;
    document.querySelector(".music-artist-bio-stats p").innerText = randomnumber;

    if(document.querySelector(".music-artist-bio-gallery .container .gallery .card video")){
      document.querySelector(".music-artist-bio-gallery .container .gallery .card video").pause();
    }

    const resultsFAV = document.querySelector(".music-artist-bio-gallery .container .gallery");
    var favoritIt = allMusicView.filter(x => x.artist === artistData);
    resultsFAV.innerHTML = "";
    let resultFAV =
    `<div class="card" data-src='${favoritIt[0].avatar}'>
      <img src="artists/${favoritIt[0].avatar}.jpg" onerror="removeThis(this)">
     </div>
     <div class="card" data-src='${favoritIt[0].artist_img}'>
      <img src="${favoritIt[0].artist_img}" onerror="removeThis(this)">
     </div>
     <div class="card" data-src='${favoritIt[0].gallery_img_1}'>
     <img src="${favoritIt[0].gallery_img_1}" onerror="removeThis(this)">
     </div>
     <div class="card" data-src='${favoritIt[0].gallery_img_2}'>
     <img src="${favoritIt[0].gallery_img_2}" onerror="removeThis(this)">
     </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    for (let i = 0; i < favoritIt.length; i++) {
      if(favoritIt[0].gallery_img_3 != ""){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_3}'>
        <img src="${favoritIt[0].gallery_img_3}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_4 != ""){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_4}'>
        <img src="${favoritIt[0].gallery_img_4}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_5 != ""){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_5}'>
        <img src="${favoritIt[0].gallery_img_5}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_6 != null){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_6}'>
        <img src="${favoritIt[0].gallery_img_6}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_7 != null){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_7}'>
        <img src="${favoritIt[0].gallery_img_7}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_8 != null){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_8}'>
        <img src="${favoritIt[0].gallery_img_8}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_9 != null){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_9}'>
        <img src="${favoritIt[0].gallery_img_9}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_10 != null){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_10}'>
        <img src="${favoritIt[0].gallery_img_10}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[i].canvas != ""){
        let resultFAV = `<div class="card" data-src='${favoritIt[i].canvas}'>
        <video onclick="playPauseVideo(this)" muted src="${favoritIt[i].canvas}"></video>
          <div class="card-video-controls">
            <p>Video</p>
          </div>
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }

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


function playPauseVideo(element){
  if (!element.paused) {
    element.pause()
  }else{
    element.play()
  }
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
      artistItemFollow.innerHTML = '<i class="fa-solid fa-heart"></i> Following';
      artistItemFollowers.innerText = +artistItemFollowers.innerText +1;
    } else{
      artistItemFollow.innerHTML = '<i class="fa-regular fa-heart"></i> Follow';
      artistItemFollowers.innerText = +artistItemFollowers.innerText -1;
    }
  })


  function fastLoadingPop(){
    const fastloader = document.querySelector(".fast-loader");
    fastloader.classList.add("active");
    setTimeout(() => {
      fastloader.classList.remove("active");
    }, 750)
  }


function filteredAlbums(){

    let artistNameData = artistItemTitle.innerText;

    const resultsFAV = document.querySelector(".music-artist-information-albums");
    var favoritIt = allMusicView.filter(x => x.artist === artistNameData);

    favoritIt.sort(function(a, b){ return b.album_premiere - a.album_premiere; });

    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-information-albums-item" onclick="clickedSingleAlbum(this)" artist-data="${favoritIt[i].artist_id}" data-album='${favoritIt[i].album}'>
            <img class="music-artist-information-albums-item-img" src="${favoritIt[i].album_cover}">
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
const albumScreenArtistName = document.querySelector(".music-artist-album-screen-option");
const albumScreenAlbumText = document.querySelector(".music-artist-album-screen-length-name");
albumScreenExit.addEventListener('click', () => {
  albumScreen.classList.remove('active')
})


function clickedSingleAlbum(element){
    fastLoadingPop();

    const albumNameData = element.getAttribute("data-album");
    const albumArtistId = element.getAttribute("artist-data");

    var favoritIt = allMusicView.filter(x => x.album === albumNameData && x.artist_id === albumArtistId);

    const albumArtistCountry = favoritIt[0].country;

    albumScreen.classList.add("active");
    albumScreenTitle.innerText = favoritIt[0].album;
    albumScreenPremiere.innerText = favoritIt[0].album_premiere;
    albumScreenAlbumImg.src = favoritIt[0].album_cover;
    albumScreenArtistImg.src = favoritIt[0].album_cover;

    albumScreenAlbumImg.setAttribute("data-album", favoritIt[0].album)
    albumScreenAlbumImg.setAttribute("artist-data", favoritIt[0].artist_id)

    let lastViewedAlbum = localStorage.getItem("lastViewedAlbum_1");
    
    if(lastViewedAlbum === albumNameData){
      /* clearStatus */
    }else{
      localStorage.setItem("lastViewedAlbum_2", lastViewedAlbum)
      localStorage.setItem("lastViewedAlbum_1", albumNameData)
    }

    const resultsFAV = document.querySelector(".music-artist-album-screen-container");

    resultsFAV.setAttribute('artist-data', albumArtistId);
    resultsFAV.setAttribute('data-album', albumNameData);

    resultsFAV.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
              <div class="music-artist-album-item-data">
                  <h1>${favoritIt[i].name}</h1>
                  <span>${favoritIt[i].artist}<p>, ${favoritIt[i].colaboration}</p></span>
              </div>
              <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      albumScreenSongsNumber.innerText = $('.music-artist-album-screen-container .music-artist-album-item').length;
    }

    albumScreenArtistName.innerText = favoritIt[0].artist;

    let albumNumberSongs = $('.music-artist-album-item').length;
    if(albumNumberSongs > 1){
      albumScreenPremiere.innerText = favoritIt[0].album_premiere + " • Album";
    }else if(albumNumberSongs = 1){
      albumScreenPremiere.innerText = favoritIt[0].album_premiere + " • Single";
    } 
  
    const featuredBox = document.querySelector(".music-artist-album-screen-featured");
    var featuredIt = allMusicView.filter(x => x.artist_id === albumArtistId && x.album != albumNameData || x.country === albumArtistCountry && x.album != albumNameData);
  
    favoritIt.sort(function(a, b){
      var values = [b.id - a.id, b.artist - a.artist, b.artist_id - a.artist_id, b.album_premiere - a.album_premiere],
      valueToUse = values[Math.floor(Math.random() * values.length)];
      return valueToUse;
    });

    featuredBox.innerHTML = "";
    for (let i = 0; i < featuredIt.length; i++) {
      let featuredItem =
        `<div class="music-artist-information-albums-item featured" onclick="clickedSingleAlbum(this)" artist-data="${featuredIt[i].artist_id}" data-album='${featuredIt[i].album}'>
            <img class="music-artist-information-albums-item-img" src="${featuredIt[i].album_cover}">
            <p><span class="music-artist-information-albums-item-name">${featuredIt[i].album}</span> <span class="data-premiere">${featuredIt[i].album_premiere}</span></p>
         </div>`;
         featuredBox.insertAdjacentHTML("beforeend", featuredItem);
    }
  
    var productIds={};
    $('.music-artist-information-albums-item.featured').each(function(){
        var prodId = $(this).attr('data-album');
        if(productIds[prodId]){
           $(this).remove();
        }else{
           productIds[prodId] = true;
        }
    });

    $('.music-artist-information-albums-item.featured').slice(6).remove()

    if (localStorage.getItem("lastViewedAlbum_2").length > 0) {
      setTimeout(() => {
        uiLastViewedAlbumsLoad();
      }, 300);
    }else{
        uiLastViewedAlbum_1.style.display="none";
        uiLastViewedAlbum_2.style.display="none";
    }

    checkAlbumStatus();
    loseFocus();

    setTimeout(() => {
      collaborationAlbumCheck();
    }, 200);
}

function collaborationAlbumCheck(){
  collaborationObjects = document.querySelectorAll(".music-artist-album-item-data span p");

  collaborationObjects.forEach(collaborationObject => {

      if(collaborationObject.innerText === ","){
        collaborationObject.innerText = "";
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

  const musicBackgroundViral = document.getElementsByClassName('background-music-img')[0]
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
        alertTimer.addEventListener('click', () => {
          alertTimer.classList.remove('active');
        })
}

function searchBarUse(){
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.add('active')
  activeHomeScreen.classList.remove('active')
  searchScreen.classList.add('active')
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

const artisActionUI = document.querySelector(".artist-main-action");

function clickedQueue(){
  let filterName = artistCardTitle.innerText;
  allMusic = allMusic.filter(x => x.artist === filterName);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

var today = new Date();
var time = today.getHours();
const timeZoneText = document.querySelector(".timeZoneData");


if (time < 18){
  var array = ["Welcome", "Enjoy Listening", "How are you", "Hope you enjoy"];
  var index = Math.floor(Math.random() * array.length);
  var timeZoneRandomText = array[index];
  timeZoneText.innerText = timeZoneRandomText;
}
if (time > 17){
  var array = ["Good Evening", "Enjoy Listening", "Have a nice one", "Hey, there"];
  var index = Math.floor(Math.random() * array.length);
  var timeZoneRandomText = array[index];
  timeZoneText.innerText = timeZoneRandomText;
}

function artistScreenDataLoad(track){
  fastLoadingPop();

  let track_id = track.getAttribute('id');

  artistItemTitle.innerText = allMusicView[track_id - 1].artist;
  artistItemImg.src = `artists/${allMusicView[track_id - 1].avatar}.jpg`;
  artistCardDataName.innerText = allMusicView[track_id - 1].artist;
  artistCardBackgroundImg.style.backgroundImage = `url(${allMusicView[track_id - 1].artist_img})`;

  var randomnumber = Math.floor(Math.random() * 150000) + 1;
  artistItemFollowers.innerText = randomnumber;

  musicArtistScreen.classList.add('active')
  musicMenuHide.classList.remove('active')
  albumScreen.classList.remove('active');
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  favortieScreen.classList.remove('active');
  playlistScreen.classList.remove('active');

  checkFollowStatus();

  artistProfilePopular(track_id);
  artistProfileReleases(track_id);
  artistProfileFeat(track_id);
  artistProfileAbout(track_id);
  artistProfileFansChoice(track_id);
  artistProfilePlaylists(track_id);

  musicArtistScreen.scrollTop = 0;

  loseFocus();
}

function artistProfilePopular(track){

  var track_id = allMusicView.filter(x => x.id === track);
  var profile_id = track_id[0].artist_id;

  const resultsFAV = document.querySelector(".music-artist-content-container");
  var favoritIt = allMusicView.filter(x => x.artist_id === profile_id);

  resultsFAV.setAttribute('artist-data', favoritIt[0].artist_id)

  favoritIt.sort(function(a, b){
      return b.album_premiere - a.album_premiere;
  });

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <h1 class="music-artist-content-number">${i + 1}</h1>
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span><p class="music-artist-content-item-lyrics"> ${Object.keys(favoritIt[i].lyrics).length}<p>${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  lyricsItemCheck();
}

function lyricsItemCheck(){
  const lyricsArtistBoxes = document.querySelectorAll(".music-artist-content-item-lyrics");
  for(lyricsArtistBox of lyricsArtistBoxes){
    if(lyricsArtistBox.innerText === "LYRICS"){
      lyricsArtistBox.style.display="flex";
    }else if(lyricsArtistBox.innerText > 15){
      lyricsArtistBox.innerText = "LYRICS";
      lyricsArtistBox.style.display="flex";
    }else{
      lyricsArtistBox.style.display="none";
    }
  }
}

function artistProfileReleases(track){

  var track_id = allMusicView.filter(x => x.id === track);
  var profile_id = track_id[0].artist_id;

  const resultsFAV = document.querySelector(".music-artist-content-album");
  var favoritIt = allMusicView.filter(x => x.artist_id === profile_id);

  favoritIt.sort(function(a, b){ return b.album_premiere - a.album_premiere; });

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-information-albums-item" onclick="clickedSingleAlbum(this)" artist-data="${favoritIt[i].artist_id}" data-album='${favoritIt[i].album}'>
          <img class="music-artist-information-albums-item-img" src="${favoritIt[i].album_cover}">
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

function artistProfileFeat(track){

  var track_id = allMusicView.filter(x => x.id === track);
  var profile_id = track_id[0].artist;

  const resultsFAV = document.querySelector(".music-artist-content-feat");
  var favoritIt = allMusicView.filter(x => x.colaboration === profile_id);

  favoritIt.sort(function(a, b){
      return b.album_premiere - a.album_premiere;
  });

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length & i < 5; i++) {
    let resultFAV =
      `<div class="music-artist-content-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <img src="${favoritIt[i].img_mini}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span><p class="music-artist-content-item-lyrics"> ${Object.keys(favoritIt[i].lyrics).length}<p>${favoritIt[i].artist} • ${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var feat_title = document.querySelector("#ApperasOnCheck");

  if(favoritIt.length === 0){
    resultsFAV.style.display="none";
    feat_title.style.display="none";
  }else{
    resultsFAV.style.display="flex";
    feat_title.style.display="flex";
  }

  lyricsItemCheck();
}

function artistProfilePlaylists(track){

  var track_id = allMusicView.filter(x => x.id === track);
  var profile_id = track_id[0].artist_id;
  var favoritIt = allMusicView.filter(x => x.artist_id === profile_id);

  const resultsFAV = document.querySelector(".music-artist-content-playlists");
  resultsFAV.innerHTML='';

  let featuringPlaylist_Complete =
  `<div class="center-container-item playlist-generator complete" playlist-description="This Is ${favoritIt[0].artist}, contains all the most important songs in one playlist" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-filter="Complete" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].gallery_img_1}" data-album='${favoritIt[0].album}'>
   <img src="${favoritIt[0].thisis_img}">
   <h2>This Is ${favoritIt[0].artist}</h2>
   <p>Playlist</p>
   </div>`;

   let featuringPlaylist_Style =
   `<div class="center-container-item playlist-generator" playlist-description="${favoritIt[0].style} style, songs that will fit every fan of ${favoritIt[0].style} music" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-style="${favoritIt[0].style}" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].gallery_img_2}" data-album='${favoritIt[0].album}'>
    <img src="${favoritIt[0].style_img}">
    <h2>${favoritIt[0].style} • Style</h2>
    <p>Playlist</p>
    </div>`;

    let featuringPlaylist_Radio =
    `<div class="center-container-item playlist-generator" playlist-description="${favoritIt[0].artist} • Radio, is mix of artists, styles, collaborations and much more" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-filter="Radio" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].gallery_img_3}" data-album='${favoritIt[0].album}'>
     <img src="${favoritIt[0].radio_img}">
     <h2>${favoritIt[0].artist} • Radio</h2>
     <p>Playlist</p>
     </div>`;


   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Style);
   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Radio);
   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Complete);
}

function artistProfileAbout(track){

  var track_id = allMusicView.filter(x => x.id === track);
  var profile_id = track_id[0].artist_id;

  const resultsFAV = document.querySelector(".music-artist-content-artist");
  var favoritIt = allMusicView.filter(x => x.artist_id === profile_id);

  document.querySelector(".music-artist-content-artist-box-img").src = favoritIt[0].gallery_img_1;
  document.querySelector(".music-artist-content-artist-box h1").innerText = favoritIt[0].artist;
  document.querySelector(".music-artist-content-artist-box p").innerText = favoritIt[0].bio;
}

function artistProfileFansChoice(track){

  var track_id = allMusicView.filter(x => x.id === track);
  var profile_style = track_id[0].style;
  var profile_country = track_id[0].country;
  var profile_collab = track_id[0].artist;

  const resultsFAV = document.querySelector(".music-artist-content-fanschoice");
  var favoritIt = allMusicView.filter(x => x.style === profile_style && x.artist != profile_collab || x.country === profile_country && x.artist != profile_collab || x.colaboration === profile_collab && x.artist != profile_collab);

  favoritIt.sort(function(a, b){

    var values = [b.id - a.id, b.artist - a.artist, b.artist_id - a.artist_id, b.album_premiere - a.album_premiere],
    valueToUse = values[Math.floor(Math.random() * values.length)];

    return valueToUse;
  });

  resultsFAV.innerHTML = "";
  for (let i = 1; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item" artist-id='${favoritIt[i].artist_id}' id='${favoritIt[i].id}' onclick="artistScreenDataLoad(this)">
          <img src="${favoritIt[i].artist_img}">
          <p>${favoritIt[i].artist}</p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.music-artist-content-fanschoice .music-artist-content-item').each(function(){
      var prodId = $(this).attr('artist-id');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });

  $('.music-artist-content-fanschoice .music-artist-content-item').slice(10).remove()

  resultsFAV.scrollLeft = 0;
}

const uiRandomArtistCard = document.querySelector("#head_content_item")
uiRandomArtistCardName = uiRandomArtistCard.querySelector(".head-content-item-name");
uiRandomArtistCardImg = uiRandomArtistCard.querySelector("img");

function randomHomeArtist(){
  var indexNumb = Math.floor((Math.random() * allMusicView.length) + 1);
  uiRandomArtistCardName.innerText = allMusicView[indexNumb - 1].artist;
  uiRandomArtistCardImg.src = allMusicView[indexNumb - 1].artist_img;
  uiRandomArtistCard.setAttribute("artist-data", allMusicView[indexNumb - 1].artist_id);
  uiRandomArtistCard.setAttribute("id", allMusicView[indexNumb - 1].id);
}

const uiLastViewedAlbum_1 = document.querySelector("#head_content_album_1");
const uiLastViewedAlbum_2 = document.querySelector("#head_content_album_2");

function uiLastViewedAlbumsLoad(){
  let lastAlbum_1 = localStorage.getItem("lastViewedAlbum_1");
  let lastAlbum_2 = localStorage.getItem("lastViewedAlbum_2");

  uiLastViewedAlbum_1.style.display="flex";
  uiLastViewedAlbum_2.style.display="flex";

  var lastAlbumImgSrc_1 = allMusicView.filter(x => x.album === lastAlbum_1);
  var lastAlbumImgSrc_2 = allMusicView.filter(x => x.album === lastAlbum_2);

  uiLastViewedAlbum_1.querySelector("p").innerText = lastAlbumImgSrc_1[0].album_premiere;
  uiLastViewedAlbum_1.querySelector(".data-title").innerText = lastAlbum_1;
  uiLastViewedAlbum_1.querySelector("img").src = lastAlbumImgSrc_1[0].album_cover;
  uiLastViewedAlbum_1.querySelector(".head-content-item-background").src = lastAlbumImgSrc_1[0].album_cover;
  uiLastViewedAlbum_1.setAttribute("data-album", lastAlbum_1);
  uiLastViewedAlbum_1.setAttribute("artist-data", lastAlbumImgSrc_1[0].artist_id);

  uiLastViewedAlbum_2.querySelector("p").innerText = lastAlbumImgSrc_2[0].album_premiere;
  uiLastViewedAlbum_2.querySelector(".data-title").innerText = lastAlbum_2;
  uiLastViewedAlbum_2.querySelector("img").src = lastAlbumImgSrc_2[0].album_cover
  uiLastViewedAlbum_2.querySelector(".head-content-item-background").src = lastAlbumImgSrc_2[0].album_cover;
  uiLastViewedAlbum_2.setAttribute("data-album", lastAlbum_2);
  uiLastViewedAlbum_2.setAttribute("artist-data", lastAlbumImgSrc_2[0].artist_id);
}

const artistMenuAlbums = document.querySelector("#music-artist-menu-albums");
const artistMenuAbout = document.querySelector("#music-artist-menu-about");
const artistAlbums = document.querySelector(".music-artist-information");
const artistAbout = document.querySelector(".music-artist-information-screen");
const featuredLibrary = document.querySelectorAll(".music-artist-content-item-featured");


smallView.addEventListener('touchstart', handleTouchStart, false);        
smallView.addEventListener('touchmove', handleTouchMove, false);
musicImgBox.addEventListener('touchstart', handleTouchStart, false);        
musicImgBox.addEventListener('touchmove', handleTouchMove, false);

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
    var xyMinMax = 10;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > xyMinMax ) {
            nextMusic();
        } else if ( xDiff < -xyMinMax ) {
            prevMusic();
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
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Liked</span>';
    musicTopOptionsFavorite.classList.add('active')
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Like</span>';
    musicTopOptionsFavorite.classList.remove('active')
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
  }
    
  favoriteLoadItems();
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
  activeSettingsScreen.classList.remove("active");
  favoriteLoadItemsProfile();
  document.querySelector(".user_profile_header_content_name").innerText = localStorage.getItem('personalization-data-name');
}

function favoriteLoadItemsProfile() {

  const resultsFAV = document.querySelector(".user_profile_content");
  var favoritIt = allMusicView.filter(x => x.status === "favorite");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="user_profile_content_item_song" queue-index="${i + 1}" li-index='${favoritIt[i].id}' onclick="clickedSingleFavQueue(this)">
        <img src="${favoritIt[i].img_mini}">
          <div class="user_profile_content_item_song_data">
            <p>${favoritIt[i].name}</p>
            <span>${favoritIt[i].artist}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
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
}

function checkFollowStatus(){
  var followName = artistItemTitle.innerText;
  var followFilter = allMusicView.filter(x => x.artist === followName);

  for (let i = 0; i < followFilter.length; i++) {
    if (followFilter[i].artist_status === "followed") {
      artistItemFollow.innerHTML = '<i class="fa-solid fa-heart"></i> Following';
      artistItemFollowers.innerText = +artistItemFollowers.innerText +1;
      artistItemFollow.classList.add("active");
    }else if (followFilter[i].artist_status === "none") {
      artistItemFollow.innerHTML = '<i class="fa-regular fa-heart"></i> Follow';
      artistItemFollow.classList.remove("active");
      artistItemFollowers.innerText = +artistItemFollowers.innerText -1;
    }}

}

function createdPlaylistsContent() {

  const resultsFAV = document.querySelector(".user_profile_content");
  resultsFAV.innerHTML = "";
  let resultFAV =
      `<div class="user_profile_content_dailyStats">
      <div class="user_profile_content_dailyStats_item">
        <p>Songs listened</p>
        <span class="user_profile_content_dailyStats_item_total">0</span>
      </div>
      <div class="user_profile_content_dailyStats_item">
        <p>Liked songs</p>
        <span class="user_profile_content_dailyStats_item_artists">0</span>
      </div>
      <div class="user_profile_content_dailyStats_item">
        <p>Recent listened album</p>
        <span class="user_profile_content_dailyStats_item_album">none</span>
      </div>
      <div class="user_profile_content_dailyStats_item">
      <p>Recent listened song</p>
      <span class="user_profile_content_dailyStats_item_history">none</span>
    </div>
    </div>
      </div>
      <div class="user_profile_content_friends" id="user_friend_list_0">
        <p>Your friend list is empty</p>
        <span>Connect your social media, and enjoy zesia together!</span>
       </div>`;
  resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

  document.querySelector(".user_profile_content_dailyStats_item_total").innerText = localStorage.getItem("trSts") || 0;
  document.querySelector(".user_profile_content_dailyStats_item_album").innerText = localStorage.getItem("lastViewedAlbum_1") || "Brak Danych";
  document.querySelector(".user_profile_content_dailyStats_item_artists").innerText = allMusicView.filter(x => x.status === "favorite").length;
  if(localStorage.getItem("track_data_1")){
    let dataFiltered = allMusicView.filter(x => x.id === localStorage.track_data_1.split(',')[0])
    document.querySelector(".user_profile_content_dailyStats_item_history").innerText = dataFiltered[0].artist + ' - ' + dataFiltered[0].name;
  }
}

function followedArtistsContent() {

  const resultsFAV = document.querySelector(".user_profile_content");
  var favoritIt = allMusicView.filter(x => x.artist_status === "followed");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="user_profile_content_item_song artist" onclick="artistScreenDataLoad(this);loadUserProfile();" id="${favoritIt[i].id}" artist-data='${favoritIt[i].artist}'>
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
      `<div class="center-container-item" onclick="artistScreenDataLoad(this);" id='${favoritIt[i].id}' artist-data='${favoritIt[i].artist}'>
          <img src="artists/${favoritIt[i].avatar}.jpg">
          <h2>${favoritIt[i].artist}</h2>
          <p>Verified</p>
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
  const hexColor = colorThief.getColor(image, DOMINANT_COLOR_QUALITY);
  var colour = colorThief.getColor(image, DOMINANT_COLOR_QUALITY);

  musicBackgroundViral.style.background =
  "linear-gradient(" 
  + "rgba("+ colour +" , 1)"
  + ", " 
  + "rgba("+ colour +" , 0.5)"
  + ")";
});

function get_average_rgb() {
  const DOMINANT_COLOR_QUALITY_ARTIST = 5;

  let image = document.querySelector(".music-artist-item-title img");
  const colorThiefArtist = new ColorThief();

  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');

  const hexColor = rgbToHex(...colorThiefArtist.getColor(image, DOMINANT_COLOR_QUALITY_ARTIST));
  document.querySelector(".music-artist-item-title").style.background=hexColor;

  document.querySelector(".music-artist-option").style.background = 'linear-gradient(' + hexColor + + `90` + ', ' + 'var(--background)' + ')';

}

artistItemImg.addEventListener('load', () => {
  get_average_rgb();
});

function changeCurrentQueueBySearchBar(element){
  let getLiIndex = element.getAttribute("li-index");
  indexNumb = getLiIndex;
  allMusic = allMusicView.filter(x => x.name !== "");
  loadMusic(indexNumb);
  playMusic();
}


checkArtistsNumber();

function checkArtistsNumber(){
  checkLocalStorageDataArtist();

  var moreFromArtistFollowed = allMusicView.filter(x => x.artist_status === "followed");
  if(moreFromArtistFollowed.length > 0){
    homeFavortiesArtists();
  }
}

let trackTextContainer = document.querySelector(".main-information-title");
let text2 = document.querySelector(".main-information-title h1");

function overflowingText(){
  if (trackTextContainer.clientWidth < text2.clientWidth) {
    text2.classList.add("animate");
  }else{
    text2.classList.remove("animate");
  }
}

function popularArtistsLoad(){

  resultsFAV = document.querySelector(".center-container.popular-artists-container .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.tag === "Popular");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item popular-artist" id='${favoritIt[i].id}' data-artist='${favoritIt[i].artist}' onclick="artistScreenDataLoad(this)">
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

const isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

function deviceCheck(){
  if(isMobile.any()){
    mobileOptimalizationSetup();
  }
}

window.addEventListener("load", (event) => {
  deviceCheck();
  lazyload();
});

function mobileOptimalizationSetup(){
  $('.center-container.popular-artists-container .center-container-scrollable .center-container-item').slice(10).remove()
  $('.center-container.favorites-artists-container .center-container-scrollable .center-container-item').slice(10).remove()
  $('.center-container #dailyMixContainer .center-container-item').slice(10).remove()
  $('.center-container #popularPlaylists .center-container-item').slice(10).remove()

}
const targets = document.querySelectorAll('.search-results .music-artist-content-item img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
      if (entry.isIntersecting){
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.src = src;

        if(!img.classList.contains('_load')){
          img.classList.add('_load');
        }

        observer.disconnect();
      }
    });
  });
  io.observe(target);
};

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

function featuringLoad(){
  let featuringBox = document.querySelector(".featuringArtistsBox");
  let featuringArtist = document.querySelector(".featuringArtistName");

  resultsFAV = featuringBox;

  var followedArtistsData = allMusicView.filter(x => x.artist_status === "followed");
  let randomArtistIndex = Math.floor((Math.random() * followedArtistsData.length));

  if(followedArtistsData.length > 0){
  var favoritIt = allMusicView.filter(x => x.artist_id === followedArtistsData[randomArtistIndex].artist_id);

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item popular-artist" onclick="clickedSingleAlbum(this)" artist-data="${favoritIt[i].artist_id}" data-album='${favoritIt[i].album}'>
       <img src="${favoritIt[i].album_cover}">
       <h2>${favoritIt[i].album}</h2>
       <p>${favoritIt[i].album_premiere}</p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  featuringArtist.innerText = followedArtistsData[randomArtistIndex].artist;
  featuringArtist.setAttribute( "onClick", "artistScreenDataLoad(this);" );
  featuringArtist.setAttribute('id', followedArtistsData[randomArtistIndex].id);
  featuringArtist.setAttribute('data-artist', followedArtistsData[randomArtistIndex].artist);

  var productIds={};
  $('.center-container-scrollable.featuringArtistsBox .center-container-item').each(function(){
      var prodId = $(this).attr('data-album');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });

  // FEATURING ARTIST AUTOMATIC PLAYLIST GENERATOR //

  let featuringPlaylist_Complete =
  `<div class="center-container-item playlist-generator complete" playlist-description="This Is ${favoritIt[0].artist}, contains all the most important songs in one playlist" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-filter="Complete" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].gallery_img_1}" data-album='${favoritIt[0].album}'>
   <img src="${favoritIt[0].thisis_img}">
   <h2>This Is ${favoritIt[0].artist}</h2>
   <p>Playlist</p>
   </div>`;

   let featuringPlaylist_Style =
   `<div class="center-container-item playlist-generator" playlist-description="${favoritIt[0].style} style, songs that will fit every fan of ${favoritIt[0].style} music" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-style="${favoritIt[0].style}" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].gallery_img_2}" data-album='${favoritIt[0].album}'>
    <img src="${favoritIt[0].style_img}">
    <h2>${favoritIt[0].style} • Style</h2>
    <p>Playlist</p>
    </div>`;

    let featuringPlaylist_Radio =
    `<div class="center-container-item playlist-generator" playlist-description="${favoritIt[0].artist} • Radio, is mix of artists, styles, collaborations and much more" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-filter="Radio" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].gallery_img_3}" data-album='${favoritIt[0].album}'>
     <img src="${favoritIt[0].radio_img}">
     <h2>${favoritIt[0].artist} • Radio</h2>
     <p>Playlist</p>
     </div>`;


   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Style);
   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Radio);
   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Complete);

   // FEATURING ARTIST AUTOMATIC PLAYLIST GENERATOR //    
  }
}

popularArtistsLoad();
featuringLoad();

const filterMenu = document.querySelector(".filter-menu");
const filterMenuBtn = document.querySelector(".search-filter-more");

function filterMenuOn(){
  filterMenu.classList.toggle("active");
}

$('.filter-menu-option-scrollable.style .filter-menu-option-scrollable-item').click(function() {
  $('.filter-menu-option-scrollable.style .filter-menu-option-scrollable-item').not($(this)).removeClass('active');
  $(this).addClass('active');
});

$('.filter-menu-option-scrollable.language .filter-menu-option-scrollable-item').click(function() {
  $('.filter-menu-option-scrollable.language .filter-menu-option-scrollable-item').not($(this)).removeClass('active');
  $(this).addClass('active');
});

$('.filter-menu-option-scrollable.country .filter-menu-option-scrollable-item').click(function() {
  $('.filter-menu-option-scrollable.country .filter-menu-option-scrollable-item').not($(this)).removeClass('active');
  $(this).addClass('active');
});

$('.filter-menu-option-scrollable.tag .filter-menu-option-scrollable-item').click(function() {
  $('.filter-menu-option-scrollable.tag .filter-menu-option-scrollable-item').not($(this)).removeClass('active');
  $(this).addClass('active');
});


function resetCustomFilter(){
  searchMusicContent = allMusicView;

  var elements = document.querySelectorAll(".filter-menu-option-scrollable .filter-menu-option-scrollable-item")
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
  }

  results.innerHTML=searchMusicContent.map((a,i)=>
  `
  <div class="result-box" li-index="${a.id}" onclick="resultItemQueue(this);">
     <img data-lazy="${a.img_mini}">
     <div class="result-box-cover">
       <h1 class="result-name">${a.name}</h1>
       <p class="result-artist">${a.artist}</p>
     </div>
     <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
   `).join("\n");

   let targets = document.querySelectorAll('.search-results img');
   targets.forEach(lazyLoad);
   clearFilterStatus()
}

function errorPop(){
  document.querySelector(".error_popup").classList.toggle("active");
}

function toggleFullScreen(element) {
  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen =
    docEl.requestFullscreen ||
    docEl.mozRequestFullScreen ||
    docEl.webkitRequestFullScreen ||
    docEl.msRequestFullscreen;
  var cancelFullScreen =
    doc.exitFullscreen ||
    doc.mozCancelFullScreen ||
    doc.webkitExitFullscreen ||
    doc.msExitFullscreen;

  if (
    !doc.fullscreenElement &&
    !doc.mozFullScreenElement &&
    !doc.webkitFullscreenElement &&
    !doc.msFullscreenElement
  ) {
    requestFullScreen.call(docEl);
    localStorage.setItem("FS_MODE", "ON");
  } else {
    cancelFullScreen.call(doc);
    localStorage.setItem("FS_MODE", "OFF");
  }
}

function volumeDown(){
  if(mainAudio.volume < 0.15){
    mainAudio.volume = 0;
  }else{
    mainAudio.volume = mainAudio.volume - 0.1;
  }

  document.querySelector('.top-menu-list-volume span').innerText = "Volume" + mainAudio.volume + "%"
  localStorage.setItem("user_Volume", mainAudio.volume);
}

function volumeUp(){
  if(mainAudio.volume > 0.95){
    mainAudio.volume = 1;
  }else{
    mainAudio.volume = mainAudio.volume + 0.1;
  }

  document.querySelector('.top-menu-list-volume span').innerText = "Volume" + mainAudio.volume + "%"
  localStorage.setItem("user_Volume", mainAudio.volume);
}

function notificationCheck(){
  navigator.serviceWorker.register('js/sw.js');
  Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Notification with ServiceWorker');
      });
    }
  });
}

function canvasToggle(){
  wrapper.classList.toggle("canvas");
  if(wrapper.classList.contains("canvas")){
    musicImg.style.opacity="0";
    musicImgShadow.style.display="none";
    musicCanvas.classList.add("active")
    localStorage.setItem("user_canvas", "on");
    document.querySelector(".background-canvas video").src = allMusic[indexNumb - 1].canvas;
    if(allMusic[indexNumb - 1].canvas != ""){
      document.querySelector(".background-canvas video").src = allMusic[indexNumb - 1].canvas;
      document.querySelector(".background-canvas video").style.display="flex";
      document.querySelector(".background-canvas img").style.display="none";
      musicCanvasVideo.play();
    }else{
      document.querySelector(".background-canvas video").style.display="none";
      document.querySelector(".background-canvas img").src = `images/${allMusic[indexNumb - 1].img}.jpg`;
      document.querySelector(".background-canvas img").style.display="flex";
      musicCanvasVideo.pause();
    }
  }else{
    musicImg.style.opacity="1";
    musicImgShadow.style.display="flex";
    musicCanvas.classList.remove("active")
    localStorage.setItem("user_canvas", "off");
  }
}

function userSettingsLoad(){
  if(localStorage.getItem("user_canvas") === "on"){
    canvasToggle();
    musicCanvasVideo.pause();
    document.querySelector("#userSettingsCanvas").classList.add("active");
  }else{
    wrapper.classList.toggle("canvas");
    canvasToggle();
  }

  if(localStorage.getItem("user_theme") === "blue"){
    content.classList.add("blue");
    content.classList.remove("amoled");
    content.classList.remove("green");
  }
  if(localStorage.getItem("user_theme") === "green"){
    content.classList.add("green");
    content.classList.remove("amoled");
    content.classList.remove("blue");
  }

  if(localStorage.getItem("lyricsAccouracyImprove")){
    document.querySelector("#userSettingsLyricsImprovment").classList.add("active");
  }

  if (content.classList.contains('green')) {
    document.documentElement.style.setProperty('--maincolor', '#ef5466');
    document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
    document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
    document.documentElement.style.setProperty('--background', '#191922');
    document.documentElement.style.setProperty('--backgroundsecond', '#32323d');
    document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
  }
  if (content.classList.contains('blue')) {
    darkMode.classList.remove("active");
    document.documentElement.style.setProperty('--maincolor', '#ef5466');
    document.documentElement.style.setProperty('--maincolorhover', '#DB7176');
    document.documentElement.style.setProperty('--border', '1px #ef546650 solid');
    document.documentElement.style.setProperty('--background', '#484b6a');
    document.documentElement.style.setProperty('--backgroundsecond', '#9394a5');
    document.documentElement.style.setProperty('--gradient', 'radial-gradient(circle, var(--background) 0%, var(--backgroundsecond) 100%)');
  }
}

function settingsBoxToggle(element){
  element.classList.toggle("active");
}

userSettingsLoad();

function descriptionPopup(){
  document.querySelector(".description_popop").classList.toggle("active");
}

function default_user(){
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
}

function clickedNotification(element){
  let linkHref = element.getAttribute('link_to');
  window.location.href = "#" + linkHref;
  var indexNumb = linkHref;
  allMusic = allMusicView;
  loadMusic(indexNumb);
  playMusic();
  wrapper.classList.add("active")
}

function notifyToggle(){
  document.querySelector(".notification_screen").classList.toggle("active");
}

const notifyUser = document.querySelector(".notification_header_main");
const notifyReco = document.querySelector(".notification_header_rec");
const notifyContent = document.querySelector(".notification_content");

notifyUser.addEventListener('click', () => {
  notifyReco.classList.remove("active");
  notifyUser.classList.add("active");
  notifyContent.style.display="flex";
})

notifyReco.addEventListener('click', () => {
  notifyReco.classList.add("active");
  notifyUser.classList.remove("active");
  notifyContent.style.display="none";
})

reelsScreen = document.querySelector(".reels-screen");
reelsHeaderArtist = document.querySelector(".reels-artist p");
reelsImg = document.querySelector(".reels-content img");

function clickedReels(element){
  element.querySelector(".reels-img-border").classList.add("viewed");
  element.querySelector(".reels-item img").classList.add("viewed");

  setTimeout(() => {
    element.querySelector(".reels-img-border").classList.remove("viewed");
    element.querySelector(".reels-item img").classList.remove("viewed");
    reelsScreen.classList.add("active");
    reelsHeaderArtist.innerText = element.querySelector(".reels-item-data p").innerText;
    reelsId = element.querySelector(".reels-item-data p").innerText;
    
    var favoritIt = allMusicView.filter(x => x.artist === reelsId);
    reelsImg.src = favoritIt[0].gallery_img_5;
    reelsHeaderArtist.setAttribute("id", favoritIt[0].id);

    setTimeout(() => {
      element.classList.add("viewed")
    }, 500)
    setTimeout(() => {
      reelsScreen.classList.remove("active");
    }, 10000)
  }, 2000)

}

function reelsExit(){
  reelsScreen.classList.remove("active");
}

function followedArtistsReelsLoad() {
  const resultsFAV = document.querySelector(".head-reels");
  var favoritIt = allMusicView.filter(x => x.artist_status === "followed");
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="reels-item" onclick="clickedReels(this)" reels-id="${favoritIt[i].artist_id}">
        <img src="${favoritIt[i].artist_img}">
        <div class="reels-img-border"></div>
          <div class="reels-item-data">
           <p>${favoritIt[i].artist}</p>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
  var productIds={};
  $('.reels-item').each(function(){
      var prodId = $(this).attr('reels-id');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });
}

followedArtistsReelsLoad();

function elementClassActive(element){
  element.classList.toggle("active");
}

function clearLyricStatus(){
  if(lyricsBox.classList.contains("active")){
    lyricsBox.className = "main-music-lyrics-box lyricsNonSync active";
  }else{
    lyricsBox.className = "main-music-lyrics-box lyricsNonSync";
  }
}

function lyricsStamp(data){
  let stampValue = data.getAttribute('timeAtr');
  mainAudio.currentTime = stampValue;
  document.querySelector('.main-music-lyrics-box').style.scrollBehavior = 'auto';
  pauseMusic();

  setTimeout(() => {
    playMusic();
    setTimeout(() => {
      document.querySelector('.main-music-lyrics-box').style.scrollBehavior = 'smooth';
    }, 250);
  }, 750);

  lyricsBox.innerHTML = '';
  clearLyricStatus();
}

function lyricsMode(){
  const resultsFAV = lyricsBox;

  if(wrapper.classList.contains('paused')){

    if(document.querySelector('.main-music-lyrics-box p.active')){
      const last = Array.from(
        document.querySelectorAll('.main-music-lyrics-box p.active')
      ).pop();

      var divTop = last.offsetTop;
      var lsTop = lyricsBox.offsetHeight;
      var activeItemPos = divTop - lsTop + 200;
    }
    if(allMusic[indexNumb - 1].lyrics_nonSync === ""){
    lyricsBox.classList.remove('lyricsNonSync');
    lyricsBox.scroll({
      behavior: 'auto'
    });}
    else{
    lyricsBox.classList.add('lyricsNonSync');
    lyricsBox.scroll({
      top: activeItemPos,
      behavior: 'auto'
    });}
  }

  let lyricsDelay = 15;
  let lyricsGap = -1;

  if(allMusic[indexNumb - 1].lyrics.ve1 != undefined){
  
     if(allMusic[indexNumb - 1].lyrics.ve1.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve1.stamp != "" && !lyricsBox.classList.contains('atr-1')){

      lyricsBox.classList.add('atr-1');

      if(allMusic[indexNumb - 1].lyrics.ve1.ls != undefined){
        let resultFAV = 
        `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve1.stamp}'>${allMusic[indexNumb - 1].lyrics.ve1.ls}</p>`;
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }}else if(allMusic[indexNumb - 1].lyrics.ve1.stamp - lyricsGap < mainAudio.currentTime){
        let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve1.stamp + '"]');
        lsAtr.classList.add("active");
      }

     if(allMusic[indexNumb - 1].lyrics.ve2.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve2.stamp != "" && !lyricsBox.classList.contains('atr-2')){

      lyricsBox.classList.add('atr-2');
  
      if(allMusic[indexNumb - 1].lyrics.ve2.ls != undefined){
        let resultFAV = 
        `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve2.stamp}'>${allMusic[indexNumb - 1].lyrics.ve2.ls}</p>`;
          resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }}else if(allMusic[indexNumb - 1].lyrics.ve2.stamp - lyricsGap < mainAudio.currentTime){
        let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve2.stamp + '"]');
        lsAtr.classList.add("active");
      }  

     if(allMusic[indexNumb - 1].lyrics.ve3.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve3.stamp != "" && !lyricsBox.classList.contains('atr-3')){

      lyricsBox.classList.add('atr-3');
  
      if(allMusic[indexNumb - 1].lyrics.ve3.ls != undefined){
        let resultFAV = 
        `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve3.stamp}'>${allMusic[indexNumb - 1].lyrics.ve3.ls}</p>`;
          resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }}else if(allMusic[indexNumb - 1].lyrics.ve3.stamp - lyricsGap < mainAudio.currentTime){
        let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve3.stamp + '"]');
        lsAtr.classList.add("active");
      }  

      if(allMusic[indexNumb - 1].lyrics.ve4.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve4.stamp != "" && !lyricsBox.classList.contains('atr-4')){

        lyricsBox.classList.add('atr-4');
    
        if(allMusic[indexNumb - 1].lyrics.ve4.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve4.stamp}'>${allMusic[indexNumb - 1].lyrics.ve4.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve4.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve4.stamp + '"]');
          lsAtr.classList.add("active");
        }    

     if(allMusic[indexNumb - 1].lyrics.ve5.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve5.stamp != "" && !lyricsBox.classList.contains('atr-5')){

      lyricsBox.classList.add('atr-5');
  
      if(allMusic[indexNumb - 1].lyrics.ve5.ls != undefined){
        let resultFAV = 
        `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve5.stamp}'>${allMusic[indexNumb - 1].lyrics.ve5.ls}</p>`;
          resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }}else if(allMusic[indexNumb - 1].lyrics.ve5.stamp - lyricsGap < mainAudio.currentTime){
        let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve5.stamp + '"]');
        lsAtr.classList.add("active");
      }     
      
      if(allMusic[indexNumb - 1].lyrics.ve6.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve6.stamp != "" && !lyricsBox.classList.contains('atr-6')){

        lyricsBox.classList.add('atr-6');
    
        if(allMusic[indexNumb - 1].lyrics.ve6.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve6.stamp}'>${allMusic[indexNumb - 1].lyrics.ve6.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve6.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve6.stamp + '"]');
          lsAtr.classList.add("active");
        }       

      if(allMusic[indexNumb - 1].lyrics.ve7.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve7.stamp != "" && !lyricsBox.classList.contains('atr-7')){

        lyricsBox.classList.add('atr-7');
    
        if(allMusic[indexNumb - 1].lyrics.ve7.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve7.stamp}'>${allMusic[indexNumb - 1].lyrics.ve7.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve7.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve7.stamp + '"]');
          lsAtr.classList.add("active");
        }             
        
      if(allMusic[indexNumb - 1].lyrics.ve8.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve8.stamp != "" && !lyricsBox.classList.contains('atr-8')){

        lyricsBox.classList.add('atr-8');
    
        if(allMusic[indexNumb - 1].lyrics.ve8.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve8.stamp}'>${allMusic[indexNumb - 1].lyrics.ve8.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve8.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve8.stamp + '"]');
          lsAtr.classList.add("active");
        }     
        
      if(allMusic[indexNumb - 1].lyrics.ve9.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve9.stamp != "" && !lyricsBox.classList.contains('atr-9')){

        lyricsBox.classList.add('atr-9');
    
        if(allMusic[indexNumb - 1].lyrics.ve9.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve9.stamp}'>${allMusic[indexNumb - 1].lyrics.ve9.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve9.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve9.stamp + '"]');
          lsAtr.classList.add("active");
        }
        
      if(allMusic[indexNumb - 1].lyrics.ve10.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve10.stamp != "" && !lyricsBox.classList.contains('atr-10')){

        lyricsBox.classList.add('atr-10');
    
        if(allMusic[indexNumb - 1].lyrics.ve10.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve10.stamp}'>${allMusic[indexNumb - 1].lyrics.ve10.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve10.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve10.stamp + '"]');
          lsAtr.classList.add("active");
        }              

      if(allMusic[indexNumb - 1].lyrics.ve11.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve11.stamp != "" && !lyricsBox.classList.contains('atr-11')){

        lyricsBox.classList.add('atr-11');
    
        if(allMusic[indexNumb - 1].lyrics.ve11.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve11.stamp}'>${allMusic[indexNumb - 1].lyrics.ve11.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve11.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve11.stamp + '"]');
          lsAtr.classList.add("active");
        }      

      if(allMusic[indexNumb - 1].lyrics.ve12.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve12.stamp != "" && !lyricsBox.classList.contains('atr-12')){

        lyricsBox.classList.add('atr-12');
    
        if(allMusic[indexNumb - 1].lyrics.ve12.ls != undefined){
          let resultFAV = 
          `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve12.stamp}'>${allMusic[indexNumb - 1].lyrics.ve12.ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
        }}else if(allMusic[indexNumb - 1].lyrics.ve12.stamp - lyricsGap < mainAudio.currentTime){
          let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve12.stamp + '"]');
          lsAtr.classList.add("active");
        }      

        if(allMusic[indexNumb - 1].lyrics.ve13.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve13.stamp != "" && !lyricsBox.classList.contains('atr-13')){

          lyricsBox.classList.add('atr-13');
      
          if(allMusic[indexNumb - 1].lyrics.ve13.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve13.stamp}'>${allMusic[indexNumb - 1].lyrics.ve13.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve13.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve13.stamp + '"]');
            lsAtr.classList.add("active");
          }     

        if(allMusic[indexNumb - 1].lyrics.ve14.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve14.stamp != "" && !lyricsBox.classList.contains('atr-14')){

          lyricsBox.classList.add('atr-14');
      
          if(allMusic[indexNumb - 1].lyrics.ve14.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve14.stamp}'>${allMusic[indexNumb - 1].lyrics.ve14.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve14.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve14.stamp + '"]');
            lsAtr.classList.add("active");
          }           

        if(allMusic[indexNumb - 1].lyrics.ve15.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve15.stamp != "" && !lyricsBox.classList.contains('atr-15')){

          lyricsBox.classList.add('atr-15');
      
          if(allMusic[indexNumb - 1].lyrics.ve15.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve15.stamp}'>${allMusic[indexNumb - 1].lyrics.ve15.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve15.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve15.stamp + '"]');
            lsAtr.classList.add("active");
          }     
          
        if(allMusic[indexNumb - 1].lyrics.ve16.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve16.stamp != "" && !lyricsBox.classList.contains('atr-16')){

          lyricsBox.classList.add('atr-16');
      
          if(allMusic[indexNumb - 1].lyrics.ve16.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve16.stamp}'>${allMusic[indexNumb - 1].lyrics.ve16.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve16.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve16.stamp + '"]');
            lsAtr.classList.add("active");
          }   

        if(allMusic[indexNumb - 1].lyrics.ve17.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve17.stamp != "" && !lyricsBox.classList.contains('atr-17')){

          lyricsBox.classList.add('atr-17');
      
          if(allMusic[indexNumb - 1].lyrics.ve17.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve17.stamp}'>${allMusic[indexNumb - 1].lyrics.ve17.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve17.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve17.stamp + '"]');
            lsAtr.classList.add("active");
          }   
          
        if(allMusic[indexNumb - 1].lyrics.ve18.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve18.stamp != "" && !lyricsBox.classList.contains('atr-18')){

          lyricsBox.classList.add('atr-18');
      
          if(allMusic[indexNumb - 1].lyrics.ve18.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve18.stamp}'>${allMusic[indexNumb - 1].lyrics.ve18.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve18.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve18.stamp + '"]');
            lsAtr.classList.add("active");
          }       
                    
        if(allMusic[indexNumb - 1].lyrics.ve19.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve19.stamp != "" && !lyricsBox.classList.contains('atr-19')){

          lyricsBox.classList.add('atr-19');
      
          if(allMusic[indexNumb - 1].lyrics.ve19.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve19.stamp}'>${allMusic[indexNumb - 1].lyrics.ve19.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve19.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve19.stamp + '"]');
            lsAtr.classList.add("active");
          }    
                    
        if(allMusic[indexNumb - 1].lyrics.ve20.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve20.stamp != "" && !lyricsBox.classList.contains('atr-20')){

          lyricsBox.classList.add('atr-20');
      
          if(allMusic[indexNumb - 1].lyrics.ve20.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve20.stamp}'>${allMusic[indexNumb - 1].lyrics.ve20.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve20.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve20.stamp + '"]');
            lsAtr.classList.add("active");
          }    
                    
        if(allMusic[indexNumb - 1].lyrics.ve21.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve21.stamp != "" && !lyricsBox.classList.contains('atr-21')){

          lyricsBox.classList.add('atr-21');
      
          if(allMusic[indexNumb - 1].lyrics.ve21.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve21.stamp}'>${allMusic[indexNumb - 1].lyrics.ve21.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve21.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve21.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                              
        if(allMusic[indexNumb - 1].lyrics.ve22.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve22.stamp != "" && !lyricsBox.classList.contains('atr-22')){

          lyricsBox.classList.add('atr-22');
      
          if(allMusic[indexNumb - 1].lyrics.ve22.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve22.stamp}'>${allMusic[indexNumb - 1].lyrics.ve22.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve22.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve22.stamp + '"]');
            lsAtr.classList.add("active");
          }          

                              
        if(allMusic[indexNumb - 1].lyrics.ve23.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve23.stamp != "" && !lyricsBox.classList.contains('atr-23')){

          lyricsBox.classList.add('atr-23');
      
          if(allMusic[indexNumb - 1].lyrics.ve23.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve23.stamp}'>${allMusic[indexNumb - 1].lyrics.ve23.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve23.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve23.stamp + '"]');
            lsAtr.classList.add("active");
          }          

                              
        if(allMusic[indexNumb - 1].lyrics.ve24.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve24.stamp != "" && !lyricsBox.classList.contains('atr-24')){

          lyricsBox.classList.add('atr-24');
      
          if(allMusic[indexNumb - 1].lyrics.ve24.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve24.stamp}'>${allMusic[indexNumb - 1].lyrics.ve24.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve24.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve24.stamp + '"]');
            lsAtr.classList.add("active");
          }          

                              
        if(allMusic[indexNumb - 1].lyrics.ve25.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve25.stamp != "" && !lyricsBox.classList.contains('atr-25')){

          lyricsBox.classList.add('atr-25');
      
          if(allMusic[indexNumb - 1].lyrics.ve25.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve25.stamp}'>${allMusic[indexNumb - 1].lyrics.ve25.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve25.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve25.stamp + '"]');
            lsAtr.classList.add("active");
          }          

                              
        if(allMusic[indexNumb - 1].lyrics.ve26.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve26.stamp != "" && !lyricsBox.classList.contains('atr-26')){

          lyricsBox.classList.add('atr-26');
      
          if(allMusic[indexNumb - 1].lyrics.ve26.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve26.stamp}'>${allMusic[indexNumb - 1].lyrics.ve26.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve26.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve26.stamp + '"]');
            lsAtr.classList.add("active");
          }          

                              
        if(allMusic[indexNumb - 1].lyrics.ve27.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve27.stamp != "" && !lyricsBox.classList.contains('atr-27')){

          lyricsBox.classList.add('atr-27');
      
          if(allMusic[indexNumb - 1].lyrics.ve27.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve27.stamp}'>${allMusic[indexNumb - 1].lyrics.ve27.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve27.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve27.stamp + '"]');
            lsAtr.classList.add("active");
          }          
          
        if(allMusic[indexNumb - 1].lyrics.ve28.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve28.stamp != "" && !lyricsBox.classList.contains('atr-28')){

          lyricsBox.classList.add('atr-28');
      
          if(allMusic[indexNumb - 1].lyrics.ve28.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve28.stamp}'>${allMusic[indexNumb - 1].lyrics.ve28.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve28.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve28.stamp + '"]');
            lsAtr.classList.add("active");
          }          
          
        if(allMusic[indexNumb - 1].lyrics.ve29.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve29.stamp != "" && !lyricsBox.classList.contains('atr-29')){

          lyricsBox.classList.add('atr-29');
      
          if(allMusic[indexNumb - 1].lyrics.ve29.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve29.stamp}'>${allMusic[indexNumb - 1].lyrics.ve29.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve29.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve29.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                 
        if(allMusic[indexNumb - 1].lyrics.ve30.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve30.stamp != "" && !lyricsBox.classList.contains('atr-30')){

          lyricsBox.classList.add('atr-30');
      
          if(allMusic[indexNumb - 1].lyrics.ve30.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve30.stamp}'>${allMusic[indexNumb - 1].lyrics.ve30.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve30.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve30.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                 
        if(allMusic[indexNumb - 1].lyrics.ve31.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve31.stamp != "" && !lyricsBox.classList.contains('atr-31')){

          lyricsBox.classList.add('atr-31');
      
          if(allMusic[indexNumb - 1].lyrics.ve31.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve31.stamp}'>${allMusic[indexNumb - 1].lyrics.ve31.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve31.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve31.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve32.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve32.stamp != "" && !lyricsBox.classList.contains('atr-32')){

          lyricsBox.classList.add('atr-32');
      
          if(allMusic[indexNumb - 1].lyrics.ve32.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve32.stamp}'>${allMusic[indexNumb - 1].lyrics.ve32.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve32.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve32.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve33.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve33.stamp != "" && !lyricsBox.classList.contains('atr-33')){

          lyricsBox.classList.add('atr-33');
      
          if(allMusic[indexNumb - 1].lyrics.ve33.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve33.stamp}'>${allMusic[indexNumb - 1].lyrics.ve33.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve33.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve33.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve34.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve34.stamp != "" && !lyricsBox.classList.contains('atr-34')){

          lyricsBox.classList.add('atr-34');
      
          if(allMusic[indexNumb - 1].lyrics.ve34.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve34.stamp}'>${allMusic[indexNumb - 1].lyrics.ve34.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve34.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve34.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve35.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve35.stamp != "" && !lyricsBox.classList.contains('atr-35')){

          lyricsBox.classList.add('atr-35');
      
          if(allMusic[indexNumb - 1].lyrics.ve35.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve35.stamp}'>${allMusic[indexNumb - 1].lyrics.ve35.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve35.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve35.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve36.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve36.stamp != "" && !lyricsBox.classList.contains('atr-36')){

          lyricsBox.classList.add('atr-36');
      
          if(allMusic[indexNumb - 1].lyrics.ve36.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve36.stamp}'>${allMusic[indexNumb - 1].lyrics.ve36.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve36.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve36.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve37.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve37.stamp != "" && !lyricsBox.classList.contains('atr-37')){

          lyricsBox.classList.add('atr-37');
      
          if(allMusic[indexNumb - 1].lyrics.ve37.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve37.stamp}'>${allMusic[indexNumb - 1].lyrics.ve37.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve37.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve37.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve38.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve38.stamp != "" && !lyricsBox.classList.contains('atr-38')){

          lyricsBox.classList.add('atr-38');
      
          if(allMusic[indexNumb - 1].lyrics.ve38.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve38.stamp}'>${allMusic[indexNumb - 1].lyrics.ve38.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve38.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve38.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve39.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve39.stamp != "" && !lyricsBox.classList.contains('atr-39')){

          lyricsBox.classList.add('atr-39');
      
          if(allMusic[indexNumb - 1].lyrics.ve39.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve39.stamp}'>${allMusic[indexNumb - 1].lyrics.ve39.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve39.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve39.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve40.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve40.stamp != "" && !lyricsBox.classList.contains('atr-40')){

          lyricsBox.classList.add('atr-40');
      
          if(allMusic[indexNumb - 1].lyrics.ve40.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve40.stamp}'>${allMusic[indexNumb - 1].lyrics.ve40.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve40.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve40.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve41.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve41.stamp != "" && !lyricsBox.classList.contains('atr-41')){

          lyricsBox.classList.add('atr-41');
      
          if(allMusic[indexNumb - 1].lyrics.ve41.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve41.stamp}'>${allMusic[indexNumb - 1].lyrics.ve41.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve41.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve41.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve42.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve42.stamp != "" && !lyricsBox.classList.contains('atr-42')){

          lyricsBox.classList.add('atr-42');
      
          if(allMusic[indexNumb - 1].lyrics.ve42.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve42.stamp}'>${allMusic[indexNumb - 1].lyrics.ve42.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve42.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve42.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve43.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve43.stamp != "" && !lyricsBox.classList.contains('atr-43')){

          lyricsBox.classList.add('atr-43');
      
          if(allMusic[indexNumb - 1].lyrics.ve43.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve43.stamp}'>${allMusic[indexNumb - 1].lyrics.ve43.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve43.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve43.stamp + '"]');
            lsAtr.classList.add("active");
          }          
                           
        if(allMusic[indexNumb - 1].lyrics.ve44.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve44.stamp != "" && !lyricsBox.classList.contains('atr-44')){

          lyricsBox.classList.add('atr-44');
      
          if(allMusic[indexNumb - 1].lyrics.ve44.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve44.stamp}'>${allMusic[indexNumb - 1].lyrics.ve44.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve44.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve44.stamp + '"]');
            lsAtr.classList.add("active");
          }             
                                     
        if(allMusic[indexNumb - 1].lyrics.ve45.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve45.stamp != "" && !lyricsBox.classList.contains('atr-45')){

          lyricsBox.classList.add('atr-45');
      
          if(allMusic[indexNumb - 1].lyrics.ve45.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve45.stamp}'>${allMusic[indexNumb - 1].lyrics.ve45.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve45.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve45.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                     
        if(allMusic[indexNumb - 1].lyrics.ve46.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve46.stamp != "" && !lyricsBox.classList.contains('atr-46')){

          lyricsBox.classList.add('atr-46');
      
          if(allMusic[indexNumb - 1].lyrics.ve46.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve46.stamp}'>${allMusic[indexNumb - 1].lyrics.ve46.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve46.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve46.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                     
        if(allMusic[indexNumb - 1].lyrics.ve47.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve47.stamp != "" && !lyricsBox.classList.contains('atr-47')){

          lyricsBox.classList.add('atr-47');
      
          if(allMusic[indexNumb - 1].lyrics.ve47.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve47.stamp}'>${allMusic[indexNumb - 1].lyrics.ve47.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve47.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve47.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                     
        if(allMusic[indexNumb - 1].lyrics.ve48.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve48.stamp != "" && !lyricsBox.classList.contains('atr-48')){

          lyricsBox.classList.add('atr-48');
      
          if(allMusic[indexNumb - 1].lyrics.ve48.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve48.stamp}'>${allMusic[indexNumb - 1].lyrics.ve48.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve48.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve48.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                     
        if(allMusic[indexNumb - 1].lyrics.ve49.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve49.stamp != "" && !lyricsBox.classList.contains('atr-49')){

          lyricsBox.classList.add('atr-49');
      
          if(allMusic[indexNumb - 1].lyrics.ve49.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve49.stamp}'>${allMusic[indexNumb - 1].lyrics.ve49.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve49.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve49.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                     
        if(allMusic[indexNumb - 1].lyrics.ve50.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve50.stamp != "" && !lyricsBox.classList.contains('atr-50')){

          lyricsBox.classList.add('atr-50');
      
          if(allMusic[indexNumb - 1].lyrics.ve50.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve50.stamp}'>${allMusic[indexNumb - 1].lyrics.ve50.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve50.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve50.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                     
        if(allMusic[indexNumb - 1].lyrics.ve51.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve51.stamp != "" && !lyricsBox.classList.contains('atr-51')){

          lyricsBox.classList.add('atr-51');
      
          if(allMusic[indexNumb - 1].lyrics.ve51.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve51.stamp}'>${allMusic[indexNumb - 1].lyrics.ve51.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve51.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve51.stamp + '"]');
            lsAtr.classList.add("active");
          }         
                                        
        if(allMusic[indexNumb - 1].lyrics.ve52.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve52.stamp != "" && !lyricsBox.classList.contains('atr-52')){

          lyricsBox.classList.add('atr-52');
      
          if(allMusic[indexNumb - 1].lyrics.ve52.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve52.stamp}'>${allMusic[indexNumb - 1].lyrics.ve52.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve52.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve52.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve53.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve53.stamp != "" && !lyricsBox.classList.contains('atr-53')){

          lyricsBox.classList.add('atr-53');
      
          if(allMusic[indexNumb - 1].lyrics.ve53.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve53.stamp}'>${allMusic[indexNumb - 1].lyrics.ve53.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve53.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve53.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve54.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve54.stamp != "" && !lyricsBox.classList.contains('atr-54')){

          lyricsBox.classList.add('atr-54');
      
          if(allMusic[indexNumb - 1].lyrics.ve54.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve54.stamp}'>${allMusic[indexNumb - 1].lyrics.ve54.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve54.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve54.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve55.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve55.stamp != "" && !lyricsBox.classList.contains('atr-55')){

          lyricsBox.classList.add('atr-55');
      
          if(allMusic[indexNumb - 1].lyrics.ve55.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve55.stamp}'>${allMusic[indexNumb - 1].lyrics.ve55.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve55.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve55.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve56.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve56.stamp != "" && !lyricsBox.classList.contains('atr-56')){

          lyricsBox.classList.add('atr-56');
      
          if(allMusic[indexNumb - 1].lyrics.ve56.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve56.stamp}'>${allMusic[indexNumb - 1].lyrics.ve56.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve56.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve56.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve57.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve57.stamp != "" && !lyricsBox.classList.contains('atr-57')){

          lyricsBox.classList.add('atr-57');
      
          if(allMusic[indexNumb - 1].lyrics.ve57.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve57.stamp}'>${allMusic[indexNumb - 1].lyrics.ve57.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve57.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve57.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve58.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve58.stamp != "" && !lyricsBox.classList.contains('atr-58')){

          lyricsBox.classList.add('atr-58');
      
          if(allMusic[indexNumb - 1].lyrics.ve58.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve58.stamp}'>${allMusic[indexNumb - 1].lyrics.ve58.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve58.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve58.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve59.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve59.stamp != "" && !lyricsBox.classList.contains('atr-59')){

          lyricsBox.classList.add('atr-59');
      
          if(allMusic[indexNumb - 1].lyrics.ve59.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve59.stamp}'>${allMusic[indexNumb - 1].lyrics.ve59.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve59.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve59.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve60.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve60.stamp != "" && !lyricsBox.classList.contains('atr-60')){

          lyricsBox.classList.add('atr-60');
      
          if(allMusic[indexNumb - 1].lyrics.ve60.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve60.stamp}'>${allMusic[indexNumb - 1].lyrics.ve60.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve60.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve60.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve61.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve61.stamp != "" && !lyricsBox.classList.contains('atr-61')){

          lyricsBox.classList.add('atr-61');
      
          if(allMusic[indexNumb - 1].lyrics.ve61.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve61.stamp}'>${allMusic[indexNumb - 1].lyrics.ve61.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve61.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve61.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve62.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve62.stamp != "" && !lyricsBox.classList.contains('atr-62')){

          lyricsBox.classList.add('atr-62');
      
          if(allMusic[indexNumb - 1].lyrics.ve62.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve62.stamp}'>${allMusic[indexNumb - 1].lyrics.ve62.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve62.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve62.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve63.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve63.stamp != "" && !lyricsBox.classList.contains('atr-63')){

          lyricsBox.classList.add('atr-63');
      
          if(allMusic[indexNumb - 1].lyrics.ve63.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve63.stamp}'>${allMusic[indexNumb - 1].lyrics.ve63.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve63.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve63.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve64.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve64.stamp != "" && !lyricsBox.classList.contains('atr-64')){

          lyricsBox.classList.add('atr-64');
      
          if(allMusic[indexNumb - 1].lyrics.ve64.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve64.stamp}'>${allMusic[indexNumb - 1].lyrics.ve64.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve64.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve64.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve65.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve65.stamp != "" && !lyricsBox.classList.contains('atr-65')){

          lyricsBox.classList.add('atr-65');
      
          if(allMusic[indexNumb - 1].lyrics.ve65.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve65.stamp}'>${allMusic[indexNumb - 1].lyrics.ve65.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve65.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve65.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                               
        if(allMusic[indexNumb - 1].lyrics.ve66.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve66.stamp != "" && !lyricsBox.classList.contains('atr-66')){

          lyricsBox.classList.add('atr-66');
      
          if(allMusic[indexNumb - 1].lyrics.ve66.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve66.stamp}'>${allMusic[indexNumb - 1].lyrics.ve66.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve66.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve66.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                                         
        if(allMusic[indexNumb - 1].lyrics.ve67.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve67.stamp != "" && !lyricsBox.classList.contains('atr-67')){

          lyricsBox.classList.add('atr-67');
      
          if(allMusic[indexNumb - 1].lyrics.ve67.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve67.stamp}'>${allMusic[indexNumb - 1].lyrics.ve67.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve67.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve67.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                                         
        if(allMusic[indexNumb - 1].lyrics.ve68.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve68.stamp != "" && !lyricsBox.classList.contains('atr-68')){

          lyricsBox.classList.add('atr-68');
      
          if(allMusic[indexNumb - 1].lyrics.ve68.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve68.stamp}'>${allMusic[indexNumb - 1].lyrics.ve68.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve68.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve68.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                                         
        if(allMusic[indexNumb - 1].lyrics.ve69.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve69.stamp != "" && !lyricsBox.classList.contains('atr-69')){

          lyricsBox.classList.add('atr-69');
      
          if(allMusic[indexNumb - 1].lyrics.ve69.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve69.stamp}'>${allMusic[indexNumb - 1].lyrics.ve69.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve69.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve69.stamp + '"]');
            lsAtr.classList.add("active");
          } 
                                                         
        if(allMusic[indexNumb - 1].lyrics.ve70.stamp - lyricsDelay < mainAudio.currentTime && allMusic[indexNumb - 1].lyrics.ve70.stamp != "" && !lyricsBox.classList.contains('atr-70')){

          lyricsBox.classList.add('atr-70');
      
          if(allMusic[indexNumb - 1].lyrics.ve70.ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics.ve70.stamp}'>${allMusic[indexNumb - 1].lyrics.ve70.ls}</p>`;
              resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics.ve70.stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics.ve70.stamp + '"]');
            lsAtr.classList.add("active");
          } 
      }else{
    resultsFAV.innerHTML = '<span>Song Doesnt Have Prepered Lyrics Yet, Try Again Later</span>'
  }

  
  $(document).ready(function(){
    $(".main-music-lyrics-box p.active").css("transform","translateX(0px)");
    $(".main-music-lyrics-box p.active").css("padding","5px 0");
    $(".main-music-lyrics-box p.active").last().css("transform","translateX(15px)");
    $(".main-music-lyrics-box p.active").last().css("padding","20px 0");
  });
}

var checkLyricsPerSec;

function trackLyrics(){
  document.querySelector(".main-music-lyrics-box").classList.toggle("active");
  musicImg.classList.toggle("lyrics");
  musicImgBox.classList.toggle("lyrics");
  if(musicImg.classList.contains("lyrics")){
    if(localStorage.lyricsAccouracyImprove){
      checkLyricsPerSec = setInterval(lyricsMode,250);
    }else{
      checkLyricsPerSec = setInterval(lyricsMode,500);
    }
  }else{
    clearInterval(checkLyricsPerSec);
  }
}

function scrolCenterRight(element){
  let box = element.parentElement.parentElement.parentElement.querySelector(".center-container-scrollable");
  let boxWidth = box.clientWidth;
  boxWidth = boxWidth/2;
  box.scrollBy({
    top: 0,
    left: 330,
    behavior: "smooth"
  });
}

function scrolCenterLeft(element){
  let box = element.parentElement.parentElement.parentElement.querySelector(".center-container-scrollable");
  let boxWidth = box.clientWidth;
  boxWidth = boxWidth/2;
  box.scrollBy({
    top: 0,
    left: -330,
    behavior: "smooth"
  });
}

function getColorCover() {
  const DOMINANT_COLOR_QUALITY_ARTIST = 5;

  let image = document.querySelector(".music-img img");
  const colorThiefArtist = new ColorThief();

  const getRandomNumber = (max = 10) => Math.round(Math.random() * max);

  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('');

  const hexColor = rgbToHex(...colorThiefArtist.getColor(image, DOMINANT_COLOR_QUALITY_ARTIST));
  document.querySelector(".music-controls-bg-color").style.background=hexColor;
  document.querySelector(".music-controls").style.backdropFilter = "blur(10px)";
}

document.querySelector(".music-img img").addEventListener('load', () => {
  getColorCover();
});

function tracksHistory(data){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var hh = today.getHours();
  var min = today.getMinutes();
  var yyyy = today.getFullYear();
  var track_id = allMusic[indexNumb - 1].id

  if(min < 9){
    min = '0' + today.getMinutes();
  }

  today = dd + '/' + mm + '/' + yyyy + ' • ' + hh + ':'+ min;
  let data_id = track_id + ", " + today;

  let ls_data_1 = localStorage.getItem("track_data_1") || '0';
  let ls_data_2 = localStorage.getItem("track_data_2");
  let ls_data_3 = localStorage.getItem("track_data_3");
  let ls_data_4 = localStorage.getItem("track_data_4");
  let ls_data_5 = localStorage.getItem("track_data_5");
  let ls_data_6 = localStorage.getItem("track_data_6");
  let ls_data_7 = localStorage.getItem("track_data_7");
  let ls_data_8 = localStorage.getItem("track_data_8");
  let ls_data_9 = localStorage.getItem("track_data_9");
  let ls_data_10 = localStorage.getItem("track_data_10");
  let ls_data_11 = localStorage.getItem("track_data_11");
  let ls_data_12 = localStorage.getItem("track_data_12");
  let ls_data_13 = localStorage.getItem("track_data_13");
  let ls_data_14 = localStorage.getItem("track_data_14");
  let ls_data_15 = localStorage.getItem("track_data_15");
  let ls_data_16 = localStorage.getItem("track_data_16");
  let ls_data_17 = localStorage.getItem("track_data_17");
  let ls_data_18 = localStorage.getItem("track_data_18");
  let ls_data_19 = localStorage.getItem("track_data_19");
  let ls_data_20 = localStorage.getItem("track_data_20");
  let ls_data_21 = localStorage.getItem("track_data_21");
  let ls_data_22 = localStorage.getItem("track_data_22");
  let ls_data_23 = localStorage.getItem("track_data_23");
  let ls_data_24 = localStorage.getItem("track_data_24");
  let ls_data_25 = localStorage.getItem("track_data_25");
  let ls_data_26 = localStorage.getItem("track_data_26");
  let ls_data_27 = localStorage.getItem("track_data_27");
  let ls_data_28 = localStorage.getItem("track_data_28");
  let ls_data_29 = localStorage.getItem("track_data_29");
  let ls_data_30 = localStorage.getItem("track_data_30");


  if(data_id.split(',')[0] != ls_data_1.split(',')[0] && ls_data_1 != null){
    localStorage.setItem("track_data_1", data_id);
    localStorage.setItem("track_data_2", ls_data_1);
    localStorage.setItem("track_data_3", ls_data_2);
    localStorage.setItem("track_data_4", ls_data_3);
    localStorage.setItem("track_data_5", ls_data_4);
    localStorage.setItem("track_data_6", ls_data_5);
    localStorage.setItem("track_data_7", ls_data_6);
    localStorage.setItem("track_data_8", ls_data_7);
    localStorage.setItem("track_data_9", ls_data_8);
    localStorage.setItem("track_data_10", ls_data_9);
    localStorage.setItem("track_data_11", ls_data_10);
    localStorage.setItem("track_data_12", ls_data_11);
    localStorage.setItem("track_data_13", ls_data_12);
    localStorage.setItem("track_data_14", ls_data_13);
    localStorage.setItem("track_data_15", ls_data_14);
    localStorage.setItem("track_data_16", ls_data_15);
    localStorage.setItem("track_data_17", ls_data_16);
    localStorage.setItem("track_data_18", ls_data_17);
    localStorage.setItem("track_data_19", ls_data_18);
    localStorage.setItem("track_data_20", ls_data_19);
    localStorage.setItem("track_data_21", ls_data_20);
    localStorage.setItem("track_data_22", ls_data_21);
    localStorage.setItem("track_data_23", ls_data_22);
    localStorage.setItem("track_data_24", ls_data_23);
    localStorage.setItem("track_data_25", ls_data_24);
    localStorage.setItem("track_data_26", ls_data_25);
    localStorage.setItem("track_data_27", ls_data_26);
    localStorage.setItem("track_data_28", ls_data_27);
    localStorage.setItem("track_data_29", ls_data_28);
    localStorage.setItem("track_data_30", ls_data_29);   
  }else{
  } 
}

function trackOptions(e){
  let trackId = e.parentElement.getAttribute('li-index');

  var favoritIt = allMusicView.filter(x => x.id === trackId);

  let placeholder = document.querySelector(".search-options-box");
  placeholder.innerHTML = '';
  let element = `
  <div class="track-options-screen">

    <div class="track-options-controls" onclick="trackHideOptions();">
    </div>

    <div class="track-options-header">
      <img src="images/${favoritIt[0].img}.jpg">
      <p>${favoritIt[0].name}</p>
      <span>${favoritIt[0].artist}</span>
    </div>

    <div class="track-options-menu" track-data="${favoritIt[0].id}" album-data="${favoritIt[0].album}" album-premiere="${favoritIt[0].album_premiere}" album-img="${favoritIt[0].album_cover}" >

      <div class="track-options-item" id="trackFavoriteBtn" onclick="trackOption_Favorite(this)">
        <i class="fa-solid fa-heart"></i>
        <p> Dodaj Do Ulubionych</p>
      </div>

      <div class="track-options-item" id="${favoritIt[0].id}" onclick="artistScreenDataLoad(this);trackHideOptions();">
        <i class="fa-solid fa-user"></i>
        <p> Pokaż Wykonawca</p>
      </div>

      <div class="track-options-item" artist-data="${favoritIt[0].artist_id}" data-album="${favoritIt[0].album}" onclick="clickedSingleAlbum(this);trackHideOptions();fastLoadingPop();">
        <i class="fa-solid fa-compact-disc"></i>
        <p> Pokaż Album</p>
      </div>

      <div class="track-options-item" onclick="trackOption_Share(this)">
        <i class="fa-solid fa-share-nodes"></i>
        <p> Udostępnij</p>
      </div>

    </div>

  </div>`;
  placeholder.insertAdjacentHTML("beforeend", element);
  setTimeout(() => {
    document.querySelector(".track-options-screen").classList.add("active");
  }, 100);

    let trackOptionFavorite = document.querySelector("#trackFavoriteBtn");
    let trackOptionFavoriteIcon = document.querySelector("#trackFavoriteBtn i");
    let trackOptionFavoriteText = document.querySelector("#trackFavoriteBtn p");

    let trackID = document.querySelector('.track-options-menu').getAttribute('track-data');
    trackID--;

    if (allMusicView[trackID].status === "favorite") {
      trackOptionFavorite.classList.add('active');
      trackOptionFavoriteIcon.classList.remove('fa-regular')
      trackOptionFavoriteIcon.classList.add('fa-solid')
      trackOptionFavoriteText.innerText = " Polubiono";
    }
    if (allMusicView[trackID].status === "nostatus") {
      trackOptionFavorite.classList.remove('active');
      trackOptionFavoriteIcon.classList.add('fa-regular')
      trackOptionFavoriteIcon.classList.remove('fa-solid')
      trackOptionFavoriteText.innerText = " Dodaj Do Ulubionych";
    }
}

function trackOption_Album(e){
   const albumNameData = e.parentElement.getAttribute("album-data");
   const albumPremiereData = e.parentElement.getAttribute("album-premiere");
   const albumImgData = e.parentElement.getAttribute("album-img");

   albumScreen.classList.add("active");
   albumScreenTitle.innerText = albumNameData;
   albumScreenPremiere.innerText = albumPremiereData;
   albumScreenAlbumImg.src = albumImgData;
   albumScreenArtistImg.src = albumImgData;

   let lastViewedAlbum = localStorage.getItem("lastViewedAlbum_1");
   localStorage.setItem("lastViewedAlbum_2", lastViewedAlbum)
   localStorage.setItem("lastViewedAlbum_1", albumNameData)
   
   if(albumNameData === lastViewedAlbum){
     localStorage.setItem("lastViewedAlbum_2", "")
   }

   const resultsFAV = document.querySelector(".music-artist-album-screen-container");
   var favoritIt = allMusicView.filter(x => x.album === albumNameData);
   resultsFAV.innerHTML = "";
   for (let i = 0; i < favoritIt.length; i++) {
     let resultFAV =
       `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
             <div class="music-artist-album-item-data">
                 <h1>${favoritIt[i].name}</h1>
                 <span>${favoritIt[i].artist}</span>
             </div>
        </div>`;
     resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
     albumScreenSongsNumber.innerText = $('.music-artist-album-screen-container .music-artist-album-item').length;
   }
   let albumNumberSongs = $('.music-artist-album-item').length;
   if(albumNumberSongs > 1){
     albumScreenAlbumText.innerText = "Album";
   }else if(albumNumberSongs = 1){
     albumScreenAlbumText.innerText = "Singiel";
   }

   if (localStorage.getItem("lastViewedAlbum_2").length > 0) {
     uiLastViewedAlbumsLoad();
   }else{
       uiLastViewedAlbum_1.style.display="none";
       uiLastViewedAlbum_2.style.display="none";
   }
}

function trackOption_Favorite(data){
  let trackID = data.parentElement.getAttribute('track-data');
  trackID--;

  let trackOptionFavorite = document.querySelector("#trackFavoriteBtn");
  let trackOptionFavoriteIcon = document.querySelector("#trackFavoriteBtn i");
  let trackOptionFavoriteText = document.querySelector("#trackFavoriteBtn p");

  if (allMusicView[trackID].status === "favorite") {
    allMusicView[trackID].status = "nostatus";
    localStorage.setItem(allMusicView[trackID].id, allMusicView[trackID].status);
  }else if (allMusicView[trackID].status === "nostatus") {
    allMusicView[trackID].status = "favorite";
    localStorage.setItem(allMusicView[trackID].id, allMusicView[trackID].status);
  }

  favoriteLoadItems();
  
  if (allMusicView[trackID].status === "favorite") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Liked</span>';
    musicTopOptionsFavorite.classList.add('active')
    favoritBtn.classList.add('active')
    favoritBtn.classList.add('fa-solid')
    favoritBtn.classList.remove('fa-regular')
    trackOptionFavorite.classList.add('active');
    trackOptionFavoriteIcon.classList.remove('fa-regular')
    trackOptionFavoriteIcon.classList.add('fa-solid')
    trackOptionFavoriteText.innerText = " Polubiono";
  }
  if (allMusicView[trackID].status === "nostatus") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Like</span>';
    musicTopOptionsFavorite.classList.remove('active')
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')
    trackOptionFavorite.classList.remove('active');
    trackOptionFavoriteIcon.classList.add('fa-regular')
    trackOptionFavoriteIcon.classList.remove('fa-solid')
    trackOptionFavoriteText.innerText = " Dodaj Do Ulubionych";
  }
}

function trackOption_Share(data){
  let trackID = data.parentElement.getAttribute('track-data');

  var shareLink = document.createElement('input'),
  text = "https://akstudiopl.github.io/Zesia/" + "#" + trackID;
  document.body.appendChild(shareLink);
  shareLink.value = text;
  shareLink.select();
  document.execCommand('copy');
  document.body.removeChild(shareLink);
}

function trackOption_Artist(element){
  var dataAttribute = element.parentElement.getAttribute('track-data');
  musicArtistScreen.classList.add('active')
  musicMenuHide.classList.remove('active')
  albumScreen.classList.remove('active');
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  libraryScreen.classList.remove('active');
  searchScreen.classList.remove('active');
  bioCard.classList.remove("active");
  userProfile.classList.remove("active");
  fastLoadingPop();

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

  favoritIt.sort(function(a, b){
      return b.album_premiere - a.album_premiere;
  });

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <h1 class="music-artist-content-number">${i + 1}</h1>
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  indexNumb = currentIndexNumb;

  checkFollowStatus();

  $(".music-artist-content-container").html($(".music-artist-content-container .music-artist-content-item").sort(function(){
}));}

function trackHideOptions(){
  document.querySelector(".track-options-screen").classList.remove("active");
}

const albumStatus = document.querySelector(".album-favorite-status");

function albumFavoriteToggle(obj){

  albumStatus.classList.toggle("active");
  let album_ArtistId = obj.parentElement.parentElement.parentElement.querySelector(".music-artist-album-fast-data-img").getAttribute('artist-data');
  let album_Name = obj.parentElement.parentElement.parentElement.querySelector(".music-artist-album-fast-data-img").getAttribute('data-album')
 
  var followFilter = allMusicView.filter(x => x.artist_id === album_ArtistId && x.album === album_Name);

  for (let i = 0; i < followFilter.length; i++) {

    if (followFilter[i].album_status === "true") {
      followFilter[i].album_status = "false";
      localStorage.removeItem(followFilter[i].artist_id + " " + followFilter[i].album);
    }else if (followFilter[i].album_status === "false") {
      followFilter[i].album_status = "true";
      localStorage.setItem(followFilter[i].artist_id + " " + followFilter[i].album, followFilter[i].album_status);
    }

  }
}

function checkAlbumStatus(){
  let album_ArtistId = document.querySelector(".music-artist-album-fast-data-img").getAttribute('artist-data');
  let album_Name = document.querySelector(".music-artist-album-fast-data-img").getAttribute('data-album');

  var followFilter = allMusicView.filter(x => x.artist_id === album_ArtistId && x.album === album_Name);

  for (let i = 0; i < followFilter.length; i++) {
    if (followFilter[i].album_status === "true") {
      albumStatus.classList.add("active");
    }else if (followFilter[i].album_status === "false") {
      albumStatus.classList.remove("active");
    }
}}

function checkLocalStorageAlbum(){

  var followFilter = allMusicView;

  for (let i = 0; i < followFilter.length; i++) {

    if (localStorage.getItem(followFilter[i].artist_id + " " + followFilter[i].album) === null) {
      followFilter[i].album_status = "false";
    }else if (localStorage.getItem(followFilter[i].artist_id + " " + followFilter[i].album) === "true"){
      followFilter[i].album_status = "true";
    }

  }
} 

function homeFavortiesAlbums() {
  const resultsFAV = document.querySelector(".favorites-albums-container .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.album_status === "true");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="fastLoadingPop(); clickedSingleAlbum(this)" artist-data='${favoritIt[i].artist_id}' data-album='${favoritIt[i].album}'>
          <img src="${favoritIt[i].album_cover}">
          <h2>${favoritIt[i].album}</h2>
          <p>${favoritIt[i].artist}</p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.favorites-albums-container .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('artist-data');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });

  $('.favorites-albums-container .center-container-scrollable .center-container-item').slice(6).remove()
}

homeFavortiesAlbums();

const playlistScreen = document.querySelector(".music-playlist-album-screen");
const playlistExit = document.querySelector(".music-playlist-album-screen-exit");

const playlistImg = document.querySelector(".music-playlist-album-screen-img-background img");
const playlistTitle = document.querySelector(".music-playlist-album-fast-data-name");
const playlistTracksCounter = document.querySelector(".music-playlist-album-screen-length");
const playlistArtist = document.querySelector(".music-playlist-album-screen-option");
const playlistResult = document.querySelector(".music-playlist-album-screen-container");

playlistExit.addEventListener('click', () => {
  playlistScreen.classList.remove('active')
})

function clickedSinglePlaylist(e){
  let playlistData_Img = e.getAttribute("playlist-img");
  let playlistData_Artist = e.getAttribute("artist-data");
  let playlistData_Album = e.getAttribute("data-album");
  let playlistData_ArtistName = e.getAttribute("artist-name");
  let playlistData_ArtistStyle = e.getAttribute("artist-style");
  let playlistData_Name = e.querySelector("h2").innerText;
  let playlistData_Description = e.getAttribute("playlist-description");

  let playlistFilter = e.getAttribute("playlist-filter");
  let playlistStyle = e.getAttribute("playlist-style");

  if(playlistFilter){

    if(playlistFilter === "Complete"){
      var favoritIt = allMusicView.filter(x => x.artist_id === playlistData_Artist || x.colaboration === playlistData_ArtistName);
      playlistTracksCounter.innerText = favoritIt.length;

      playlistResult.setAttribute('playlist-filter', playlistFilter)
      playlistResult.setAttribute('artist-name', playlistData_ArtistName)
      playlistResult.setAttribute('artist-data', playlistData_Artist)
      
      playlistResult.innerHTML = "";
      for (let i = 0; i < favoritIt.length; i++) {
        let resultFAV =
          `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img src="${favoritIt[i].img_mini}">
                <div class="music-artist-album-item-data">
                    <h1>${favoritIt[i].name}</h1>
                    <span>${favoritIt[i].artist}</span>
                </div>
                <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
           </div>`;
           playlistResult.insertAdjacentHTML("beforeend", resultFAV);
      }
      
    }else if(playlistFilter === "Radio"){
      var favoritIt = allMusicView.filter(x => x.artist_id === playlistData_Artist || x.colaboration === playlistData_ArtistName || x.style === playlistData_ArtistStyle).slice(0, 50);
      
      playlistResult.setAttribute('playlist-filter', playlistFilter)
      playlistResult.setAttribute('playlist-style', playlistData_ArtistStyle)
      playlistResult.setAttribute('artist-name', playlistData_ArtistName)
      playlistResult.setAttribute('artist-data', playlistData_Artist)
      playlistResult.setAttribute('artist-style', playlistData_ArtistStyle)

      playlistResult.innerHTML = "";
      for (let i = 0; i < favoritIt.length && i < 50; i++) {
        let resultFAV =
          `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img src="${favoritIt[i].img_mini}">
                <div class="music-artist-album-item-data">
                    <h1>${favoritIt[i].name}</h1>
                    <span>${favoritIt[i].artist}</span>
                </div>
                <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
           </div>`;
           playlistResult.insertAdjacentHTML("beforeend", resultFAV);
      }

      playlistTracksCounter.innerText = document.querySelectorAll(".music-playlist-album-screen-container .music-artist-album-item").length;
    }

  }else if(playlistStyle){
      var playlistStyleContent = allMusicView.filter(x => x.artist_id === playlistData_Artist && x.style === playlistData_ArtistStyle);
      var playlistStyleArtist = allMusicView.filter(x => x.style === playlistData_ArtistStyle && x.artist_id != playlistData_Artist);

      playlistResult.setAttribute('playlist-style', playlistData_ArtistStyle)
      playlistResult.setAttribute('artist-data', playlistData_Artist)

      var favoritIt = playlistStyleContent.concat(playlistStyleArtist).slice(0, 50);
      playlistResult.innerHTML = "";
      for (let i = 0; i < favoritIt.length; i++) {
        let resultFAV =
          `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
          <img src="${favoritIt[i].img_mini}">
                <div class="music-artist-album-item-data">
                    <h1>${favoritIt[i].name}</h1>
                    <span>${favoritIt[i].artist}</span>
                </div>
                <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
           </div>`;
           playlistResult.insertAdjacentHTML("beforeend", resultFAV);
      }

      playlistTracksCounter.innerText = document.querySelectorAll(".music-playlist-album-screen-container .music-artist-album-item").length;
  }

  playlistScreen.classList.add('active');
  playlistImg.src = playlistData_Img;
  playlistTitle.innerText = playlistData_Name;
  playlistArtist.innerText = playlistData_Description;

  loseFocus();
}

function historyScreenToggle(){
  const historyScreen = document.querySelector(".history-screen");

  historyScreen.classList.toggle('active')
  historyData();
}

function historyData(){
  if(document.querySelector('.history-screen').classList.contains('active')){
    fastLoadingPop();
  }

  const historyResult = document.querySelector(".history-contanier")
  const recent_data_1 = localStorage.getItem("track_data_1").split(',')[0];
  const recent_data_2 = localStorage.getItem("track_data_2").split(',')[0];
  const recent_data_3 = localStorage.getItem("track_data_3").split(',')[0];
  const recent_data_4 = localStorage.getItem("track_data_4").split(',')[0];
  const recent_data_5 = localStorage.getItem("track_data_5").split(',')[0];
  const recent_data_6 = localStorage.getItem("track_data_6").split(',')[0];
  const recent_data_7 = localStorage.getItem("track_data_7").split(',')[0];
  const recent_data_8 = localStorage.getItem("track_data_8").split(',')[0];
  const recent_data_9 = localStorage.getItem("track_data_9").split(',')[0];
  const recent_data_10 = localStorage.getItem("track_data_10").split(',')[0];
  const recent_data_11 = localStorage.getItem("track_data_11").split(',')[0];
  const recent_data_12 = localStorage.getItem("track_data_12").split(',')[0];
  const recent_data_13 = localStorage.getItem("track_data_13").split(',')[0];
  const recent_data_14 = localStorage.getItem("track_data_14").split(',')[0];
  const recent_data_15 = localStorage.getItem("track_data_15").split(',')[0];
  const recent_data_16 = localStorage.getItem("track_data_16").split(',')[0];
  const recent_data_17 = localStorage.getItem("track_data_17").split(',')[0];
  const recent_data_18 = localStorage.getItem("track_data_18").split(',')[0];
  const recent_data_19 = localStorage.getItem("track_data_19").split(',')[0];
  const recent_data_20 = localStorage.getItem("track_data_20").split(',')[0];
  const recent_data_21 = localStorage.getItem("track_data_21").split(',')[0];
  const recent_data_22 = localStorage.getItem("track_data_22").split(',')[0];
  const recent_data_23 = localStorage.getItem("track_data_23").split(',')[0];
  const recent_data_24 = localStorage.getItem("track_data_24").split(',')[0];
  const recent_data_25 = localStorage.getItem("track_data_25").split(',')[0];
  const recent_data_26 = localStorage.getItem("track_data_26").split(',')[0];
  const recent_data_27 = localStorage.getItem("track_data_27").split(',')[0];
  const recent_data_28 = localStorage.getItem("track_data_28").split(',')[0];
  const recent_data_29 = localStorage.getItem("track_data_29").split(',')[0];
  const recent_data_30 = localStorage.getItem("track_data_30").split(',')[0];

  var favoritIt = allMusicView.filter(x => x.id === recent_data_1 || x.id === recent_data_2 || x.id === recent_data_3 || x.id === recent_data_4 || x.id === recent_data_5 || x.id === recent_data_6 || x.id === recent_data_7 || x.id === recent_data_8 || x.id === recent_data_9 || x.id === recent_data_10 || x.id === recent_data_11 || x.id === recent_data_12 || x.id === recent_data_13 || x.id === recent_data_14 || x.id === recent_data_15 || x.id === recent_data_16 || x.id === recent_data_17 || x.id === recent_data_18 || x.id === recent_data_19 || x.id === recent_data_20 || x.id === recent_data_21 || x.id === recent_data_22 || x.id === recent_data_23 || x.id === recent_data_24 || x.id === recent_data_25 || x.id === recent_data_26 || x.id === recent_data_27 || x.id === recent_data_28 || x.id === recent_data_29 || x.id === recent_data_30);
  historyResult.innerHTML = "";
  
  for (let i = 1; i < 31; i++) {

    let localStorage_custom = 'track_data_' + [i];
    let id_custom = localStorage.getItem(localStorage_custom).split(',')[0];
    let time_custom = localStorage.getItem(localStorage_custom).split(',')[1];

    var favoritIt = allMusicView.filter(x => x.id === id_custom);

    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <img src="${favoritIt[i].img_mini}">
              <div class="music-artist-album-item-data">
                  <h1>${favoritIt[i].name}</h1>
                  <span>${time_custom}</span>
              </div>
              <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
         </div>`;
         historyResult.insertAdjacentHTML("beforeend", resultFAV);
    }
  }
  loseFocus();
}

const yourStyleData = ['https://celebs.infoseemedia.com/wp-content/uploads/2022/01/Bebe-Rexha.png', 'https://www.pngplay.com/wp-content/uploads/6/Ariana-Grande-PNG.png', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c8c4f299-4064-433b-8a7c-90baccbc0f4c/dalyen5-220038e0-69ba-40ab-b7d3-878750f483d3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M4YzRmMjk5LTQwNjQtNDMzYi04YTdjLTkwYmFjY2JjMGY0Y1wvZGFseWVuNS0yMjAwMzhlMC02OWJhLTQwYWItYjdkMy04Nzg3NTBmNDgzZDMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ys6BFp1BHpTlh8_vrslXSLY-bHTtaVCjuOMN-rnNUeg', 'https://www.pngall.com/wp-content/uploads/5/Dua-Lipa-Singer.png', 'https://i.pinimg.com/originals/41/ec/9b/41ec9bc1aa2956d248874d5b070fbc1d.png', 'https://www.pngarts.com/files/5/Twenty-One-Pilots-PNG-Pic.png', 'https://cdn140.picsart.com/303892030129201.png', 'sources/897-8975430_postmalone-sticker-post-malone.png', 'https://i.pinimg.com/originals/1e/86/14/1e8614488ecf119e1a8bc9fdc03fb5c0.png', 'https://www.nicepng.com/png/full/325-3255450_ed-sheeran-ed-sheeran-no-background.png', 'https://en.picmix.com/stamp/download?stampId=1851919&key=b4cb1', 'https://en.picmix.com/stamp/download?stampId=2009137&key=c2ccd', 'https://en.picmix.com/stamp/download?stampId=2241077&key=ad5b2', 'https://www.pngkey.com/png/full/791-7912347_zara-sticker-zara-larsson.png', 'https://www.pngmart.com/files/2/Rita-Ora-PNG-Photo.png'];
const yourStyleText = ['Pop', 'Chill', 'Energic', 'Hip-Hop', 'Latino', 'Workout', 'Rock'];
const personalStyleItem = document.querySelector(".personal-item");
const personalStyleItem_Img= document.querySelector(".personal-item img");
const personalStyleItem_Title = document.querySelector(".personal-item h1");
const personalStyleItem_BackTitle = document.querySelector(".personal-item h1:last-child");

function personalItem(){
  let randomPersonalIndex = Math.floor((Math.random() * yourStyleData.length));
  let randomPersonalText = Math.floor((Math.random() * yourStyleText.length));

  personalStyleItem_Img.src = yourStyleData[randomPersonalIndex];
  personalStyleItem_Title.innerText = yourStyleText[randomPersonalText];
  personalStyleItem_BackTitle.innerText = yourStyleText[randomPersonalText];
  personalStyleItem.setAttribute('style-data', yourStyleText[randomPersonalText])
}

personalItem();


function library_load_albums() {
  const resultsFAV = document.querySelector(".library-slider .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.album_status === "true");
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="fastLoadingPop();clickedSingleAlbum(this);" artist-data='${favoritIt[i].artist_id}' data-album='${favoritIt[i].album}'>
          <img src="${favoritIt[i].album_cover}">
          <div class="center-container-album-data">
            <h2>${favoritIt[i].album}</h2>
            <p>${favoritIt[i].artist} • ${favoritIt[i].album_premiere}</p>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.library-slider .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('artist-data');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });
}

function library_load_artists() {
  const resultsFAV = document.querySelector(".library-slider .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.artist_status === "followed");
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="fastLoadingPop();artistScreenDataLoad(this);" id='${favoritIt[i].id}' artist-id='${favoritIt[i].artist_id}' artist-data='${favoritIt[i].artist}'>
          <img src="artists/${favoritIt[i].avatar}.jpg">
          <div class="center-container-album-data">
            <h2>${favoritIt[i].artist}</h2>
            <p>Artist • Verified</p>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.library-slider .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('artist-id');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });
}

library_load_artists();
library_load_albums();

function settings_LyricsImprovment(){
  if(localStorage.lyricsAccouracyImprove){
    localStorage.removeItem('lyricsAccouracyImprove');
  }else{
    localStorage.setItem('lyricsAccouracyImprove', '1');
  }
}

const yourStyleScreen = document.querySelector('.yourStyle-container'),
yourStyleScreen_title = yourStyleScreen.querySelector('.yourStyle-top p')
yourStyleScreen_img = yourStyleScreen.querySelector('.yourStyle-top .yourStyle-background')
yourStyleScreen_info = yourStyleScreen.querySelector('.yourStyle-option span')
yourStyleScreen_playlists = yourStyleScreen.querySelector('.yourStyle-playlists')
yourStyleScreen_songs = yourStyleScreen.querySelector('.yourStyle-songs')
yourStyleScreen_artists = yourStyleScreen.querySelector('.yourStyle-artists')
function exitYourStyle(){
  yourStyleScreen.classList.remove('active');
}

function yourStyleLoad(e){
  let styleData = e.getAttribute('style-data');

  let yourStyleView = allMusicView.filter(x => x.style === styleData);
  let yourStyleIndex = Math.floor((Math.random() * yourStyleView.length));
  let yourStyleViewPlaylist = allPlaylists.filter(x => x.play_style === styleData);

  yourStyleScreen_title.innerText = styleData;
  yourStyleScreen_info.innerText = styleData;
  yourStyleScreen_img.src = `artists/${yourStyleView[yourStyleIndex].avatar}.jpg`;
  yourStyleScreen.classList.add('active');

  yourStyleScreen_songs.innerHTML = "";
  for (let i = 0; i < yourStyleView.length && i < 16; i++) {
    let resultFAV =
    `<div class="yourStyle-item" li-index="${yourStyleView[i].id}" onclick="clickedSingle(this)">
        <img src="images/${yourStyleView[i].img}.jpg">
        <p>${yourStyleView[i].name}</p>
        <span>${yourStyleView[i].artist}</span>
    </div>`;
    yourStyleScreen_songs.insertAdjacentHTML("beforeend", resultFAV);
  }

  yourStyleScreen_playlists.innerHTML = "";

  for (let i = 0; i < yourStyleViewPlaylist.length && i < 6; i++) {
    let resultFAV =
    `<div class="yourStyle-item" playlist-id="${yourStyleViewPlaylist[i].play_id}" onclick="clickedPlaylist(this)">
        <img src="${yourStyleViewPlaylist[i].image}">
        <p>${yourStyleViewPlaylist[i].name}</p>
        <span>${yourStyleViewPlaylist[i].description}</span>
    </div>`;
    yourStyleScreen_playlists.insertAdjacentHTML("beforeend", resultFAV);
  }

  yourStyleScreen_artists.innerHTML = "";
  for (let i = 0; i < yourStyleView.length; i++) {
    let resultFAV =
    `<div class="yourStyle-item" onclick="artistScreenDataLoad(this);exitYourStyle()" id="${yourStyleView[i].id}" artist-data="${yourStyleView[i].artist}" onclick="clickedSingle(this)">
        <img src="artists/${yourStyleView[i].avatar}.jpg">
        <p>${yourStyleView[i].artist}</p>
    </div>`;
    yourStyleScreen_artists.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.yourStyle-artists .yourStyle-item').each(function(){
      var prodId = $(this).attr('artist-data');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });
}

function recentTracksLoad(){

  const recent_data_1 = localStorage.getItem("track_data_1").split(',')[0];;
  const recent_data_2 = localStorage.getItem("track_data_2").split(',')[0];;
  const recent_data_3 = localStorage.getItem("track_data_3").split(',')[0];;
  const recent_data_4 = localStorage.getItem("track_data_4").split(',')[0];;
  const recent_data_5 = localStorage.getItem("track_data_5").split(',')[0];;
  const recent_data_6 = localStorage.getItem("track_data_6").split(',')[0];;
  const recent_data_7 = localStorage.getItem("track_data_7").split(',')[0];;
  const recent_data_8 = localStorage.getItem("track_data_8").split(',')[0];;
  const recent_data_9 = localStorage.getItem("track_data_9").split(',')[0];;
  const recent_data_10 = localStorage.getItem("track_data_10").split(',')[0];;
  const recent_data_11 = localStorage.getItem("track_data_11").split(',')[0];;
  const recent_data_12 = localStorage.getItem("track_data_12").split(',')[0];;

  resultsFAV = document.querySelector("#recent-tracks-container .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.id === recent_data_1 || x.id === recent_data_2 || x.id === recent_data_3 || x.id === recent_data_4 || x.id === recent_data_5 || x.id === recent_data_6 || x.id === recent_data_7 || x.id === recent_data_8 || x.id === recent_data_9 || x.id === recent_data_10 || x.id === recent_data_11 || x.id === recent_data_12);
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" link_to='${favoritIt[i].id}' onclick="clickedNotification(this);">
       <img src="images/${favoritIt[i].img}.jpg">
       <h2>${favoritIt[i].name}</h2>
       <p>${favoritIt[i].artist}</p>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  if(favoritIt.length > 3){
    document.querySelector("#recent-tracks-container").style.display="flex";
  }else{
    document.querySelector("#recent-tracks-container").style.display="none";
  }
}

function searchContentLoad() {
  const resultsFAV = document.querySelector(".search-results");
  resultsFAV.innerHTML = "";
  var favoritIt = allMusicView;

  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item album-box" data-album='${favoritIt[i].album}' artist-data='${favoritIt[i].artist_id}' onclick="clickedSingleAlbum(this)">
        <img data-lazy="${favoritIt[i].album_cover}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].album}</h1>
            <span>Album • ${favoritIt[i].artist} • ${favoritIt[i].album_premiere}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

    var productIds={};
    $('.search-results .music-artist-content-item.album-box').each(function(){
        var prodId = $(this).attr('data-album');
        var prodName = $(this).attr('artist-data');
        if(productIds[prodId] && productIds[prodName]){
          $(this).remove();
        }else{
          productIds[prodId] = true;
          productIds[prodName] = true;
        }
    });
  }

  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item track-box" li-index='${favoritIt[i].id}' onclick="clickedSingle(this)">
        <img data-lazy="${favoritIt[i].img_mini}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].artist} ${'• ' + favoritIt[i].colaboration || ''} • ${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  for (let i = 0; i < allPlaylists.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item playlist-box" onclick="clickedPlaylist(this)" playlist-id="${allPlaylists[i].play_id}">
        <img data-lazy="${allPlaylists[i].image}">
          <div class="music-artist-content-item-data">
            <h1>${allPlaylists[i].name}</h1>
            <span>Playlist By ${allPlaylists[i].play_author}</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  for (let i = 0; i < favoritIt.length; i++) {
    let artistsFAV =
      `<div class="music-artist-content-item artist-box" artist-id="${favoritIt[i].artist_id}" artist-data="${favoritIt[i].artist}" id='${favoritIt[i].id}' onclick="artistScreenDataLoad(this);">
        <img data-lazy="${favoritIt[i].artist_img}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].artist}</h1>
            <span>Artist • Verified</span>
          </div>
       </div>`;
    resultsFAV.insertAdjacentHTML("afterbegin", artistsFAV);
  }

  const key = 'artist_id';
  const uniqueIt = [...new Map(allMusicView.map(item => [item[key], item])).values()]

  for (let i = 0; i < uniqueIt.length; i++) {
    if(uniqueIt[i].artist_status === "followed"){
      document.querySelector('.music-artist-content-item.artist-box[artist-id="' + uniqueIt[i].artist_id + '"] h1').innerHTML = uniqueIt[i].artist + "<p>Followed</p>"; 
    }
  }

  var productIds={};
  $('.search-results .music-artist-content-item.artist-box').each(function(){
      var prodId = $(this).attr('artist-id');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });
  
  loseFocus();
  let targets = document.querySelectorAll('.search-results .music-artist-content-item img');
  targets.forEach(lazyLoad);
}


const searchInput = document.querySelector(".search-input");
const searchInput_clear = document.querySelector(".search-input-btn");
const searchResults = document.querySelector('.search-results');
searchInput.addEventListener('input', function(){
  search_Loading();
  setTimeout(() => {
    searchFunction();
  }, 100);
  searchClearButton();
})

function searchClearButton(){
  if(searchInput.value === ""){
    searchInput_clear.classList.remove('active');
    searchResults.style.display = 'none';
  }else{
    searchInput_clear.classList.add('active');
    searchResults.style.display = 'flex';
  }
}

function searchFunction(){
  let input = searchInput.value
  input = input.toLowerCase().replace(/ /g,'');
  let x = document.querySelectorAll('.search-results .music-artist-content-item');
  let xData = document.querySelectorAll('.search-results .music-artist-content-item-data');
    
  for (i = 0; i < x.length; i++) { 
      if (!xData[i].innerText.toLowerCase().replace(/ /g,'').includes(input)) {
          x[i].style.display="none";
          x[i].classList.remove("searched")
      }
      else {
          x[i].style.display="flex";    
          x[i].classList.add("searched")             
      }
  }

  let artistX = document.querySelectorAll('.search-results .music-artist-content-item.artist-box.searched');
  
  for (i = 0; i < artistX.length; i++) { 
    artistX[i].classList.remove("active");
  }
  if(artistX[0]){
    artistX[0].classList.add("active");
  }

  if(searchBtn_top.classList.contains("active")){
    search_Top();
  }
  if(searchBtn_tracks.classList.contains("active")){
    search_Tracks();
  }
  if(searchBtn_artists.classList.contains("active")){
    search_Artists();
  }
  if(searchBtn_albums.classList.contains("active")){
    search_Albums();
  }
  if(searchBtn_playlists.classList.contains("active")){
    search_Playlists();
  }
}

function reset_animation() {
  smallArtist.style.animation = 'none';
  smallArtist.offsetHeight; /* trigger reflow */
  smallArtist.style.animation = null; 
  smallName.style.animation = 'none';
  smallName.offsetHeight; /* trigger reflow */
  smallName.style.animation = null; 
  musicName.style.animation = 'none';
  musicName.offsetHeight; /* trigger reflow */
  musicName.style.animation = null; 
  musicArtist.style.animation = 'none';
  musicArtist.offsetHeight; /* trigger reflow */
  musicArtist.style.animation = null; 
}

const searchBtn_top = document.querySelector('.search-option-top');
const searchBtn_tracks = document.querySelector('.search-option-track');
const searchBtn_artists = document.querySelector('.search-option-artist');
const searchBtn_albums = document.querySelector('.search-option-album');
const searchBtn_playlists = document.querySelector('.search-option-playlist');

function search_Top(){
  searchBtn_top.classList.add('active');
  searchBtn_tracks.classList.remove('active');
  searchBtn_artists.classList.remove('active');
  searchBtn_albums.classList.remove('active');
  searchBtn_playlists.classList.remove('active');

  const searchTracks = document.querySelectorAll('.search-results .music-artist-content-item.track-box');
  const searchArtists = document.querySelectorAll('.search-results .music-artist-content-item.artist-box');
  const searchAlbums = document.querySelectorAll('.search-results .music-artist-content-item.album-box');
  const searchPlaylists = document.querySelectorAll('.search-results .music-artist-content-item.playlist-box');

  for (i = 0; i < searchArtists.length; i++) { 
    searchArtists[i].classList.remove('hidden')
  }
  for (i = 0; i < searchAlbums.length; i++) { 
    searchAlbums[i].classList.remove('hidden')
  }
  for (i = 0; i < searchTracks.length; i++) { 
    searchTracks[i].classList.remove('hidden')
  }
  for (i = 0; i < searchPlaylists.length; i++) { 
    searchPlaylists[i].classList.remove('hidden')
  }

  search_Loading();
}

function search_Tracks(){
  searchBtn_top.classList.remove('active');
  searchBtn_tracks.classList.add('active');
  searchBtn_artists.classList.remove('active');
  searchBtn_albums.classList.remove('active');
  searchBtn_playlists.classList.remove('active');

  const searchTracks = document.querySelectorAll('.search-results .music-artist-content-item.track-box');
  const searchArtists = document.querySelectorAll('.search-results .music-artist-content-item.artist-box');
  const searchAlbums = document.querySelectorAll('.search-results .music-artist-content-item.album-box');
  const searchPlaylists = document.querySelectorAll('.search-results .music-artist-content-item.playlist-box');

  for (i = 0; i < searchTracks.length; i++) { 
    searchTracks[i].classList.remove('hidden')
  }
  for (i = 0; i < searchArtists.length; i++) { 
    searchArtists[i].classList.add('hidden')
  }
  for (i = 0; i < searchAlbums.length; i++) { 
    searchAlbums[i].classList.add('hidden')
  }
  for (i = 0; i < searchPlaylists.length; i++) { 
    searchPlaylists[i].classList.add('hidden')
  }
  search_Loading();
}

function search_Artists(){
  searchBtn_top.classList.remove('active');
  searchBtn_tracks.classList.remove('active');
  searchBtn_artists.classList.add('active');
  searchBtn_albums.classList.remove('active');
  searchBtn_playlists.classList.remove('active');

  const searchTracks = document.querySelectorAll('.search-results .music-artist-content-item.track-box');
  const searchArtists = document.querySelectorAll('.search-results .music-artist-content-item.artist-box');
  const searchAlbums = document.querySelectorAll('.search-results .music-artist-content-item.album-box');
  const searchPlaylists = document.querySelectorAll('.search-results .music-artist-content-item.playlist-box');

  for (i = 0; i < searchArtists.length; i++) { 
    searchArtists[i].classList.remove('hidden')
  }
  for (i = 0; i < searchAlbums.length; i++) { 
    searchAlbums[i].classList.add('hidden')
  }
  for (i = 0; i < searchTracks.length; i++) { 
    searchTracks[i].classList.add('hidden')
  }
  for (i = 0; i < searchPlaylists.length; i++) { 
    searchPlaylists[i].classList.add('hidden')
  }

  search_Loading();
}

function search_Albums(){
  searchBtn_top.classList.remove('active');
  searchBtn_tracks.classList.remove('active');
  searchBtn_artists.classList.remove('active');
  searchBtn_albums.classList.add('active');
  searchBtn_playlists.classList.remove('active');

  const searchTracks = document.querySelectorAll('.search-results .music-artist-content-item.track-box');
  const searchArtists = document.querySelectorAll('.search-results .music-artist-content-item.artist-box');
  const searchAlbums = document.querySelectorAll('.search-results .music-artist-content-item.album-box');
  const searchPlaylists = document.querySelectorAll('.search-results .music-artist-content-item.playlist-box');

  for (i = 0; i < searchArtists.length; i++) { 
    searchArtists[i].classList.add('hidden')
  }
  for (i = 0; i < searchAlbums.length; i++) { 
    searchAlbums[i].classList.remove('hidden')
  }
  for (i = 0; i < searchTracks.length; i++) { 
    searchTracks[i].classList.add('hidden')
  }
    for (i = 0; i < searchPlaylists.length; i++) { 
    searchPlaylists[i].classList.add('hidden')
  }

  search_Loading();
}

function search_Albums(){
  searchBtn_top.classList.remove('active');
  searchBtn_tracks.classList.remove('active');
  searchBtn_artists.classList.remove('active');
  searchBtn_albums.classList.add('active');
  searchBtn_playlists.classList.remove('active');
  
  const searchTracks = document.querySelectorAll('.search-results .music-artist-content-item.track-box');
  const searchArtists = document.querySelectorAll('.search-results .music-artist-content-item.artist-box');
  const searchAlbums = document.querySelectorAll('.search-results .music-artist-content-item.album-box');
  const searchPlaylists = document.querySelectorAll('.search-results .music-artist-content-item.playlist-box');

  for (i = 0; i < searchArtists.length; i++) { 
    searchArtists[i].classList.add('hidden')
  }
  for (i = 0; i < searchAlbums.length; i++) { 
    searchAlbums[i].classList.remove('hidden')
  }
  for (i = 0; i < searchTracks.length; i++) { 
    searchTracks[i].classList.add('hidden')
  }
  for (i = 0; i < searchPlaylists.length; i++) { 
    searchPlaylists[i].classList.add('hidden')
  }
  
  search_Loading();
}

function search_Playlists(){
  searchBtn_top.classList.remove('active');
  searchBtn_tracks.classList.remove('active');
  searchBtn_artists.classList.remove('active');
  searchBtn_albums.classList.remove('active');
  searchBtn_playlists.classList.add('active');
  
  const searchTracks = document.querySelectorAll('.search-results .music-artist-content-item.track-box');
  const searchArtists = document.querySelectorAll('.search-results .music-artist-content-item.artist-box');
  const searchAlbums = document.querySelectorAll('.search-results .music-artist-content-item.album-box');
  const searchPlaylists = document.querySelectorAll('.search-results .music-artist-content-item.playlist-box');

  for (i = 0; i < searchArtists.length; i++) { 
    searchArtists[i].classList.add('hidden')
  }
  for (i = 0; i < searchAlbums.length; i++) { 
    searchAlbums[i].classList.add('hidden')
  }
  for (i = 0; i < searchTracks.length; i++) { 
    searchTracks[i].classList.add('hidden')
  }
  for (i = 0; i < searchPlaylists.length; i++) { 
    searchPlaylists[i].classList.remove('hidden')
  }
  
  search_Loading();
}

function search_Loading(){
  const fastloader = document.querySelector(".search-fast-loader");

  if(fastloader.classList.contains('active')){
  }else{
  fastloader.classList.add("active");
  setTimeout(() => {
      fastloader.classList.remove("active");
    }, 500)
  }
}

function clickedPlaylist(data){
  let playlist_ID = data.getAttribute("playlist-id");
  let playlist_LENGTH = Object.keys(allPlaylists[playlist_ID - 1].content).length;
  
  searchScreen.classList.remove('active');
  activeSearchScreen.classList.remove('active')

  playlistScreen.classList.add('active');
  activeHomeScreen.classList.add('active')

  playlistImg.src = allPlaylists[playlist_ID - 1].image;
  playlistTitle.innerText = allPlaylists[playlist_ID - 1].name;
  playlistArtist.innerText = allPlaylists[playlist_ID - 1].description + ' By ' + allPlaylists[playlist_ID - 1].play_author;
  playlistTracksCounter.innerText = playlist_LENGTH;

  clickedPlaylistLoad(data);
}

var playlist_QUEUE;

function clickedPlaylistLoad(data){
  let playlist_ID = data.getAttribute("playlist-id");
  let playlist_LENGTH = Object.keys(allPlaylists[playlist_ID - 1].content).length;
  let playlist_ITEM = allPlaylists[playlist_ID - 1];
  let playlist_FULL = [];
  playlist_ID--;

  playlist_ITEM_1 = allMusicView[allPlaylists[playlist_ID].content.track_1] || null;
  playlist_ITEM_2 = allMusicView[allPlaylists[playlist_ID].content.track_2] || playlist_ITEM_1;
  playlist_ITEM_3 = allMusicView[allPlaylists[playlist_ID].content.track_3] || playlist_ITEM_1;
  playlist_ITEM_4 = allMusicView[allPlaylists[playlist_ID].content.track_4] || playlist_ITEM_1;
  playlist_ITEM_5 = allMusicView[allPlaylists[playlist_ID].content.track_5] || playlist_ITEM_1;
  playlist_ITEM_6 = allMusicView[allPlaylists[playlist_ID].content.track_6] || playlist_ITEM_1;
  playlist_ITEM_7 = allMusicView[allPlaylists[playlist_ID].content.track_7] || playlist_ITEM_1;
  playlist_ITEM_8 = allMusicView[allPlaylists[playlist_ID].content.track_8] || playlist_ITEM_1;
  playlist_ITEM_9 = allMusicView[allPlaylists[playlist_ID].content.track_9] || playlist_ITEM_1;
  playlist_ITEM_10 = allMusicView[allPlaylists[playlist_ID].content.track_10] || playlist_ITEM_1;
  playlist_ITEM_11 = allMusicView[allPlaylists[playlist_ID].content.track_11] || playlist_ITEM_1;
  playlist_ITEM_12 = allMusicView[allPlaylists[playlist_ID].content.track_12] || playlist_ITEM_1;
  playlist_ITEM_13 = allMusicView[allPlaylists[playlist_ID].content.track_13] || playlist_ITEM_1;
  playlist_ITEM_14 = allMusicView[allPlaylists[playlist_ID].content.track_14] || playlist_ITEM_1;
  playlist_ITEM_15 = allMusicView[allPlaylists[playlist_ID].content.track_15] || playlist_ITEM_1;
  playlist_ITEM_16 = allMusicView[allPlaylists[playlist_ID].content.track_16] || playlist_ITEM_1;
  playlist_ITEM_17 = allMusicView[allPlaylists[playlist_ID].content.track_17] || playlist_ITEM_1;
  playlist_ITEM_18 = allMusicView[allPlaylists[playlist_ID].content.track_18] || playlist_ITEM_1;
  playlist_ITEM_19 = allMusicView[allPlaylists[playlist_ID].content.track_19] || playlist_ITEM_1;
  playlist_ITEM_20 = allMusicView[allPlaylists[playlist_ID].content.track_20] || playlist_ITEM_1;
  playlist_ITEM_21 = allMusicView[allPlaylists[playlist_ID].content.track_21] || playlist_ITEM_1;
  playlist_ITEM_22 = allMusicView[allPlaylists[playlist_ID].content.track_22] || playlist_ITEM_1;
  playlist_ITEM_23 = allMusicView[allPlaylists[playlist_ID].content.track_23] || playlist_ITEM_1;
  playlist_ITEM_24 = allMusicView[allPlaylists[playlist_ID].content.track_24] || playlist_ITEM_1;
  playlist_ITEM_25 = allMusicView[allPlaylists[playlist_ID].content.track_25] || playlist_ITEM_1;
  playlist_ITEM_26 = allMusicView[allPlaylists[playlist_ID].content.track_26] || playlist_ITEM_1;
  playlist_ITEM_27 = allMusicView[allPlaylists[playlist_ID].content.track_27] || playlist_ITEM_1;
  playlist_ITEM_28 = allMusicView[allPlaylists[playlist_ID].content.track_28] || playlist_ITEM_1;
  playlist_ITEM_29 = allMusicView[allPlaylists[playlist_ID].content.track_29] || playlist_ITEM_1;
  playlist_ITEM_30 = allMusicView[allPlaylists[playlist_ID].content.track_30] || playlist_ITEM_1;
  playlist_ITEM_31 = allMusicView[allPlaylists[playlist_ID].content.track_31] || playlist_ITEM_1;
  playlist_ITEM_32 = allMusicView[allPlaylists[playlist_ID].content.track_32] || playlist_ITEM_1;
  playlist_ITEM_33 = allMusicView[allPlaylists[playlist_ID].content.track_33] || playlist_ITEM_1;
  playlist_ITEM_34 = allMusicView[allPlaylists[playlist_ID].content.track_34] || playlist_ITEM_1;
  playlist_ITEM_35 = allMusicView[allPlaylists[playlist_ID].content.track_35] || playlist_ITEM_1;
  playlist_ITEM_36 = allMusicView[allPlaylists[playlist_ID].content.track_36] || playlist_ITEM_1;
  playlist_ITEM_37 = allMusicView[allPlaylists[playlist_ID].content.track_37] || playlist_ITEM_1;
  playlist_ITEM_38 = allMusicView[allPlaylists[playlist_ID].content.track_38] || playlist_ITEM_1;
  playlist_ITEM_39 = allMusicView[allPlaylists[playlist_ID].content.track_39] || playlist_ITEM_1;
  playlist_ITEM_40 = allMusicView[allPlaylists[playlist_ID].content.track_40] || playlist_ITEM_1;
  playlist_ITEM_41 = allMusicView[allPlaylists[playlist_ID].content.track_41] || playlist_ITEM_1;
  playlist_ITEM_42 = allMusicView[allPlaylists[playlist_ID].content.track_42] || playlist_ITEM_1;
  playlist_ITEM_43 = allMusicView[allPlaylists[playlist_ID].content.track_43] || playlist_ITEM_1;
  playlist_ITEM_44 = allMusicView[allPlaylists[playlist_ID].content.track_44] || playlist_ITEM_1;
  playlist_ITEM_45 = allMusicView[allPlaylists[playlist_ID].content.track_45] || playlist_ITEM_1;
  playlist_ITEM_46 = allMusicView[allPlaylists[playlist_ID].content.track_46] || playlist_ITEM_1;
  playlist_ITEM_47 = allMusicView[allPlaylists[playlist_ID].content.track_47] || playlist_ITEM_1;
  playlist_ITEM_48 = allMusicView[allPlaylists[playlist_ID].content.track_48] || playlist_ITEM_1;
  playlist_ITEM_49 = allMusicView[allPlaylists[playlist_ID].content.track_49] || playlist_ITEM_1;
  playlist_ITEM_50 = allMusicView[allPlaylists[playlist_ID].content.track_50] || playlist_ITEM_1;

  playlist_FULL = playlist_FULL.concat(playlist_ITEM_1, playlist_ITEM_2, playlist_ITEM_3, playlist_ITEM_4, playlist_ITEM_5, playlist_ITEM_6, playlist_ITEM_7, playlist_ITEM_8, playlist_ITEM_9, playlist_ITEM_10, playlist_ITEM_11, playlist_ITEM_12, playlist_ITEM_13, playlist_ITEM_14, playlist_ITEM_15, playlist_ITEM_16, playlist_ITEM_17, playlist_ITEM_18, playlist_ITEM_19, playlist_ITEM_20, playlist_ITEM_21, playlist_ITEM_22, playlist_ITEM_23, playlist_ITEM_24, playlist_ITEM_25, playlist_ITEM_26, playlist_ITEM_27, playlist_ITEM_28, playlist_ITEM_29, playlist_ITEM_30, playlist_ITEM_31, playlist_ITEM_32, playlist_ITEM_33, playlist_ITEM_34, playlist_ITEM_35, playlist_ITEM_36, playlist_ITEM_37, playlist_ITEM_38, playlist_ITEM_39, playlist_ITEM_40, playlist_ITEM_41, playlist_ITEM_42, playlist_ITEM_43, playlist_ITEM_44, playlist_ITEM_45, playlist_ITEM_46, playlist_ITEM_47, playlist_ITEM_48, playlist_ITEM_49, playlist_ITEM_50);
  const key = 'id';
  playlist_FULL = [...new Map(playlist_FULL.map(item => [item[key], item])).values()];

  globalThis.playlist_QUEUE = playlist_FULL;
  
  favoritIt = playlist_FULL;
  playlistResult.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-album-item" li-index='${favoritIt[i].id}' onclick="playlistQueue(this)">
      <img src="${favoritIt[i].img_mini}">
            <div class="music-artist-album-item-data">
                <h1>${favoritIt[i].name}</h1>
                <span>${favoritIt[i].artist}</span>
            </div>
            <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
       playlistResult.insertAdjacentHTML("beforeend", resultFAV);
  }

  loseFocus();
}

function playlistQueue(element){
  allMusic=playlist_QUEUE;
  let getLiIndex = element.getAttribute("li-index");

  const index = playlist_QUEUE.findIndex(object => {
    return object.id === getLiIndex;
  });

  indexNumb = index + 1;
  loadMusic(indexNumb);
  playMusic();
}

function loadDailyPlaylists(){
  resultsFAV = document.querySelector("#popularPlaylists")
  resultsFAV.innerHTML="";

  for (let i = 0; i < allPlaylists.length && i < 5; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="clickedPlaylist(this)" playlist-id="${allPlaylists[i].play_id}">
        <img src="${allPlaylists[i].image}">
        <h2>${allPlaylists[i].name}</h2>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

function firstLoginUser(){
  let firstLoginScreen =
  `<div class="first-login-user">
      <img src="https://pbs.twimg.com/media/Fcabj0FWIAAKT6-?format=jpg&name=large">
      <div class="first-login-user-bar">
        <div class="first-login-user-bar-completed"></div>
      </div>
      <p>Personalization <span>1/3</span></p>
      <div class="first-login-user-content">
        <span>What's Your Name?</span>
        <input type="text" id="personalization-data-1">
        <a onclick="firstLoginUser_Step2()">Next</a>
      </div>
   </div>`;
   document.body.insertAdjacentHTML("beforeend", firstLoginScreen);

   setTimeout(() => {
    document.querySelector('.first-login-user-bar-completed').style.width = '33%';
   }, 250);
}

function firstLoginUser_Style(e){
  e.classList.toggle('active');
}

function firstLoginUser_Step2(){
  if(document.querySelector('#personalization-data-1').value.length > 1){

    localStorage.setItem('personalization-data-name', document.querySelector('#personalization-data-1').value)

    document.querySelector('.first-login-user-content').innerHTML = `
    <span>Select Your Styles Of Music</span>
    <div class="first-login-user-content-style">
      <a onclick="firstLoginUser_Style(this)">Pop</a><a onclick="firstLoginUser_Style(this)">Hip-Hop</a><a onclick="firstLoginUser_Style(this)">Chill</a><a onclick="firstLoginUser_Style(this)">Energic</a><a onclick="firstLoginUser_Style(this)">Latino</a><a onclick="firstLoginUser_Style(this)">Soundtrack</a>
    </div>
    <a onclick="firstLoginUser_Step3()">Next</a>`

  document.querySelector('.first-login-user-bar-completed').style.width = '66%';
  document.querySelector('.first-login-user p span').innerText = "2/3";
  }else{
    document.querySelector('.first-login-user-content span').innerHTML = "What's Your Name?<span>Write at least 2 characters</span>"
  }
}

function firstLoginUser_Step3(){
  if(document.querySelectorAll(".first-login-user-content-style a.active").length > 1){

    localStorage.setItem('personalization-data-style_1', document.querySelectorAll('.first-login-user-content-style a.active')[0].innerText)
    localStorage.setItem('personalization-data-style_2', document.querySelectorAll('.first-login-user-content-style a.active')[1].innerText || document.querySelectorAll('.first-login-user-content-style a.active')[0].innerText)

    document.querySelector('.first-login-user-content').innerHTML = `
    <span>Do You Want To Get Daily Mixes Based On Your Activity?</span>
    <div class="first-login-user-content-style"><a onclick="firstLoginUser_Style(this)">No</a><a onclick="firstLoginUser_Style(this)">Yes</a></div>
    <a onclick="firstLoginUser_Exit()">Next</a>`

  document.querySelector('.first-login-user-bar-completed').style.width = '100%';
  document.querySelector('.first-login-user p span').innerText = "3/3";

  }else{
    document.querySelector('.first-login-user-content span').innerHTML = "Select Your Styles Of Music<span>Pick at least 2</span>"
  }
}

function firstLoginUser_Exit(){
  if(document.querySelectorAll('.first-login-user-content-style a.active')[0]){
    localStorage.setItem('personalization-data-mix', document.querySelectorAll('.first-login-user-content-style a.active')[0].innerText)
    nameUserMain.innerText = localStorage.getItem('personalization-data-name');
    document.querySelector('.first-login-user').style.top = "125vh";
    setTimeout(() => {
      document.querySelector('.first-login-user').remove();
    }, 325);
  }else{
    document.querySelector('.first-login-user-content span').innerText = "What's Your Age? - (1- 99)"
  }
}

function loadUserStylePlaylists(){
  resultsFAV = document.querySelector("#dailyMixContainer")
  resultsFAV.innerHTML="";

  playlistsIt = allPlaylists.filter(x => x.play_style === localStorage.getItem('personalization-data-style_1') || x.play_style === localStorage.getItem('personalization-data-style_2'));

  for (let i = 0; i < playlistsIt.length && i < 5; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="clickedPlaylist(this)" playlist-id="${playlistsIt[i].play_id}">
        <img src="${playlistsIt[i].image}">
        <h2>${playlistsIt[i].name}</h2>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

const playlistPopUp = document.querySelector(".playlist-popup");

function create_Playlist(){
  playlistPopUp.classList.add("active");
}

function create_Playlist_Exit(){
  playlistPopUp.classList.remove("active");
}
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

  document.querySelector(".music-controls").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-controls").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 600);

  document.querySelector(".head-content-container").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".head-content-container").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 750);

  document.querySelector("#dailyMixContainer").style.animation = 'none';
  setTimeout(() => {
    document.querySelector("#dailyMixContainer").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 900);
  
  document.querySelector("#recent-tracks-container").style.animation = 'none';
  setTimeout(() => {
    document.querySelector("#recent-tracks-container").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 1000);

    randomHomeArtist();
    loadDailyPlaylists();
    loadUserStylePlaylists();
    playlist_HOME_LOAD();
});

const activeHomeBtn = document.getElementsByClassName('navbar-bottom-btn-home')[0]
const activeHomeScreen = document.getElementsByClassName('navbar-bottom-btn 1')[0]
const historyScreen = document.querySelector(".history-screen");

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
  wrapper.classList.remove("active");
  musicArtistScreen.classList.remove('active');
  bioCard.classList.remove('active');
  playlistPopUp.classList.remove('active');
  historyScreen.classList.remove('active')
  document.querySelector(".notification_screen").classList.remove("active");
  searchResults.innerHTML = '';
}

activeHomeBtn.addEventListener('click', () => {
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.add('active')
  userProfile.classList.remove("active")
  playlistScreen.classList.remove('active');
  yourStyleScreen.classList.remove('active');
  wrapper.classList.remove("active");
  playlistScreen.classList.remove('active');
  searchResults.innerHTML = '';
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
  wrapper.classList.remove("active");
  bioCard.classList.remove('active');
  playlistPopUp.classList.remove('active');
  historyScreen.classList.remove('active')
  document.querySelector(".notification_screen").classList.remove("active");
})

const activeLibraryBtn = document.getElementsByClassName('navbar-bottom-btn-library')[0]
const activeLibraryScreen = document.getElementsByClassName('navbar-bottom-btn 3')[0]

activeLibraryBtn.addEventListener('click', () => {
  activeSearchScreen.classList.remove('active')
  activeHomeScreen.classList.remove('active')
  historyScreen.classList.remove('active')
  activeLibraryScreen.classList.add('active')
  musicArtistScreen.classList.remove('active')
  albumScreen.classList.remove('active')
  bioCard.classList.remove("active")
  userProfile.classList.remove("active")
  playlistScreen.classList.remove('active');
  yourStyleScreen.classList.remove('active');
  userProfile.classList.remove('active');
  wrapper.classList.remove("active");
  bioCard.classList.remove('active');
  playlistPopUp.classList.remove('active');
  document.querySelector(".notification_screen").classList.remove("active");

  if(localStorage.getItem("personalization-data-avatar")){
    p_avatar.src = localStorage.getItem("personalization-data-avatar");
    p_avatarBg.src = localStorage.getItem("personalization-data-avatar");
    p_avatarSmall.src = localStorage.getItem("personalization-data-avatar");
  }

  document.querySelector(".library-slider").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".library-slider").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 100);

  searchResults.innerHTML = '';
})

const activeSettingsBtn = document.getElementsByClassName('settings-action-btn')[0]
const librarySettingsBtn = document.getElementsByClassName('librarySettingsBtn')[0]
const activeSettingsScreen = document.getElementsByClassName('settings-screen')[0]

activeSettingsBtn.addEventListener('click', () => {
  activeSettingsScreen.classList.add('active')
  userProfile.classList.remove("active");
  wrapper.classList.remove("active");
})

const navbarSettings = document.querySelector('#navbar-settings')
navbarSettings.addEventListener('click', () => {
  activeSettingsScreen.classList.toggle('active')
  userProfile.classList.remove("active");
  wrapper.classList.remove("active");
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

  if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === true){
    if(localStorage.lyricsAccouracyImprove){
      document.querySelector('.top-controls').classList.add('lyrics');
      checkLyricsPerSec = setInterval(lyricsMode,250);
    }else{
      checkLyricsPerSec = setInterval(lyricsMode,500);
    }
    }else if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === false){
      clearInterval(checkLyricsPerSec);
    }
  lyricsShortcut();}
)

const showMusicMenubtn = document.getElementsByClassName('show-Music-Menu')[0]
const musicMenuShow = document.getElementsByClassName('main-music')[0]
const musicMenuShowSec = document.getElementsByClassName('music-title')[0]

showMusicMenubtn.addEventListener('click', () => {
  musicMenuShow.classList.toggle('active')
  if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === true){
    if(localStorage.lyricsAccouracyImprove){
      document.querySelector('.top-controls').classList.add('lyrics');
      checkLyricsPerSec = setInterval(lyricsMode,250);
    }else{
      checkLyricsPerSec = setInterval(lyricsMode,500);
    }
    }else if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === false){
      clearInterval(checkLyricsPerSec);
    }
  lyricsShortcut();
})
musicMenuShowSec.addEventListener('click', () => {
  musicMenuShow.classList.toggle('active')
  if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === true){
    if(localStorage.lyricsAccouracyImprove){
      document.querySelector('.top-controls').classList.add('lyrics');
      checkLyricsPerSec = setInterval(lyricsMode,250);
    }else{
      checkLyricsPerSec = setInterval(lyricsMode,500);
    }
    }else if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === false){
      clearInterval(checkLyricsPerSec);
    }
  lyricsShortcut();
})

function viewSearchHomeItems(){
  activeLibraryScreen.classList.remove('active')
  activeSearchScreen.classList.add('active')
  activeHomeScreen.classList.remove('active')
  searchScreen.classList.add('active');
  libraryScreen.classList.remove('active');
}

const favortieScreen = document.getElementsByClassName('library-favorite-screen')[0]
const exitFavoriteScreen = document.getElementsByClassName('library-favorite-exit')[0]

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
            <span><p class="music-artist-content-item-lyrics"> ${Object.keys(favoritIt[i].lyrics).length}</p> ${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  loseFocus();
  lyricsItemCheck();
  fastLoadingPop();
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

  if(itemFilterBar.getAttribute('collaboration-data')){
    let filterStyle = itemFilterBar.getAttribute('collaboration-data');
    clickedAllMusic = clickedAllMusic.filter(x => x.colaboration_id === filterStyle);
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
      clickedAllMusic = allMusicView.filter(x => x.artist_id === filterArtist || x.colaboration_id === filterArtist || x.style === filterStyle).slice(0, 50);
    }
  }

  if(itemFilterBar.getAttribute('playlist-filter')){
    let filterPlaylistStyle = itemFilterBar.getAttribute('playlist-style');
    let filterPlaylistName = itemFilterBar.getAttribute('artist-name');
    let filterArtist = itemFilterBar.getAttribute('artist-data');

    if(filterPlaylistStyle === "Complete"){
      clickedAllMusic = allMusicView.filter(x => x.artist_id === filterArtist || x.colaboration_ida === filterArtist);
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
musicSave = wrapper.querySelector(".main-information #playlistACTION"),
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
queueCurrentImg = document.querySelector(".queue-current-item img"),
queueCurrentTrack = document.querySelector(".queue-current-data p"),
queueCurrentArtist = document.querySelector(".queue-current-data span"),
queueCurrentBackgroundImg = document.querySelector(".queue-gif img"),
musicBackgroundImage = wrapper.querySelector(".background-music-img img"),
musicTopOptionsImage = wrapper.querySelector(".top-more-head-image img"),
musicTopOptionsName = wrapper.querySelector(".top-more-head-name"),
musicTopOptionsArtist = wrapper.querySelector(".top-more-head-artist"),
musicTopOptionsFavorite = wrapper.querySelector(".top-menu-list-favorite"),
musicTopOptionsAlbum = wrapper.querySelector(".top-menu-view-album"),
musicImgNext = wrapper.querySelector(".main-music-header-back"),
musicTopArtistBtn = wrapper.querySelector(".top-menu-list-artist"),
musicVolumeTop = wrapper.querySelector('.top-shortcut-item.shortcut-rate span'),
lyricsDataArtist = wrapper.querySelector(".device-main-audio-data .device-main-audio-data-artist"),
lyricsDataTitle = wrapper.querySelector(".device-main-audio-data .device-main-audio-data-title"),
queueArtist = wrapper.querySelector(".queue-container .artist");
topControlsShortcutAvatar = document.querySelector(".top-controls-shortcut img");
topControlsShortcutArtist = document.querySelector(".top-controls-shortcut span");

const pc_track = document.querySelector(".pc-controls-track-data p");
const pc_artist = document.querySelector(".pc-controls-track-data span");
const pc_img = document.querySelector(".pc-controls-track img");
const pc_timerStart = document.querySelector(".pc-start");
const pc_timerEnd = document.querySelector(".pc-end");
const pc_playpauseBtn = document.querySelector("#pc-playpause");
const pc_repeat = document.querySelector("#pc-repeat");
const pc_shuffle = document.querySelector("#pc-shuffle");
const pc_proggres = document.querySelector(".pc-controls-proggres");
const pc_proggresCompleted = document.querySelector(".pc-controls-proggres-done");
const musicSavePc = document.querySelector("#pc-controls-playlist-add");

const smallView = document.querySelector(".music-controls"),
smallBackgroundImg = smallView.querySelector(".music-controls-background"),
smallImg = smallView.querySelector(".music-img img"),
smallName = smallView.querySelector(".music-title .fasttitle"),
smallArtist = smallView.querySelector(".music-title .fastartist"),
progressBarNavDone = smallView.querySelector(".music-controls-progresbar-done"),
progressBarNav = smallView.querySelector(".music-controls-progresbar"),
smallPlayStopbtn = smallView.querySelector("#smallplaystop");
const favoritBtn = document.querySelector('#heartBtnMain');
const pcfavoritBtn = document.querySelector('.pc-heart-box i');
const filterData = document.querySelector('.filter-data-bar');

const lyricsBox = document.querySelector(".main-music-lyrics-box");

var str = window.location.hash;
const char = str[0];
const replaced = str.replace(char, '');
var indexNumb = Math.floor((Math.random() * allMusic.length));

var allMusicView = allMusic.filter(x => x.artist !== "");
var indexNumbAll = allMusicView.length;
let lastData;
if(localStorage.getItem("track_data_1")){
  lastData = localStorage.getItem("track_data_1").split(',')[0];
  let lastPlayedSong = allMusicView.filter(x => x.id === lastData);
  let lastPlayedArtist = allMusicView.filter(x => x.artist_id === lastPlayedSong[0].artist_id);
  let lastPlayedQueue = lastPlayedArtist;
}

let allQueue;
allQueue = allMusicView.filter(x => x.id === "#");

if(localStorage.getItem("data_queue")){
  allQueueLength = localStorage.getItem("data_queue").split(',')[0];
    for (let i = 1; i <= allQueueLength; i++) {
      queueMusic = allMusicView.filter(x => x.id === localStorage.getItem("data_queue").split(',')[i]);
      allQueue = allQueue.concat(queueMusic)
    }
}

if(allQueue.length === 0){
  allMusic = allMusicView;
}else{
  allMusic = allQueue;
  const indexQueue = allQueue.findIndex(object => {
    return object.id === lastData;
  });
  indexNumb = indexQueue + 1;
}

checkLocalStorageData();
checkLocalStorageAlbum();

if(replaced){
  var indexNumb = replaced;
  allMusic = allMusicView;
}

window.addEventListener("load", ()=>{
  loadMusic(indexNumb);
  checkUserData();
})

musicImg.addEventListener("click", ()=>{
  showMusicMenubtn.classList.toggle('active');
});

favoritBtn.addEventListener('click', () => {
  track_LIKE()
})

pcfavoritBtn.addEventListener('click', () => {
  track_LIKE()
})

function track_LIKE(){
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

    pcfavoritBtn.classList.add('active')
    pcfavoritBtn.classList.add('fa-solid')
    pcfavoritBtn.classList.remove('fa-regular')
  
    musicTopOptionsFavorite.classList.add('active')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Liked</span>';

    setTimeout(() => {
      playlistToolTip.classList.add('on')
      playlistToolTip.innerText = 'Added To Liked';
      setTimeout(() => {
        playlistToolTip.classList.remove('on')
      }, 2000);
    }, 300);
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')

    pcfavoritBtn.classList.remove('active')
    pcfavoritBtn.classList.remove('fa-solid')
    pcfavoritBtn.classList.add('fa-regular')

    musicTopOptionsFavorite.classList.remove('active')
    musicTopOptionsFavorite.innerHTML = '<i class="fa-regular fa-heart"></i><span> Like</span>';
  }
}



function loadMusic(indexNumb){
  window.location.hash = "";
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
  topControlsShortcutArtist.innerText = allMusic[indexNumb - 1].artist;
  topControlsShortcutAvatar.src = allMusic[indexNumb - 1].img_mini;
  topControlsShortcutAvatar.parentElement.setAttribute('id', allMusic[indexNumb - 1].id)
  musicTopArtistBtn.setAttribute("id", allMusic[indexNumb - 1].id);
  document.title = allMusic[indexNumb - 1].artist + ' / ' + allMusic[indexNumb - 1].name + ' / ZESIA'; 
  musicVolumeTop.innerText = Math.floor(localStorage.getItem("user_Volume")*100) + "%";
  document.querySelector('.top-menu-list-volume input').value = localStorage.getItem("user_Volume")*100;
  document.querySelector('.pc-volume-slider input').value = localStorage.getItem("user_Volume")*100;
  pc_track.innerText = allMusic[indexNumb - 1].name;
  pc_artist.innerText = allMusic[indexNumb - 1].artist;
  musicTopOptionsAlbum.setAttribute('artist-data', allMusic[indexNumb - 1].artist_id);
  musicTopOptionsAlbum.setAttribute('data-album', allMusic[indexNumb - 1].album);
  if(allMusic[indexNumb - 1].colaboration != ''){
    pc_artist.innerHTML = `<span onclick="artistScreenDataLoad(this)" id='${allMusic[indexNumb - 1].id}'>${allMusic[indexNumb - 1].artist}</span><span onclick="artistScreenDataLoad(this)">, ${allMusic[indexNumb - 1].colaboration}</span>`;
    if(allMusic[indexNumb - 1].colaboration_id){
      pc_artist.innerHTML = `<span onclick="artistScreenDataLoad(this)" id='${allMusic[indexNumb - 1].id}'>${allMusic[indexNumb - 1].artist}</span><span onclick="artistScreenDataLoad(this)" colab-id='${allMusic[indexNumb - 1].colaboration_id}'>, ${allMusic[indexNumb - 1].colaboration}</span>`;
    }
  }else{
    pc_artist.innerHTML = `<span onclick="artistScreenDataLoad(this)" id='${allMusic[indexNumb - 1].id}'>${allMusic[indexNumb - 1].artist}</span>`;
  }

  pc_img.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
  pcBar.style.backgroundImage = `url(images/${allMusic[indexNumb - 1].img}.jpg)`;
  
  musicName.setAttribute("data-album", allMusic[indexNumb - 1].album);
  musicName.setAttribute("artist-data", allMusic[indexNumb - 1].artist_id);
  musicArtist.setAttribute("id", allMusic[indexNumb - 1].id);
  musicSave.setAttribute("track-data", allMusic[indexNumb - 1].id);
  musicSavePc.setAttribute("track-data", allMusic[indexNumb - 1].id);

  pc_track.setAttribute("data-album", allMusic[indexNumb - 1].album);
  pc_track.setAttribute("artist-data", allMusic[indexNumb - 1].artist_id);
  
  volumeBLOCK.style.width = Math.floor(localStorage.getItem("user_Volume")*100) + 'px';
  volumeOptions_BLOCK.style.width = Math.floor(localStorage.getItem("user_Volume")*100) + '%';
  $('.pc-volume-slider').addClass('change').attr('data-content', Math.floor(localStorage.getItem("user_Volume")*100) + '%');

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

  musicBackgroundViral.classList.add("in_Change");

  setTimeout(() => {
    musicImg.classList.remove("animation-next");
    musicImg.classList.remove("animation-prev");
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

    pcfavoritBtn.classList.add('active')
    pcfavoritBtn.classList.add('fa-solid')
    pcfavoritBtn.classList.remove('fa-regular')

    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Liked</span>';
    musicTopOptionsFavorite.classList.add('active')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')

    pcfavoritBtn.classList.remove('active')
    pcfavoritBtn.classList.remove('fa-solid')
    pcfavoritBtn.classList.add('fa-regular')

    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Like</span>';
    musicTopOptionsFavorite.classList.remove('active')
  }


    navigator.mediaSession.metadata = new MediaMetadata({
      title: allMusic[indexNumb - 1].name,
      artist: allMusic[indexNumb - 1].artist,
      album: allMusic[indexNumb - 1].album,
      artwork:  [
      { src: `${allMusic[indexNumb - 1].img}`, type: 'image/jpg' },
      { src: `${allMusic[indexNumb - 1].img}`, type: 'image/jpg' },
      { src: `${allMusic[indexNumb - 1].img}`, type: 'image/jpg' },
      { src: `${allMusic[indexNumb - 1].img}`, type: 'image/jpg' },
      { src: `${allMusic[indexNumb - 1].img}`, type: 'image/jpg' },
      { src: `${allMusic[indexNumb - 1].img}`, type: 'image/jpg' },
                ]
      });

      navigator.mediaSession.setActionHandler('play', function() {
        playMusic();
      });
      navigator.mediaSession.setActionHandler('pause', function() {
        pauseMusic();
      });
      navigator.mediaSession.setActionHandler('previoustrack', function() {
        prevMusic();
      });
      navigator.mediaSession.setActionHandler('nexttrack', function() {
        nextMusic();
      });
      
      setTimeout(() => {
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
          document.querySelector(".background-canvas video").addEventListener('error', function(event) {
            document.querySelector(".background-canvas video").src = "https://static.vecteezy.com/system/resources/previews/032/509/833/mp4/4k-elegant-black-gradient-smooth-animation-background-black-clean-corporate-background-loop-free-video.mp4";
          }, true);
        }else{
          document.querySelector(".background-canvas video").src = "https://static.vecteezy.com/system/resources/previews/032/509/833/mp4/4k-elegant-black-gradient-smooth-animation-background-black-clean-corporate-background-loop-free-video.mp4";
          document.querySelector(".background-canvas video").style.display="flex";
          document.querySelector(".background-canvas img").style.display="none";
          musicCanvasVideo.currentTime = 1;
        }
      }

      lyricsBox.innerHTML = '';
      clearLyricStatus();
      premium_POPUP();
      tutorial_CHECK();
}

function queueDataLoad(){
  const resultsFAV = document.querySelector(".queue-item");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < allMusic.length; i++) {
    let resultFAV = `<div class="queue-box" li-index="${i + 1}" track-id="${allMusic[i].id}" onclick="clickedQueueItem(this)">
    <p>${i + 1}</p>
    <div class="row">
      <span>${allMusic[i].name}</span>
      <p>${allMusic[i].artist}</p>
    </div>
    <i onclick="removeQueueItem(this)" class="fa-solid fa-minus"></i>
  </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  let queueAll = document.querySelectorAll('.queue-item .queue-box');
  for (i = 0; i < queueAll.length; i++) { 
    queueAll[i].classList.remove('active')
  }

  let queueCorrect = document.querySelectorAll('.queue-item .queue-box')[indexNumb - 1];
  queueCorrect.classList.add('active');
  queuePos = queueCorrect.offsetTop - 300;
  resultsFAV.scroll({
    top: queuePos,
    behavior: 'auto'
  })

  let queueSaveData = allMusic.length + ",";
  for (let i = 0; i < allMusic.length; i++) {
    queueSaveData = queueSaveData + allMusic[i].id + ',';
  }
  localStorage.setItem('data_queue', queueSaveData);
  
  $('.queue-box i').click(function(event) {
    event.stopPropagation();
  });
}

function removeQueueItem(element){
  let queueID = element.parentElement.getAttribute('track-id');
  let correctedQueue = allMusic.filter(x => x.id !== queueID);
  element.parentElement.classList.add("delete");
  console.log(queueID, correctedQueue)
  allMusic = correctedQueue;
  setTimeout(() => {
    queueDataLoad();
  }, 350);
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
  pc_playpauseBtn.classList.remove("fa-play");
  pc_playpauseBtn.classList.add("fa-stop");
  mainAudio.play();

  if(musicCanvasVideo.src.length === 22 || musicCanvasVideo.src.length === 41){
  }else{
    musicCanvasVideo.play();
  }
}

function pauseMusic(){
  wrapper.classList.remove("paused");
  playstopButton.querySelector(".fa-solid").classList.add("fa-play");
  playstopButton.querySelector(".fa-solid").classList.remove("fa-stop");
  smallPlayStopbtn.querySelector(".fa-solid").classList.add("fa-play");
  smallPlayStopbtn.querySelector(".fa-solid").classList.remove("fa-stop");
  pc_playpauseBtn.classList.add("fa-play");
  pc_playpauseBtn.classList.remove("fa-stop");
  mainAudio.pause();
  musicCanvasVideo.pause();
}

function playpausePc(){
  if(pc_playpauseBtn.classList.contains("fa-play")){
    playMusic();
  }else{
    pauseMusic();
  }
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

  musicImg.classList.add("animation-next");
  musicImgShadow.classList.add("animation-next");
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

  musicImg.classList.add("animation-prev");
  musicImgShadow.classList.add("animation-prev");
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

  let musicCurrentTime = wrapper.querySelector(".current-time"),
  musicDuartion = wrapper.querySelector(".max-duration");
  mainAudio.addEventListener("loadeddata", ()=>{
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60);
    if(totalSec < 10){
      totalSec = `0${totalSec}`;
    }
    pc_timerEnd.innerText = `${totalMin}:${totalSec}`;
    musicDuartion.innerText = `${totalMin}:${totalSec}`;
  });

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  var checkLyricsPerSec;
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

  if(wrapper.classList.contains('active') && window.innerWidth <= 1000){
    progressBar.style.width = `${progressWidth}%`;
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  }else if(window.innerWidth >= 1000){
    pc_proggresCompleted.style.width = `${progressWidth}%`;
    pc_timerStart.innerText = `${currentMin}:${currentSec}`;
  }else{
    progressBarNavDone.style.width = `${progressWidth}%`;
  }

});

progressBar.addEventListener("timeubdate", (e)=>{
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
})

pc_proggres.addEventListener("timeubdate", (e)=>{
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

pc_proggres.addEventListener("click", (e)=>{
  let progressWidth = pc_proggres.clientWidth;
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

var shuffleIndex;

repeatBtn.addEventListener("click", ()=>{
  if (mainAudio.loop == false) {mainAudio.loop = true}
    else {mainAudio.loop = false};
  repeatBtn.classList.toggle('active');
  pc_repeat.classList.toggle('active');
  pc_shuffle.classList.remove('active');
  shuffleBtn.classList.remove('active');
  wrapper.classList.remove("shuffle");
  wrapper.classList.toggle("repeat");
});

shuffleBtn.addEventListener("click", ()=>{
  mainAudio.loop = false;
  shuffleBtn.classList.toggle('active');
  pc_shuffle.classList.toggle('active');
  pc_repeat.classList.remove('active');
  repeatBtn.classList.remove('active');
  wrapper.classList.toggle("shuffle");
  wrapper.classList.remove("repeat");


  var shuffleArray = allMusicView.filter(x => x.name === "");
  for(i=0; i < allMusic.length; i++){
    shuffleArray = shuffleArray.concat(i);
  }

  shuffleIndex = shuffle(shuffleArray);
});

pc_repeat.addEventListener("click", ()=>{
  if (mainAudio.loop == false) {mainAudio.loop = true}
    else {mainAudio.loop = false};
  repeatBtn.classList.toggle('active');
  pc_repeat.classList.toggle('active');
  pc_shuffle.classList.remove('active');
  shuffleBtn.classList.remove('active');
  wrapper.classList.remove("shuffle");
  wrapper.classList.toggle("repeat");
});

pc_shuffle.addEventListener("click", ()=>{
  mainAudio.loop = false;
  shuffleBtn.classList.toggle('active');
  pc_shuffle.classList.toggle('active');
  pc_repeat.classList.remove('active');
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
      $this.css('filter', 'blur(' + (-val / 10) + 'px)');
      $this.css('transform', 'translateY(' + (-val/1.5) + 'px)');
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
          $this.css('transform', 'scale(' + (105 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
          $this.css('filter', 'blur(' + (-val / 10) + 'px)');
          $this.css('opacity', '' + (100 - (-val/5)) + '%');
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
      $this.css('transform', 'scale(' + (105 - (-val/15)) + '%) translateY(' + (-val) + 'px)');
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
  topOption.style.contentVisibility="visible";
  shortcutCheck();
})
topOptionExit.addEventListener('click', () => {
  topOption.classList.remove('active');
  setTimeout(() => {
    topOption.style.contentVisibility="hidden";
  }, 250);
  shortcutCheck();
})

function topOptionFastExit(){
  topOption.classList.remove('active')
}

const currentPlaylistBtn = document.getElementsByClassName('current-playlist-btn')[0]
const topQueueMenuShow = document.getElementsByClassName('queue-container')[0]
currentPlaylistBtn.addEventListener('click', () => {
  topQueueMenuShow.classList.add('active');
  queueDataLoad();
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
  playlistScreen.classList.remove('active');
  home_fs();
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

function lyricsShortcut(){
  if(musicImgBox.classList.contains("lyrics")){
    correctSoundBtn.classList.add('active');
  }else{
    correctSoundBtn.classList.remove('active');
  }
}

function artistQueue(element){
  let itemArtistData = document.querySelector('.music-artist-content-screen .music-artist-content-container').getAttribute('artist-data');
  allMusic = allMusicView.filter(x => x.artist_id === itemArtistData || x.colaboration_id === itemArtistData);
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);
  loadMusic(indexNumb);
  playMusic();
}

function albumQueue(element){
  itemAlbumId = document.querySelector(".music-artist-album-screen .music-artist-album-screen-container").getAttribute('artist-data');
  itemAlbumData = document.querySelector(".music-artist-album-screen .music-artist-album-screen-container").getAttribute('data-album');
  allMusic = allMusicView.filter(x => x.album === itemAlbumData && x.artist_id === itemAlbumId);
  indexNumb = 1;
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
  const gallery_bg = document.querySelector(".music-artist-bio-bg img");
  
function scrollToNextPage(t) {

    btnStatus = t.getAttribute('disabled');
    if(btnStatus === "false"){
    t.setAttribute("disabled", "true");
    t.setAttribute('onclick', "");
    gallery_scroller.scrollBy({
      top: 0,
      left: gallery_item_size,
    });

    let gallery_list = [...document.querySelectorAll('.card')];
    let gallery_active = document.querySelector('.card.active');
    let gallery_index = gallery_list.indexOf(gallery_active);

    let gallery_index_del = Math.floor(gallery_index+1);
    let gallery_index_add = Math.floor(gallery_index+2);

    if(gallery_index_add > gallery_list.length){
      gallery_index_add = gallery_list.length;
    }

    for(var i=0; i<gallery_list.length; i++){
      gallery_list[i].classList.remove('active');
    }

    gallerydatabox = document.querySelector('.card:nth-child('+gallery_index_add+')');
    gallerydatabox.classList.add('active');
    gallery_bg.classList.add('animate');
    gallerydatabox.querySelector('img').classList.add('animate');

    setTimeout(() => {
      gallery_bg.src = gallerydatabox.querySelector('img').src;
      gallerydatabox.querySelector('img').classList.remove('animate');
    }, 350);
    setTimeout(() => {
      gallery_bg.classList.remove('animate');
    }, 700);
    }
    setTimeout(function() {
      t.setAttribute("disabled", "false")
      t.setAttribute("onclick", "scrollToNextPage(this)")
    }, 1000);
}
  
function scrollToPrevPage(t) {

    btnStatus = t.getAttribute('disabled');
    if(btnStatus === "false"){
    t.setAttribute("disabled", "true");
    t.setAttribute('onclick', "");
    gallerydatabox.querySelector('img').classList.add('animate');
    gallery_scroller.scrollBy({
      top: 0,
      left: -gallery_item_size,
    });

    let gallery_list = [...document.querySelectorAll('.card')];
    let gallery_active = document.querySelector('.card.active');
    let gallery_index = gallery_list.indexOf(gallery_active);

    let gallery_index_del = gallery_index;
    let gallery_index_add = gallery_index_del;

    if(gallery_index_add <= 1){
      gallery_index_add = 1;
      gallery_index_del = 1;
    }
    
    for(var i=0; i<gallery_list.length; i++){
      gallery_list[i].classList.remove('active');
    }

    gallerydatabox = document.querySelector('.card:nth-child('+gallery_index_add+')');
    gallerydatabox.classList.add('active');
    gallery_bg.classList.add('animate');

    setTimeout(() => {
      gallery_bg.src = gallerydatabox.querySelector('img').src;
    }, 350);
    setTimeout(() => {
      gallery_bg.classList.remove('animate');
      gallerydatabox.querySelector('img').classList.remove('animate');
    }, 700);
  }
  setTimeout(function() {
    t.setAttribute("disabled", "false")
    t.setAttribute("onclick", "scrollToPrevPage(this)")
  }, 1000);
}
  
  const bioCard = document.querySelector(".music-artist-bio");

  function loadBio(){
    bioCard.classList.add("active");
    loadBioData();
    fastLoadingPop();
  }

  function exitBio(){
    bioCard.classList.remove("active");
    setTimeout(() => {
      document.querySelector(".music-artist-bio-gallery .container .gallery").innerHTML = ``;
    }, 250);
  }

  function removeThis(element){
    if(element.getAttribute('src') == "undefined"){
      element.parentElement.remove();
    }
  }

  function loadBioData(){
    let artistData = artistItemTitle.innerText;
    let artistDataName = document.querySelector(".music-artist-bio-data-name");
    let artistID = bioBox.getAttribute('artist-data');
    artistDataName.innerText = artistData;
    bioMoreBtn.innerText = "Show More";
    bioContent.classList.remove("all");

    document.querySelector('.music-artist-bio-gallery span.prev').setAttribute('onclick', 'scrollToPrevPage(this)')
    document.querySelector('.music-artist-bio-gallery span.prev').setAttribute('disabled', 'false')
    document.querySelector('.music-artist-bio-gallery span.next').setAttribute('onclick', 'scrollToNextPage(this)')
    document.querySelector('.music-artist-bio-gallery span.next').setAttribute('disabled', 'false')

    var randomnumber = Math.floor(Math.random() * 250000) + 1;
    document.querySelector(".music-artist-bio-stats p").innerText = randomnumber;

    if(document.querySelector(".music-artist-bio-gallery .container .gallery .card video")){
      document.querySelector(".music-artist-bio-gallery .container .gallery .card video").pause();
    }

    const resultsFAV = document.querySelector(".music-artist-bio-gallery .container .gallery");
    var favoritIt = allMusicView.filter(x => x.artist_id === artistID);
    resultsFAV.innerHTML = "";

    let resultFAV =
    `<div class="card active" data-src='${favoritIt[0].avatar}'>
      <img src="artists/${favoritIt[0].avatar}.jpg" onerror="removeThis(this)">
     </div>
     <div class="card" data-src='${favoritIt[0].artist_img}'>
      <img src="${favoritIt[0].artist_img}" onerror="removeThis(this)">
     </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
    for (let i = 0; i < favoritIt.length; i++) {
      if(favoritIt[0].gallery_img_1){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_1}'>
        <img src="${favoritIt[0].gallery_img_1}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_2){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_2}'>
        <img src="${favoritIt[0].gallery_img_2}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_3){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_3}'>
        <img src="${favoritIt[0].gallery_img_3}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_4){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_4}'>
        <img src="${favoritIt[0].gallery_img_4}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_5){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_5}'>
        <img src="${favoritIt[0].gallery_img_5}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_6){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_6}'>
        <img src="${favoritIt[0].gallery_img_6}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_7){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_7}'>
        <img src="${favoritIt[0].gallery_img_7}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_8){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_8}'>
        <img src="${favoritIt[0].gallery_img_8}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_9){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_9}'>
        <img src="${favoritIt[0].gallery_img_9}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      if(favoritIt[0].gallery_img_10){
        let resultFAV = `<div class="card" data-src='${favoritIt[0].gallery_img_10}'>
        <img src="${favoritIt[0].gallery_img_10}">
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }

      /*
      if(favoritIt[i].canvas != ""){
        let resultFAV = `<div class="card" data-src='${favoritIt[i].canvas}'>
        <video onclick="playPauseVideo(this)" muted src="${favoritIt[i].canvas}"></video>
          <div class="card-video-controls">
            <p>Video</p>
          </div>
        </div>`
        resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
      }
      */

      gallery_bg.src = `artists/${favoritIt[0].avatar}.jpg`;

      resultsFAV.scrollLeft = 0;

      var productIds={};
      $('.card').each(function(){
          var prodId = $(this).attr('data-src');
          if(productIds[prodId]){
             $(this).remove();
          }else{
             productIds[prodId] = true;
          }
      });

      if(favoritIt[0].social.instagram === "" ){
        artistDataBioInstagram.style.display = "none";
      }else{
        artistDataBioInstagram.style.display = "flex";
        artistDataBioInstagram.href = favoritIt[0].social.instagram;
      }
      
      if(favoritIt[0].social.twitter === "" ){
        artistDataBioTwitter.style.display = "none";
      }else{
        artistDataBioTwitter.style.display = "flex";
        artistDataBioTwitter.href = favoritIt[0].social.twitter;
      }

      if(favoritIt[0].social.facebook === "" ){
        artistDataBioFacebook.style.display = "none";
      }else{
        artistDataBioFacebook.style.display = "flex";
        artistDataBioFacebook.href = favoritIt[0].social.facebook;
      }

      if(favoritIt[0].bio === "" ){
        artistDataBio.innerText = "";
      }else{
        artistDataBio.innerText = favoritIt[0].bio;
      }
    }

    if(artistDataBio.innerText.length <= 350){
      artistDataBioToggle.style.display="none";
    }else{
      artistDataBioToggle.style.display="flex";
    }

    
  document.querySelector("#container").style.animation = 'none';
  setTimeout(() => {
    document.querySelector("#container").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 350);

  document.querySelector(".music-artist-bio-stats").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-artist-bio-stats").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 500);

  document.querySelector(".music-artist-bio-main").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-artist-bio-main").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 750);

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
  const artistDataBioToggle = document.querySelector(".music-artist-bio-data a");
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
    historyScreen.classList.remove("active");
    wrapper.classList.remove("active");

    const albumNameData = element.getAttribute("data-album");
    const albumArtistId = element.getAttribute("artist-data");

    var favoritIt = allMusicView.filter(x => x.album === albumNameData && x.artist_id === albumArtistId);

    if(favoritIt.filter(x => x.colaboration_id).length != 0){
    var collabAlbumData = favoritIt.filter(x => x.colaboration_id);
    var collabArtist = allMusicView.filter(x => x.name === "");

    for (let i = 0; i < collabAlbumData.length; i++) {
      collabData = allMusicView.filter(x => x.artist_id === collabAlbumData[i].colaboration_id);
      collabArtist = collabArtist.concat(collabData);
    }

    document.querySelector(".music-artist-album-screen-featured.artists").style.display="flex";
    document.querySelector(".music-artist-content-title.album-feat-artist").style.display="flex";

    const artistsFAV = document.querySelector(".music-artist-album-screen-featured.artists");
    artistsFAV.innerHTML = "";
    for (let i = 0; i < collabArtist.length; i++) {
      let artistItem =
        `<div class="music-artist-information-albums-item featured artist" onclick="artistScreenDataLoad(this)" artist-id="${collabArtist[i].artist_id}" artist-data='${collabArtist[i].name}' id="${collabArtist[i].id}">
            <img class="music-artist-information-albums-item-img" src="${collabArtist[i].avatar_mini}">
            <span>${collabArtist[i].artist}</span>
         </div>`;
         artistsFAV.insertAdjacentHTML("beforeend", artistItem);
    }
    var productIds={};
    $('.music-artist-information-albums-item.featured.artist').each(function(){
        var prodId = $(this).attr('artist-id');
        if(productIds[prodId]){
           $(this).remove();
        }else{
           productIds[prodId] = true;
        }
    });
    }else{
      document.querySelector(".music-artist-album-screen-featured.artists").style.display="none";
      document.querySelector(".music-artist-content-title.album-feat-artist").style.display="none";
    }

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
          <h1 class="music-artist-content-number">${i + 1}</h1>
                <div class="music-artist-album-item-data">
                  <h1>${favoritIt[i].name}</h1>
                  <span><p class="music-artist-content-item-lyrics"> ${Object.keys(favoritIt[i].lyrics).length}<p>${favoritIt[i].artist}<p>, ${favoritIt[i].colaboration}</p></span>
              </div>
              <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
         </div>`;
      resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

      if(document.querySelectorAll(".music-artist-content-number")[i].innerText.length < 2){
        document.querySelectorAll(".music-artist-content-number")[i].innerText = 0 +document.querySelectorAll(".music-artist-content-number")[i].innerText;
      }
      albumScreenSongsNumber.innerText = $('.music-artist-album-screen-container .music-artist-album-item').length;

    }
  

    albumScreenArtistName.innerText = favoritIt[0].artist;

    let albumNumberSongs = $('.music-artist-album-item').length;
    if(albumNumberSongs > 1){
      albumScreenArtistName.innerText = favoritIt[0].artist + " • " + favoritIt[0].album_premiere + " • Album";
    }else if(albumNumberSongs = 1){
      albumScreenArtistName.innerText = favoritIt[0].artist + " • " + favoritIt[0].album_premiere + " • Single";
    } 

    let featured_style = favoritIt[0].style;
    let featured_name = favoritIt[0].artist_id;
    let featured_country = favoritIt[0].country;

    const featuredBox = document.querySelector(".music-artist-album-screen-featured.tracks");
    var featuredIt = allMusicView.filter(x => x.style === featured_style || x.artist_id === albumArtistId || x.country === featured_country || x.colaboration_id === featured_name);
    featuredIt =  featuredIt.filter(x => x.album != albumNameData);

    if(collabArtist){
      featuredIt = featuredIt.concat(collabArtist);
    }
    
    featuredIt.sort(function(a, b){
      var values = [b.id - a.id, b.artist - a.artist, b.artist_id - a.artist_id, b.album_premiere - a.album_premiere],
      valueToUse = values[Math.floor(Math.random() * values.length)];
      return valueToUse;
    });

    featuredBox.innerHTML = "";
    for (let i = 0; i < featuredIt.length; i++) {
      let featuredItem =
        `<div class="music-artist-information-albums-item featured album" onclick="clickedSingleAlbum(this)" artist-data="${featuredIt[i].artist_id}" data-album='${featuredIt[i].album}'>
            <img class="music-artist-information-albums-item-img" src="${featuredIt[i].album_cover}">
            <p><span class="music-artist-information-albums-item-name">${featuredIt[i].album}</span> <span class="data-premiere">${featuredIt[i].album_premiere}</span></p>
         </div>`;
         featuredBox.insertAdjacentHTML("beforeend", featuredItem);
    }
  
    var productIds={};
    $('.music-artist-information-albums-item.featured.album').each(function(){
        var prodId = $(this).attr('data-album');
        if(productIds[prodId]){
           $(this).remove();
        }else{
           productIds[prodId] = true;
        }
    });

    $('.music-artist-information-albums-item.featured').slice(9).remove()

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
    featuredBox.scrollLeft = 0


    setTimeout(() => {
      collaborationAlbumCheck();
      lyricsItemCheck();
    }, 200);

    setTimeout(() => {
      albumScreen.scrollTop = 0;
    }, 250);


    document.querySelector(".music-artist-album-screen-featured.tracks").style.animation = 'none';
    setTimeout(() => {
      document.querySelector(".music-artist-album-screen-featured.tracks").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }, 400);

    document.querySelector(".music-artist-album-screen-featured.artists").style.animation = 'none';
    setTimeout(() => {
      document.querySelector(".music-artist-album-screen-featured.artists").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }, 400);
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
  var shareLink = document.createElement('input')
  text = '';
  text = window.location.origin + "/zesia/Zesia/#" + allMusic[indexNumb - 1].id;
  document.body.appendChild(shareLink);
  shareLink.value = text;
  shareLink.select();
  document.execCommand('copy');
  document.body.removeChild(shareLink);
  topOptionFastExit();

  setTimeout(() => {
    playlistToolTip.classList.add('on')
    playlistToolTip.innerText = 'Copied To Clipboard';
    setTimeout(() => {
      playlistToolTip.classList.remove('on')
    }, 2000);
  }, 300);
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
  var array = ["Welcome", "Enjoy Listening", "How are you", "Hope you enjoy", "Nice to see you"];
  var index = Math.floor(Math.random() * array.length);
  var timeZoneRandomText = array[index];
  timeZoneText.innerText = timeZoneRandomText;
}
if (time > 17){
  var array = ["Good Evening", "Enjoy Listening", "Have a nice one", "Hey there", "Wazzaa"];
  var index = Math.floor(Math.random() * array.length);
  var timeZoneRandomText = array[index];
  timeZoneText.innerText = timeZoneRandomText;
}

const bioBox = document.querySelector('.music-artist-content-artist-box');
const bioMoreBtn = document.querySelector(".music-artist-bio-data a");
const bioContent = document.querySelector(".music-artist-bio-data-about");

function artistScreenDataLoad(track){
  fastLoadingPop();
  animationReset();

  let track_id;
  let track_View;
  let track_View_key;
  
  if(track.getAttribute('colab-id')){
    track_View = allMusicView.filter(x => x.artist_id === track.getAttribute('colab-id'));
    track_id = track_View[0].id;
  } 
  if(track.getAttribute('id')){
    track_id = track.getAttribute('id');
    track_View_key = allMusicView.filter(x => x.id === track.getAttribute('id'));
    track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);  
  }


  artistItemTitle.innerText = track_View[0].artist;
  artistItemImg.src = `artists/${track_View[0].avatar}.jpg`;
  artistCardDataName.innerText = track_View[0].artist;
  artistCardBackgroundImg.style.backgroundImage = `url(${track_View[0].artist_img})`;

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
  activeSettingsScreen.classList.remove("active");
  historyScreen.classList.remove("active");
  document.querySelector(".notification_screen").classList.remove("active");
  bioBox.setAttribute('artist-data', track_View[0].artist_id)

  checkFollowStatus();
  artistProfilePopular(track_id);
  artistProfileReleases(track_id);
  artistProfileFeat(track_id);
  artistProfileAbout(track_id);
  artistProfileFansChoice(track_id);
  artistProfilePlaylists(track_id);
  artistProfileTweet(track_id);

  setTimeout(() => {
    musicArtistScreen.scrollTop = 0;
  }, 250);
  loseFocus();

  document.querySelector('.music-artist-content-playlists').classList.remove("fade-in")
  document.querySelector('.music-artist-content-container').classList.remove("fade-in")
  document.querySelector('.music-artist-content-album').classList.remove("fade-in")
  document.querySelector('.music-artist-content-artist').classList.remove("fade-in")
  document.querySelector('.music-artist-content-fanschoice').classList.remove("fade-in")
}

function artistProfilePopular(track){
  var track_View_key = allMusicView.filter(x => x.id === track);
  var profile_id = track_View_key[0].artist_id;

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

    if(document.querySelectorAll(".music-artist-content-number")[i].innerText.length < 2){
      document.querySelectorAll(".music-artist-content-number")[i].innerText = 0 +document.querySelectorAll(".music-artist-content-number")[i].innerText;
    }}

  lyricsItemCheck();

  if(favoritIt.length > 10){
    popBtn.parentElement.style.display="flex";
  }else{
    popBtn.parentElement.style.display="none";
  }
  popCont.classList.remove("view-all")
  popBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Show More`
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
  var track_View_key = allMusicView.filter(x => x.id === track);
  var profile_id = track_View_key[0].artist_id;

  const resultsFAV = document.querySelector(".music-artist-content-album");
  var favoritIt = allMusicView.filter(x => x.artist_id === profile_id);

  favoritIt.sort(function(a, b){ return b.album_premiere - a.album_premiere; });

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
       `<div class="center-container-item album-tag" onclick="fastLoadingPop();clickedSingleAlbum(this);" artist-data="${favoritIt[i].artist_id}" data-duplicate="${favoritIt[i].artist_id} ${favoritIt[i].album}" data-album="${favoritIt[i].album}">
          <div class="bg-box"><img src="${favoritIt[i].album_cover}"></div>
          <div class="img-box">    
            <img src="${favoritIt[i].album_cover}">
          </div>
          <div class="center-container-album-data">
            <h2>${favoritIt[i].album}</h2>
            <p>Album • ${favoritIt[i].artist} • ${favoritIt[i].album_premiere}</p>
          </div>
          <div class="center-container-item-action"><i onclick="quick_Play(this)" play-type="album" class="fa-solid fa-play"></i></div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.music-artist-content-album .center-container-item').each(function(){
      var prodId = $(this).attr('data-duplicate');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });

  setTimeout(() => {
    $('.center-container-item .center-container-item-action i').click(function(event) {
      event.stopPropagation();
    });
  }, 250);

  setTimeout(() => {
    if(document.querySelectorAll('.music-artist-content-album .music-artist-information-albums-item').length > 3){
      albBtn.parentElement.style.display="flex";
    }else{
      albBtn.parentElement.style.display="none";
    }
    albCont.classList.remove("view-all")
    albBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Show More`
  }, 100);
}

function artistProfileFeat(track){
  var track_View_key = allMusicView.filter(x => x.id === track);
  var track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);

  const resultsFAV = document.querySelector(".music-artist-content-feat");
  var favoritIt = allMusicView.filter(x => x.colaboration_id === track_View[0].artist_id);

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
            <span><p class="music-artist-content-item-lyrics">  ${Object.keys(favoritIt[i].lyrics).length}<p>${favoritIt[i].artist} • ${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var feat_title = document.querySelector("#ApperasOnCheck");

  if(favoritIt.length === 0){
    resultsFAV.removeAttribute('collaboration-data');
    resultsFAV.style.display="none";
    feat_title.style.display="none";
  }else{
    resultsFAV.setAttribute('collaboration-data', favoritIt[0].colaboration_id);
    resultsFAV.style.display="flex";
    feat_title.style.display="flex";
  }

  lyricsItemCheck();
}

function artistProfileTweet(track){
  var track_View_key = allMusicView.filter(x => x.id === track);
  var track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);

  tweet = document.querySelector('.content-video-item');
  tweetTitle = document.querySelector('.content-video-item-info p');
  tweetImg = document.querySelector('.content-video-item img');
  tweetSing = document.querySelector('.content-video-item span');
  titleBox = document.querySelector('#artistTweet');
  contentBox = document.querySelector(".music-artist-content-videos");
  if(track_View[0].tweet_title){
    tweetTitle.innerText = track_View[0].tweet_title;
    tweetImg.src = track_View[0].tweet_img;
    tweetSing.innerText = track_View[0].artist;
    if(track_View[0].tweet_link){
      tweet.setAttribute('link_to', track_View[0].tweet_link)
      tweet.setAttribute('onclick', 'clickedNotification(this)')
    }else if(track_View[0].tweet_href){
      tweet.setAttribute('link_to', track_View[0].tweet_href)
      tweet.setAttribute('onclick', 'clickedRedirection(this)')
    }
    titleBox.style.display = 'flex';
    contentBox.style.display = 'flex';
  }else{
    titleBox.style.display = 'none';
    contentBox.style.display = 'none';
  }
}

function artistProfilePlaylists(track){
  var track_View_key = allMusicView.filter(x => x.id === track);
  var track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);

  const resultsFAV = document.querySelector(".music-artist-content-playlists");
  resultsFAV.innerHTML='';

  let featuringPlaylist_Complete =
  `<div class="center-container-item playlist-generator complete" playlist-description="This Is ${track_View[0].artist}, contains all the most important songs in one playlist" artist-style="${track_View[0].style}" artist-name="${track_View[0].artist}" playlist-filter="Complete" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${track_View[0].artist_id}" playlist-img="${track_View[0].thisis_img}" data-album='${track_View[0].album}'>
   <img src="${track_View[0].thisis_img}">
   <h2>This Is ${track_View[0].artist}</h2>
   <p>Playlist</p>
   </div>`;

   let featuringPlaylist_Style =
   `<div class="center-container-item playlist-generator" playlist-description="${track_View[0].style} style, songs that will fit every fan of ${track_View[0].style} music" artist-style="${track_View[0].style}" artist-name="${track_View[0].artist}" playlist-style="${track_View[0].style}" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${track_View[0].artist_id}" playlist-img="${track_View[0].style_img}" data-album='${track_View[0].album}'>
    <img src="${track_View[0].style_img}">
    <h2>${track_View[0].style} • Style</h2>
    <p>Playlist</p>
    </div>`;

    let featuringPlaylist_Radio =
    `<div class="center-container-item playlist-generator" playlist-description="${track_View[0].artist} • Radio, is mix of artists, styles, collaborations and much more" artist-style="${track_View[0].style}" artist-name="${track_View[0].artist}" playlist-filter="Radio" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${track_View[0].artist_id}" playlist-img="${track_View[0].radio_img}" data-album='${track_View[0].album}'>
     <img src="${track_View[0].radio_img}">
     <h2>${track_View[0].artist} • Radio</h2>
     <p>Playlist</p>
     </div>`;


   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Style);
   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Radio);
   resultsFAV.insertAdjacentHTML("afterbegin", featuringPlaylist_Complete);
   resultsFAV.scrollLeft=0;
}

function artistProfileAbout(track){
  var track_View_key = allMusicView.filter(x => x.id === track);
  var track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);

  document.querySelector(".music-artist-content-artist-box-img").src = track_View[0].gallery_img_1;
  document.querySelector(".music-artist-content-artist-box h1").innerText = track_View[0].artist;
  document.querySelector(".music-artist-content-artist-box p").innerText = track_View[0].bio;
}

function artistProfileFansChoice(track){
  var track_View_key = allMusicView.filter(x => x.id === track);
  var track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);

  var profile_style = track_View[0].style;
  var profile_country = track_View[0].country;
  var profile_collab = track_View[0].artist_id;

  const resultsFAV = document.querySelector(".music-artist-content-fanschoice");
  var favoritIt = allMusicView.filter(x => x.style === profile_style && x.artist_id != profile_collab || x.country === profile_country && x.artist_id != profile_collab || x.colaboration_id === profile_collab && x.artist_id != profile_collab);

  favoritIt.sort(function(a, b){
    var values = [b.id - a.id, b.artist - a.artist, b.artist_id - a.artist_id, b.album_premiere - a.album_premiere],
    valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse;
  });

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    if(favoritIt[i].artist_img === undefined){
      replacedID = favoritIt[i].artist_id;
      replacedDATA = allMusicView.filter(x => x.artist_id === replacedID);
      replacedIMG = replacedDATA[0].avatar_mini;
    }else{
      replacedIMG = favoritIt[i].avatar_mini;
    }
    
    let resultFAV =
      `<div class="music-artist-content-item" artist-id='${favoritIt[i].artist_id}' id='${favoritIt[i].id}' onclick="artistScreenDataLoad(this)">
          <img src="${replacedIMG}">
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

  $('.music-artist-content-fanschoice .music-artist-content-item').slice(20).remove()

  resultsFAV.scrollLeft = 0;
}

const uiRandomArtistCard = document.querySelector("#head_content_item")
uiRandomArtistCardName = uiRandomArtistCard.querySelector(".head-content-item-name");
uiRandomArtistCardImg = uiRandomArtistCard.querySelector("img");

function randomHomeArtist(){
  var indexNumb = localStorage.getItem("fesh4we#da=") || Math.floor((Math.random() * allMusicView.length) + 1);
  var track_View_key = allMusicView.filter(x => x.id === `${indexNumb}` );
  var track_View = allMusicView.filter(x => x.artist_id === track_View_key[0].artist_id);

  uiRandomArtistCardName.innerText = track_View[0].artist;
  uiRandomArtistCardImg.src = `artists/${track_View[0].avatar}.jpg`; 
  uiRandomArtistCard.setAttribute("artist-data", track_View[0].artist_id);
  uiRandomArtistCard.setAttribute("id", track_View[0].id);

  localStorage.setItem('fesh4we#da=', indexNumb);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');

  if(!localStorage.getItem('fesh4we#td=')){
    localStorage.setItem('fesh4we#td=', dd);
    localStorage.setItem('fesh4we#tm=', mm);
  }

  if(localStorage.getItem('fesh4we#td=') != dd || localStorage.getItem('fesh4we#tm=') != mm){
    indexNumb = Math.floor((Math.random() * allMusicView.length) + 1);
    localStorage.setItem('fesh4we#da=', indexNumb);
    localStorage.setItem('fesh4we#td=', dd);
    localStorage.setItem('fesh4we#tm=', mm);
    randomHomeArtist();
  }

  if(uiRandomArtistCardName.innerText.length > 15){
    uiRandomArtistCardName.style.fontSize = '24px';
    if(uiRandomArtistCardName.innerText.length > 30){
      uiRandomArtistCardName.style.fontSize = '16px';
    }
  }
}

const uiLastViewedAlbum_1 = document.querySelector("#head_content_album_1");
const uiLastViewedAlbum_2 = document.querySelector("#head_content_album_2");
const uiLastViewedPlaylist = document.querySelector("#head_content_playlist");

function uiLastViewedAlbumsLoad(){
  let lastAlbum_1 = localStorage.getItem("lastViewedAlbum_1");
  let lastAlbum_2 = localStorage.getItem("lastViewedAlbum_2");
  let lastPlaylist = localStorage.getItem("last_PLAYLIST");

  if(lastPlaylist && lastPlaylist.includes('playlist_user_')){
    var lastPlaylistSRC = localStorage.getItem(lastPlaylist);
    
    uiLastViewedPlaylist.setAttribute('onclick', 'fastLoadingPop();playlist_SELECT_CLICKED(this);')
    
    uiLastViewedPlaylist.querySelector("p").innerText = lastPlaylistSRC.split(',')[0];
    uiLastViewedPlaylist.querySelector(".data-title").innerText = lastPlaylistSRC.split(',')[0];
    uiLastViewedPlaylist.querySelector("img").src = lastPlaylistSRC.split(',')[2];
    uiLastViewedPlaylist.querySelector(".head-content-item-background").src = lastPlaylistSRC.split(',')[2];
    uiLastViewedPlaylist.setAttribute("playlist-id", lastPlaylist);
  }else if(!lastPlaylist){
    var lastPlaylistSRC = allPlaylists.filter(x => x.play_id === "1");

    uiLastViewedPlaylist.setAttribute('onclick', 'clickedPlaylist(this);')

    uiLastViewedPlaylist.querySelector("p").innerText = lastPlaylistSRC[0].description;
    uiLastViewedPlaylist.querySelector(".data-title").innerText = lastPlaylistSRC[0].name;
    uiLastViewedPlaylist.querySelector("img").src = lastPlaylistSRC[0].image;
    uiLastViewedPlaylist.querySelector(".head-content-item-background").src = lastPlaylistSRC[0].image;
    uiLastViewedPlaylist.setAttribute("playlist-id", lastPlaylistSRC[0].play_id);
  }else{
    var lastPlaylistSRC = allPlaylists.filter(x => x.play_id === lastPlaylist);

    uiLastViewedPlaylist.setAttribute('onclick', 'clickedPlaylist(this);')

    uiLastViewedPlaylist.querySelector("p").innerText = lastPlaylistSRC[0].description;
    uiLastViewedPlaylist.querySelector(".data-title").innerText = lastPlaylistSRC[0].name;
    uiLastViewedPlaylist.querySelector("img").src = lastPlaylistSRC[0].image;
    uiLastViewedPlaylist.querySelector(".head-content-item-background").src = lastPlaylistSRC[0].image;
    uiLastViewedPlaylist.setAttribute("playlist-id", lastPlaylistSRC[0].play_id);
  }
  
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

    pcfavoritBtn.classList.add('active')
    pcfavoritBtn.classList.add('fa-solid')
    pcfavoritBtn.classList.remove('fa-regular')
  }
  if (allMusic[indexNumb - 1].status === "nostatus") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Like</span>';
    musicTopOptionsFavorite.classList.remove('active')
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')

    pcfavoritBtn.classList.remove('active')
    pcfavoritBtn.classList.remove('fa-solid')
    pcfavoritBtn.classList.add('fa-regular')
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

let p_avatar = document.querySelector(".user_profile_img_box img");
let p_avatarBg = document.querySelector(".user_profile_image_bg");
let p_avatarSmall = document.querySelector(".library-top-avatar img");

const searchProfileBy = document.querySelector("#user_profile_search_bar");
const userProfile = document.querySelector(".user_profile_screen");
searchProfileBy.addEventListener('input', filterInProfile);

function filterInProfile(){
  let input = searchProfileBy.value

  if(searchProfileBy.value === "$X$ver_alpha$X$"){
    console.log('%cYou Have Successfully Unlocked Beta Settings! ', 'background: #222; font-size: 24px; color: #ef5466');
    
  $('[beta]').each(function () {
    $(this).css("display", "flex");
  });

  }

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
  wrapper.classList.remove("active");
  activeSettingsScreen.classList.remove("active");
  searchProfileBy.parentElement.classList.add("active");
  userProfileActionSearch.classList.remove("active");
  document.querySelector(".user_profile_header_content_name").innerText = localStorage.getItem('personalization-data-name');

  userProfileFilterPlaylist.classList.add("active");
  createdPlaylistsContent();
}

const userProfileActionSearch = document.querySelector(".user_profile_action_search");
userProfileActionSearch.addEventListener('click', () => {
  searchProfileBy.parentElement.classList.toggle("active");
  userProfileActionSearch.classList.toggle("active");
})

const userProfileFilterPlaylist = document.querySelector(".user_profile_header_filter_by_playlist");

userProfileFilterPlaylist.addEventListener('click', () => {
  userProfileFilterPlaylist.classList.add("active");
  createdPlaylistsContent();
})

function followArtist(){
  var followName = artistItemTitle.innerText;
  var followFilter = allMusicView.filter(x => x.artist === followName);

  for (let i = 0; i < followFilter.length; i++) {

    if (followFilter[i].artist_status === "followed") {
      followFilter[i].artist_status = "none";
      localStorage.setItem(followFilter[i].artist + "," + followFilter[i].artist_id, followFilter[i].artist_status)
    }else if (followFilter[i].artist_status === "none") {
      followFilter[i].artist_status = "followed";
      localStorage.setItem(followFilter[i].artist + "," + followFilter[i].artist_id, followFilter[i].artist_status)
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
    </div>
      </div>`;
  resultsFAV.insertAdjacentHTML("beforeend", resultFAV);

  document.querySelector(".user_profile_content_dailyStats_item_total").innerText = localStorage.getItem("trSts") || 0;
  document.querySelector(".user_profile_content_dailyStats_item_artists").innerText = allMusicView.filter(x => x.status === "favorite").length;
}

function homeFavortiesArtists() {
  const resultsFAV = document.querySelector(".favorites-artists-container .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.artist_status === "followed");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="artistScreenDataLoad(this);" id='${favoritIt[i].id}' artist-id='${favoritIt[i].artist_id}' artist-data='${favoritIt[i].artist}'>
        <div class="bg-box"><img src="${favoritIt[i].avatar_mini}"></div>
        <div class="img-box">    
          <img src="${favoritIt[i].avatar_mini}">
        </div>
          <h2>${favoritIt[i].artist}</h2>
          <p>Artist</p>
          <div class="center-container-item-action"><i onclick="quick_Play(this)" class="fa-solid fa-play"></i></div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.favorites-artists-container .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('artist-id');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });

  setTimeout(() => {
    $('.center-container-item .center-container-item-action i').click(function(event) {
      event.stopPropagation();
    });
  }, 250);
}


const DOMINANT_COLOR_QUALITY = 5;

const image = document.querySelector(".music-img img");
const mainMusicBackgroundGradient = document.querySelector(".background-music-img");
const pcBar = document.querySelector(".pc-controls-ui");
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
  + "rgba("+ colour +" , 0.5)"
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

  document.querySelector(".music-artist-option").style.background = 'linear-gradient(' + hexColor + + `90` + ', ' + 'rgb(25 25 34 / 75%)' + ')';

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
  var favoritItNotUnique = allMusicView.filter(x => x.tag === "Popular");
  const key = 'artist_id';
  const favoritIt = [...new Map(favoritItNotUnique.map(item => [item[key], item])).values()]

  shuffle(favoritIt);

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item popular-artist" id='${favoritIt[i].id}' data-artist='${favoritIt[i].artist}' artist-id="${favoritIt[i].artist_id}" onclick="artistScreenDataLoad(this)">
      <div class="bg-box"><img src="${favoritIt[i].avatar_mini}"></div>
      <div class="img-box">    
          <img src="${favoritIt[i].avatar_mini}">
        </div>
       <h2>${favoritIt[i].artist}</h2>
       <p>Artist</p>
       <div class="center-container-item-action"><i onclick="quick_Play(this)" class="fa-solid fa-play"></i></div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.center-container.popular-artists-container .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('artist-id');
      if(productIds[prodId]){
         $(this).remove();
      }else{
         productIds[prodId] = true;
      }
  });

  setTimeout(() => {
    $('.center-container-item .center-container-item-action i').click(function(event) {
      event.stopPropagation();
    });
  }, 250);

  resultsFAV.scrollLeft = 0;
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

    if (localStorage.getItem(followFilter[i].artist + "," + followFilter[i].artist_id) === null) {

    }else if (localStorage.getItem(followFilter[i].artist + "," + followFilter[i].artist_id) === "followed"){
      followFilter[i].artist_status = "followed";
    }else if (localStorage.getItem(followFilter[i].artist + "," + followFilter[i].artist_id) === "none"){
      followFilter[i].artist_status = "none";
    }

  }
}

function featuringLoad(){
  let featuringBox = document.querySelector(".featuringArtistsBox");
  let featuringArtist = document.querySelector(".featuringArtistName");

  resultsFAV = featuringBox;

  var followedArtistsData = allMusicView.filter(x => x.artist_status === "followed");
  let randomArtistIndex = Math.floor((Math.random() * followedArtistsData.length));

  if(followedArtistsData.length === 0){
    document.querySelector('#featuringBox').style.display="none";
  }else{
    document.querySelector('#featuringBox').style.display="block";
  }

  if(followedArtistsData.length > 0){
  var favoritIt = allMusicView.filter(x => x.artist_id === followedArtistsData[randomArtistIndex].artist_id);

  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item popular-artist" onclick="clickedSingleAlbum(this)" artist-data="${favoritIt[i].artist_id}" data-album='${favoritIt[i].album}'>
      <div class="bg-box"><img src="${favoritIt[i].album_cover}"></div>
      <div class="img-box">    
          <img src="${favoritIt[i].album_cover}">
        </div>
       <h2>${favoritIt[i].album}</h2>
       <p>Album • ${favoritIt[i].album_premiere}</p>
       <div class="center-container-item-action"><i onclick="quick_Play(this)" play-type="album" class="fa-solid fa-play"></i></div>
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
  `<div class="center-container-item playlist-generator complete" playlist-description="This Is ${favoritIt[0].artist}, contains all the most important songs in one playlist" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-filter="Complete" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].thisis_img}" data-album='${favoritIt[0].album}'>
    <div class="bg-box"><img src="${favoritIt[0].thisis_img}"></div>
    <div class="img-box">    
      <img src="${favoritIt[0].thisis_img}">
    </div>
   <h2>This Is ${favoritIt[0].artist}</h2>
   <p>Playlist</p>
   </div>`;

   let featuringPlaylist_Style =
   `<div class="center-container-item playlist-generator" playlist-description="${favoritIt[0].style} style, songs that will fit every fan of ${favoritIt[0].style} music" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-style="${favoritIt[0].style}" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].style_img}" data-album='${favoritIt[0].album}'>
    <div class="bg-box"><img src="${favoritIt[0].style_img}"></div>
    <div class="img-box">    
      <img src="${favoritIt[0].style_img}">
      </div>
    <h2>${favoritIt[0].style} • Style</h2>
    <p>Playlist</p>
    </div>`;

    let featuringPlaylist_Radio =
    `<div class="center-container-item playlist-generator" playlist-description="${favoritIt[0].artist} • Radio, is mix of artists, styles, collaborations and much more" artist-style="${favoritIt[0].style}" artist-name="${favoritIt[0].artist}" playlist-filter="Radio" onclick="fastLoadingPop(); clickedSinglePlaylist(this)" artist-data="${favoritIt[0].artist_id}" playlist-img="${favoritIt[0].radio_img}" data-album='${favoritIt[0].album}'>
      <div class="bg-box"><img src="${favoritIt[0].radio_img}"></div>
      <div class="img-box">  
      <img src="${favoritIt[0].radio_img}">
      </div>
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

function errorPop(){
  document.querySelector(".error_popup").classList.add("active");
  setTimeout(() => {
    errorPopHide()
  }, 5000);
}

function errorPopHide(){
  document.querySelector(".error_popup").classList.remove("active");
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

volumeBLOCK = document.querySelector('.input-show-block');
volumeOptions_BLOCK = document.querySelector('.volume-show-box');
const ui_ARTISTHEADER = document.querySelector(".music-artist-item-title");



function volumeSet(e){
  let volume_data = Math.floor(e.value);
  mainAudio.volume = volume_data/100;
  musicVolumeTop.innerText = volume_data + "%";
  localStorage.setItem("user_Volume", mainAudio.volume);
  volumeBLOCK.style.width=volume_data + 'px';
  volumeOptions_BLOCK.style.width=volume_data+ '%';

  $('.pc-volume-slider').addClass('change').attr('data-content', volume_data + "%");
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
    if(allMusic[indexNumb - 1].canvas != ""){
      document.querySelector(".background-canvas video").src = allMusic[indexNumb - 1].canvas;
      document.querySelector(".background-canvas video").style.display="flex";
      document.querySelector(".background-canvas img").style.display="none";
      musicCanvasVideo.play();
    }else{
      document.querySelector(".background-canvas video").src = "https://static.vecteezy.com/system/resources/previews/032/509/833/mp4/4k-elegant-black-gradient-smooth-animation-background-black-clean-corporate-background-loop-free-video.mp4";
      document.querySelector(".background-canvas video").style.display="flex";
      document.querySelector(".background-canvas img").style.display="none";
      musicCanvasVideo.currentTime = 1;
      musicCanvasVideo.play();
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

  if(localStorage.getItem("lyricsRender")){
    document.querySelector("#userSettingsLyricsRender").classList.add("active");
  }

  if(localStorage.getItem("ui_artist")){
    document.querySelector("#userSettingsUIArtist").classList.add("active");
    ui_ARTISTHEADER.classList.add('cfgHIDE');
  }

  if(localStorage.getItem("trackCoverStretched")){
    musicImgBox.classList.add("stretched");
    document.querySelector("#userSettingsStretched").classList.add('active');
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
  allMusic = allMusicView.filter(x => x.id === linkHref);
  indexNumb = 1;
  loadMusic(indexNumb);
  playMusic();
}

function clickedRedirection(element){
  let linkHref = element.getAttribute('link_to');
  window.location = linkHref;
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
  mainAudio.currentTime = mainAudio.currentTime + 0.75;
  document.querySelector('.main-music-lyrics-box').style.scrollBehavior = 'auto';
  pauseMusic();

  setTimeout(() => {
    playMusic();
    setTimeout(() => {
      document.querySelector('.main-music-lyrics-box').style.scrollBehavior = 'smooth';
    }, 250);
  }, 400);
  

  lyricsBox.innerHTML = '';
  lyricsSync.classList.remove('active');
  clearLyricStatus();
}

function lyricsRender(){
  if(localStorage.getItem('lyricsRender')){
    localStorage.removeItem('lyricsRender');
  }else{
    localStorage.setItem('lyricsRender', 'true');
  }
}

const lyricsSync = document.querySelector('.lyric-mode-toggle');

$(lyricsSync).on("click", function(){
  lyricsBox.classList.toggle('pauseLyrics');
  if(lyricsBox.classList.contains('pauseLyrics')){
    lyricsSync.classList.add('active');
  }else{
    lyricsSync.classList.remove('active');
  }
})

function lyricsMode(){
  const resultsFAV = lyricsBox;

  if(wrapper.classList.contains('paused')){

    if(document.querySelector('.main-music-lyrics-box p.active')){
      const last = Array.from(
        document.querySelectorAll('.main-music-lyrics-box p.active')
      ).pop();

      var divTop = last.offsetTop;
      var lsTop = lyricsBox.offsetHeight;
      var activeItemPos = divTop - lsTop + 350;
    }
    if(allMusic[indexNumb - 1].lyrics_nonSync === ""){
    lyricsBox.classList.remove('lyricsNonSync');
    lyricsBox.scroll({
      behavior: 'auto'
    });}
    else if(lyricsBox.classList.contains('pauseLyrics')){
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

  let lyricsDelay = 30;
  let lyricsGap = -1;

  if(localStorage.getItem('lyricsRender')){
    lyricsDelay = 3600;
  }else{
    lyricsDelay = 30;
  }

    const lyricsLenght = allMusic[indexNumb - 1].lyrics.length;
  
    if(allMusic[indexNumb - 1].lyrics[0]){
      for(var i = 0; i < lyricsLenght; i++){
        if(Math.floor(allMusic[indexNumb - 1].lyrics[i].stamp - lyricsDelay < mainAudio.currentTime) && allMusic[indexNumb - 1].lyrics[i].stamp != "" && !lyricsBox.classList.contains('atr-' + i)){
          lyricsBox.classList.add('atr-' + i);
          if(allMusic[indexNumb - 1].lyrics[i].ls != undefined){
            let resultFAV = 
            `<p onclick="lyricsStamp(this)" timeAtr='${allMusic[indexNumb - 1].lyrics[i].stamp}'>${allMusic[indexNumb - 1].lyrics[i].ls}</p>`;
            resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
          }}else if(allMusic[indexNumb - 1].lyrics[i].stamp - lyricsGap < mainAudio.currentTime){
            let lsAtr = document.querySelector('[timeAtr="'+ allMusic[indexNumb - 1].lyrics[i].stamp + '"]');
            lsAtr.classList.add("active");
      }
      if(allMusic[indexNumb - 1].lyrics[0].ls === "* Lyrics Are Not Yet Synchronized With Track *"){
        lyricsBox.classList.add('pauseLyrics');
        lyricsSync.classList.add('active');
      }else if(lyricsSync.classList.contains('active')){
        lyricsBox.classList.add('pauseLyrics');
        lyricsSync.classList.add('active');
      }else{
        lyricsBox.classList.remove('pauseLyrics');
        lyricsSync.classList.remove('active');
      }
    }}else{
      resultsFAV.innerHTML = "<span>Song Doesn't Have Prepared Lyrics Yet, Hopefully It Will Change Soon</span>";
    }

  
  
  $(document).ready(function(){
    $(".main-music-lyrics-box p.active").css("transform","translateX(0px)");
    $(".main-music-lyrics-box p.active").css("padding","5px 0");
    $(".main-music-lyrics-box p").css("font-size", user_lyricsFontSize+"px");
    $(".main-music-lyrics-box p").css("letter-spacing", user_lyricsFontGap+"px");
    $(".main-music-lyrics-box p.active").last().css("transform","translateX("+user_lyricsActiveLeftGap+"px)");
    $(".main-music-lyrics-box p.active").last().css("padding",user_lyricsActiveUpDownGap + "px 0");
  });

  $(".main-music-header.lyrics .header-shadow").css("filter", "blur("+user_lyricsBgBlur+"px)");
}

function trackLyrics(){
  document.querySelector(".main-music-lyrics-box").classList.toggle("active");
  musicImg.classList.toggle("lyrics");
  musicImgBox.classList.toggle("lyrics");
  if(musicImg.classList.contains("lyrics")){
    if(localStorage.lyricsAccouracyImprove){
      document.querySelector('.top-controls').classList.add('lyrics');
      checkLyricsPerSec = setInterval(lyricsMode,250);
    }else{
      checkLyricsPerSec = setInterval(lyricsMode,500);
    }
  }else{
    clearInterval(checkLyricsPerSec);
    document.querySelector('.top-controls').classList.remove('lyrics');
  }
  lyricsShortcut();
}

function scrolCenterRight(element){
  let box = element.parentElement.parentElement.parentElement.querySelector(".center-container-scrollable");
  if(!box){
    box = document.querySelector(".music-artist-content-album");
  }else{
    box = element.parentElement.parentElement.parentElement.querySelector(".center-container-scrollable");
  }
  box.scrollBy({
    top: 0,
    left: 330,
    behavior: "smooth"
  });
}

function scrolCenterLeft(element){
  let box = element.parentElement.parentElement.parentElement.querySelector(".center-container-scrollable");
  if(!box){
    box = document.querySelector(".music-artist-content-album");
  }else{
    box = element.parentElement.parentElement.parentElement.querySelector(".center-container-scrollable");
  }
  box.scrollBy({
    top: 0,
    left: -330,
    behavior: "smooth"
  });
}

function scrollArtistRight(){
  let box = document.querySelector(".music-artist-content-fanschoice");
  let boxWidth = box.clientWidth;
  boxWidth = boxWidth/2;
  box.scrollBy({
    top: 0,
    left: 330,
    behavior: "smooth"
  });
}

function scrollArtistLeft(){
  let box = document.querySelector(".music-artist-content-fanschoice");
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

  if(min < 10){
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
  let ls_data_31 = localStorage.getItem("track_data_31");
  let ls_data_32 = localStorage.getItem("track_data_32");
  let ls_data_33 = localStorage.getItem("track_data_33");
  let ls_data_34 = localStorage.getItem("track_data_34");
  let ls_data_35 = localStorage.getItem("track_data_35");
  let ls_data_36 = localStorage.getItem("track_data_36");
  let ls_data_37 = localStorage.getItem("track_data_37");
  let ls_data_38 = localStorage.getItem("track_data_38");
  let ls_data_39 = localStorage.getItem("track_data_39");
  let ls_data_40 = localStorage.getItem("track_data_40");
  let ls_data_41 = localStorage.getItem("track_data_41");
  let ls_data_42 = localStorage.getItem("track_data_42");
  let ls_data_43 = localStorage.getItem("track_data_43");
  let ls_data_44 = localStorage.getItem("track_data_44");
  let ls_data_45 = localStorage.getItem("track_data_45");
  let ls_data_46 = localStorage.getItem("track_data_46");
  let ls_data_47 = localStorage.getItem("track_data_47");
  let ls_data_48 = localStorage.getItem("track_data_48");
  let ls_data_49 = localStorage.getItem("track_data_49");
  let ls_data_50 = localStorage.getItem("track_data_50");


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
    localStorage.setItem("track_data_31", ls_data_30);
    localStorage.setItem("track_data_32", ls_data_31);
    localStorage.setItem("track_data_33", ls_data_32);
    localStorage.setItem("track_data_34", ls_data_33);
    localStorage.setItem("track_data_35", ls_data_34);
    localStorage.setItem("track_data_36", ls_data_35);
    localStorage.setItem("track_data_37", ls_data_36);
    localStorage.setItem("track_data_38", ls_data_37);
    localStorage.setItem("track_data_39", ls_data_38);
    localStorage.setItem("track_data_40", ls_data_39);   
    localStorage.setItem("track_data_41", ls_data_40);
    localStorage.setItem("track_data_42", ls_data_41);
    localStorage.setItem("track_data_43", ls_data_42);
    localStorage.setItem("track_data_44", ls_data_43);
    localStorage.setItem("track_data_45", ls_data_44);
    localStorage.setItem("track_data_46", ls_data_45);
    localStorage.setItem("track_data_47", ls_data_46);
    localStorage.setItem("track_data_48", ls_data_47);
    localStorage.setItem("track_data_49", ls_data_48);
    localStorage.setItem("track_data_50", ls_data_49);   
  }else{
  } 
}

function trackOptions(e){
  let trackId = e.getAttribute('link_to') || e.parentElement.getAttribute('link_to') || e.parentElement.getAttribute('id') || e.parentElement.getAttribute('li-index') || e.getAttribute('li-index');

  var favoritIt = allMusicView.filter(x => x.id === trackId);

  let placeholder = document.querySelector(".search-options-box");
  placeholder.innerHTML = '';
  let element = `
  <div class="track-options-screen">

    <div class="track-options-controls" onclick="trackHideOptions();">
    </div>

    <div class="track-options-header">
      <img src="images/${favoritIt[0].img}.jpg">
      <div class='track-options-data'>
        <p>${favoritIt[0].name}</p>
        <span id="${favoritIt[0].id}" onclick="artistScreenDataLoad(this);trackHideOptions();">By ${favoritIt[0].artist}</span>
        <span artist-data="${favoritIt[0].artist_id}" data-album="${favoritIt[0].album}" onclick="clickedSingleAlbum(this);trackHideOptions();fastLoadingPop();">From ${favoritIt[0].album} • ${favoritIt[0].album_premiere}</span>
      </div>
    </div>

    <div class="track-options-menu" track-data="${favoritIt[0].id}" album-data="${favoritIt[0].album}" album-premiere="${favoritIt[0].album_premiere}" album-img="${favoritIt[0].album_cover}" >

      <div class="track-options-item" id="trackFavoriteBtn" onclick="trackOption_Favorite(this)">
        <i class="fa-solid fa-heart"></i>
        <p> Like</p>
      </div>

      <div class="track-options-item" id="${favoritIt[0].id}" onclick="artistScreenDataLoad(this);trackHideOptions();">
        <i class="fa-solid fa-user"></i>
        <p> View Artist</p>
      </div>

      <div class="track-options-item" artist-data="${favoritIt[0].artist_id}" data-album="${favoritIt[0].album}" onclick="clickedSingleAlbum(this);trackHideOptions();fastLoadingPop();">
        <i class="fa-solid fa-compact-disc"></i>
        <p> View Album</p>
      </div>

      <div class="track-options-item" onclick="trackOption_Share(this)">
        <i class="fa-solid fa-share-nodes"></i>
        <p> Share</p>
      </div>

      <div class="track-options-item" onclick="trackOption_Queue(this)">
        <i class="fa-solid fa-list-ol"></i>
        <p>Add To Queue</p>
      </div>

      <div class="track-options-item" onclick="playlist_SELECT(this);" track-data="${favoritIt[0].id}">
        <i class="fa-solid fa-bookmark"></i>
        <p>Add To Playlist</p>
      </div>

      <div class="track-options-item item-remove" onclick="playlist_SELECT_REMOVE(this);" track-data="${favoritIt[0].id}">
      <i class="fa-regular fa-square-minus"></i>
      <p>Remove From This Playlist</p>
    </div>

    </div>

  </div>`;
  placeholder.insertAdjacentHTML("beforeend", element);
  if(playlistScreen.classList.contains("active") && playlistResult.getAttribute('playlist-editable') === "true"){
    document.querySelector(".track-options-item.item-remove").style.display="flex";
  }else{
    document.querySelector(".track-options-item.item-remove").style.display="none";
  }
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
      trackOptionFavoriteText.innerText = " Liked";
    }
    if (allMusicView[trackID].status === "nostatus") {
      trackOptionFavorite.classList.remove('active');
      trackOptionFavoriteIcon.classList.add('fa-regular')
      trackOptionFavoriteIcon.classList.remove('fa-solid')
      trackOptionFavoriteText.innerText = " Like";
    }

    document.querySelector(".track-options-data").style.animation = 'none';
    document.querySelector(".track-options-data").style.opacity = '0';
    setTimeout(() => {
      document.querySelector(".track-options-data").style.opacity = '1';
      document.querySelector(".track-options-data").style.animation = 'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    }, 100);
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

    pcfavoritBtn.classList.add('active')
    pcfavoritBtn.classList.add('fa-solid')
    pcfavoritBtn.classList.remove('fa-regular')

    trackOptionFavorite.classList.add('active');
    trackOptionFavoriteIcon.classList.remove('fa-regular')
    trackOptionFavoriteIcon.classList.add('fa-solid')
    trackOptionFavoriteText.innerText = " Liked";
  }
  if (allMusicView[trackID].status === "nostatus") {
    musicTopOptionsFavorite.innerHTML = '<i class="fa-solid fa-heart"></i><span> Like</span>';
    musicTopOptionsFavorite.classList.remove('active')
    favoritBtn.classList.remove('active')
    favoritBtn.classList.remove('fa-solid')
    favoritBtn.classList.add('fa-regular')

    pcfavoritBtn.classList.remove('active')
    pcfavoritBtn.classList.remove('fa-solid')
    pcfavoritBtn.classList.add('fa-regular')

    trackOptionFavorite.classList.remove('active');
    trackOptionFavoriteIcon.classList.add('fa-regular')
    trackOptionFavoriteIcon.classList.remove('fa-solid')
    trackOptionFavoriteText.innerText = " Like";
  }
}

function trackOption_Share(data){
  let trackID = data.parentElement.getAttribute('track-data');

  var shareLink = document.createElement('input'),
  text = window.location.origin + "/zesia/Zesia/#" + trackID;
  document.body.appendChild(shareLink);
  shareLink.value = text;
  shareLink.select();
  document.execCommand('copy');
  document.body.removeChild(shareLink);
  trackHideOptions();
}

function trackOption_Queue(data){
  let trackID = data.parentElement.getAttribute('track-data');
  let trackOBJECT = allMusicView.filter(x => x.id === trackID);
  allMusic = allMusic.concat(trackOBJECT);
  queueDataLoad();
  trackHideOptions();
}

function trackOption_Playlist_Remove(data){
  let trackID = data.parentElement.getAttribute('track-data');
  trackHideOptions();
}

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

  navbarQuickBar();
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
      `<div class="center-container-item" onclick="fastLoadingPop(); clickedSingleAlbum(this)" check-atr='${favoritIt[i].artist_id} ${favoritIt[i].album}' artist-data='${favoritIt[i].artist_id}' data-album='${favoritIt[i].album}'>
        <div class="bg-box"><img src="${favoritIt[i].album_cover}"></div>
        <div class="img-box">    
            <img src="${favoritIt[i].album_cover}">
          </div>
          <h2>${favoritIt[i].album}</h2>
          <p>${favoritIt[i].artist}</p>
          <div class="center-container-item-action"><i onclick="quick_Play(this)" play-type="album" class="fa-solid fa-play"></i></div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.favorites-albums-container .center-container-scrollable .center-container-item').each(function(){
      var prodId = $(this).attr('check-atr');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });

  $('.favorites-albums-container .center-container-scrollable .center-container-item').slice(6).remove()

  if(document.querySelectorAll('.favorites-albums-container .center-container-scrollable .center-container-item').length <= 1){
    document.querySelector(".favorites-albums-container").style.display='none';
  }else{
    document.querySelector(".favorites-albums-container").style.display='block';
  }
}

homeFavortiesAlbums();

const playlistScreen = document.querySelector(".music-playlist-album-screen");
const playlistExit = document.querySelector(".music-playlist-album-screen-exit");

const playlistImg = document.querySelector(".music-playlist-album-screen-img-background #main-img-header");
const playlistImgBg = document.querySelector(".music-playlist-album-screen-img-background #bg-img-header");
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
  playlistResult.setAttribute('queue-long-data', '');
  playlistResult.setAttribute('playlist-editable', 'false');

  playlistEditBtn.classList.remove('active');
  playlistEDIT.classList.remove('fs921');
  playlistImgBg.src = playlistData_Img;

  if(playlistFilter){

    if(playlistFilter === "Complete"){
      var favoritIt = allMusicView.filter(x => x.artist_id === playlistData_Artist || x.colaboration_id === playlistData_Artist);
      playlistTracksCounter.innerText = favoritIt.length;

      playlistResult.setAttribute('playlist-filter', playlistFilter)
      playlistResult.setAttribute('artist-name', playlistData_ArtistName)
      playlistResult.setAttribute('artist-data', playlistData_Artist)
      
      playlistResult.innerHTML = "";
      for (let i = 0; i < favoritIt.length; i++) {
        let resultFAV =
          `<div class="music-artist-album-item" queue-index='${i+1}' id='${favoritIt[i].id}' onclick="playlist_QUEUE_CLICKED(this)">
          <img src="${favoritIt[i].img_mini}">
                <div class="music-artist-album-item-data">
                    <h1>${favoritIt[i].name}</h1>
                    <span>${favoritIt[i].artist}</span>
                </div>
                <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
           </div>`;
           playlistResult.insertAdjacentHTML("beforeend", resultFAV);

           actionDataToBeReplaced = playlistResult.getAttribute('queue-long-data');
           playlistResult.setAttribute('queue-long-data', actionDataToBeReplaced + favoritIt[i].id + ',' )
      }
      
    }else if(playlistFilter === "Radio"){
      var favoritIt = allMusicView.filter(x => x.artist_id === playlistData_Artist || x.colaboration_id === playlistData_Artist || x.style === playlistData_ArtistStyle).slice(0, 50);
      
      playlistResult.setAttribute('playlist-filter', playlistFilter)
      playlistResult.setAttribute('playlist-style', playlistData_ArtistStyle)
      playlistResult.setAttribute('artist-name', playlistData_ArtistName)
      playlistResult.setAttribute('artist-data', playlistData_Artist)
      playlistResult.setAttribute('artist-style', playlistData_ArtistStyle)

      playlistResult.innerHTML = "";
      for (let i = 0; i < favoritIt.length && i < 50; i++) {
        let resultFAV =
          `<div class="music-artist-album-item" queue-index='${i+1}' id='${favoritIt[i].id}' onclick="playlist_QUEUE_CLICKED(this)">
          <img src="${favoritIt[i].img_mini}">
                <div class="music-artist-album-item-data">
                    <h1>${favoritIt[i].name}</h1>
                    <span>${favoritIt[i].artist}</span>
                </div>
                <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
           </div>`;
           playlistResult.insertAdjacentHTML("beforeend", resultFAV);

           actionDataToBeReplaced = playlistResult.getAttribute('queue-long-data');
           playlistResult.setAttribute('queue-long-data', actionDataToBeReplaced + favoritIt[i].id + ',' )
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
          `<div class="music-artist-album-item" queue-index='${i+1}' id='${favoritIt[i].id}' onclick="playlist_QUEUE_CLICKED(this)">
          <img src="${favoritIt[i].img_mini}">
                <div class="music-artist-album-item-data">
                    <h1>${favoritIt[i].name}</h1>
                    <span>${favoritIt[i].artist}</span>
                </div>
                <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
           </div>`;
           playlistResult.insertAdjacentHTML("beforeend", resultFAV);

           actionDataToBeReplaced = playlistResult.getAttribute('queue-long-data');
           playlistResult.setAttribute('queue-long-data', actionDataToBeReplaced + favoritIt[i].id + ',' )
      }

      playlistTracksCounter.innerText = document.querySelectorAll(".music-playlist-album-screen-container .music-artist-album-item").length;
  }

  playlistScreen.classList.add('active');
  playlistImg.src = playlistData_Img;
  playlistTitle.innerText = playlistData_Name;
  playlistArtist.innerText = playlistData_Description;

  loseFocus();
  rightClickOptions();
  playlist_CHECK_IMG();
}

function historyScreenToggle(){
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
  const recent_data_31 = localStorage.getItem("track_data_31").split(',')[0];
  const recent_data_32 = localStorage.getItem("track_data_32").split(',')[0];
  const recent_data_33 = localStorage.getItem("track_data_33").split(',')[0];
  const recent_data_34 = localStorage.getItem("track_data_34").split(',')[0];
  const recent_data_35 = localStorage.getItem("track_data_35").split(',')[0];
  const recent_data_36 = localStorage.getItem("track_data_36").split(',')[0];
  const recent_data_37 = localStorage.getItem("track_data_37").split(',')[0];
  const recent_data_38 = localStorage.getItem("track_data_38").split(',')[0];
  const recent_data_39 = localStorage.getItem("track_data_39").split(',')[0];
  const recent_data_40 = localStorage.getItem("track_data_40").split(',')[0];
  const recent_data_41 = localStorage.getItem("track_data_41").split(',')[0];
  const recent_data_42 = localStorage.getItem("track_data_42").split(',')[0];
  const recent_data_43 = localStorage.getItem("track_data_43").split(',')[0];
  const recent_data_44 = localStorage.getItem("track_data_44").split(',')[0];
  const recent_data_45 = localStorage.getItem("track_data_45").split(',')[0];
  const recent_data_46 = localStorage.getItem("track_data_46").split(',')[0];
  const recent_data_47 = localStorage.getItem("track_data_47").split(',')[0];
  const recent_data_48 = localStorage.getItem("track_data_48").split(',')[0];
  const recent_data_49 = localStorage.getItem("track_data_49").split(',')[0];
  const recent_data_50 = localStorage.getItem("track_data_50").split(',')[0];

  var favoritIt = allMusicView.filter(x => x.id === recent_data_1 || x.id === recent_data_2 || x.id === recent_data_3 || x.id === recent_data_4 || x.id === recent_data_5 || x.id === recent_data_6 || x.id === recent_data_7 || x.id === recent_data_8 || x.id === recent_data_9 || x.id === recent_data_10 || x.id === recent_data_11 || x.id === recent_data_12 || x.id === recent_data_13 || x.id === recent_data_14 || x.id === recent_data_15 || x.id === recent_data_16 || x.id === recent_data_17 || x.id === recent_data_18 || x.id === recent_data_19 || x.id === recent_data_20 || x.id === recent_data_21 || x.id === recent_data_22 || x.id === recent_data_23 || x.id === recent_data_24 || x.id === recent_data_25 || x.id === recent_data_26 || x.id === recent_data_27 || x.id === recent_data_28 || x.id === recent_data_29 || x.id === recent_data_30);
  historyResult.innerHTML = "";
  
  for (let i = 1; i < 51; i++) {

    let localStorage_custom = 'track_data_' + [i];
    let id_custom = localStorage.getItem(localStorage_custom).split(',')[0];
    let time_custom = localStorage.getItem(localStorage_custom).split(',')[1];

    var favoritIt = allMusicView.filter(x => x.id === id_custom);

    for (let i = 0; i < favoritIt.length; i++) {
      let resultFAV =
        `<div class="music-artist-album-item" link_to='${favoritIt[i].id}' onclick="clickedNotification(this);">
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
  rightClickOptions();
}


function library_load_albums() {
  const resultsFAV = document.querySelector(".library-slider .center-container-scrollable");
  var favoritIt = allMusicView.filter(x => x.album_status === "true");
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="center-container-item album-tag" onclick="fastLoadingPop();clickedSingleAlbum(this);" artist-data='${favoritIt[i].artist_id}' data-duplicate='${favoritIt[i].artist_id} ${favoritIt[i].album}' data-album='${favoritIt[i].album}'>
          <div class="bg-box"><img src="${favoritIt[i].album_cover}"></div>
          <div class="img-box">    
            <img src="${favoritIt[i].album_cover}">
          </div>
          <div class="center-container-album-data">
            <h2>${favoritIt[i].album}</h2>
            <p>Album • ${favoritIt[i].artist} • ${favoritIt[i].album_premiere}</p>
          </div>
          <div class="center-container-item-action"><i onclick="quick_Play(this)" play-type="album" class="fa-solid fa-play"></i></div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.library-slider .center-container-scrollable .center-container-item.album-tag').each(function(){
      var prodId = $(this).attr('data-duplicate');
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
      `<div class="center-container-item artist-tag" onclick="fastLoadingPop();artistScreenDataLoad(this);" id='${favoritIt[i].id}' artist-id='${favoritIt[i].artist_id}' artist-data='${favoritIt[i].artist}'>
        <div class="bg-box"><img src="${favoritIt[i].avatar_mini}"></div>
        <div class="img-box">    
            <img src="${favoritIt[i].avatar_mini}">
          </div>
          <div class="center-container-album-data">
            <h2>${favoritIt[i].artist}</h2>
            <p>Artist • Verified</p>
          </div>
          <div class="center-container-item-action"><i onclick="quick_Play(this)" class="fa-solid fa-play"></i></div>
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

  setTimeout(() => {
    $('.library-slider .center-container-scrollable .center-container-item-action i').click(function(event) {
      event.stopPropagation();
    });
  }, 250);
}

function library_load_playlists(){
  let playlist_DATA = 
  [localStorage.getItem('playlist_user_1'),
   localStorage.getItem('playlist_user_2'),
   localStorage.getItem('playlist_user_3'),
   localStorage.getItem('playlist_user_4'),
   localStorage.getItem('playlist_user_5'),
   localStorage.getItem('playlist_user_6'),
   localStorage.getItem('playlist_user_7'),
   localStorage.getItem('playlist_user_8'),
   localStorage.getItem('playlist_user_9'),
   localStorage.getItem('playlist_user_10'),];

  let playlist_ARRAY = playlist_DATA.filter(x => x != null);
  let playlist_COUNT = playlist_ARRAY.length;

  let results = document.querySelector(".library-slider .center-container-scrollable");

  for (let i = 0; i < playlist_COUNT; i++) {
  tracks_COUNTER = playlist_ARRAY[i].split(',').length-4 + " Tracks";

  let result =
  `<div class="center-container-item playlist-tag" onclick="fastLoadingPop();playlist_SELECT_CLICKED(this);" playlist-ID="${playlist_ARRAY[i].split(',')[3]}">
    <div class="bg-box"><img src="${playlist_ARRAY[i].split(',')[2]}"></div>
     <div class="img-box">    
        <img src="${playlist_ARRAY[i].split(',')[2]}">
      </div>
      <div class="center-container-album-data">
        <h2>${playlist_ARRAY[i].split(',')[0]}</h2>
        <p>Playlist • ${playlist_ARRAY[i].split(',')[1]} • ${tracks_COUNTER}</p>
      </div>
   </div>`;

  results.insertAdjacentHTML("beforeend", result);
  }
}

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

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function exitYourStyle(){
  yourStyleScreen.classList.remove('active');
}

function yourStyleLoad(e){
  let styleData = e.getAttribute('style-data');
  let yourStyleView = allMusicView.filter(x => x.style === styleData);
  let yourStyleViewPlaylist = allPlaylists.filter(x => x.play_style === styleData);

  let yourStyleDay = new Date();
  let yourStyleIndex = yourStyleDay.getDay()
  let yourStyleImgs = ["https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/9853880/pexels-photo-9853880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/5118693/pexels-photo-5118693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/4296357/pexels-photo-4296357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/6982443/pexels-photo-6982443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/7586661/pexels-photo-7586661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]

  yourStyleScreen_title.innerText = styleData;
  yourStyleScreen_info.innerText = styleData;
  yourStyleScreen_img.src = yourStyleImgs[yourStyleIndex];
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
        <img src="${yourStyleView[i].avatar_mini}">
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

  rightClickOptions();
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
        <div class="bg-box"><img src="images/${favoritIt[i].img}.jpg"></div>
        <div class="img-box">    
          <img src="images/${favoritIt[i].img}.jpg">
        </div>
       <h2>${favoritIt[i].name}</h2>
       <p>${favoritIt[i].artist}</p>
       <div class="center-container-item-action"><i onclick="quick_Play(this)" play-type="track" class="fa-solid fa-play"></i></div>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  if(favoritIt.length > 3){
    document.querySelector("#recent-tracks-container").style.display="flex";
  }else{
    document.querySelector("#recent-tracks-container").style.display="none";
  }

  rightClickOptions();
}


function collaborationItemCheck(){
  const collabBOXES = document.querySelectorAll(".music-artist-content-item.track-box .music-artist-content-item-data p");
  for(collabBOX of collabBOXES){
    if(collabBOX.innerText.length <= 4){
      collabBOX.innerText = '';
      collabBOX.style.margin="0";
      collabBOX.style.marginLeft = "3px";
    }else if(collabBOX.innerText.length >= 5){
      collabBOX.style.display="flex";
    }
  }
}

function searchContentLoad() {
  const resultsFAV = document.querySelector(".search-results");
  resultsFAV.innerHTML = "";
  var favoritIt = allMusicView;

  historyContainer.style.display="flex";

  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item track-box" li-index='${favoritIt[i].id}' link_to='${favoritIt[i].id}' onclick="clickedNotification(this);historyTrack_OBJECT(this)">
        <img data-lazy="${favoritIt[i].img_mini}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].artist} <p>${' • ' + favoritIt[i].colaboration}</p> • ${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

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

  const key = 'artist_id';
  const uniqueIt = [...new Map(allMusicView.map(item => [item[key], item])).values()]
  
  for (let i = 1; i <= uniqueIt.length; i++) {

    let breakIt = allMusicView.filter(x => x.artist_id === `${i}`)
    let artistsFAV =
    `<div class="music-artist-content-item artist-box" artist-id="${breakIt[0].artist_id}" artist-data="${breakIt[0].artist}" id='${breakIt[0].id}' onclick="artistScreenDataLoad(this);">
      <img data-lazy="${breakIt[0].avatar_mini}">
      <div class="music-artist-content-item-bg"><img data-lazy="${breakIt[0].avatar_mini}"></div>
        <div class="music-artist-content-item-data">
          <h1>${breakIt[0].artist}</h1>
          <span>Artist • Verified</span>
        </div>
        <div class="center-container-item-action"><i onclick="quick_Play(this)" class="fa-solid fa-play"></i></div>
     </div>`;
  resultsFAV.insertAdjacentHTML("afterbegin", artistsFAV);
  }

  for (let i = 0; i < allMusicView.length; i++) {
    if(allMusicView[i].artist_status === "followed"){
      if(document.querySelector('.music-artist-content-item.artist-box[artist-id="' + allMusicView[i].artist_id + '"] h1')){
        document.querySelector('.music-artist-content-item.artist-box[artist-id="' + allMusicView[i].artist_id + '"] h1').innerHTML = allMusicView[i].artist + "<p>Followed</p>"; 
      }
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
  
  collaborationItemCheck();
  loseFocus();
  let targets = document.querySelectorAll('.search-results .music-artist-content-item img');
  targets.forEach(lazyLoad);
}


const searchInput = document.querySelector(".search-input");
const searchInput_clear = document.querySelector(".search-input-btn");
const searchResults = document.querySelector('.search-results');
const historyContainer = document.querySelector(".search-history");

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
    searchResults.style.display = 'block';
  }

  historyContainer.style.display="flex";
}

let search_ui_IMG = document.querySelector(".search-ui-bg img");

function searchFunction(){
  let input = searchInput.value
  input = input.latinize().toLowerCase().replace(/ /g,'');
  let x = document.querySelectorAll('.search-results .music-artist-content-item');
  let xData = document.querySelectorAll('.search-results .music-artist-content-item-data');
  
  if(searchInput.value.length < 2){
    historyContainer.style.display="flex";
    searchResults.style.display = 'none';
  }else{
    historyContainer.style.display="none";
    searchResults.style.display = 'block';
  }

  for (i = 0; i < x.length; i++) { 
      if (!xData[i].innerText.latinize().toLowerCase().replace(/ /g,'').includes(input)) {
          x[i].style.display="none";
          x[i].style.contentVisibility="hidden";   
          x[i].classList.remove("searched")
      }
      else {
          x[i].style.display="inline-flex";    
          x[i].style.contentVisibility="visible";   
          x[i].classList.add("searched")             
      }
  }

  let ui_IMG = document.querySelectorAll('.search-results .music-artist-content-item.searched');

  for (i = 0; i < ui_IMG.length; i++) { 
    ui_IMG[i].classList.remove("active");
  }
  if(ui_IMG[0]){
    ui_IMG_DATA = ui_IMG[0].querySelector("img").src;
    search_ui_IMG.src = ui_IMG_DATA;
    search_ui_IMG.style.animationName = "none";
    search_ui_IMG.style.opacity = "0";
    setTimeout(() => {
      search_ui_IMG.style.animationName = "ui-bg-fade";
      search_ui_IMG.style.opacity = ".66";
    }, 600);
  }

  if(searchBtn_top.classList.contains("active")){
    search_Top();
    collaborationItemCheck();
    let allArtistsSearched = document.querySelectorAll(".music-artist-content-item.artist-box.searched")
    for (i = 1; i < allArtistsSearched.length - 2; i++) { 
      allArtistsSearched[i].style.display="none";
    }
  }
  if(searchBtn_tracks.classList.contains("active")){
    search_Tracks();
    collaborationItemCheck();
  }
  if(searchBtn_artists.classList.contains("active")){
    search_Artists();
    collaborationItemCheck();
  }
  if(searchBtn_albums.classList.contains("active")){
    search_Albums();
    collaborationItemCheck();
  }
  if(searchBtn_playlists.classList.contains("active")){
    search_Playlists();
    collaborationItemCheck();
  }

  let artistX = document.querySelectorAll('.search-results .music-artist-content-item.artist-box.searched');
  let trackX = document.querySelectorAll('.search-results .music-artist-content-item.track-box.searched');

  for (i = 0; i < artistX.length; i++) { 
    artistX[i].classList.remove("active");
  }
  if(artistX[0]){
    artistX[0].classList.add("active");
  }

  for (i = 3; i < trackX.length - 3; i++) { 
    trackX[i].style.display="none";
    trackX[i].style.contentVisibility="hidden";   
  }
  rightClickOptions();
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

  search_ui_IMG.style.animationName = "none";
  search_ui_IMG.style.opacity = "0";

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

  search_ui_IMG.style.animationName = "none";
  search_ui_IMG.style.opacity = "0";

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

  search_ui_IMG.style.animationName = "none";
  search_ui_IMG.style.opacity = "0";

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

  search_ui_IMG.style.animationName = "none";
  search_ui_IMG.style.opacity = "0";

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

  localStorage.setItem('last_PLAYLIST', playlist_ID);
  
  searchScreen.classList.remove('active');
  activeSearchScreen.classList.remove('active')
  playlistScreen.classList.add('active');
  activeHomeScreen.classList.add('active');
  playlistEditBtn.classList.remove('active');
  playlistEDIT.classList.remove('fs921');

  playlistImg.src = allPlaylists[playlist_ID - 1].image;
  playlistImgBg.src = allPlaylists[playlist_ID - 1].image;
  playlistTitle.innerText = allPlaylists[playlist_ID - 1].name;
  playlistArtist.innerText = allPlaylists[playlist_ID - 1].description + ' By ' + allPlaylists[playlist_ID - 1].play_author;
  playlistTracksCounter.innerText = playlist_LENGTH;

  playlist_CHECK_IMG();
  fastLoadingPop();
  clickedPlaylistLoad(data);
}

var playlist_QUEUE;

function clickedPlaylistLoad(data){
  let playlist_ID = data.getAttribute("playlist-id");
  let playlist_LENGTH = Object.keys(allPlaylists[playlist_ID - 1].content).length;
  let playlist_ITEM = allPlaylists[playlist_ID - 1];
  let playlist_FULL = [];
  playlist_ID--;

  playlist_ITEM_1 = allMusicView[allPlaylists[playlist_ID].content.track_1 - 1] || null;
  playlist_ITEM_2 = allMusicView[allPlaylists[playlist_ID].content.track_2 - 1] || playlist_ITEM_1;
  playlist_ITEM_3 = allMusicView[allPlaylists[playlist_ID].content.track_3 - 1] || playlist_ITEM_1;
  playlist_ITEM_4 = allMusicView[allPlaylists[playlist_ID].content.track_4 - 1] || playlist_ITEM_1;
  playlist_ITEM_5 = allMusicView[allPlaylists[playlist_ID].content.track_5 - 1] || playlist_ITEM_1;
  playlist_ITEM_6 = allMusicView[allPlaylists[playlist_ID].content.track_6 - 1] || playlist_ITEM_1;
  playlist_ITEM_7 = allMusicView[allPlaylists[playlist_ID].content.track_7 - 1] || playlist_ITEM_1;
  playlist_ITEM_8 = allMusicView[allPlaylists[playlist_ID].content.track_8 - 1] || playlist_ITEM_1;
  playlist_ITEM_9 = allMusicView[allPlaylists[playlist_ID].content.track_9 - 1] || playlist_ITEM_1;
  playlist_ITEM_10 = allMusicView[allPlaylists[playlist_ID].content.track_10 - 1] || playlist_ITEM_1;
  playlist_ITEM_11 = allMusicView[allPlaylists[playlist_ID].content.track_11 - 1] || playlist_ITEM_1;
  playlist_ITEM_12 = allMusicView[allPlaylists[playlist_ID].content.track_12 - 1] || playlist_ITEM_1;
  playlist_ITEM_13 = allMusicView[allPlaylists[playlist_ID].content.track_13 - 1] || playlist_ITEM_1;
  playlist_ITEM_14 = allMusicView[allPlaylists[playlist_ID].content.track_14 - 1] || playlist_ITEM_1;
  playlist_ITEM_15 = allMusicView[allPlaylists[playlist_ID].content.track_15 - 1] || playlist_ITEM_1;
  playlist_ITEM_16 = allMusicView[allPlaylists[playlist_ID].content.track_16 - 1] || playlist_ITEM_1;
  playlist_ITEM_17 = allMusicView[allPlaylists[playlist_ID].content.track_17 - 1] || playlist_ITEM_1;
  playlist_ITEM_18 = allMusicView[allPlaylists[playlist_ID].content.track_18 - 1] || playlist_ITEM_1;
  playlist_ITEM_19 = allMusicView[allPlaylists[playlist_ID].content.track_19 - 1] || playlist_ITEM_1;
  playlist_ITEM_20 = allMusicView[allPlaylists[playlist_ID].content.track_20 - 1] || playlist_ITEM_1;
  playlist_ITEM_21 = allMusicView[allPlaylists[playlist_ID].content.track_21 - 1] || playlist_ITEM_1;
  playlist_ITEM_22 = allMusicView[allPlaylists[playlist_ID].content.track_22 - 1] || playlist_ITEM_1;
  playlist_ITEM_23 = allMusicView[allPlaylists[playlist_ID].content.track_23 - 1] || playlist_ITEM_1;
  playlist_ITEM_24 = allMusicView[allPlaylists[playlist_ID].content.track_24 - 1] || playlist_ITEM_1;
  playlist_ITEM_25 = allMusicView[allPlaylists[playlist_ID].content.track_25 - 1] || playlist_ITEM_1;
  playlist_ITEM_26 = allMusicView[allPlaylists[playlist_ID].content.track_26 - 1] || playlist_ITEM_1;
  playlist_ITEM_27 = allMusicView[allPlaylists[playlist_ID].content.track_27 - 1] || playlist_ITEM_1;
  playlist_ITEM_28 = allMusicView[allPlaylists[playlist_ID].content.track_28 - 1] || playlist_ITEM_1;
  playlist_ITEM_29 = allMusicView[allPlaylists[playlist_ID].content.track_29 - 1] || playlist_ITEM_1;
  playlist_ITEM_30 = allMusicView[allPlaylists[playlist_ID].content.track_30 - 1] || playlist_ITEM_1;
  playlist_ITEM_31 = allMusicView[allPlaylists[playlist_ID].content.track_31 - 1] || playlist_ITEM_1;
  playlist_ITEM_32 = allMusicView[allPlaylists[playlist_ID].content.track_32 - 1] || playlist_ITEM_1;
  playlist_ITEM_33 = allMusicView[allPlaylists[playlist_ID].content.track_33 - 1] || playlist_ITEM_1;
  playlist_ITEM_34 = allMusicView[allPlaylists[playlist_ID].content.track_34 - 1] || playlist_ITEM_1;
  playlist_ITEM_35 = allMusicView[allPlaylists[playlist_ID].content.track_35 - 1] || playlist_ITEM_1;
  playlist_ITEM_36 = allMusicView[allPlaylists[playlist_ID].content.track_36 - 1] || playlist_ITEM_1;
  playlist_ITEM_37 = allMusicView[allPlaylists[playlist_ID].content.track_37 - 1] || playlist_ITEM_1;
  playlist_ITEM_38 = allMusicView[allPlaylists[playlist_ID].content.track_38 - 1] || playlist_ITEM_1;
  playlist_ITEM_39 = allMusicView[allPlaylists[playlist_ID].content.track_39 - 1] || playlist_ITEM_1;
  playlist_ITEM_40 = allMusicView[allPlaylists[playlist_ID].content.track_40 - 1] || playlist_ITEM_1;
  playlist_ITEM_41 = allMusicView[allPlaylists[playlist_ID].content.track_41 - 1] || playlist_ITEM_1;
  playlist_ITEM_42 = allMusicView[allPlaylists[playlist_ID].content.track_42 - 1] || playlist_ITEM_1;
  playlist_ITEM_43 = allMusicView[allPlaylists[playlist_ID].content.track_43 - 1] || playlist_ITEM_1;
  playlist_ITEM_44 = allMusicView[allPlaylists[playlist_ID].content.track_44 - 1] || playlist_ITEM_1;
  playlist_ITEM_45 = allMusicView[allPlaylists[playlist_ID].content.track_45 - 1] || playlist_ITEM_1;
  playlist_ITEM_46 = allMusicView[allPlaylists[playlist_ID].content.track_46 - 1] || playlist_ITEM_1;
  playlist_ITEM_47 = allMusicView[allPlaylists[playlist_ID].content.track_47 - 1] || playlist_ITEM_1;
  playlist_ITEM_48 = allMusicView[allPlaylists[playlist_ID].content.track_48 - 1] || playlist_ITEM_1;
  playlist_ITEM_49 = allMusicView[allPlaylists[playlist_ID].content.track_49 - 1] || playlist_ITEM_1;
  playlist_ITEM_50 = allMusicView[allPlaylists[playlist_ID].content.track_50 - 1] || playlist_ITEM_1;

  playlist_FULL = playlist_FULL.concat(playlist_ITEM_1, playlist_ITEM_2, playlist_ITEM_3, playlist_ITEM_4, playlist_ITEM_5, playlist_ITEM_6, playlist_ITEM_7, playlist_ITEM_8, playlist_ITEM_9, playlist_ITEM_10, playlist_ITEM_11, playlist_ITEM_12, playlist_ITEM_13, playlist_ITEM_14, playlist_ITEM_15, playlist_ITEM_16, playlist_ITEM_17, playlist_ITEM_18, playlist_ITEM_19, playlist_ITEM_20, playlist_ITEM_21, playlist_ITEM_22, playlist_ITEM_23, playlist_ITEM_24, playlist_ITEM_25, playlist_ITEM_26, playlist_ITEM_27, playlist_ITEM_28, playlist_ITEM_29, playlist_ITEM_30, playlist_ITEM_31, playlist_ITEM_32, playlist_ITEM_33, playlist_ITEM_34, playlist_ITEM_35, playlist_ITEM_36, playlist_ITEM_37, playlist_ITEM_38, playlist_ITEM_39, playlist_ITEM_40, playlist_ITEM_41, playlist_ITEM_42, playlist_ITEM_43, playlist_ITEM_44, playlist_ITEM_45, playlist_ITEM_46, playlist_ITEM_47, playlist_ITEM_48, playlist_ITEM_49, playlist_ITEM_50);
  const key = 'id';
  playlist_FULL = [...new Map(playlist_FULL.map(item => [item[key], item])).values()];

  globalThis.playlist_QUEUE = playlist_FULL;
  
  playlistResult.setAttribute('queue-long-data', '');
  playlistResult.setAttribute('playlist-editable', 'false');
  favoritIt = playlist_FULL;
  playlistResult.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-album-item" queue-index='${i+1}' id='${favoritIt[i].id}'  onclick="playlist_QUEUE_CLICKED(this)">
      <img src="${favoritIt[i].img_mini}">
            <div class="music-artist-album-item-data">
                <h1>${favoritIt[i].name}</h1>
                <span>${favoritIt[i].artist}</span>
            </div>
            <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
       playlistResult.insertAdjacentHTML("beforeend", resultFAV);

       actionDataToBeReplaced = playlistResult.getAttribute('queue-long-data');
       playlistResult.setAttribute('queue-long-data', actionDataToBeReplaced + favoritIt[i].id + ',' )
  }

  loseFocus();
  setTimeout(() => {
    rightClickOptions();
  }, 250);
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

  for (let i = 0; i < allPlaylists.length && i <= 10; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="clickedPlaylist(this)" playlist-id="${allPlaylists[i].play_id}">
        <div class="bg-box"><img src="${allPlaylists[i].image}"></div>
        <div class="img-box">    
          <img src="${allPlaylists[i].image}">
        </div>
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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function loadUserStylePlaylists(){
  resultsFAV = document.querySelector("#dailyMixContainer")
  resultsFAV.innerHTML="";

  playlistsIt = allPlaylists.filter(x => x.play_style === localStorage.getItem('personalization-data-style_1') || x.play_style === localStorage.getItem('personalization-data-style_2'));
  shuffle(playlistsIt);

  for (let i = 0; i < playlistsIt.length && i <= 10; i++) {
    let resultFAV =
      `<div class="center-container-item" onclick="clickedPlaylist(this)" playlist-id="${playlistsIt[i].play_id}">
        <div class="bg-box">
          <img src="${playlistsIt[i].image}">
        </div>
        <div class="img-box">    
          <img src="${playlistsIt[i].image}">
        </div>
        <h2>${playlistsIt[i].name}</h2>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }
}

const playlistPopUp = document.querySelector(".playlist-popup");
const playlistPopUpName = document.querySelector(".playlist-popup-data #playlistName");
const playlistPopUpUrl = document.querySelector(".playlist-popup-data #playlistImage");

function create_Playlist(){
  playlistPopUp.classList.add("active");
  playlistPopUpName.value = '';
  playlistPopUpUrl.value = '';
  document.querySelector(".playlist-popup .img-box img").src = '';
}

/* Event listener */
document.querySelector(".playlist-popup-data #playlistImage").addEventListener('input', ubdateForm);

/* Function */
function ubdateForm(){
  document.querySelector(".playlist-popup .img-box img").src = document.querySelector(".playlist-popup-data #playlistImage").value;
}

var ban = [
    "ahole",
    "anus",
    "ash0le",
    "ash0les",
    "asholes",
    "Ass Monkey",
    "Assface",
    "assh0le",
    "assh0lez",
    "asshole",
    "assholes",
    "assholz",
    "asswipe",
    "azzhole",
    "bassterds",
    "bastard",
    "bastards",
    "bastardz",
    "basterds",
    "basterdz",
    "Biatch",
    "bitch",
    "bitches",
    "Blow Job",
    "boffing",
    "butthole",
    "buttwipe",
    "c0ck",
    "c0cks",
    "c0k",
    "Carpet Muncher",
    "cawk",
    "cawks",
    "Clit",
    "cnts",
    "cntz",
    "cock",
    "cockhead",
    "cock-head",
    "cocks",
    "CockSucker",
    "cock-sucker",
    "crap",
    "cum",
    "cunt",
    "cunts",
    "cuntz",
    "dick",
    "dild0",
    "dild0s",
    "dildo",
    "dildos",
    "dilld0",
    "dilld0s",
    "dominatricks",
    "dominatrics",
    "dominatrix",
    "dyke",
    "enema",
    "f u c k",
    "f u c k e r",
    "fag",
    "fag1t",
    "faget",
    "fagg1t",
    "faggit",
    "faggot",
    "fagg0t",
    "fagit",
    "fags",
    "fagz",
    "faig",
    "faigs",
    "fart",
    "flipping the bird",
    "fuck",
    "fucker",
    "fucks",
    "Fudge Packer",
    "fuk",
    "Fukah",
    "Fuken",
    "fuker",
    "Fukin",
    "Fukk",
    "Fukkah",
    "Fukken",
    "Fukker",
    "Fukkin",
    "g00k",
    "God-damned",
    "h00r",
    "h0ar",
    "h0re",
    "hoar",
    "hoor",
    "hoore",
    "jackoff",
    "jap",
    "japs",
    "jerk-off",
    "jisim",
    "jiss",
    "jizm",
    "jizz",
    "knob",
    "knobs",
    "knobz",
    "kunt",
    "kunts",
    "kuntz",
    "Lezzian",
    "Lipshits",
    "Lipshitz",
    "masochist",
    "masokist",
    "massterbait",
    "masstrbait",
    "masstrbate",
    "masterbaiter",
    "masterbate",
    "masterbates",
    "Motha Fucker",
    "Motha Fuker",
    "Motha Fukkah",
    "Motha Fukker",
    "Mother Fucker",
    "Mother Fukah",
    "Mother Fuker",
    "Mother Fukkah",
    "Mother Fukker",
    "mother-fucker",
    "Mutha Fucker",
    "Mutha Fukah",
    "Mutha Fuker",
    "Mutha Fukkah",
    "Mutha Fukker",
    "n1gr",
    "nastt",
    "nigger;",
    "nigur;",
    "niiger;",
    "niigr;",
    "orafis",
    "orgasim;",
    "orgasm",
    "orgasum",
    "oriface",
    "orifice",
    "orifiss",
    "packi",
    "packie",
    "packy",
    "paki",
    "pakie",
    "paky",
    "pecker",
    "peeenus",
    "peeenusss",
    "peenus",
    "peinus",
    "pen1s",
    "penas",
    "penis",
    "penis-breath",
    "penus",
    "penuus",
    "Phuc",
    "Phuck",
    "Phuk",
    "Phuker",
    "Phukker",
    "polac",
    "polack",
    "polak",
    "Poonani",
    "pr1c",
    "pr1ck",
    "pr1k",
    "pusse",
    "pussee",
    "pussy",
    "puuke",
    "puuker",
    "qweir",
    "recktum",
    "rectum",
    "retard",
    "sadist",
    "scank",
    "schlong",
    "screwing",
    "semen",
    "sex",
    "sexy",
    "Sh!t",
    "sh1t",
    "sh1ter",
    "sh1ts",
    "sh1tter",
    "sh1tz",
    "shit",
    "shits",
    "shitter",
    "Shitty",
    "Shity",
    "shitz",
    "Shyt",
    "Shyte",
    "Shytty",
    "Shyty",
    "skanck",
    "skank",
    "skankee",
    "skankey",
    "skanks",
    "Skanky",
    "slag",
    "slut",
    "sluts",
    "Slutty",
    "slutz",
    "son-of-a-bitch",
    "tit",
    "turd",
    "va1jina",
    "vag1na",
    "vagiina",
    "vagina",
    "vaj1na",
    "vajina",
    "vullva",
    "vulva",
    "w0p",
    "wh00r",
    "wh0re",
    "whore",
    "xrated",
    "xxx",
    "b!+ch",
    "bitch",
    "blowjob",
    "clit",
    "arschloch",
    "shit",
    "ass",
    "asshole",
    "b!tch",
    "b17ch",
    "bastard",
    "bi+ch",
    "boiolas",
    "buceta",
    "c0ck",
    "cawk",
    "chink",
    "cipa",
    "clits",
    "cock",
    "cum",
    "cunt",
    "dildo",
    "dirsa",
    "ejakulate",
    "fatass",
    "fcuk",
    "fuk",
    "fux0r",
    "hoer",
    "hore",
    "jism",
    "kawk",
    "l3itch",
    "l3i+ch",
    "masturbate",
    "masterbat*",
    "masterbat3",
    "motherfucker",
    "s.o.b.",
    "mofo",
    "nazi",
    "nigga",
    "nigger",
    "nutsack",
    "phuck",
    "pimpis",
    "pusse",
    "pussy",
    "scrotum",
    "sh!t",
    "shemale",
    "shi+",
    "sh!+",
    "slut",
    "smut",
    "teets",
    "tits",
    "boobs",
    "b00bs",
    "teez",
    "testical",
    "testicle",
    "titt",
    "w00se",
    "jackoff",
    "wank",
    "whoar",
    "whore",
    "*damn",
    "*dyke",
    "*fuck*",
    "*shit*",
    "@$$",
    "amcik",
    "andskota",
    "arse*",
    "assrammer",
    "ayir",
    "bi7ch",
    "bollock*",
    "breasts",
    "butt-pirate",
    "cabron",
    "cazzo",
    "chraa",
    "chuj",
    "Cock*",
    "cunt*",
    "d4mn",
    "daygo",
    "dego",
    "dick*",
    "dike*",
    "dupa",
    "dziwka",
    "ejackulate",
    "Ekrem*",
    "Ekto",
    "enculer",
    "faen",
    "fag*",
    "fanculo",
    "fanny",
    "feces",
    "feg",
    "Felcher",
    "ficken",
    "fitt*",
    "Flikker",
    "foreskin",
    "Fotze",
    "Fu(*",
    "fuk*",
    "futkretzn",
    "gook",
    "guiena",
    "h0r",
    "h4x0r",
    "hell",
    "helvete",
    "hoer*",
    "honkey",
    "Huevon",
    "hui",
    "injun",
    "jizz",
    "kanker*",
    "kike",
    "klootzak",
    "kraut",
    "knulle",
    "kuk",
    "kuksuger",
    "Kurac",
    "kurwa",
    "kusi*",
    "kyrpa*",
    "lesbo",
    "mamhoon",
    "masturbat*",
    "merd*",
    "mibun",
    "monkleigh",
    "mouliewop",
    "muie",
    "mulkku",
    "muschi",
    "nazis",
    "nepesaurio",
    "nigger*",
    "orospu",
    "paska*",
    "perse",
    "picka",
    "pierdol*",
    "pillu*",
    "pimmel",
    "piss*",
    "pizda",
    "poontsee",
    "poop",
    "porn",
    "p0rn",
    "pr0n",
    "preteen",
    "pula",
    "pule",
    "puta",
    "puto",
    "qahbeh",
    "queef*",
    "rautenberg",
    "schaffer",
    "scheiss*",
    "schlampe",
    "schmuck",
    "screw",
    "sh!t*",
    "sharmuta",
    "sharmute",
    "shipal",
    "shiz",
    "skribz",
    "skurwysyn",
    "sphencter",
    "spic",
    "spierdalaj",
    "splooge",
    "suka",
    "b00b*",
    "testicle*",
    "titt*",
    "twat",
    "vittu",
    "wank*",
    "wetback*",
    "wichser",
    "wop*",
    "yed",
    "zabourah"
  ]

function create_Playlist_Data_Global(){
  let playlist_data_name = document.querySelector(".playlist-popup-data #playlistName").value;
  let playlist_data_img = document.querySelector(".playlist-popup-data #playlistImage").value;
  let playlist_data_url = document.querySelector(".playlist-popup .img-box img").src;
  var today = new Date();

  if (ban.some(x => playlist_data_name.toLowerCase().includes(x))) {
    document.querySelector(".playlist-popup-data #playlistName").value = "Your Typed Name Contained Banned Word/s";
    document.querySelector(".playlist-popup-data #playlistName").setAttribute('disabled', '')
    document.querySelector(".playlist-popup-data #playlistName").classList.add('active');
    errorPop();
    setTimeout(() => {
      document.querySelector(".playlist-popup-data #playlistName").value = "";
      document.querySelector(".playlist-popup-data #playlistName").removeAttribute('disabled', '')
      document.querySelector(".playlist-popup-data #playlistName").classList.remove('active');
    }, 5000);
  }

  if(playlist_data_name.length <= 2){
    document.querySelector(".playlist-popup-data #playlistName").classList.add('active');
    setTimeout(() => {
      document.querySelector(".playlist-popup-data #playlistName").classList.remove('active');
    }, 500);
  }else if(playlist_data_img.length <= 10){
    document.querySelector(".playlist-popup-data #playlistImage").classList.add('active');
    setTimeout(() => {
      document.querySelector(".playlist-popup-data #playlistImage").classList.remove('active');
    }, 500);
  }else{
    if(!localStorage.playlist_user_1){
      localStorage.setItem('playlist_user_1', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_1')
    }else if(!localStorage.playlist_user_2){
      localStorage.setItem('playlist_user_2', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_2')
    }else if(!localStorage.playlist_user_3){
      localStorage.setItem('playlist_user_3', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_3')
    }else if(!localStorage.playlist_user_4){
      localStorage.setItem('playlist_user_4', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_4')
    }else if(!localStorage.playlist_user_5){
      localStorage.setItem('playlist_user_5', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_5')
    }else if(!localStorage.playlist_user_6){
      localStorage.setItem('playlist_user_6', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_6')
    }else if(!localStorage.playlist_user_7){
      localStorage.setItem('playlist_user_7', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_7')
    }else if(!localStorage.playlist_user_8){
      localStorage.setItem('playlist_user_8', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_8')
    }else if(!localStorage.playlist_user_9){
      localStorage.setItem('playlist_user_9', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img + ',playlist_user_9')
    }else if(!localStorage.playlist_user_10){
      localStorage.setItem('playlist_user_10', playlist_data_name + ',' + today.getFullYear() + ',' + playlist_data_img) + ',playlist_user_10'
    }

    playlistPopUp.classList.remove("active");
    playlist_SELECT_LOAD();
    reload_LIBRARY();
  }
}

function create_Playlist_Exit(){
  playlistPopUp.classList.remove("active");
}

function artistBio_Toggle(){
  if(document.querySelector(".gallery").classList.contains("fullscreen")){
    document.querySelector(".gallery").classList.remove("fullscreen")
  }else{
    document.querySelector(".gallery").classList.add("fullscreen")
  }
}

function rightClickOptions(){
  $("#recent-tracks-container .center-container-item").mousedown(function(ev){
      if(ev.which == 3){
        trackOptions(this)
      }
  });

  $(".music-artist-content-item.track-box").mousedown(function(ev){
    if(ev.which == 3){
      trackOptions(this)
    }
  });

  $(".music-artist-album-item").mousedown(function(ev){
    if(ev.which == 3){
      trackOptions(this)
    }
  });

  $(".yourStyle-item").mousedown(function(ev){
    if(ev.which == 3){
      trackOptions(this)
    }
  });
}

const popCont = document.querySelector(".music-artist-content-container");
const popBtn = document.querySelector(".music-artist-content-container-viewAll.t_popular p");

function toggleArtistPopularAll(){
  if(popCont.classList.contains("view-all")){
    popCont.classList.remove("view-all")
    popBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Show More`
    musicArtistScreen.scrollTop = document.querySelector(".music-artist-item-title").clientHeight;
  }else{
    fastLoadingPop();
    popCont.classList.add("view-all")
    popBtn.innerHTML = `<i class="fa-solid fa-minus"></i> Show Less`
  }
}

const albCont = document.querySelector(".music-artist-content-album");
const albBtn = document.querySelector(".music-artist-content-container-viewAll.t_album p");

function toggleArtistAlbumsAll(){
  if(albCont.classList.contains("view-all")){
    albCont.classList.remove("view-all")
    albBtn.innerHTML = `<i class="fa-solid fa-plus"></i>Show More`
    musicArtistScreen.scrollTop = document.querySelector(".music-artist-item-title").clientHeight;
  }else{
    fastLoadingPop();
    albCont.classList.add("view-all")
    albBtn.innerHTML = `<i class="fa-solid fa-minus"></i> Show Less`
  }
}

function historyTrack_OBJECT(object){
  let historyTrack_DATA = "";
  if(!object){
    historyTrack_DATA = localStorage.getItem("historyTrack_DATA_1");
  }else{
    historyTrack_DATA = object.getAttribute("li-index");
  }

  if(historyTrack_DATA === localStorage.getItem("historyTrack_DATA_7") ||
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_6") ||
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_5") || 
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_4") || 
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_4") || 
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_3") || 
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_2") || 
    historyTrack_DATA === localStorage.getItem("historyTrack_DATA_1")){
    null;
  }else{
    localStorage.setItem("historyTrack_DATA_8", localStorage.getItem("historyTrack_DATA_7") || null);
    localStorage.setItem("historyTrack_DATA_7", localStorage.getItem("historyTrack_DATA_6") || null);
    localStorage.setItem("historyTrack_DATA_6", localStorage.getItem("historyTrack_DATA_5") || null);
    localStorage.setItem("historyTrack_DATA_5", localStorage.getItem("historyTrack_DATA_4") || null);
    localStorage.setItem("historyTrack_DATA_4", localStorage.getItem("historyTrack_DATA_3") || null);
    localStorage.setItem("historyTrack_DATA_3", localStorage.getItem("historyTrack_DATA_2") || null);
    localStorage.setItem("historyTrack_DATA_2", localStorage.getItem("historyTrack_DATA_1") || null);
    localStorage.setItem("historyTrack_DATA_1", historyTrack_DATA);
  }

  resultsFAV = document.querySelector(".search-history-container");
  resultsFAV.innerHTML = "";

  favoritIt = allMusicView.filter(x => x.id === localStorage.getItem("historyTrack_DATA_1") || x.id === localStorage.getItem("historyTrack_DATA_2") || x.id === localStorage.getItem("historyTrack_DATA_3") || x.id === localStorage.getItem("historyTrack_DATA_4") || x.id === localStorage.getItem("historyTrack_DATA_5") || x.id === localStorage.getItem("historyTrack_DATA_6") || x.id === localStorage.getItem("historyTrack_DATA_7") || x.id === localStorage.getItem("historyTrack_DATA_8"));
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
      `<div class="music-artist-content-item track-box" li-index='${favoritIt[i].id}' onclick="clickedSingle(this);">
        <img src="${favoritIt[i].img_mini}">
          <div class="music-artist-content-item-data">
            <h1>${favoritIt[i].name}</h1>
            <span>${favoritIt[i].artist} <p> ${' • ' + favoritIt[i].colaboration} </p> • ${favoritIt[i].album} • ${favoritIt[i].album_premiere}</span>
          </div>
          <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  setTimeout(() => {
    collaborationItemCheck();
  }, 250);
}

function headRight(){
  document.querySelector(".head-content-container").scrollLeft = 99999
}

function headLeft(){
  document.querySelector(".head-content-container").scrollLeft = 0
}

$(document).on("keypress", function(e){

  if(activeHomeScreen.classList.contains('active') && !playlistSelectWindow.classList.contains('active') && !playlistScreen.classList.contains('active')){

    /* SPACE */
    if(e.which == 32){
      if(wrapper.classList.contains('paused')){
        pauseMusic();
      }else{
        playMusic();
      }
    }
    /* L = LYRICS */
    if(e.which == 108){
      if(musicImgBox.classList.contains("lyrics")){
        if(wrapper.classList.contains('active')){
          wrapper.classList.remove('active');
        }else{
          wrapper.classList.add('active');
        }
      }else{
        wrapper.classList.add('active');
        trackLyrics();
      }
    }
    /* P = PROFILE */
    if(e.which == 112){
      fastLoadingPop();loadUserProfile();loseFocus();
    }
    /* Q = QUEUE */
    if(e.which == 113){
      topQueueMenuShow.classList.toggle('active');
    }

  }
});

const playlistSelectWindow = document.querySelector(".playlist-select");
const playlistEditBtn = document.querySelector('.editPlaylist');
const playlistToolTip = document.querySelector('.current-ad-box');


function playlist_SELECT_REMOVE(object){
  let trackID = object.getAttribute('track-data');

  if(document.querySelector(".music-playlist-album-screen.active")){
    let track_playlist = playlistResult.getAttribute('playlist-id');
    let playlist_data = localStorage.getItem(track_playlist);
    let playlist_data_all = playlist_data.split(',');
    let playlist_data_main = playlist_data_all[0] + "," + playlist_data_all[1] + "," + playlist_data_all[2] + "," + playlist_data_all[3];
    let playlist_data_tracks = "";
    playlist_data_length = playlist_data_all.length;

    for (let i = 4; i < playlist_data_length; i++) {
      if(i === playlist_data_length-1){
        playlist_data_temporary =  "," + playlist_data_all[i].split(',') + ",";
      }else{
        playlist_data_temporary =  "," + playlist_data_all[i].split(',');
      }
      playlist_data_tracks = playlist_data_tracks.concat(playlist_data_temporary)
    }

    let playlist_data_tracks_ubdated = playlist_data_tracks.replace("," + trackID + ",", ",");
    let playlist_data_ubdated = playlist_data_main + playlist_data_tracks_ubdated.slice(0, -1);

    localStorage.setItem(track_playlist, playlist_data_ubdated)
    playlist_SELECT_CLICKED();
    trackHideOptions();
  }
}

function playlist_SELECT(object){
  let trackID = object.getAttribute('track-data');
  playlistSelectWindow.classList.add('active');
  playlistSelectWindow.setAttribute('track-data', trackID);
  playlist_SELECT_LOAD();
}

function playlist_SELECT_LOAD(){

  let playlist_DATA = 
  [localStorage.getItem('playlist_user_1'),
   localStorage.getItem('playlist_user_2'),
   localStorage.getItem('playlist_user_3'),
   localStorage.getItem('playlist_user_4'),
   localStorage.getItem('playlist_user_5'),
   localStorage.getItem('playlist_user_6'),
   localStorage.getItem('playlist_user_7'),
   localStorage.getItem('playlist_user_8'),
   localStorage.getItem('playlist_user_9'),
   localStorage.getItem('playlist_user_10'),];

  let playlist_ARRAY = playlist_DATA.filter(x => x != null);
  let playlist_COUNT = playlist_ARRAY.length;

  let results = document.querySelector(".playlist-select-content");
  results.innerHTML="";

  for (let i = 0; i < playlist_COUNT; i++) {
    let tracks_COUNTER = playlist_ARRAY[i].split(',').length-4 + " Tracks";

    let result = `<div class="playlist-select-item" onclick="playlist_SELECT_ADD(this);" playlist-ID="${playlist_ARRAY[i].split(',')[3]}">
    <img src="${playlist_ARRAY[i].split(',')[2]}">
    <div class="playlist-select-item-data">
      <p>${playlist_ARRAY[i].split(',')[0]}</p>
      <span><i>Private</i> ${tracks_COUNTER}</span>
    </div>
  </div>`

  results.insertAdjacentHTML("beforeend", result);
  }
}

function playlist_HOME_LOAD(){
  let playlist_DATA = 
  [localStorage.getItem('playlist_user_1'),
   localStorage.getItem('playlist_user_2'),
   localStorage.getItem('playlist_user_3'),
   localStorage.getItem('playlist_user_4'),
   localStorage.getItem('playlist_user_5'),
   localStorage.getItem('playlist_user_6'),
   localStorage.getItem('playlist_user_7'),
   localStorage.getItem('playlist_user_8'),
   localStorage.getItem('playlist_user_9'),
   localStorage.getItem('playlist_user_10'),];

  let playlist_ARRAY = playlist_DATA.filter(x => x != null);
  let playlist_COUNT = playlist_ARRAY.length;

  let results = document.querySelector("#userPlaylists");
  results.innerHTML="";

  for (let i = 0; i < playlist_COUNT; i++) {
    let tracks_COUNTER = playlist_ARRAY[i].split(',').length-4 + " Tracks";

    let result = `<div class="center-container-item" onclick="fastLoadingPop();playlist_SELECT_CLICKED(this);" playlist-ID="${playlist_ARRAY[i].split(',')[3]}">
          <div class="img-box">    
            <img src="${playlist_ARRAY[i].split(',')[2]}">
          </div>
    <div class="playlist-select-item-data">
      <h2>${playlist_ARRAY[i].split(',')[0]}</h2>
      <p>Playlist • ${playlist_ARRAY[i].split(',')[1]} • ${tracks_COUNTER}</p>
    </div>
  </div>`

  results.insertAdjacentHTML("beforeend", result);
  }

  if(playlist_COUNT < 2){
    results.style.display='none';
    document.querySelector('.your-playlists').style.display='none';
  }else{
    results.style.display='flex';
    document.querySelector('.your-playlists').style.display='block';
  }
}

function playlist_SELECT_CLICKED(item){
  let item_DATA;

  if(item === undefined){
    item_DATA = document.querySelector('.music-playlist-album-screen-container').getAttribute('playlist-id');
  }else{
    item_DATA = item.getAttribute("playlist-ID")
  }

  let item_DATA_COUNTER = localStorage.getItem(item_DATA).split(',').length-4;
  playlistResult.setAttribute('queue-long-data', '');
  playlistResult.setAttribute('playlist-editable', 'true');
  playlistResult.setAttribute('playlist-id', item_DATA);
  localStorage.setItem('last_PLAYLIST', item_DATA);

  searchScreen.classList.remove('active');
  activeSearchScreen.classList.remove('active')
  activeLibraryScreen.classList.remove('active')
  libraryScreen.classList.remove('active');
  playlistScreen.classList.add('active');
  activeHomeScreen.classList.add('active');
  playlistSelectWindow.classList.remove('active');
  wrapper.classList.remove('active');

  playlistEditBtn.classList.remove('active');
  playlistEDIT.classList.remove('fs921');

  playlistImg.src = localStorage.getItem(item_DATA).split(',')[2];
  playlistImgBg.src = localStorage.getItem(item_DATA).split(',')[2];
  playlistTitle.innerText = localStorage.getItem(item_DATA).split(',')[0];;
  playlistArtist.innerText = 'Private Playlist';
  playlistTracksCounter.innerText = item_DATA_COUNTER;

  playlistResult.innerHTML = "";

  let allQueue;
  allQueue = allMusicView.filter(x => x.id === "#");

  allQueueLength = item_DATA_COUNTER+4;
  for (let i = 4; i < allQueueLength; i++) {
    queueMusic = allMusicView.filter(x => x.id === localStorage.getItem(item_DATA).split(',')[i]);
    allQueue = allQueue.concat(queueMusic)
  }

  for (let i = 0; i < allQueue.length; i++) {
    let resultFAV =
      `<div class="music-artist-album-item" queue-index='${i+1}' id='${allQueue[i].id}' onclick="playlist_QUEUE_CLICKED(this)">
      <img src="${allQueue[i].img_mini}">
            <div class="music-artist-album-item-data">
                <h1>${allQueue[i].name}</h1>
                <span>${allQueue[i].artist}</span>
            </div>
            <i onclick="trackOptions(this)" class="fa-solid fa-ellipsis-vertical"></i>
       </div>`;
       playlistResult.insertAdjacentHTML("beforeend", resultFAV);
  
  actionDataToBeReplaced = playlistResult.getAttribute('queue-long-data');
  playlistResult.setAttribute('queue-long-data', actionDataToBeReplaced + allQueue[i].id + ',' )
  }

  loseFocus();
  playlist_CHECK_IMG();
  albumScreen.classList.remove('active');
}

function playlist_CHECK_IMG(){
  setTimeout(() => {
    playlistImg.classList.add('s-50');
  }, 150);

  if(playlistResult.getAttribute('playlist-editable') === "true"){
    playlistEditBtn.style.display="flex";
  }else{
    playlistEditBtn.style.display="none";
  }
}

function playlist_QUEUE_PLAY(){
  playlist_DATA = playlistResult.getAttribute('queue-long-data');
  let playlistQueueLength = playlist_DATA.split(',').length-1;
  let allQueue;

  allQueue = allMusicView.filter(x => x.id === "#");
  for (let i = 0; i < playlistQueueLength; i++) {
    queueMusic = allMusicView.filter(x => x.id === playlist_DATA.split(',')[i]);
    allQueue = allQueue.concat(queueMusic)
  }

  allMusic = allQueue;
  indexNumb=1;
  loadMusic(indexNumb);
  playMusic();
}

function playlist_SELECT_ADD(object){
  playlistID = object.getAttribute('playlist-id');
  trackID = document.querySelector('.playlist-select').getAttribute('track-data');
  playlistLS = localStorage.getItem(playlistID);

  playlistCOUNTER = localStorage.getItem(playlistID).split(',').length;
  playlistLAST_1 = localStorage.getItem(playlistID).split(',')[playlistCOUNTER - 1]
  playlistLAST_2 = localStorage.getItem(playlistID).split(',')[playlistCOUNTER - 2]
  playlistLAST_3 = localStorage.getItem(playlistID).split(',')[playlistCOUNTER - 3]
  playlistLAST_4 = localStorage.getItem(playlistID).split(',')[playlistCOUNTER - 4]
  playlistDATA = playlistLS + ',' + trackID;

  if(playlistLAST_1 != trackID && playlistLAST_2 != trackID && playlistLAST_3 != trackID && playlistLAST_4 != trackID){
    localStorage.setItem(playlistID, playlistDATA);
    playlistSelectWindow.classList.remove('active');
  }

  if(document.querySelector(".track-options-screen")){
    trackHideOptions();
  }

  setTimeout(() => {
    playlistToolTip.classList.add('on')
    playlistToolTip.innerText = 'Added To Playlist';
    setTimeout(() => {
      playlistToolTip.classList.remove('on')
    }, 2000);
  }, 300);
}

function playlist_QUEUE_CLICKED(object){
  playlist_DATA = playlistResult.getAttribute('queue-long-data');
  let playlistQueueLength = playlist_DATA.split(',').length-1;
  let allQueue;

  allQueue = allMusicView.filter(x => x.id === "#");
  for (let i = 0; i < playlistQueueLength; i++) {
    queueMusic = allMusicView.filter(x => x.id === playlist_DATA.split(',')[i]);
    allQueue = allQueue.concat(queueMusic)
  }
  
  allMusic = allQueue;
  queueId = object.getAttribute("queue-index");
  indexNumb = queueId--;
  loadMusic(indexNumb);
  playMusic();
}

function playlist_SELECT_EXIT(){
  playlistSelectWindow.classList.remove('active')
}

function reload_LIBRARY(){
  document.querySelector(".library-slider .center-container-scrollable").innerHTML=`<div class="center-container-item playlist-tag" onclick="favoriteLibraryScreen();checkLocalStorageData()" artist-data="favorites">
  <img src="https://e-cdns-images.dzcdn.net/images/misc/679936b577879457668697f0e6f2c755/264x264-none-80-0-0.png">
  <div class="bg-box"><img src="https://e-cdns-images.dzcdn.net/images/misc/679936b577879457668697f0e6f2c755/264x264-none-80-0-0.png"></div>
  <div class="center-container-album-data">
    <h2>Liked songs</h2>
    <p>Playlist • Private</p>
  </div>
  <div class="center-container-item-action"><i onclick="quick_Play(this)" play-type="liked" class="fa-solid fa-play"></i></div>
</div>`;
  library_load_artists();
  library_load_albums();
  library_load_playlists();

  libraryFilter_Artist.classList.remove('active');
  libraryFilter_Album.classList.remove('active');
  libraryFilter_Playlist.classList.remove('active');

  document.querySelector(".library-slider").style.animation = 'none';
  document.querySelector(".library-slider").style.opacity = '0';
  setTimeout(() => {
    document.querySelector(".library-slider").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    document.querySelector(".library-slider").style.opacity = '1';
  }, 100);
}

const libraryFilter_Artist = document.querySelector('.tag-option.artist');
const libraryFilter_Album = document.querySelector('.tag-option.album');
const libraryFilter_Playlist = document.querySelector('.tag-option.playlist');
const libraryFilter_Clear = document.querySelector('.tag-option.clear');


function library_FILTER_ARTIST(){
  libraryFilter_Artist.classList.add('active');
  libraryFilter_Album.classList.remove('active');
  libraryFilter_Playlist.classList.remove('active');
  libraryFilter_Clear.classList.remove('active');

  let objects_ALL = document.querySelectorAll('.library-content .center-container-scrollable .center-container-item');
  let objects_VISIBLE = document.querySelectorAll('.library-content .center-container-scrollable .center-container-item.artist-tag');

  for(object_ALL of objects_ALL){
    object_ALL.style.display='none';
  }

  for(object_VISIBLE of objects_VISIBLE){
    object_VISIBLE.style.display='inline-flex';
  }

  document.querySelector(".library-slider").style.animation = 'none';
  document.querySelector(".library-slider").style.opacity = '0';
  setTimeout(() => {
    document.querySelector(".library-slider").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    document.querySelector(".library-slider").style.opacity = '1';
  }, 100);
}

function library_FILTER_ALBUM(){
  libraryFilter_Artist.classList.remove('active');
  libraryFilter_Album.classList.add('active');
  libraryFilter_Playlist.classList.remove('active');
  libraryFilter_Clear.classList.remove('active');

  let objects_ALL = document.querySelectorAll('.library-content .center-container-scrollable .center-container-item');
  let objects_VISIBLE = document.querySelectorAll('.library-content .center-container-scrollable .center-container-item.album-tag');

  for(object_ALL of objects_ALL){
    object_ALL.style.display='none';
  }

  for(object_VISIBLE of objects_VISIBLE){
    object_VISIBLE.style.display='inline-flex';
  }

  document.querySelector(".library-slider").style.animation = 'none';
  document.querySelector(".library-slider").style.opacity = '0';
  setTimeout(() => {
    document.querySelector(".library-slider").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    document.querySelector(".library-slider").style.opacity = '1';
  }, 100);
}

function library_FILTER_PLAYLIST(){
  libraryFilter_Artist.classList.remove('active');
  libraryFilter_Album.classList.remove('active');
  libraryFilter_Playlist.classList.add('active');
  libraryFilter_Clear.classList.remove('active');

  let objects_ALL = document.querySelectorAll('.library-content .center-container-scrollable .center-container-item');
  let objects_VISIBLE = document.querySelectorAll('.library-content .center-container-scrollable .center-container-item.playlist-tag');

  for(object_ALL of objects_ALL){
    object_ALL.style.display='none';
  }

  for(object_VISIBLE of objects_VISIBLE){
    object_VISIBLE.style.display='inline-flex';
  }

  document.querySelector(".library-slider").style.animation = 'none';
  document.querySelector(".library-slider").style.opacity = '0';
  setTimeout(() => {
    document.querySelector(".library-slider").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
    document.querySelector(".library-slider").style.opacity = '1';
  }, 100);
}

const playlistEDIT = document.querySelector('.playlist-edit');
const playlistEDIT_TITLE = document.querySelector('#edit_title');
const playlistEDIT_IMG = document.querySelector('#edit_img');

function playlist_EDIT(object){
  playlistEDIT.classList.toggle('fs921');
  playlistEditBtn.classList.toggle('active');

  playlistEDIT_TITLE.value = playlistTitle.innerText;
  playlistEDIT_IMG.value = playlistImg.src;
}

function playlist_EDIT_UBDATE(){
  newTitle = playlistEDIT_TITLE.value;
  newImg = playlistEDIT_IMG.value;
  playlistID = playlistResult.getAttribute('playlist-id');
  playlistLS = localStorage.getItem(playlistID)
  playlistCOUNTER = playlistLS.split(',').length - 1;

  if (ban.some(x => newTitle.toLowerCase().includes(x))) {
    errorPop();
  }else{
    newPlaylistInfo = newTitle + ',' + localStorage.getItem(playlistID).split(',')[1] + ',' + newImg + ',' + playlistID;
    for (let i = 4; i <= playlistCOUNTER; i++) {
      newPlaylistContnentItem = localStorage.getItem(playlistID).split(',')[i];
      newPlaylistInfo = newPlaylistInfo + ',' + newPlaylistContnentItem;
    }
  
    localStorage.setItem(playlistID, newPlaylistInfo);
    playlistEDIT.classList.remove('fs921');
    playlistEditBtn.classList.remove('active');
    playlistImg.src = newImg;
    playlistImgBg.src = newImg;
    playlistTitle.innerText = newTitle;
  }
}

function playlist_EDIT_REMOVE(){

  let playlist_DATA = 
  [localStorage.getItem('playlist_user_1'),
   localStorage.getItem('playlist_user_2'),
   localStorage.getItem('playlist_user_3'),
   localStorage.getItem('playlist_user_4'),
   localStorage.getItem('playlist_user_5'),
   localStorage.getItem('playlist_user_6'),
   localStorage.getItem('playlist_user_7'),
   localStorage.getItem('playlist_user_8'),
   localStorage.getItem('playlist_user_9'),
   localStorage.getItem('playlist_user_10'),];

  let playlist_ARRAY = playlist_DATA.filter(x => x != null);
  let playlist_COUNT = playlist_ARRAY.length;

  console.log(playlist_COUNT)

  playlistID = playlistResult.getAttribute('playlist-id');
  localStorage.removeItem(playlistID);
  playlistScreen.classList.remove('active');
  playlist_HOME_LOAD();
  localStorage.setItem('last_PLAYLIST', 'playlist_user_1');
}

function ui_ARTIST_TOGGLE(){
  if(localStorage.getItem('ui_artist')){
    localStorage.removeItem('ui_artist');
    ui_ARTISTHEADER.classList.remove('cfgHIDE');
  }else{
    localStorage.setItem('ui_artist', 'true');
    ui_ARTISTHEADER.classList.add('cfgHIDE');
  }
}

const premiumPopup = document.querySelector(".premium-popup");

function premium_POPUP_OPEN(){
  premiumPopup.classList.add('active');
}

function premium_POPUP_HIDE(){
  premiumPopup.classList.remove('active');
}

function premium_POPUP_OPTION_ACTIVE(e){
  document.querySelector('.premium-select.active').classList.remove('active')
  e.classList.add('active')
}

function premium_POPUP(){
  let x = Math.floor((Math.random() * 30) + 1);
  if(x > 29 && localStorage.getItem("first_login")){
    premium_POPUP_OPEN();
  }
}

const tutorialPopup = document.querySelector(".tutorial-popup");
const tutorialPopupImg = document.querySelector(".tutorial-popup-content-img img");
const tutorialPopupTitle = document.querySelector(".tutorial-popup-content-text-top p");
const tutorialPopupDesc = document.querySelector(".tutorial-popup-content-text-top span");

function tutorial_POPUP_OPEN(){
  tutorialPopup.classList.add('active');
  tutorial_SLIDE_LOAD();
}

function tutorial_POPUP_HIDE(){
  tutorialPopup.classList.remove('active');
}

function tutorial_SLIDE_NEXT(){
  tutorialDATA = tutorialPopup.getAttribute('slide');
  tutorialDATA++;

  if(tutorialDATA <= 5){
    tutorialPopup.setAttribute('slide', tutorialDATA);
  }else{
    tutorial_POPUP_HIDE();
    setTimeout(() => {
      tutorialPopup.setAttribute('slide', "1");
    }, 500);
  }

  tutorial_SLIDE_LOAD();
}

function tutorial_SLIDE_BACK(){
  tutorialDATA = tutorialPopup.getAttribute('slide');
  tutorialDATA--;

  if(tutorialDATA >= 1){
    tutorialPopup.setAttribute('slide', tutorialDATA);
  }else{
    tutorial_POPUP_HIDE();
    setTimeout(() => {
      tutorialPopup.setAttribute('slide', "1");
    }, 500);
  }

  tutorial_SLIDE_LOAD();
}

function tutorial_SLIDE_LOAD(){
  tutorialDATA = tutorialPopup.getAttribute('slide');

  if(tutorialDATA === "1"){
    document.querySelector(".tutorial-popup-content-text-top-dots .top-dot.active").classList.remove('active');
    tutorialDOT = document.querySelectorAll(".tutorial-popup-content-text-top-dots .top-dot")[0].classList.add('active');

    tutorialPopupDesc.classList.add('fade');
    tutorialPopupTitle.classList.add('fade');
    setTimeout(() => {
      tutorialPopupDesc.classList.remove('fade');
      tutorialPopupTitle.classList.remove('fade');
      tutorialPopupTitle.innerText = 'Get started';
      tutorialPopupDesc.innerHTML = 'Millions of songs are only a few steps away. Explore and discover! The more you use Zesia, the more we get to know you and can recommend music just for you. Tip: Like <i style="color: var(--maincolor)" class="fa-regular fa-heart"></i> And Save your liked songs to Your Library. This helps you keep a collection and helps us get to know you for recommendations.';
    }, 350);

    tutorialPopupImg.classList.add('fade');
    setTimeout(() => {
      tutorialPopupImg.classList.remove('fade');
      tutorialPopupImg.src = 'https://cdn.mos.cms.futurecdn.net/normaSZpamH9ytc63Msjsn.jpg';
    }, 500);
  }
  if(tutorialDATA === "2"){
    document.querySelector(".tutorial-popup-content-text-top-dots .top-dot.active").classList.remove('active');
    tutorialDOT = document.querySelectorAll(".tutorial-popup-content-text-top-dots .top-dot")[1].classList.add('active');
    
    tutorialPopupDesc.classList.add('fade');
    tutorialPopupTitle.classList.add('fade');
    setTimeout(() => {
      tutorialPopupDesc.classList.remove('fade');
      tutorialPopupTitle.classList.remove('fade');
      tutorialPopupTitle.innerText = 'Be in touch with favorites Artists';
      tutorialPopupDesc.innerText = 'Follow artists to never miss a new release and to improve Zesia recommendations. Go to the artist’s profile and select follow, to unfollow just press it once again. When artist will release something you will get notification about that, so make sure to follow your favorites Artists.'
    }, 350);
    
    tutorialPopupImg.classList.add('fade');
    setTimeout(() => {
      tutorialPopupImg.classList.remove('fade');
      tutorialPopupImg.src = 'https://ds.static.rtbf.be/article/image/1920x1080/9/0/8/691dcb1d65f31967a874d18383b9da75-1604413035.jpg';
    }, 500);
 a
  }
  if(tutorialDATA === "3"){
    document.querySelector(".tutorial-popup-content-text-top-dots .top-dot.active").classList.remove('active');
    tutorialDOT = document.querySelectorAll(".tutorial-popup-content-text-top-dots .top-dot")[2].classList.add('active');
    
    tutorialPopupDesc.classList.add('fade');
    tutorialPopupTitle.classList.add('fade');
    setTimeout(() => {
      tutorialPopupDesc.classList.remove('fade');
      tutorialPopupTitle.classList.remove('fade');
      tutorialPopupTitle.innerText = 'Music X Lyrics';
      tutorialPopupDesc.innerHTML = 'Press <i style="color: var(--maincolor)" class="fa-solid fa-microphone"></i> and see the lyrics of many of your favorite tracks as they’re sung. Lyrics may not be available on all songs. We are adding new Lyrics every day, so you may find it added in the future.'
    }, 350);

    tutorialPopupImg.classList.add('fade');
    setTimeout(() => {
      tutorialPopupImg.classList.remove('fade');
      tutorialPopupImg.src = 'https://img.freepik.com/premium-photo/young-pretty-woman-happy-motivated-singing-song-with-microphone-presenting-event-having-party-enjoy-moment_1258-5909.jpg';
    }, 500);

  }
  if(tutorialDATA === "4"){
    document.querySelector(".tutorial-popup-content-text-top-dots .top-dot.active").classList.remove('active');
    tutorialDOT = document.querySelectorAll(".tutorial-popup-content-text-top-dots .top-dot")[3].classList.add('active');
    
    tutorialPopupDesc.classList.add('fade');
    tutorialPopupTitle.classList.add('fade');
    setTimeout(() => {
      tutorialPopupDesc.classList.remove('fade');
      tutorialPopupTitle.classList.remove('fade');
      tutorialPopupTitle.innerText = 'Create Playlists';
      tutorialPopupDesc.innerHTML = 'To add song or create new playlist press <i style="color: var(--maincolor)" class="fa-solid fa-plus"></i>, then you can change image, name and songs that your playlist contain or will contain'
    }, 350);

    tutorialPopupImg.classList.add('fade');
    setTimeout(() => {
      tutorialPopupImg.classList.remove('fade');
      tutorialPopupImg.src = 'https://img.freepik.com/premium-photo/cheerful-attractive-young-woman-smiling-listening-music-from-mobile-phone-outdoors_171337-89529.jpg';
    }, 500);

  }
  if(tutorialDATA === "5"){
    document.querySelector(".tutorial-popup-content-text-top-dots .top-dot.active").classList.remove('active');
    tutorialDOT = document.querySelectorAll(".tutorial-popup-content-text-top-dots .top-dot")[4].classList.add('active');
    
    tutorialPopupDesc.classList.add('fade');
    tutorialPopupTitle.classList.add('fade');
    setTimeout(() => {
      tutorialPopupDesc.classList.remove('fade');
      tutorialPopupTitle.classList.remove('fade');
      tutorialPopupTitle.innerText = 'New Emotions With Canvas';
      tutorialPopupDesc.innerHTML = 'Enable canvas in settings and fell another experienced while listening to your loved music. Not all of songs have uploaded canvas, but we are ubdating it daily so make sure to check it once again in future'
    }, 350);

    tutorialPopupImg.classList.add('fade');
    setTimeout(() => {
      tutorialPopupImg.classList.remove('fade');
      tutorialPopupImg.src = 'https://thatgrapejuice.net/wp-content/uploads/2021/08/the-weeknd-take-my-breath-tgj-1280x720.jpeg';
    }, 500);

  }
}

function tutorial_CHECK(){
  if(localStorage.getItem("first_login")){
  }else{
    tutorial_POPUP_OPEN();
    localStorage.setItem('first_login', '0')
  }
}

function daily_DISCOVERY(){
  let daily_BOX = 
  `<div class="center-container-item" onclick="clickedPlaylist(this)" playlist-id="10">
    <div class="bg-box">
      <img src="https://images.tidal.com/0/EIAFGIAF/CAEQCCIDMjQyKgcjQThGN0MyMAQ?token=aa16f1e4927000a9eed70ec2c88237cd4325dec5">
    </div>
      <div class="img-box">    
        <img src="https://images.tidal.com/0/EIAFGIAF/CAEQCCIDMjQyKgcjQThGN0MyMAQ?token=aa16f1e4927000a9eed70ec2c88237cd4325dec5">
      </div>
    <h2>My Daily Discovery</h2>
  </div>`

  document.querySelector("#dailyMixContainer").insertAdjacentHTML("afterbegin", daily_BOX);
}

setTimeout(() => {
  daily_DISCOVERY();
}, 500);

var Latinise={};Latinise.latin_map={"Á":"A",
"Ă":"A",
"Ắ":"A",
"Ặ":"A",
"Ằ":"A",
"Ẳ":"A",
"Ẵ":"A",
"Ǎ":"A",
"Â":"A",
"Ấ":"A",
"Ậ":"A",
"Ầ":"A",
"Ẩ":"A",
"Ẫ":"A",
"Ä":"A",
"Ǟ":"A",
"Ȧ":"A",
"Ǡ":"A",
"Ạ":"A",
"Ȁ":"A",
"À":"A",
"Ả":"A",
"Ȃ":"A",
"Ā":"A",
"Ą":"A",
"Å":"A",
"Ǻ":"A",
"Ḁ":"A",
"Ⱥ":"A",
"Ã":"A",
"Ꜳ":"AA",
"Æ":"AE",
"Ǽ":"AE",
"Ǣ":"AE",
"Ꜵ":"AO",
"Ꜷ":"AU",
"Ꜹ":"AV",
"Ꜻ":"AV",
"Ꜽ":"AY",
"Ḃ":"B",
"Ḅ":"B",
"Ɓ":"B",
"Ḇ":"B",
"Ƀ":"B",
"Ƃ":"B",
"Ć":"C",
"Č":"C",
"Ç":"C",
"Ḉ":"C",
"Ĉ":"C",
"Ċ":"C",
"Ƈ":"C",
"Ȼ":"C",
"Ď":"D",
"Ḑ":"D",
"Ḓ":"D",
"Ḋ":"D",
"Ḍ":"D",
"Ɗ":"D",
"Ḏ":"D",
"ǲ":"D",
"ǅ":"D",
"Đ":"D",
"Ƌ":"D",
"Ǳ":"DZ",
"Ǆ":"DZ",
"É":"E",
"Ĕ":"E",
"Ě":"E",
"Ȩ":"E",
"Ḝ":"E",
"Ê":"E",
"Ế":"E",
"Ệ":"E",
"Ề":"E",
"Ể":"E",
"Ễ":"E",
"Ḙ":"E",
"Ë":"E",
"Ė":"E",
"Ẹ":"E",
"Ȅ":"E",
"È":"E",
"Ẻ":"E",
"Ȇ":"E",
"Ē":"E",
"Ḗ":"E",
"Ḕ":"E",
"Ę":"E",
"Ɇ":"E",
"Ẽ":"E",
"Ḛ":"E",
"Ꝫ":"ET",
"Ḟ":"F",
"Ƒ":"F",
"Ǵ":"G",
"Ğ":"G",
"Ǧ":"G",
"Ģ":"G",
"Ĝ":"G",
"Ġ":"G",
"Ɠ":"G",
"Ḡ":"G",
"Ǥ":"G",
"Ḫ":"H",
"Ȟ":"H",
"Ḩ":"H",
"Ĥ":"H",
"Ⱨ":"H",
"Ḧ":"H",
"Ḣ":"H",
"Ḥ":"H",
"Ħ":"H",
"Í":"I",
"Ĭ":"I",
"Ǐ":"I",
"Î":"I",
"Ï":"I",
"Ḯ":"I",
"İ":"I",
"Ị":"I",
"Ȉ":"I",
"Ì":"I",
"Ỉ":"I",
"Ȋ":"I",
"Ī":"I",
"Į":"I",
"Ɨ":"I",
"Ĩ":"I",
"Ḭ":"I",
"Ꝺ":"D",
"Ꝼ":"F",
"Ᵹ":"G",
"Ꞃ":"R",
"Ꞅ":"S",
"Ꞇ":"T",
"Ꝭ":"IS",
"Ĵ":"J",
"Ɉ":"J",
"Ḱ":"K",
"Ǩ":"K",
"Ķ":"K",
"Ⱪ":"K",
"Ꝃ":"K",
"Ḳ":"K",
"Ƙ":"K",
"Ḵ":"K",
"Ꝁ":"K",
"Ꝅ":"K",
"Ĺ":"L",
"Ƚ":"L",
"Ľ":"L",
"Ļ":"L",
"Ḽ":"L",
"Ḷ":"L",
"Ḹ":"L",
"Ⱡ":"L",
"Ꝉ":"L",
"Ḻ":"L",
"Ŀ":"L",
"Ɫ":"L",
"ǈ":"L",
"Ł":"L",
"Ǉ":"LJ",
"Ḿ":"M",
"Ṁ":"M",
"Ṃ":"M",
"Ɱ":"M",
"Ń":"N",
"Ň":"N",
"Ņ":"N",
"Ṋ":"N",
"Ṅ":"N",
"Ṇ":"N",
"Ǹ":"N",
"Ɲ":"N",
"Ṉ":"N",
"Ƞ":"N",
"ǋ":"N",
"Ñ":"N",
"Ǌ":"NJ",
"Ó":"O",
"Ŏ":"O",
"Ǒ":"O",
"Ô":"O",
"Ố":"O",
"Ộ":"O",
"Ồ":"O",
"Ổ":"O",
"Ỗ":"O",
"Ö":"O",
"Ȫ":"O",
"Ȯ":"O",
"Ȱ":"O",
"Ọ":"O",
"Ő":"O",
"Ȍ":"O",
"Ò":"O",
"Ỏ":"O",
"Ơ":"O",
"Ớ":"O",
"Ợ":"O",
"Ờ":"O",
"Ở":"O",
"Ỡ":"O",
"Ȏ":"O",
"Ꝋ":"O",
"Ꝍ":"O",
"Ō":"O",
"Ṓ":"O",
"Ṑ":"O",
"Ɵ":"O",
"Ǫ":"O",
"Ǭ":"O",
"Ø":"O",
"Ǿ":"O",
"Õ":"O",
"Ṍ":"O",
"Ṏ":"O",
"Ȭ":"O",
"Ƣ":"OI",
"Ꝏ":"OO",
"Ɛ":"E",
"Ɔ":"O",
"Ȣ":"OU",
"Ṕ":"P",
"Ṗ":"P",
"Ꝓ":"P",
"Ƥ":"P",
"Ꝕ":"P",
"Ᵽ":"P",
"Ꝑ":"P",
"Ꝙ":"Q",
"Ꝗ":"Q",
"Ŕ":"R",
"Ř":"R",
"Ŗ":"R",
"Ṙ":"R",
"Ṛ":"R",
"Ṝ":"R",
"Ȑ":"R",
"Ȓ":"R",
"Ṟ":"R",
"Ɍ":"R",
"Ɽ":"R",
"Ꜿ":"C",
"Ǝ":"E",
"Ś":"S",
"Ṥ":"S",
"Š":"S",
"Ṧ":"S",
"Ş":"S",
"Ŝ":"S",
"Ș":"S",
"Ṡ":"S",
"Ṣ":"S",
"Ṩ":"S",
"Ť":"T",
"Ţ":"T",
"Ṱ":"T",
"Ț":"T",
"Ⱦ":"T",
"Ṫ":"T",
"Ṭ":"T",
"Ƭ":"T",
"Ṯ":"T",
"Ʈ":"T",
"Ŧ":"T",
"Ɐ":"A",
"Ꞁ":"L",
"Ɯ":"M",
"Ʌ":"V",
"Ꜩ":"TZ",
"Ú":"U",
"Ŭ":"U",
"Ǔ":"U",
"Û":"U",
"Ṷ":"U",
"Ü":"U",
"Ǘ":"U",
"Ǚ":"U",
"Ǜ":"U",
"Ǖ":"U",
"Ṳ":"U",
"Ụ":"U",
"Ű":"U",
"Ȕ":"U",
"Ù":"U",
"Ủ":"U",
"Ư":"U",
"Ứ":"U",
"Ự":"U",
"Ừ":"U",
"Ử":"U",
"Ữ":"U",
"Ȗ":"U",
"Ū":"U",
"Ṻ":"U",
"Ų":"U",
"Ů":"U",
"Ũ":"U",
"Ṹ":"U",
"Ṵ":"U",
"Ꝟ":"V",
"Ṿ":"V",
"Ʋ":"V",
"Ṽ":"V",
"Ꝡ":"VY",
"Ẃ":"W",
"Ŵ":"W",
"Ẅ":"W",
"Ẇ":"W",
"Ẉ":"W",
"Ẁ":"W",
"Ⱳ":"W",
"Ẍ":"X",
"Ẋ":"X",
"Ý":"Y",
"Ŷ":"Y",
"Ÿ":"Y",
"Ẏ":"Y",
"Ỵ":"Y",
"Ỳ":"Y",
"Ƴ":"Y",
"Ỷ":"Y",
"Ỿ":"Y",
"Ȳ":"Y",
"Ɏ":"Y",
"Ỹ":"Y",
"Ź":"Z",
"Ž":"Z",
"Ẑ":"Z",
"Ⱬ":"Z",
"Ż":"Z",
"Ẓ":"Z",
"Ȥ":"Z",
"Ẕ":"Z",
"Ƶ":"Z",
"Ĳ":"IJ",
"Œ":"OE",
"ᴀ":"A",
"ᴁ":"AE",
"ʙ":"B",
"ᴃ":"B",
"ᴄ":"C",
"ᴅ":"D",
"ᴇ":"E",
"ꜰ":"F",
"ɢ":"G",
"ʛ":"G",
"ʜ":"H",
"ɪ":"I",
"ʁ":"R",
"ᴊ":"J",
"ᴋ":"K",
"ʟ":"L",
"ᴌ":"L",
"ᴍ":"M",
"ɴ":"N",
"ᴏ":"O",
"ɶ":"OE",
"ᴐ":"O",
"ᴕ":"OU",
"ᴘ":"P",
"ʀ":"R",
"ᴎ":"N",
"ᴙ":"R",
"ꜱ":"S",
"ᴛ":"T",
"ⱻ":"E",
"ᴚ":"R",
"ᴜ":"U",
"ᴠ":"V",
"ᴡ":"W",
"ʏ":"Y",
"ᴢ":"Z",
"á":"a",
"ă":"a",
"ắ":"a",
"ặ":"a",
"ằ":"a",
"ẳ":"a",
"ẵ":"a",
"ǎ":"a",
"â":"a",
"ấ":"a",
"ậ":"a",
"ầ":"a",
"ẩ":"a",
"ẫ":"a",
"ä":"a",
"ǟ":"a",
"ȧ":"a",
"ǡ":"a",
"ạ":"a",
"ȁ":"a",
"à":"a",
"ả":"a",
"ȃ":"a",
"ā":"a",
"ą":"a",
"ᶏ":"a",
"ẚ":"a",
"å":"a",
"ǻ":"a",
"ḁ":"a",
"ⱥ":"a",
"ã":"a",
"ꜳ":"aa",
"æ":"ae",
"ǽ":"ae",
"ǣ":"ae",
"ꜵ":"ao",
"ꜷ":"au",
"ꜹ":"av",
"ꜻ":"av",
"ꜽ":"ay",
"ḃ":"b",
"ḅ":"b",
"ɓ":"b",
"ḇ":"b",
"ᵬ":"b",
"ᶀ":"b",
"ƀ":"b",
"ƃ":"b",
"ɵ":"o",
"ć":"c",
"č":"c",
"ç":"c",
"ḉ":"c",
"ĉ":"c",
"ɕ":"c",
"ċ":"c",
"ƈ":"c",
"ȼ":"c",
"ď":"d",
"ḑ":"d",
"ḓ":"d",
"ȡ":"d",
"ḋ":"d",
"ḍ":"d",
"ɗ":"d",
"ᶑ":"d",
"ḏ":"d",
"ᵭ":"d",
"ᶁ":"d",
"đ":"d",
"ɖ":"d",
"ƌ":"d",
"ı":"i",
"ȷ":"j",
"ɟ":"j",
"ʄ":"j",
"ǳ":"dz",
"ǆ":"dz",
"é":"e",
"ĕ":"e",
"ě":"e",
"ȩ":"e",
"ḝ":"e",
"ê":"e",
"ế":"e",
"ệ":"e",
"ề":"e",
"ể":"e",
"ễ":"e",
"ḙ":"e",
"ë":"e",
"ė":"e",
"ẹ":"e",
"ȅ":"e",
"è":"e",
"ẻ":"e",
"ȇ":"e",
"ē":"e",
"ḗ":"e",
"ḕ":"e",
"ⱸ":"e",
"ę":"e",
"ᶒ":"e",
"ɇ":"e",
"ẽ":"e",
"ḛ":"e",
"ꝫ":"et",
"ḟ":"f",
"ƒ":"f",
"ᵮ":"f",
"ᶂ":"f",
"ǵ":"g",
"ğ":"g",
"ǧ":"g",
"ģ":"g",
"ĝ":"g",
"ġ":"g",
"ɠ":"g",
"ḡ":"g",
"ᶃ":"g",
"ǥ":"g",
"ḫ":"h",
"ȟ":"h",
"ḩ":"h",
"ĥ":"h",
"ⱨ":"h",
"ḧ":"h",
"ḣ":"h",
"ḥ":"h",
"ɦ":"h",
"ẖ":"h",
"ħ":"h",
"ƕ":"hv",
"í":"i",
"ĭ":"i",
"ǐ":"i",
"î":"i",
"ï":"i",
"ḯ":"i",
"ị":"i",
"ȉ":"i",
"ì":"i",
"ỉ":"i",
"ȋ":"i",
"ī":"i",
"į":"i",
"ᶖ":"i",
"ɨ":"i",
"ĩ":"i",
"ḭ":"i",
"ꝺ":"d",
"ꝼ":"f",
"ᵹ":"g",
"ꞃ":"r",
"ꞅ":"s",
"ꞇ":"t",
"ꝭ":"is",
"ǰ":"j",
"ĵ":"j",
"ʝ":"j",
"ɉ":"j",
"ḱ":"k",
"ǩ":"k",
"ķ":"k",
"ⱪ":"k",
"ꝃ":"k",
"ḳ":"k",
"ƙ":"k",
"ḵ":"k",
"ᶄ":"k",
"ꝁ":"k",
"ꝅ":"k",
"ĺ":"l",
"ƚ":"l",
"ɬ":"l",
"ľ":"l",
"ļ":"l",
"ḽ":"l",
"ȴ":"l",
"ḷ":"l",
"ḹ":"l",
"ⱡ":"l",
"ꝉ":"l",
"ḻ":"l",
"ŀ":"l",
"ɫ":"l",
"ᶅ":"l",
"ɭ":"l",
"ł":"l",
"ǉ":"lj",
"ſ":"s",
"ẜ":"s",
"ẛ":"s",
"ẝ":"s",
"ḿ":"m",
"ṁ":"m",
"ṃ":"m",
"ɱ":"m",
"ᵯ":"m",
"ᶆ":"m",
"ń":"n",
"ň":"n",
"ņ":"n",
"ṋ":"n",
"ȵ":"n",
"ṅ":"n",
"ṇ":"n",
"ǹ":"n",
"ɲ":"n",
"ṉ":"n",
"ƞ":"n",
"ᵰ":"n",
"ᶇ":"n",
"ɳ":"n",
"ñ":"n",
"ǌ":"nj",
"ó":"o",
"ŏ":"o",
"ǒ":"o",
"ô":"o",
"ố":"o",
"ộ":"o",
"ồ":"o",
"ổ":"o",
"ỗ":"o",
"ö":"o",
"ȫ":"o",
"ȯ":"o",
"ȱ":"o",
"ọ":"o",
"ő":"o",
"ȍ":"o",
"ò":"o",
"ỏ":"o",
"ơ":"o",
"ớ":"o",
"ợ":"o",
"ờ":"o",
"ở":"o",
"ỡ":"o",
"ȏ":"o",
"ꝋ":"o",
"ꝍ":"o",
"ⱺ":"o",
"ō":"o",
"ṓ":"o",
"ṑ":"o",
"ǫ":"o",
"ǭ":"o",
"ø":"o",
"ǿ":"o",
"õ":"o",
"ṍ":"o",
"ṏ":"o",
"ȭ":"o",
"ƣ":"oi",
"ꝏ":"oo",
"ɛ":"e",
"ᶓ":"e",
"ɔ":"o",
"ᶗ":"o",
"ȣ":"ou",
"ṕ":"p",
"ṗ":"p",
"ꝓ":"p",
"ƥ":"p",
"ᵱ":"p",
"ᶈ":"p",
"ꝕ":"p",
"ᵽ":"p",
"ꝑ":"p",
"ꝙ":"q",
"ʠ":"q",
"ɋ":"q",
"ꝗ":"q",
"ŕ":"r",
"ř":"r",
"ŗ":"r",
"ṙ":"r",
"ṛ":"r",
"ṝ":"r",
"ȑ":"r",
"ɾ":"r",
"ᵳ":"r",
"ȓ":"r",
"ṟ":"r",
"ɼ":"r",
"ᵲ":"r",
"ᶉ":"r",
"ɍ":"r",
"ɽ":"r",
"ↄ":"c",
"ꜿ":"c",
"ɘ":"e",
"ɿ":"r",
"ś":"s",
"ṥ":"s",
"š":"s",
"ṧ":"s",
"ş":"s",
"ŝ":"s",
"ș":"s",
"ṡ":"s",
"ṣ":"s",
"ṩ":"s",
"ʂ":"s",
"ᵴ":"s",
"ᶊ":"s",
"ȿ":"s",
"ɡ":"g",
"ᴑ":"o",
"ᴓ":"o",
"ᴝ":"u",
"ť":"t",
"ţ":"t",
"ṱ":"t",
"ț":"t",
"ȶ":"t",
"ẗ":"t",
"ⱦ":"t",
"ṫ":"t",
"ṭ":"t",
"ƭ":"t",
"ṯ":"t",
"ᵵ":"t",
"ƫ":"t",
"ʈ":"t",
"ŧ":"t",
"ᵺ":"th",
"ɐ":"a",
"ᴂ":"ae",
"ǝ":"e",
"ᵷ":"g",
"ɥ":"h",
"ʮ":"h",
"ʯ":"h",
"ᴉ":"i",
"ʞ":"k",
"ꞁ":"l",
"ɯ":"m",
"ɰ":"m",
"ᴔ":"oe",
"ɹ":"r",
"ɻ":"r",
"ɺ":"r",
"ⱹ":"r",
"ʇ":"t",
"ʌ":"v",
"ʍ":"w",
"ʎ":"y",
"ꜩ":"tz",
"ú":"u",
"ŭ":"u",
"ǔ":"u",
"û":"u",
"ṷ":"u",
"ü":"u",
"ǘ":"u",
"ǚ":"u",
"ǜ":"u",
"ǖ":"u",
"ṳ":"u",
"ụ":"u",
"ű":"u",
"ȕ":"u",
"ù":"u",
"ủ":"u",
"ư":"u",
"ứ":"u",
"ự":"u",
"ừ":"u",
"ử":"u",
"ữ":"u",
"ȗ":"u",
"ū":"u",
"ṻ":"u",
"ų":"u",
"ᶙ":"u",
"ů":"u",
"ũ":"u",
"ṹ":"u",
"ṵ":"u",
"ᵫ":"ue",
"ꝸ":"um",
"ⱴ":"v",
"ꝟ":"v",
"ṿ":"v",
"ʋ":"v",
"ᶌ":"v",
"ⱱ":"v",
"ṽ":"v",
"ꝡ":"vy",
"ẃ":"w",
"ŵ":"w",
"ẅ":"w",
"ẇ":"w",
"ẉ":"w",
"ẁ":"w",
"ⱳ":"w",
"ẘ":"w",
"ẍ":"x",
"ẋ":"x",
"ᶍ":"x",
"ý":"y",
"ŷ":"y",
"ÿ":"y",
"ẏ":"y",
"ỵ":"y",
"ỳ":"y",
"ƴ":"y",
"ỷ":"y",
"ỿ":"y",
"ȳ":"y",
"ẙ":"y",
"ɏ":"y",
"ỹ":"y",
"ź":"z",
"ž":"z",
"ẑ":"z",
"ʑ":"z",
"ⱬ":"z",
"ż":"z",
"ẓ":"z",
"ȥ":"z",
"ẕ":"z",
"ᵶ":"z",
"ᶎ":"z",
"ʐ":"z",
"ƶ":"z",
"ɀ":"z",
"ﬀ":"ff",
"ﬃ":"ffi",
"ﬄ":"ffl",
"ﬁ":"fi",
"ﬂ":"fl",
"ĳ":"ij",
"œ":"oe",
"ﬆ":"st",
"ₐ":"a",
"ₑ":"e",
"ᵢ":"i",
"ⱼ":"j",
"ₒ":"o",
"ᵣ":"r",
"ᵤ":"u",
"ᵥ":"v",
"ₓ":"x"};
String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
String.prototype.latinize=String.prototype.latinise;
String.prototype.isLatin=function(){return this==this.latinise()}

var beta_build_status = false;

function beta_build_version(){
  if(beta_build_status === false){
  let build_version = document.querySelector("#version_build").innerText;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var hh = today.getHours();
  var min = today.getMinutes();
  var yyyy = today.getFullYear();

  if(min < 10){
    min = '0' + today.getMinutes();
  }

  today = dd + '/' + mm + '/' + yyyy + ' | ' + hh + ':'+ min;
  let build_version_show  = build_version + " | " + today;

  $('body').append(`<div style="display:flex; flex-direction: column; position: fixed; font-size:16px; top: 2px; left: 4px; z-index: 100;"><p style="style="filter: drop-shadow(0px 1px 0px black);">${build_version_show}</p><p style="margin-top: -5px;">ZESIAXENGINE ALPHA</p></div>`);
  beta_build_status = true;
}}

musicImgBox.addEventListener("touchstart", tapHandler);
var tapedTwice = false;

function tapHandler(event) {
    if(!tapedTwice) {
        tapedTwice = true;
        setTimeout( function() { tapedTwice = false; }, 300 );
        return false;
    }
    event.preventDefault();
    track_LIKE();
 }

function artistBio_ShowMore(){
  if(bioMoreBtn.innerText === "Show Less"){
    bioMoreBtn.innerText = "Show More";
    bioContent.classList.remove("all");
  }else if(bioMoreBtn.innerText = "Show More"){
    bioMoreBtn.innerText = "Show Less"
    bioContent.classList.add("all");
  }
}

let preview_content_1 = document.querySelector('.settings-lyrics-box p:nth-child(1)');
let preview_content_2 = document.querySelector('.settings-lyrics-box p:nth-child(2)');
let preview_content_3 = document.querySelector('.settings-lyrics-box p:nth-child(3)');
let preview_content_color = document.querySelector('.settings-lyrics-box');
let preview_img = document.querySelector('.settings-lyrics-box img');


function lyrics_customize_select(e){
  let select_data = e.getAttribute('data');
  if(select_data === '1'){
    $(".settings-lyrics-box span a").click(function() { 
      $(".settings-lyrics-box span a").not($(this)).removeClass('active');
      $(this).addClass('active');
    });
    preview_content_1.innerText = "In your eyes, there's heavy blue";
    preview_content_2.innerText = 'One to love, and one to lose';
    preview_content_3.innerText = 'Sweet divine, a heavy truth';
    preview_content_color.style.backgroundColor = 'rgba(22, 45, 82, 0.75)'
    preview_img.src = 'https://i.scdn.co/image/ab67616d00004851307910d4242c0d6b1fedf955';

  }else if(select_data === '2'){
    $(".settings-lyrics-box span a").click(function() { 
      $(".settings-lyrics-box span a").not($(this)).removeClass('active');
      $(this).addClass('active');
    });
    preview_content_1.innerText = "I stay up all night";
    preview_content_2.innerText = "Tell myself I'm alright";
    preview_content_3.innerText = "Baby, you're just harder to see than most";
    preview_content_color.style.backgroundColor = 'rgba(106, 87, 135, 0.75)'
    preview_img.src = 'https://i.scdn.co/image/ab67616d00004851141cf717cd3993690358a60c';

  }else if(select_data === '3'){
    $(".settings-lyrics-box span a").click(function() { 
      $(".settings-lyrics-box span a").not($(this)).removeClass('active');
      $(this).addClass('active');
    });
    preview_content_1.innerText = 'By nasze drogi spleść gwiazdom na przekór';
    preview_content_2.innerText = 'Otwórz te rany, a potem zalecz';
    preview_content_3.innerText = 'Aż w zawiły losu ułożą się wzór';
    preview_content_color.style.backgroundColor = 'rgba(109, 193, 147, 0.75)'
    preview_img.src = 'https://i.scdn.co/image/ab67616d000048514acacdf5c40e1154c166b454';

  }
}

function lyrics_customize_down(data){
  mainData = data.parentElement.getAttribute('data-name');
  req_min = data.parentElement.getAttribute('data-min');
  req_max = data.parentElement.getAttribute('data-max');
  req_step = data.parentElement.getAttribute('data-step');
  mainObject = data.parentElement.querySelector('p');

  if(Math.floor(mainObject.innerText) - req_step >= req_min){
    mainObjectData = Math.floor(mainObject.innerText) - Math.floor(req_step);
    mainObject.innerText = mainObjectData;

    localStorage.setItem(mainData, mainObjectData)
    lyrics_customize_update();
  }
}

function lyrics_customize_up(data){
  mainData = data.parentElement.getAttribute('data-name');
  req_min = data.parentElement.getAttribute('data-min');
  req_max = data.parentElement.getAttribute('data-max');
  req_step = data.parentElement.getAttribute('data-step');
  mainObject = data.parentElement.querySelector('p');

  if(Math.floor(mainObject.innerText) + req_step <= req_max){
    mainObjectData = Math.floor(mainObject.innerText) + Math.floor(req_step);
    mainObject.innerText = mainObjectData;

    localStorage.setItem(mainData, mainObjectData)
    lyrics_customize_update();
  }
}

let user_lyricsFontSize;
let user_lyricsFontGap;
let user_lyricsBgBlur;
let user_lyricsActiveUpDownGap;
let user_lyricsActiveLeftGap;

let settings_lyricsBoxVerse = document.querySelector('.settings-lyrics-box p');

function lyrics_customize_update(){
  if(localStorage.getItem("fontSize")){
    user_lyricsFontSize = localStorage.getItem("fontSize");
  }else{
    user_lyricsFontSize="32";
  }

  if(localStorage.getItem("fontGap")){
    user_lyricsFontGap = localStorage.getItem("fontGap");
  }else{
    user_lyricsFontGap="-1";
  }

  if(localStorage.getItem("bgBlur")){
    user_lyricsBgBlur = localStorage.getItem("bgBlur");
  }else{
    user_lyricsBgBlur="60";
  }

  if(localStorage.getItem("activeUpDownGap")){
    user_lyricsActiveUpDownGap = localStorage.getItem("activeUpDownGap");
  }else{
    user_lyricsActiveUpDownGap="20";
  }

  if(localStorage.getItem("activeLeftGap")){
    user_lyricsActiveLeftGap = localStorage.getItem("activeLeftGap");
  }else{
    user_lyricsActiveLeftGap="15";
  }

  preview_content_1.style.fontSize = user_lyricsFontSize + "px";
  preview_content_1.style.letterSpacing = user_lyricsFontGap + "px";
  preview_content_2.style.fontSize = user_lyricsFontSize + "px";
  preview_content_2.style.letterSpacing = user_lyricsFontGap + "px";
  preview_content_3.style.fontSize = user_lyricsFontSize + "px";
  preview_content_3.style.letterSpacing = user_lyricsFontGap + "px";

  preview_img.style.filter = "blur(" + user_lyricsBgBlur + "px)";
  preview_content_2.style.padding = user_lyricsActiveUpDownGap + "px 0px"; 
  preview_content_2.style.transform = "translateX("+ user_lyricsActiveLeftGap +"px)";

  document.querySelector("[data-name=fontSize] p").innerText = user_lyricsFontSize;
  document.querySelector("[data-name=fontGap] p").innerText = user_lyricsFontGap;
  document.querySelector("[data-name=bgBlur] p").innerText = user_lyricsBgBlur;
  document.querySelector("[data-name=activeUpDownGap] p").innerText = user_lyricsActiveUpDownGap;
  document.querySelector("[data-name=activeLeftGap] p").innerText = user_lyricsActiveLeftGap;
}

function lyrics_customize_reset(){
  user_lyricsFontSize="32";
  localStorage.setItem("fontSize", user_lyricsFontSize)

  user_lyricsFontGap="-1";
  localStorage.setItem("fontGap", user_lyricsFontGap);

  user_lyricsBgBlur="60";
  localStorage.setItem("bgBlur", user_lyricsBgBlur);

  user_lyricsActiveUpDownGap="20";
  localStorage.setItem("activeUpDownGap", user_lyricsActiveUpDownGap);

  user_lyricsActiveLeftGap="15";
  localStorage.setItem("activeLeftGap", user_lyricsActiveLeftGap);

  preview_content_1.style.fontSize = user_lyricsFontSize + "px";
  preview_content_1.style.letterSpacing = user_lyricsFontGap + "px";
  preview_content_2.style.fontSize = user_lyricsFontSize + "px";
  preview_content_2.style.letterSpacing = user_lyricsFontGap + "px";
  preview_content_3.style.fontSize = user_lyricsFontSize + "px";
  preview_content_3.style.letterSpacing = user_lyricsFontGap + "px";

  preview_img.style.filter = "blur(" + user_lyricsBgBlur + "px)";
  preview_content_2.style.padding = user_lyricsActiveUpDownGap + "px 0px"; 
  preview_content_2.style.transform = "translateX("+ user_lyricsActiveLeftGap +"px)";

  document.querySelector("[data-name=fontSize] p").innerText = user_lyricsFontSize;
  document.querySelector("[data-name=fontGap] p").innerText = user_lyricsFontGap;
  document.querySelector("[data-name=bgBlur] p").innerText = user_lyricsBgBlur;
  document.querySelector("[data-name=activeUpDownGap] p").innerText = user_lyricsActiveUpDownGap;
  document.querySelector("[data-name=activeLeftGap] p").innerText = user_lyricsActiveLeftGap;
}

lyrics_customize_update();

function profileSettingsOpen(){
  let profileSettingsScreen = document.querySelector('.user-profile-settings');
  profileSettingsScreen.classList.add('active');
  profileSettingsScreen.innerHTML = `    <div class="user-profile-controls">
  <p>Profile Settings</p>
  <i onclick="profileSettingsHide()" class="fa-solid fa-xmark"></i>
  </div>

  <p class="music-artist-content-title">Name<span></span></p>

  <div class="user-profile-settings-box name">
    <input placeholder="Username" type="text">
    <i onclick="profileSelect_Name()" class="fa-solid fa-check"></i>
  </div>

  <p class="music-artist-content-title">Avatar<span></span></p>

  <div class="user-profile-settings-box images">
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-150x150.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-150x150.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-150x150.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)"> 
      <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-150x150.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-150x150.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2022/10/scrat.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/12/merida-avatar-wodp.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2023/07/bluey-4.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/bart-.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2022/05/kenobi-avatar.png">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-service-avatar-10107431-8179552.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/stylized-girl-with-polo-shirt-9527888-7718036.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/stylized-girl-with-sweater-9527874-7718022.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box" onclick="profileSelect_Avatar(this)">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/stylized-man-with-jacket-9527884-7718032.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box">
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>

  <p class="music-artist-content-title">Achievement<span></span></p>

  <div class="user-profile-settings-box images">
    <div class="user-profile-settings-img-box disabled">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/like-trophy-6300686-5187374.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box disabled">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/star-trophy-6300687-5187375.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box disabled">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/grand-prix-trophy-6300675-5187376.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box disabled">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/archery-trophy-6300672-5187383.png?f=webp">
    </div>
    <div class="user-profile-settings-img-box disabled">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/glass-trophy-6300678-5187379.png?f=webp">
    </div>
  </div>`
}

function profileSettingsHide(){
  document.querySelector('.user-profile-settings').classList.remove('active')
}

function profileSelect_Avatar(object){
  let p_avatar_data = object.querySelector("img").src
  localStorage.setItem("personalization-data-avatar", p_avatar_data)

  p_avatar.src = p_avatar_data;
  p_avatarBg.src = p_avatar_data;
  p_avatarSmall.src = p_avatar_data;
}

function profileSelect_Name(){
  let profileName = document.querySelector(".user-profile-settings-box.name input").value;

  if(profileName.length >= 3){
    localStorage.setItem("personalization-data-name", profileName)
    document.querySelector(".user_profile_header_content_name").innerText = profileName;
    nameUserMain.innerText = profileName;
    document.querySelector(".user-profile-settings-box.name input").classList.add('active')
    setTimeout(() => {
      document.querySelector(".user-profile-settings-box.name input").classList.remove('active')
    }, 500);
  }else{
    document.querySelector(".user-profile-settings-box.name input").value = "";
  }
}

function testingLyrics(){
  for (let i = 0; i < allMusic[indexNumb - 1].lyrics.length; i++) {
    if(allMusic[indexNumb - 1].lyrics.ve[i].stamp){

      /* Action */

  }}
}

function quick_Play(e){

  if(e.getAttribute("play-type") === "album"){
  let itemArtistId = e.parentElement.parentElement.getAttribute('artist-data');
  let itemAlbum = e.parentElement.parentElement.getAttribute('data-album');
  allMusic = allMusicView.filter(x => x.artist_id === itemArtistId && x.album === itemAlbum);
  indexNumb = 1;     
  }else if(e.getAttribute("play-type") === "liked"){
    favoritesQueue();
  }
  else if(e.getAttribute("play-type") === "playlist"){
    playlist_DATA = playlistResult.getAttribute('queue-long-data');
    let playlistQueueLength = playlist_DATA.split(',').length-1;
    let allQueue;
  
    allQueue = allMusicView.filter(x => x.id === "#");
    for (let i = 0; i < playlistQueueLength; i++) {
      queueMusic = allMusicView.filter(x => x.id === playlist_DATA.split(',')[i]);
      allQueue = allQueue.concat(queueMusic)
    }

    allMusic = allQueue;
    indexNumb=1;
    loadMusic(indexNumb);
    playMusic();
  }else if(e.getAttribute("play-type") === "track"){
    clickedNotification(e.parentElement.parentElement)
  }
  else{
  let itemArtistId = e.parentElement.parentElement.getAttribute('artist-id');
  allMusic = allMusicView.filter(x => x.artist_id === itemArtistId || x.colaboration_id === itemArtistId); 
  indexNumb = Math.floor((Math.random() * allMusic.length) + 1);     
  }

  loadMusic(indexNumb);
  playMusic();
}

settings_Stretched = document.querySelector("#userSettingsStretched")

function settings_StretchedToggle(){
  if(musicImgBox.classList.contains("stretched")){
    localStorage.removeItem("trackCoverStretched")
    musicImgBox.classList.remove("stretched");
  }else{
    localStorage.setItem("trackCoverStretched", "1")
    musicImgBox.classList.add("stretched");
  }
}

function pc_lyricsToggle(){
  if(musicImgBox.classList.contains("lyrics")){
    if(wrapper.classList.contains('active')){
      wrapper.classList.remove('active');
      document.querySelector(".pc-controls-ui").style.opacity=".35";
      if(lyricsBox.classList.contains("active") && wrapper.classList.contains('active') === false){
        clearInterval(checkLyricsPerSec);
        console.log("off")
      }
    }else{
      wrapper.classList.add('active');
      document.querySelector(".pc-controls-ui").style.opacity="0";
      if(localStorage.lyricsAccouracyImprove){
        document.querySelector('.top-controls').classList.add('lyrics');
        checkLyricsPerSec = setInterval(lyricsMode,250);
      }else{
        checkLyricsPerSec = setInterval(lyricsMode,500);
      }
    }
  }else{
    wrapper.classList.add('active');
    document.querySelector(".pc-controls-ui").style.opacity="0";
    trackLyrics();
  }
}

function navbarQuickBar() {
  const resultsFAV = document.querySelector(".navbar-bottom-shortcuts");
  var favoritIt = allMusicView.filter(x => x.album_status === "true");
  resultsFAV.innerHTML = "";
  for (let i = 0; i < favoritIt.length; i++) {
    let resultFAV =
    `<div class="navbar-shortcut-box" onclick="fastLoadingPop(); clickedSingleAlbum(this)" check-atr='${favoritIt[i].artist_id} ${favoritIt[i].album}' artist-data='${favoritIt[i].artist_id}' data-album='${favoritIt[i].album}'>
    <p>
      <img loading="lazy" src="${favoritIt[i].album_cover}">
      <span>${favoritIt[i].album}</span>
    </p>
  </div>`;
    resultsFAV.insertAdjacentHTML("beforeend", resultFAV);
  }

  var productIds={};
  $('.navbar-bottom-shortcuts .navbar-shortcut-box').each(function(){
      var prodId = $(this).attr('check-atr');
      if(productIds[prodId]){
        $(this).remove();
      }else{
        productIds[prodId] = true;
      }
  });

  let playlist_DATA = 
  [localStorage.getItem('playlist_user_1'),
   localStorage.getItem('playlist_user_2'),
   localStorage.getItem('playlist_user_3'),
   localStorage.getItem('playlist_user_4'),
   localStorage.getItem('playlist_user_5'),
   localStorage.getItem('playlist_user_6'),
   localStorage.getItem('playlist_user_7'),
   localStorage.getItem('playlist_user_8'),
   localStorage.getItem('playlist_user_9'),
   localStorage.getItem('playlist_user_10'),];

  let playlist_ARRAY = playlist_DATA.filter(x => x != null);
  let playlist_COUNT = playlist_ARRAY.length;

  for (let i = 0; i < playlist_COUNT; i++) {
  tracks_COUNTER = playlist_ARRAY[i].split(',').length-4 + " Tracks";

  let result =
  `<div class="navbar-shortcut-box" onclick="fastLoadingPop();playlist_SELECT_CLICKED(this);" playlist-ID="${playlist_ARRAY[i].split(',')[3]}">
    <p>
      <img loading="lazy" src="${playlist_ARRAY[i].split(',')[2]}">
      <span>${playlist_ARRAY[i].split(',')[0]}</span>
    </p>
   </div>`;

   resultsFAV.insertAdjacentHTML("afterbegin", result);
  }

  resultsFAV.insertAdjacentHTML("afterbegin", `<div class="navbar-shortcut-box" onclick="favoriteLibraryScreen(); checkLocalStorageData()">
  <p>
    <img loading="lazy" src="https://e-cdns-images.dzcdn.net/images/misc/679936b577879457668697f0e6f2c755/264x264-none-80-0-0.png">
    <span>Liked</span>
  </p>
</div>`)
}

navbarQuickBar();

function navbarQuickScroll(){
  document.querySelector(".navbar-bottom-shortcuts").scrollTop = 0
}

function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting === true){
      entry.target.classList.add('fade-in')
    }
  });
}

let options = {
    root: null,
    rootMargin: '-75px',
    threshold: 0
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.querySelector('.music-artist-content-playlists'));
observer.observe(document.querySelector('.music-artist-content-artist'));
observer.observe(document.querySelector('.music-artist-content-fanschoice'));
observer.observe(document.querySelector('.music-artist-content-feat'));

observer.observe(document.querySelector('.center-container-scrollable.featuringArtistsBox'));
observer.observe(document.querySelector('#favoriteAlbums'));
observer.observe(document.querySelector('#popularPlaylists'));
observer.observe(document.querySelector('#userPlaylists'));

function toggleDescription(a){
  if(a.style.webkitLineClamp === "4"){
    a.style.webkitLineClamp = "2";
  }else{
    a.style.webkitLineClamp = "4";
  }
}

function animationReset(){
  document.querySelector(".music-artist-item .music-artist-item-title img").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-artist-item .music-artist-item-title img").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 375);

  document.querySelector(".music-artist-number").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-artist-number").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 375);

  document.querySelector(".music-artist-content-container").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-artist-content-container").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 525);

  document.querySelector(".music-artist-content-album").style.animation = 'none';
  setTimeout(() => {
    document.querySelector(".music-artist-content-album").style.animation = 'fade-in 1.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both';
  }, 675);
}
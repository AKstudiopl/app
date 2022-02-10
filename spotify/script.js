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

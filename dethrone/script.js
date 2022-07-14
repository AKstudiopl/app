const menuBtn = document.querySelector(".menu-toggle");
const settingsBtn = document.querySelector(".settings-toggle");
const settingsExit = document.querySelector("#settings-exit");
const navHorizontal = document.querySelector(".navbar-horizontal");
const settingsMenu = document.querySelector(".settings-popop");
const crosshairCfg = document.querySelector(".crosshair-cfg");
menuBtn.addEventListener('click', () => {
  navHorizontal.classList.toggle('active')
  navHorizontal.classList.toggle('hidden')
  menuBtn.classList.toggle('active')
})
settingsBtn.addEventListener('click', () => {
  settingsMenu.classList.toggle('hidden')
  settingsBtn.classList.toggle('active')
})
settingsExit.addEventListener('click', () => {
  settingsMenu.classList.toggle('hidden')
  settingsBtn.classList.toggle('active')
})

function homeBackup() {
        location.href = "dethrone.html";
};

function homeBackupPlayers() {
        location.href = "../dethrone.html";
};

document.querySelectorAll('.slider').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('active')
  })
})

const colorscheme = document.querySelector("#color-scheme");

colorscheme.addEventListener('click', function(){
    if (colorscheme.classList.contains('active')) {
      document.documentElement.style.setProperty('--aqua', '#242424');
      document.documentElement.style.setProperty('--blue', '#121212');
      document.documentElement.style.setProperty('--bluelight', '#1ed760');
      document.documentElement.style.setProperty('--oceanic', '#A1D91F');
      document.documentElement.style.setProperty('--menugradient', 'linear-gradient(90deg, rgba(18,18,18,1) 34%, rgba(18,18,18,0) 100%)');
      localStorage.removeItem("selectedTheme", "blue");
      localStorage.setItem("selectedTheme", "green");
    }
    else {
      document.documentElement.style.setProperty('--aqua', '#293347');
      document.documentElement.style.setProperty('--blue', '#051622');
      document.documentElement.style.setProperty('--bluelight', '#004152');
      document.documentElement.style.setProperty('--oceanic', '#D3F4FF');
      document.documentElement.style.setProperty('--menugradient', 'linear-gradient(90deg, rgba(5,22,34,1) 34%, rgba(5,22,34,0.0) 100%)');
      localStorage.removeItem("selectedTheme", "green");
      localStorage.setItem("selectedTheme", "blue");
    }
})

window.addEventListener('load', () => {
  themeCheck();
  lang_displayed_settings();
});

function themeCheck() {
  if (localStorage.getItem("selectedTheme") === "blue") {
    document.documentElement.style.setProperty('--aqua', '#293347')
    document.documentElement.style.setProperty('--blue', '#051622')
    document.documentElement.style.setProperty('--bluelight', '#004152')
    document.documentElement.style.setProperty('--oceanic', '#D3F4FF')
    document.documentElement.style.setProperty('--menugradient', 'linear-gradient(90deg, rgba(5,22,34,1) 34%, rgba(5,22,34,0.0) 100%)');
    colorscheme.classList.remove('active')
  }
  else if(localStorage.getItem("selectedTheme") === "green") {
    document.documentElement.style.setProperty('--aqua', '#242424');
    document.documentElement.style.setProperty('--blue', '#121212');
    document.documentElement.style.setProperty('--bluelight', '#1ed760');
    document.documentElement.style.setProperty('--oceanic', '#A1D91F');
    document.documentElement.style.setProperty('--menugradient', 'linear-gradient(90deg, rgba(18,18,18,1) 34%, rgba(18,18,18,0) 100%)');
    colorscheme.classList.add('active')
    document.getElementById("theme-mode").checked = true;
  }
}
const plFlag = document.querySelector(".plLanguage");
const engFlag = document.querySelector(".engLanguage");

if (window.location.hash) {
  if (window.location.hash === "#pl") {
    plFlag.classList.add("active");
    engFlag.classList.remove("active");
    localStorage.setItem("language", "pl");
  }
  if (window.location.hash === "#eng") {
    engFlag.classList.add("active");
    plFlag.classList.remove("active");
    localStorage.setItem("language", "eng");
  }
}

function engLanguage(){
  window.location.hash = "#eng"
  location.reload();
  localStorage.setItem("language", "eng");
}
function plLanguage(){
  window.location.hash = "#pl"
  location.reload();
  localStorage.setItem("language", "pl");
}

function lang_displayed_settings() {
  if (localStorage.getItem("language") === "pl") {
    if (window.location.hash === "#pl") {
      return;
    } else {
      window.location.hash = "#pl";
      return location.reload();
    }
  }
}

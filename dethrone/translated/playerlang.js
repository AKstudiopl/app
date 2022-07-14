var language = {
  pl: {
    LandingText: "Sprawdz ustawienia najlepszych graczy!",
    menuHome: "Strona Główna",
    menuViewed: "Popularne",
    menuPlayerRanking: "Ranking Graczy",
    menuNews: "Nowości",
    menuContent: "Tworcy",
    menuStreams: "Streamerzy",
    menuHelp: "Pomoc",
    menuDonation: "Dotacje",
    menuJoin: "Dołącz",
    menuIssue: "Zgłoś Problem",
    menuAbout: "O nas",
    settings: "Ustawienia",
    settingsMouse: "Mysz",
    settingsCrosshair: "Celownik",
    settingsLaunchOptions: "Komendy Startowe",
    settingsVideoOptions: "Ustawienia Graficzne",
    equipment: "Wyposażenie",
    equipmentSetup: "Sprzęt",
    equipmentMonitorSettings: "Ustawienia Monitoru",
    equipmentComments: "Komentarze",
    newsMore: "Więcej",
    contentFeatured: "Wyróżnieni Twórcy",
    streamsFeatured: "Wyróżnione Streamy",
    rankPlayer: "Pozycja",
    namePlayer: "Nazwa",
    teamPlayer: "Drużyna",
    settingsGreenMode: "Zielony Motyw",
    settingsLanguage: "Język"
  }
};
const homeMenu = document.querySelector(".menu_home");
const newsMenu = document.querySelector(".menu_news");
const helpMenu = document.querySelector(".menu_help");

const settingsTitle = document.querySelector(".settings_title");
const settingsMouse = document.querySelector(".menu_mouse");
const settingsCrosshair = document.querySelector(".menu_crosshair");
const settingsLaunch = document.querySelector(".menu_launch");
const settingsVideo = document.querySelector(".menu_video");

const equipment = document.querySelector(".menu_equipment");
const equipmentSetup = document.querySelector(".menu_setup");
const equipmentMonitor = document.querySelector(".menu_monitor");
const equipmentComments= document.querySelector(".menu_comments");

const donationMenu = document.querySelector(".menu_donation");
const joinMenu = document.querySelector(".menu_join");
const issueMenu = document.querySelector(".menu_report");
const aboutMenu = document.querySelector(".menu_about");

const titleSettings = document.querySelector(".titleSettings");
const settings1 = document.querySelector(".settings1");
const settings2 = document.querySelector(".settings2");

const playerSettingsTitle = document.querySelector(".player_settings_title");
const playerSettingsMouse = document.querySelector(".player_settings_mouse");
const playerSettingsCrosshair = document.querySelector(".player_settings_crosshair");
const playerSettingsLaunch = document.querySelector(".player_settings_launch");
const playerSettingsVideo = document.querySelector(".player_settings_video");
const playerSettingsSetup = document.querySelector(".player_settings_setup");
const playerSettingsMonitor = document.querySelector(".player_settings_monitor");
const playerSettingsComments = document.querySelector(".player_settings_comments");
const playerSettingsEquipment = document.querySelector(".player_settings_equipment");

if (window.location.hash) {
  if (window.location.hash === "#pl") {
    homeMenu.textContent = language.pl.menuHome;
    newsMenu.textContent = language.pl.menuNews;
    helpMenu.textContent = language.pl.menuHelp;

    settingsTitle.textContent = language.pl.settings;
    settingsMouse.textContent = language.pl.settingsMouse;
    settingsCrosshair.textContent = language.pl.settingsCrosshair;
    settingsLaunch.textContent = language.pl.settingsLaunchOptions;
    settingsVideo.textContent = language.pl.settingsVideoOptions;

    equipment.textContent = language.pl.equipment;
    equipmentSetup.textContent = language.pl.equipmentSetup;
    equipmentMonitor.textContent = language.pl.equipmentMonitorSettings;
    equipmentComments.textContent = language.pl.equipmentComments;

    donationMenu.textContent = language.pl.menuDonation;
    joinMenu.textContent = language.pl.menuJoin;
    issueMenu.textContent = language.pl.menuIssue;
    aboutMenu.textContent = language.pl.menuAbout;
    titleSettings.textContent = language.pl.settingsTitle;
    settings1.textContent = language.pl.settingsGreenMode;
    settings2.textContent = language.pl.settingsLanguage;

    playerSettingsTitle.textContent = language.pl.settings;
    playerSettingsMouse.textContent = language.pl.settingsMouse;

    playerSettingsCrosshair.textContent = language.pl.settingsCrosshair;
    playerSettingsLaunch.textContent = language.pl.settingsLaunchOptions;
    playerSettingsVideo.textContent = language.pl.settingsVideoOptions;
    playerSettingsSetup.textContent = language.pl.equipmentSetup;
    playerSettingsMonitor.textContent = language.pl.equipmentMonitorSettings;
    playerSettingsComments.textContent = language.pl.equipmentComments;
    playerSettingsEquipment.textContent = language.pl.equipment;
  }
}

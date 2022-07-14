var language = {
  eng: {
    LandingText: "Get a view to the best settings!",
  },
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
    newsMore: "Więcej",
    contentFeatured: "Wyróżnieni Twórcy",
    streamsFeatured: "Wyróżnione Streamy",
    rankPlayer: "Pozycja",
    namePlayer: "Nazwa",
    teamPlayer: "Drużyna",
    settingsTitle: "Ustawienia",
    settingsGreenMode: "Zielony Motyw",
    settingsLanguage: "Język"
  }
};

const landingSecondText = document.querySelector(".landingSecondText");
const homeMenu = document.querySelector(".homeMenu");
const viewedMenu = document.querySelector(".viewedMenu");
const playersMenu = document.querySelector(".playersMenu");
const newsMenu = document.querySelector(".newsMenu");
const contentMenu = document.querySelector(".contentMenu");
const streamMenu = document.querySelector(".streamMenu");
const helpMenu = document.querySelector(".helpMenu");

const donationMenu = document.querySelector(".donationMenu");
const joinMenu = document.querySelector(".joinMenu");
const issueMenu = document.querySelector(".issueMenu");
const aboutMenu = document.querySelector(".aboutMenu");

const viewedShow = document.querySelector(".viewedShow");
const playerShow = document.querySelector(".playerShow");
const newsShow = document.querySelector(".newsShow");
const newsShowMore1 = document.querySelector(".newsShowMore1");
const newsShowMore2 = document.querySelector(".newsShowMore2");
const newsShowMore3 = document.querySelector(".newsShowMore3");

const contentShow = document.querySelector(".contentShow");
const streamShow = document.querySelector(".streamShow");
const playerRank = document.querySelector(".playerRank");
const playerName = document.querySelector(".playerName");
const playerTeam = document.querySelector(".playerTeam");
const titleSettings = document.querySelector(".titleSettings");
const settings1 = document.querySelector(".settings1");
const settings2 = document.querySelector(".settings2");


if (window.location.hash) {
  if (window.location.hash === "#pl") {
    landingSecondText.textContent = language.pl.LandingText;
    homeMenu.textContent = language.pl.menuHome;
    viewedMenu.textContent = language.pl.menuViewed;
    playersMenu.textContent = language.pl.menuPlayerRanking;
    newsMenu.textContent = language.pl.menuNews;
    contentMenu.textContent = language.pl.menuContent;
    streamMenu.textContent = language.pl.menuStreams;
    helpMenu.textContent = language.pl.menuHelp;
    donationMenu.textContent = language.pl.menuDonation;
    joinMenu.textContent = language.pl.menuJoin;
    issueMenu.textContent = language.pl.menuIssue;
    aboutMenu.textContent = language.pl.menuAbout;
    viewedShow.textContent = language.pl.menuViewed;
    playerShow.textContent = language.pl.menuPlayerRanking;
    newsShow.textContent = language.pl.menuNews;
    newsShowMore1.textContent = language.pl.newsMore;
    newsShowMore2.textContent = language.pl.newsMore;
    newsShowMore3.textContent = language.pl.newsMore;
    contentShow.textContent = language.pl.contentFeatured;
    streamShow.textContent = language.pl.streamsFeatured;
    playerRank.textContent = language.pl.rankPlayer;
    playerName.textContent = language.pl.namePlayer;
    playerTeam.textContent = language.pl.teamPlayer;
    titleSettings.textContent = language.pl.settingsTitle;
    settings1.textContent = language.pl.settingsGreenMode;
    settings2.textContent = language.pl.settingsLanguage;
  }
}

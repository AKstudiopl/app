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
    newsMore: "Więcej",
    contentFeatured: "Wyróżnieni Twórcy",
    streamsFeatured: "Wyróżnione Streamy",
    rankPlayer: "Pozycja",
    namePlayer: "Nazwa",
    teamPlayer: "Drużyna",
    settingsTitle: "Ustawienia",
    settingsGreenMode: "Zielony Motyw",
    settingsLanguage: "Język",
    blogs: "Blogi",
    tutorials: "Poradniki",
    posts: "Posty",
  }
};
const homeMenu = document.querySelector(".homeMenu");
const newsMenu = document.querySelector(".newsMenu");
const helpMenu = document.querySelector(".helpMenu");

const donationMenu = document.querySelector(".donationMenu");
const joinMenu = document.querySelector(".joinMenu");
const issueMenu = document.querySelector(".issueMenu");
const aboutMenu = document.querySelector(".aboutMenu");

const titleSettings = document.querySelector(".titleSettings");
const settings1 = document.querySelector(".settings1");
const settings2 = document.querySelector(".settings2");

const textTutorials = document.querySelector(".tutorialsText");
const textPosts = document.querySelector(".postsText");
const textBlogs = document.querySelector(".blogsText");

if (window.location.hash) {
  if (window.location.hash === "#pl") {
    homeMenu.textContent = language.pl.menuHome;
    helpMenu.textContent = language.pl.menuHelp;
    donationMenu.textContent = language.pl.menuDonation;
    joinMenu.textContent = language.pl.menuJoin;
    issueMenu.textContent = language.pl.menuIssue;
    aboutMenu.textContent = language.pl.menuAbout;
    titleSettings.textContent = language.pl.settingsTitle;
    settings1.textContent = language.pl.settingsGreenMode;
    settings2.textContent = language.pl.settingsLanguage;

    textTutorials.textContent = language.pl.tutorials;
    textPosts.textContent = language.pl.posts;
    textBlogs.textContent = language.pl.blogs;
  }
}

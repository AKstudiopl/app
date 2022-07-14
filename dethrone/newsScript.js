const postsCount = document.querySelector(".posts-counter");
const tutorialsCount = document.querySelector(".tutorials-counter");
const blogsCount = document.querySelector(".blogs-counter");
const hiddenPostsPopup = document.querySelector(".hiddenPostsAmount");
const loadbtncontent = document.querySelector(".loadmorecontent");
const fastBackupBtn = document.querySelector(".fastBackBtn");

postsCount.textContent = $('#allNews > div').length;
tutorialsCount.textContent = $('#allNews > .tutorial').length;
blogsCount.textContent = $('#allNews > .blog').length;
hiddenPostsPopup.textContent = $('#allNews > .hidden').length;

const likeBTN = document.querySelectorAll('.news-like').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      updateVisitCount();
    }
  })
})

const countEl = document.getElementById('visits');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/dethrone.com/likescounts/')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
const attentionAlert = document.querySelector('.attention-box');

if (window.location.hash === "#pl") {
  attentionAlert.classList.remove('hidden');
  loadbtncontent.textContent = "Pokaż Więcej";
  fastBackupBtn.textContent = "Powrót";
}

const loadMorePostsBtn = document.getElementById('loadMoreBtn');
const allPostsCheck = document.querySelectorAll('.top-news');

function moreview(){
  allPostsCheck.forEach(singlepost => {
    singlepost.classList.remove('hidden');
    hiddenPostsPopup.textContent = $('#allNews > .hidden').length;
    if (hiddenPostsPopup.textContent === "0") {
      loadbtncontent.textContent = "That's All";
      if (window.location.hash === "#pl") {
        loadbtncontent.textContent = "To Wszystko";
      }
    }
  });
}

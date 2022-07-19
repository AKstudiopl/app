const postsCount = document.querySelector(".posts-counter");
const tutorialsCount = document.querySelector(".tutorials-counter");
const blogsCount = document.querySelector(".blogs-counter");
const hiddenPostsPopup = document.querySelector(".hiddenPostsAmount");
const loadbtncontent = document.querySelector(".loadmorecontent");
const fastBackupBtn = document.querySelector(".fastBackBtn");
const loadItem = document.querySelector(".load-item");
const readMoreBtn = document.querySelectorAll(".news-read-more-button");

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
  readMoreBtn.forEach(readMoreSingleBtn => {
    readMoreSingleBtn.textContent = "Pokaż Więcej";
  })
}

const loadMorePostsBtn = document.getElementById('loadMoreBtn');
const allPostsCheck = document.querySelectorAll('.top-news');

function moreviewOld(){
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

function moreview() {
  const amount = 5;
  const hiddenPosts = document.querySelectorAll(".top-news.hidden");
  const remaining = hiddenPosts.length;
  loadItem.classList.add("active");
  if (remaining > 0) {
    for (let i = 0; i < (remaining >= amount ? amount : remaining); i++) {
      setTimeout(() => {
        hiddenPosts[i].classList.remove("hidden");
        hiddenPostsPopup.textContent = $('#allNews > .hidden').length;
        if (hiddenPostsPopup.textContent === "0") {
          loadbtncontent.textContent = "That's All";
          if (window.location.hash === "#pl") {
            loadbtncontent.textContent = "To Wszystko";
          }
        }
      }, 300 * i);
    }
  }
  setTimeout(function(){
           loadItem.classList.remove("active");
           if (hiddenPostsPopup.textContent === "0"){
             loadItem.classList.add("active");
           }
     }, 2000);
}

function readMore(btn){
  let post = btn.parentElement;
  console.log(post)
  post.parentElement.classList.toggle("read-more");
  if (post.parentElement.classList.contains("read-more")) {
    btn.textContent = "Read Less"
    if (window.location.hash === "#pl") {
      btn.textContent = "Pokaż Mniej"
    }
  }else{
    btn.textContent = "Read More"
    if(window.location.hash === "#pl"){
        btn.textContent = "Pokaż Więcej"
    }
  }
  }

  function imageView(img){
    let fullPost = img.parentElement;
    console.log(fullPost)
    if (fullPost.parentElement.classList.contains("read-more")) {
      fullPost.parentElement.classList.toggle("fullscreen");
    }
  }

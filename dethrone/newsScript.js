const postsCount = document.querySelector(".posts-counter");
const tutorialsCount = document.querySelector(".tutorials-counter");
const blogsCount = document.querySelector(".blogs-counter");

postsCount.textContent = $('#allNews > div').length;
tutorialsCount.textContent = $('#allNews > .tutorial').length;
blogsCount.textContent = $('#allNews > .blog').length;

const likeBTN = document.querySelectorAll('.news-like').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('active');
  })
})

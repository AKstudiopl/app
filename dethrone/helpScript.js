const faqItemShowBtn = document.querySelectorAll('.faq-item-title').forEach(item => {
  item.addEventListener('click', event => {
    item.classList.toggle('active');
  })
})

function faqMore(btn){
  
  let post = btn.parentElement;
  faqAll = post.querySelector(".faq-item-all");
  post.classList.toggle("read-more");

  if (post.classList.contains("read-more")) {
      faqAll.classList.remove("disable");
    }else{
      faqAll.classList.add("disable");
    }
  }

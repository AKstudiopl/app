const moreReviewBtn = document.getElementsByClassName('review-more')[0]
const moreReviewScreen = document.getElementsByClassName('reviewfull more')[0]

moreReviewBtn.addEventListener('click', () => {
  moreReviewScreen.classList.toggle('active')
})

const fullscreenButton = document.getElementsByClassName('fullscreen-btn')[0]
const fullscreenImg = document.getElementsByClassName('item-container')[0]

fullscreenButton.addEventListener('click', () => {
  fullscreenImg.classList.toggle('fullscreen')
})

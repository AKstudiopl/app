const actionSecScreenBtn = document.getElementsByClassName('actionBtn')[0]
const arrowsSecScreen = document.getElementsByClassName('arrows')[0]
const shapeSecScreen = document.getElementsByClassName('shapeSec')[0]

function arrowColor(){
  arrowsSecScreen.classList.toggle('active');
  shapeSecScreen.classList.toggle('active');
}

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('animation');
    }
  });
});

observer.observe(document.querySelector('.social-contianer'));

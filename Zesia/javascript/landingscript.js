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

const counters = document.querySelectorAll('.count');
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

const loader = document.querySelector(".load-item");


function loadingElement(){
  loader.classList.add("active");
  setTimeout(
      function newLocation() {
          window.location.href = "index.html";
          loader.classList.remove("active");
    }, 6000);
}

const results = document.querySelector(".search-results");
for (let i = 0; i < allMusic.length; i++) {
  let result = `<li li-index="${i + 1}" onclick="clicked(this)">
                <div class="result-box">
                  <div class="result-box-cover">
                  <h1 class="result-name">${allMusic[i].name}</h1>
                  <p class="result-artist">${allMusic[i].artist}</p>
                  </div>
                </div>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  results.insertAdjacentHTML("afterbegin", result);
}


function searchName() {
  input = document.getElementById('search-item');
  filter = input.value.toUpperCase();
  ul = document.getElementsByClassName("search-results");
  li = document.querySelectorAll('.search-results li');

  for (i = 0; i < li.length; i++) {
    nameResult = li[i].getElementsByClassName("result-name")[0];
    artistResult = li[i].getElementsByClassName("result-artist")[0];
    webkitresults = document.getElementsByClassName("search-results")[0];
    nameResult = nameResult.textContent || nameResult.innerText;
    artistResult = artistResult.textContent || artistResult.innerText;
    if (nameResult.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.visibility = "visible";
      webkitresults.classList.remove("webkit-hidden");
    }
    else if (artistResult.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      li[i].style.visibility = "visible";
      webkitresults.classList.remove("webkit-hidden");
    }
    else {
      li[i].style.display = "none";
      li[i].style.visibility = "hidden";
    }


    if (input.value.length == 0)
    {
      li[i].style.visibility = "hidden";
      webkitresults.classList.add("webkit-hidden");
    }
  }
}

function filterByName() {
  if (filterStatus.classList.contains("Hip-Hop")) {
    var result = allMusic.filter((x)=>x.style === "Hip-Hop");
    console.log(result);
  }
  if (filterStatus.classList.contains("Energic")) {
    var result = allMusic.filter((x)=>x.style === "Energic");
    console.log(result);
  }
}

function filterName(x) {
  filterStatus = document.querySelector(".search-filter");
  if (x==1)
  {
      filterStatus.classList.toggle("Hip-Hop");
      filterByName();
  }
  if (x==2)
  {
      filterStatus.classList.toggle("Energic");
      filterByName();
  }
  if (x==3)
  {
      filterStatus.classList.toggle("Workout");
      filterByName();
  }
  if (x==4)
  {
      filterStatus.classList.toggle("Chill");
      filterByName();
  }
  if (x==5)
  {
      filterStatus.classList.toggle("Sad-Lofi");
      filterByName();
  }
  if (x==6)
  {
      filterStatus.classList.toggle("Rock");
      filterByName();
  }
}

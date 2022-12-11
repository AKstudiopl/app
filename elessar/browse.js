function filterListPlaylist(){
    let input = document.querySelector("#search-input").value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('search-item');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            x[i].classList.remove("searched");
        }
        else {
            x[i].style.display="flex";
            x[i].classList.add("searched");         
        }
    }
    let counter = document.querySelectorAll(".search-results .search-item.searched").length;
    document.querySelector(".search-results-counter p span").innerText = counter + " Filmów";
  }

function searchContent() {
    const resultsData = document.querySelector(".search-results");
    var favoritIt = movies;
    resultsData.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
      let resultData =
         `<div class="search-item">
         <img src="${favoritIt[i].art}">
         <a href="movies/${favoritIt[i].pageLink}"></a>
         <div class="search-item-data">
             <h3>${favoritIt[i].name}</h3>
             <p>${favoritIt[i].director}<span>${favoritIt[i].date}</span></p>
         </div>
     </div>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
    }
  }

searchContent();
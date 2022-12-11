function filterListPlaylist(){
    let input = document.querySelector("#search-input").value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('search-item');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    }
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
             <p>${favoritIt[i].director}</p>
         </div>
     </div>`;
        resultsData.insertAdjacentHTML("beforeend", resultData);
    }
  }

  searchContent();
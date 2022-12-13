function searchContent() {
    const resultsData = document.querySelector(".list-content");
    var favoritIt = movies;
    resultsData.innerHTML = "";
    for (let i = 0; i < favoritIt.length; i++) {
     let resultData = `<div class="list-item">
                            <div class="list-cover">
                                <h3>${[i + 1]}</h3>
                                <img src="${favoritIt[i].art}">
                            </div>
                            <div class="list-data">
                                <p>${favoritIt[i].name}</p>
                                <span>${favoritIt[i].director}</span>
                                <span>${favoritIt[i].date}</span>
                            </div>
                            <div class="list-action">
                                <a href="#">OBEJRZYJ POŻNIEJ</a>
                                <a href="movies/${favoritIt[i].pageLink}">ODWTÓRZ</a>
                            </div>
                        </div>`
        resultsData.insertAdjacentHTML("beforeend", resultData);
    }
  }

searchContent();
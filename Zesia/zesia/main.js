function postView(viewBtn){
    let post = viewBtn.parentElement.parentElement.parentElement
    let postImage = post.querySelector('.post-image-box img').src;
    let postDate = post.querySelector('.post-header span').innerText;
    let postTitle = post.querySelector('.post-header p').innerText;
    let postMainText = post.querySelector('.post-visible').innerText;
    let postSecText = post.querySelector('.post-hidden').innerText;

    let postPopUpContainer = document.querySelector(".popup-container")
    postPopUpContainer.innerHTML="";

    let postPopUp = 
    `
    <div class="popup">

        <div onclick="postViewExit()" class="popup-exit">
            <i class="fa-solid fa-xmark"></i>
        </div>

        <div class="popup-img">
            <img class="popup-img-bg" src="${postImage}">
            <div class="popup-img-box">
                <img src="${postImage}">
            </div>
        </div>

        <div class="popup-content">
            <div class="popup-header">
                <span>${postDate}</span>
                <p>${postTitle}</p>
            </div>
            <div class="popup-text">
                <p class="popup-top">${postMainText}</p>
                <p class="popup-bottom">${postSecText}</p>
            </div>
            <div class="post-action">
                <a onclick="postViewExit()"><span>Read Less</span></a>
                <a class="icon"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>

    </div>
    `

    postPopUpContainer.insertAdjacentHTML('afterbegin', postPopUp)
    document.querySelector(".popup-container").classList.add("visible")
}

function postViewExit(){
    document.querySelector(".popup-container").classList.remove("visible")
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.querySelector(".blog-date").innerText = today;

function indexSHRT(){
    window.location.pathname = "/zesia/index.html";
}
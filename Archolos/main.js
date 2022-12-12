const characterMarvin = document.querySelector("#ch_Marvin");
const characterRoderich = document.querySelector("#ch_Roderich");
const characterLorenzo = document.querySelector("#ch_Lorenzo");
const characterMorris = document.querySelector("#ch_Morris");
const characterVolke = document.querySelector("#ch_Volker");
const characterUlryk = document.querySelector("#ch_Ulryk");

const characterName = document.querySelector(".content_character_character_description h1");
const characterDescriptionFirst = document.querySelector(".content_character_character_description_first");
const characterDescriptionSecond = document.querySelector(".content_character_character_description_second");
const characterImg = document.querySelector(".content_character_item img");
const characterDescription = document.querySelector(".content_character_character_description");

characterMarvin.addEventListener("click", function () {
    characterMarvin.classList.add("active");
    characterRoderich.classList.remove("active");
    characterLorenzo.classList.remove("active");
    characterMorris.classList.remove("active");
    characterVolke.classList.remove("active");
    characterUlryk.classList.remove("active");

    characterImg.classList.remove("active");
    characterDescription.classList.remove("active");
    setTimeout(() => {
        characterImg.classList.add("active");
        characterDescription.classList.add("active");
      }, 250)
    
    characterName.innerText = "Marvin";
    characterDescriptionFirst.innerText = "Młody chłopak uciekający przed problematyczną przeszłością i widmem wojny, przybywa na Archolos w poszukiwaniu nowego życia. Sytuacja na wyspie okazuje się być jednak znacznie mniej kolorowa niż wszyscy do tej pory twierdzili";
    characterDescriptionSecond.innerText = "Na drodze Marvina pojawi się wiele trudności oraz wyborów, to jak się zachowa i po której stronie się opowie zależeć będzie wyłącznie do Ciebie...";
    characterImg.src = "https://kronikimyrtany.pl/assets/img/marvin.3060999a.webp";
})

characterRoderich.addEventListener("click", function () {
    characterMarvin.classList.remove("active");
    characterRoderich.classList.add("active");
    characterLorenzo.classList.remove("active");
    characterMorris.classList.remove("active");
    characterVolke.classList.remove("active");
    characterUlryk.classList.remove("active");

    characterImg.classList.remove("active");
    characterDescription.classList.remove("active");
    setTimeout(() => {
        characterImg.classList.add("active");
        characterDescription.classList.add("active");
      }, 250)
    
    characterName.innerText = "Roderich";
    characterDescriptionFirst.innerText = "Głównym zbrojnym ramieniem do egzekwowania prawa w mieście, a także poza jego murami, jest Straż Miejska. Zarządzana twardą ręką przez wieloletniego weterana - Rodericha - straż stara się utrzymać wyspę w ryzach pomimo nieustannie podwyższanych podatków, zaostrzania kar i ogromnego napływu ludności uciekającej przed wojną.";
    characterDescriptionSecond.innerText = "Mundur i miejskie koszary to wybór wielu młodych chłopców, którzy nie zamierzają ruszać na front wojny z orkami.";
    characterImg.src = "https://kronikimyrtany.pl/assets/img/roderich.f4056139.webp";
})

characterLorenzo.addEventListener("click", function () {
    characterMarvin.classList.remove("active");
    characterRoderich.classList.remove("active");
    characterLorenzo.classList.add("active");
    characterMorris.classList.remove("active");
    characterVolke.classList.remove("active");
    characterUlryk.classList.remove("active");

    characterImg.classList.remove("active");
    characterDescription.classList.remove("active");
    setTimeout(() => {
        characterImg.classList.add("active");
        characterDescription.classList.add("active");
      }, 250)
    
    characterName.innerText = "Lorenzo";
    characterDescriptionFirst.innerText = "Największą niezależną siłą na wyspie była do niedawna Gildia Kupiecka Araxos. Wiele się zmieniło gdy król w obliczu zwycięstwa orków na morzu, zdecydował się zarekwirować całą armadę należącą do tej organizacji.";
    characterDescriptionSecond.innerText = "Pod rozkazami Lorenzo - przywódcy organizacji - pozostaje jednak cały oddział ciężkozbrojnych najemników oraz grupa świetnie przeszkolonych tropicieli. Jak to mawiają członkowie Gildii - “interes zawsze musi się kręcić…”";
    characterImg.src = "https://kronikimyrtany.pl/assets/img/lorenzo.69f36119.webp";
})

characterMorris.addEventListener("click", function () {
    characterMarvin.classList.remove("active");
    characterRoderich.classList.remove("active");
    characterLorenzo.classList.remove("active");
    characterMorris.classList.add("active");
    characterVolke.classList.remove("active");
    characterUlryk.classList.remove("active");

    characterImg.classList.remove("active");
    characterDescription.classList.remove("active");
    setTimeout(() => {
        characterImg.classList.add("active");
        characterDescription.classList.add("active");
      }, 250)
    
    characterName.innerText = "Morris";
    characterDescriptionFirst.innerText = "Archolos, jako część Królestwa Myrtany, pełne jest urzędników i reprezentantów korony. Głównym z nich jest gubernator miejski - Morris - wyznaczony na to stanowisko przez samego króla Rhobara II. Wiele osób drwi, że jest jedynie marionetką Myrtańczyków, ale nie zmienia to faktu iż to on stanowi prawo w całym Archolos.";
    characterDescriptionSecond.innerText = "Mówi się nawet, że na wyspę ma dotrzeć ktoś jeszcze ważniejszy, ktoś kto upewni się, że nowe przepisy zostaną wprowadzone...";
    characterImg.src = "https://kronikimyrtany.pl/assets/img/morris.ca3862a0.webp";
})

characterVolke.addEventListener("click", function () {
    characterMarvin.classList.remove("active");
    characterRoderich.classList.remove("active");
    characterLorenzo.classList.remove("active");
    characterMorris.classList.remove("active");
    characterVolke.classList.add("active");
    characterUlryk.classList.remove("active");

    characterImg.classList.remove("active");
    characterDescription.classList.remove("active");
    setTimeout(() => {
        characterImg.classList.add("active");
        characterDescription.classList.add("active");
      }, 250)

    characterName.innerText = "Volker";
    characterDescriptionFirst.innerText = "Jedni go przeklinają, nie mogąc wypłacić się ze swoich długów, inni chwalą jego imię w kaplicy Adanosa za pomoc w sytuacji bez wyjścia. W tych niespokojnych czasach gdy na każdej ulicy czają się biedacy skłonni skoczyć do gardła za kilka sztuk złota Volker zaczął znacznie powiększać grono swoich osobistych ochroniarzy przy wyraźnym przyzwoleniu lokalnych władz...";
    characterDescriptionSecond.innerText = "W końcu wojna swoje kosztuje, a kto by chciał stracić wsparcie finansowe jednej z najbogatszych osób na archipelagu?";
    characterImg.src = "https://kronikimyrtany.pl/assets/img/volker.d2051977.webp";
})

characterUlryk.addEventListener("click", function () {
    characterMarvin.classList.remove("active");
    characterRoderich.classList.remove("active");
    characterLorenzo.classList.remove("active");
    characterMorris.classList.remove("active");
    characterVolke.classList.remove("active");
    characterUlryk.classList.add("active");

    characterImg.classList.remove("active");
    characterDescription.classList.remove("active");
    setTimeout(() => {
        characterImg.classList.add("active");
        characterDescription.classList.add("active");
      }, 250)

    characterName.innerText = "Ulryk";
    characterDescriptionFirst.innerText = "Wiele lat przed ekspansją Królestwa Myrtany, Archolos było własnością rdzennych mieszkańców wyspy - Wilczych Synów.";
    characterDescriptionSecond.innerText = "Wraz ze zbliżającymi się armiami orków, coraz więcej Myrtańczyków spogląda jednak w stronę Wilczego Leża z nadzieją na pomoc tamtejszych, osławionych wojowników w czasie ewentualnego oblężenia miasta. Czy pomimo dawnych waśni mieszkańcy wyspy są w stanie się zjednoczyć i wspólnie stawić czoło hordom orków?";
    characterImg.src = "https://kronikimyrtany.pl/assets/img/ulryk.33221393.webp";
})

function videoToggle(video){
  
  video.volume = 0.5;
  if(video.classList.contains("paused")){
    video.play();
    video.classList.remove("paused")
    document.querySelector(".video_gallery_item_controls").classList.add("active");
  }else{
    video.pause();
    video.classList.add("paused")
    document.querySelector(".video_gallery_item_controls").classList.remove("active");
  }
}

function videBtn(){
  document.querySelector(".content_gallery_item video").play();
  document.querySelector(".content_gallery_item video").classList.remove("paused")
  document.querySelector(".video_gallery_item_controls").classList.add("active");
}

function imgClick(img){
  document.querySelector(".content_images_view img").src = img.src;
  document.querySelector(".content_images_view").classList.add("active");
}

function imgHide(){
  document.querySelector(".content_images_view").classList.remove("active");
}
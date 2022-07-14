const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let playerList = [
  {
      name: "Hxntezz",
      team: "Faze",
      link: "players/hxntez_cs.html",
      img: "players/avatars/12974495_10153775845359064_3449007813807071976_n.jpg",
      ubdated: "03.07.2022",
  },
  {
      name: "Twistzz",
      team: "Faze",
      link: "players/twistzz_cs.html",
      img: "https://prosettings.net/acd-cgi/img/v1/wp-content/uploads/twistzz.png?dpr=1|fit=contain|format=webp|gravity=top|height=150|quality=99|sharpen=1|width=150",
      ubdated: "03.07.2022",
  },
];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = playerList.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.team.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <a href="${character.link}">
            <li class="character">
                <img src="${character.img}"></img>
                <div class="character-description">
                  <h2>${character.name}</h2>
                  <p>Team: ${character.team}</p>
                  <p>Last Ubdate: ${character.ubdated}</p>
                </div>
            </li>
            </a>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

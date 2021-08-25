import { filterStatus, filterOrder, filterByName, percentageCalc } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const charInfo = data.results;

const selectStatus = document.getElementById("filter_status");
const selectSpecie = document.getElementById("filter_specie");
const selectGender = document.getElementById("filter_gender");
const selectOrderAZ = document.getElementById("filter_order");
const searchInput = document.getElementById("search_char");
const searchButton = document.getElementById("btn-search");

function cardChar(data) {
  document.getElementById("photo").innerHTML = data.map((character) =>
    ` 
    
      <section class="container-card">
        <div class="card-image">
          <img src="${character.image}">
        </div>
        <dl class="cardsInfo">
            <dt> Nome: ${character.name} </dt>
            <dt> Status: ${character.status} </dt>
            <dt> Espécie: ${character.species} </dt>
            <dt> Gênero: ${character.gender} </dt>
        </dl>
      </section>
    
  `
  )
    .join("");
}
cardChar(data.results);

function calcResult(charInfo, selectOption) {
  let result = percentageCalc(charInfo, selectOption)
  document.getElementById("calculation").innerHTML = "Existem " + selectOption.length + " personagens deste filtro e representam " + result + "% do total de personagens"
}

selectStatus.addEventListener("change", (event) => {
  const selectOption = event.target.value;
  const infoStatus = filterStatus(charInfo, selectOption, "status");
  cardChar(infoStatus);
  calcResult(charInfo, infoStatus);
});

selectSpecie.addEventListener("change", (event) => {
  const selectOptionSpecie = event.target.value;
  const infoSpecie = filterStatus(charInfo, selectOptionSpecie, "species");
  cardChar(infoSpecie);
  calcResult(charInfo, infoSpecie);
});

selectGender.addEventListener("change", (event) => {
  const selectOptionGender = event.target.value;
  const infoGender = filterStatus(charInfo, selectOptionGender, "gender");
  cardChar(infoGender);
  calcResult(charInfo, infoGender);
});

selectOrderAZ.addEventListener("change", (event) => {
  const selectOptionOrder = event.target.value;
  const infoOrder = filterOrder(charInfo, selectOptionOrder, "a-z", "z-a");
  cardChar(infoOrder);
});

searchButton.addEventListener("click", function () {
  const name = searchInput.value;
  const filteredChar = filterByName(charInfo, name);
  cardChar(filteredChar);
  calcResult(charInfo, filteredChar);
});





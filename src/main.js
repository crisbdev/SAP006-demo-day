import { filterStatus, filterOrder, filterByName } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const personsInfo = data.results;

const selectStatus = document.getElementById("filtro_status");
const selectSpecie = document.getElementById("filtro_especie");
const selectGender = document.getElementById("filtro_genero");
const selectOrderAZ = document.getElementById("filtro_ordenar");
const searchInput = document.getElementById("search_personagens");
const searchButton = document.getElementById("btn-pesquisar");




function cardPersonagem(data) {
  document.getElementById("foto").innerHTML = data.map((personagem) =>
    ` <li class = "container-card">
      <div class = "imagem">
        <img src = "${personagem.image}">
      </div>
     <p class = "info">
          Nome: ${personagem.name} <br>
          Status: ${personagem.status} <br>
          Espécie: ${personagem.species} <br>
          Gênero: ${personagem.gender} 
          
     </p>
    </li>
  `
  )
    .join("");
}
cardPersonagem(data.results);



// filter: Status


selectStatus.addEventListener("change", (event) => {
  const selectOption = event.target.value
  const chamaPersona = filterStatus(personsInfo, selectOption, "status")
  cardPersonagem(chamaPersona)

})

// filter: Specie

selectSpecie.addEventListener("change", (event) => {
  const selectOptionSpecie = event.target.value
  const infoSpecie = filterStatus(personsInfo, selectOptionSpecie, "species")
  cardPersonagem(infoSpecie)

})

// filter: Gender 

selectGender.addEventListener("change", (event) => {
  const selectOptionGender = event.target.value
  const infoGender = filterStatus(personsInfo, selectOptionGender, "gender")
  cardPersonagem(infoGender)

  //console.log(infoGender);
})


// filter: Order

selectOrderAZ.addEventListener("change", (event) => {
  const selectOptionOrder = event.target.value
  const infoOrder = filterOrder(personsInfo, selectOptionOrder, "a-z", "z-a")
  cardPersonagem(infoOrder)

})

// search

searchButton.addEventListener("click", function (){
  const name = searchInput.value;
  const personagensfiltrados = filterByName(personsInfo, name); 
  cardPersonagem(personagensfiltrados)
})

    



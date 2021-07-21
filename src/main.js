import { filterStatus } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';


const personsInfo = data.results;
const selectStatus = document.getElementById("filtro_status");
const selectSpecie = document.getElementById("filtro_especie");
const selectGender = document.getElementById("filtro_genero");
const selectOrder = document.getElementById("filtro_ordenar");



function cardPersonagem(data) {
  document.getElementById("foto").innerHTML = data.map((personagem) =>
    ` <li class = "container-card">
      <div class = "imagem">
        <img src = "${personagem.image}">
      </div>
     <p class = "info">
          Nome: ${personagem.name} <br>
          Status: ${personagem.status} <br>
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


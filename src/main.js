import { filtrarPerson } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

const personsInfo = data.results;


function cardPersonagem(data) {
  document.getElementById("foto").innerHTML = data
    .map(
      (personagem) =>
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

const selectStatus = document.getElementById("filtro_status")
selectStatus.addEventListener("change", (event) => {
const selectOption = event.target.value
console.log(selectOption);

const chamaPersona = filtrarPerson(personsInfo, selectOption)
cardPersonagem(chamaPersona)
console.log(chamaPersona);
})



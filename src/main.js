import {} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

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

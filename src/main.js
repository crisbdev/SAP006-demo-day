
import {  } from './data.js';
 import data from './data/rickandmorty/rickandmorty.js';

 function cardPersonagem(data){
  document.getElementById("foto").innerHTML = data.map((personagem) =>
  `<div> 
      <div classe = imagem>
        <img src = "${personagem.image}">
      </div>
      <div class = info>
        <ul>
        <li>Nome: ${personagem.name}</li>
        <li>Status: ${personagem.status}</li>
        <li>Gênero: ${personagem.gender}</li>
       
      </ul>
    </div>

  </div>
  `  )
}
cardPersonagem(data.results)

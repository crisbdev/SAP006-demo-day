import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(data.results[0]);

const cards = document.getElementById("cards")
console.log(cards);

let personagemUm = data.results[0];

function createcard (personagem) {

  const div = `
    <div>
      <img src="${personagem.image}">
    </div>
  `
  return div;
}

let result = createcard(personagemUm);

console.log(result);

cards.innerHTML = result
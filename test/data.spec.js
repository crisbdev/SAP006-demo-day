import { filterStatus, filterOrder, filterByName, calcAgregado } from '../src/data.js';

const personsInfoTest = [
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
  },
  {
    "id": 38,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
  },
  {
    "id": 7,
    "name": "Abradolf Lincler",
    "status": "unknown",
    "species": "Human",
    "type": "Genetic experiment",
    "gender": "Male",
  },
  {
    "id": 26,
    "name": "Arthricia",
    "status": "Alive",
    "species": "Alien",
    "type": "Cat-Person",
    "gender": "Female",
  },
  {
    "id": 13,
    "name": "Alien Googah",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "unknown",
  },
  {
    "id": 24,
    "name": "Armagheadon",
    "status": "Alive",
    "species": "Alien",
    "type": "Cromulon",
    "gender": "Male",
  },
  {
    "id": 449,
    "name": "Roy's Mum",
    "status": "Alive",
    "species": "Human",
    "type": "Game",
    "gender": "Female",
  },
  {
    "id": 204,
    "name": "Lisa",
    "status": "Dead",
    "species": "Alien",
    "type": "",
    "gender": "Female",
  },
  {
    "id": 141,
    "name": "Ghost in a Jar",
    "status": "Dead",
    "species": "Alien",
    "type": "Parasite, Ghost",
    "gender": "Genderless",
  },
  {
    "id": 355,
    "name": "Todd Crystal",
    "status": "Alive",
    "species": "Alien",
    "type": "Unknown-nippled alien",
    "gender": "Male",
  },
]

const personsName = [
  {"name": "Morty Smith"},
  {"name": "Beth Smith"},
  {"name": "Abradolf Lincler"},
  {"name": "Arthricia"},
  {"name": "Alien Googah"},
  {"name": "Armagheadon"},
  {"name": "Roy's Mum"},
  {"name": "Lisa"},
  {"name": "Ghost in a Jar"},
  {"name": "Todd Crystal"},
]

// Teste para filtro Status

describe('filterStatus', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filterStatus).toBe('function');
});

it('Deverá filtrar pelo status Alive', () => {
  expect(filterStatus(personsInfoTest, "Alive")).toEqual([])
  
  });

it('Deverá filtrar pelo status Dead', () => {
  expect(filterStatus(personsInfoTest, "Dead")).toEqual([])
  
  });

it('Deverá filtrar pelo status unknown', () => {
  expect(filterStatus(personsInfoTest, "unknown")).toEqual([])
 
  });
});

// Teste para filtro Espécie

describe('filtroEspecie', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filterStatus).toBe('function');
});

it('Deverá filtrar pela espécie Humana', () => {
  expect(filterStatus(personsInfoTest, "Human")).toEqual([])
  });

it('Deverá filtrar pela espécie Alienígena', () => {
  expect(filterStatus(personsInfoTest, "Alien")).toEqual([])
  });
});

// Teste para filtro Gênero

describe('filtroGenero', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filterStatus).toBe('function');
});

it('Deverá filtrar pelo gênero Masculino', () => {
  expect(filterStatus(personsInfoTest, "Male")).toEqual([])
  });

it('Deverá filtrar pelo gênero Feminino', () => {
  expect(filterStatus(personsInfoTest, "Female")).toEqual([])
  });
});

// Teste para o filtro Ordenar

describe('ordemAlfabetica', () => {
  it('Deverá ser uma função', () => {
  expect(typeof filterOrder).toBe('function');
});

  it('Deverá retornar em ordem A-Z', () => {
    expect(filterOrder(personsName, "a-z")).toStrictEqual(personsName);
  });
  it('Deverá retornar em ordem Z-A', () => {
    expect(filterOrder(personsName, "z-a")).toStrictEqual(personsName.reverse());
  });
});

// Teste para o "Search"

describe('pesquisarNome', () => {
  it('Deverá ser uma função', () => {
    expect(typeof filterByName).toBe('function');
  });
  it('Deveverá buscar por um nome', () => {
    const expected = filterByName(personsName, 'banana')
    expect (expected).toEqual([])
  });
  it('Deveverá buscar por um nome', () => {
    const expected = filterByName(personsName, 'Morty')
    expect (expected).toEqual([{"name": "Morty Smith"}])
  });
});


// Teste para o cálculo agregado

describe('calculoPorcentagem', () => {
  it('Deverá ser uma função', () => {
  expect(typeof calcAgregado).toBe('function');
});

it('Deverá retornar 75,46% de personagens masculinos', () => {
  const expected = calcAgregado(personsInfoTest.length, 2)
  expect (expected).toEqual(75)
  });
});


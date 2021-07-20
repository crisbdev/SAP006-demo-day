export const filtrarPerson = (personsInfo, selectOption) => {
  const arrayFiltrado = personsInfo.filter(function (personagem) {
    //console.log(personagem.status);
    //console.log(personagem.status === selectOption);
    if (personagem.status === selectOption) {
      return personagem
    }
  })
  return arrayFiltrado
    //console.log(arrayFiltrado);
};

export const anotherExample = () => {
  
};
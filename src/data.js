export const filterStatus = (personsInfo, selectOption, type) => {
    const arrayFiltrado = personsInfo.filter(function (personagem) {
        //console.log(personagem.status);
        //console.log(personagem.status === selectOption);
        if (personagem[type] === selectOption) {
            return personagem
        }
    })
    return arrayFiltrado
    //console.log(arrayFiltrado);
};

/*export const filterSpecie = (personsInfo, selectOptionSpecie) => {
    const arrayFiltradoSpecie = personsInfo.filter(function (personagem) {
        //console.log(personagem.species);
        //console.log(personagem.species === selectOptionSpecie);
        if (personagem.species === selectOptionSpecie) {
            return personagem
        }
    })
    return arrayFiltradoSpecie
 
};    

//Definir uma function para chamar dentro da function da linha 16?
export const filterGender = (personsInfo, selectOptionGender) => {
    const arrayFiltradoGender = personsInfo.filter(function (personagem) {
        //console.log(personagem.gender);
        //console.log(personagem.gender === selectOptionGender);
        if (personagem.gender === selectOptionGender) {
            return personagem
        }
    })
    return arrayFiltradoGender

};*/

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

export const filterOrder = (personsInfo, selectOption) => {
    if (selectOption === "a-z") {
        return personsInfo.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (selectOption === "z-a") {
        return personsInfo.sort((a, b) => a.name > b.name ? -1 : 1);
    }
   
}

export const filterByName = (personsInfo, selectOption) => {
    const arrayFiltradoByName= personsInfo.filter(function (personagem) {
        if (personagem.name.includes(selectOption)) {
            return personagem
        }
    })
    return arrayFiltradoByName
        
} 

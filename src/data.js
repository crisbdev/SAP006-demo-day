
// Função para Filtrar "Status", "Espécie" e "Gênero"
export const filterStatus = (personsInfo, selectOption, type) => {
    const arrayFiltrado = personsInfo.filter(function (personagem) {
        if (personagem[type] === selectOption) {
            return personagem
        }
    })
    return arrayFiltrado
};

// Função para Ordenar de "A - Z" e de "Z - A"
export const filterOrder = (personsInfo, selectOption) => {
    if (selectOption === "a-z") {
        return personsInfo.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (selectOption === "z-a") {
        return personsInfo.sort((a, b) => a.name > b.name ? -1 : 1);
    }
}

// Função para filtrar pelo Nome
export const filterByName = (personsInfo, selectOption) => {
    const arrayFiltradoByName = personsInfo.filter(function (personagem) {
        if (personagem.name.toLowerCase().includes(selectOption.toLowerCase())) {
            return personagem
        }
    })
    return arrayFiltradoByName
}

// Função para exibir porcentagens dos personagens
export const calcAgregado = (personsInfo, selectOption) =>
    parseFloat((selectOption.length * 100) / personsInfo.length).toFixed(2);

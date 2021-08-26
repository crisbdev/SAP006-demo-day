export const filterStatus = (charInfo, selectOption, type) => {
    const arrayFiltrado = charInfo.filter(function (character) {
        if (character[type] === selectOption) {
            return character
        }
    })
    return arrayFiltrado
};

export const filterOrder = (charInfo, selectOption) => {
    if (selectOption === "a-z") {
        return charInfo.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (selectOption === "z-a") {
        return charInfo.sort((a, b) => a.name > b.name ? -1 : 1);
    }
}

export const filterByName = (charInfo, selectOption) => {
    const arrayFilteredByName = charInfo.filter(function (character) {
        if (character.name.toLowerCase().includes(selectOption.toLowerCase())) {
            return character
        }
    })
    return arrayFilteredByName
}

export const percentageCalc = (charInfo, selectOption) =>
    parseFloat((selectOption.length * 100) / charInfo.length).toFixed(2);

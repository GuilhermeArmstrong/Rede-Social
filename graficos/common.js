const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {

    color: getCSS ('--cor-primaria'),
    family: getCSS ('--font'),
    size:18
}
export {getCSS,tickConfig}
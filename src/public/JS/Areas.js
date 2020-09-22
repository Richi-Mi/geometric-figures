const aside = document.getElementById('aside')
const figura = document.getElementById('FiguraModificar')
const btn_calculate = document.getElementById('calculate')
const formula = document.getElementById('formula')
const respuesta = document.getElementById('respuesta')

class Formula{
    constructor(figura){
        this.figura = figura
    }
    setForm(objet){
        const inputBase = `<input type="text" name="text" id="txt-Base" placeholder="Base">`
        const inputAltura = `<input type="text" name="text" id="txt-Altura" placeholder="Altura">`
        const condicion = objet.target.id
        if (condicion == 'square' || condicion == 'rectangle'){
            formula.innerHTML = `${inputBase} x ${inputAltura}`
        }
        else if (condicion == 'triangle'){
            formula.innerHTML = `${inputBase} x ${inputAltura} / 2`
        }
        else if (condicion == 'trop'){
            formula.innerHTML = `<input type="text" name="text" id="txt-Base" placeholder="Diagonal Mayor"> x <input type="text" name="text" id="txt-Altura" placeholder="Diagonal Menor"> / 2`
        }
        else if (condicion == 'circle'){
            formula.innerHTML = `<input type="text" name="text" id="txt-Base" placeholder="PI" disabled> x <input type="text" name="text" id="txt-Altura" placeholder="Radio"> <sup> 2 </sup>`
        }
        else{
            formula.textContent = ' Presione una figura '
        }
    }
    getBase(){
        const Base = document.getElementById('txt-Base').value
        if(Base == '') return 0
        else return Base
    }
    getAltura(){
        const Altura = document.getElementById('txt-Altura').value
        if(Altura == '') return 0
        else return Altura
    }
    getFigura(objet){
        const fig = objet.target.id
        return fig
    }
    calculate(dataOne, dataTwo, figura){
        let resultado
        if(figura == 'square' || figura == 'rectangle') {
            resultado = (dataOne * dataTwo)
        }
        else if(figura == 'triangle' || figura == 'trop'){
            resultado = (dataOne * dataTwo) / 2
        }
        else if (figura == 'circle') {
            resultado = Math.PI * Math.pow(dataTwo, 2)
        }
        else {
            resultado = '0'
        }
        respuesta.textContent = `${resultado}`
    }
}
const classes = ['square', 'triangle', 'trop', 'rectangle', 'circle']

aside.addEventListener('click', (event) => {
    const algoritmo = new Formula()
    const newFigura = event.target.id
    deleteClasses(figura)
    figura.classList.add(newFigura)
    if(event.target.id == 'aside' || event.target.id == 'calculate'){
        figura.classList.remove('aside', 'calculate')
    }
    algoritmo.setForm(event)
    btn_calculate.addEventListener('click', (e) => {
        e.preventDefault()
        const base = algoritmo.getBase()
        const altura = algoritmo.getAltura()
        const figura = algoritmo.getFigura(event)
        algoritmo.calculate(base, altura, figura)
    })
})
const deleteClasses = (objet) => {
    for(clas of classes){
        objet.classList.remove(clas)
    }
}
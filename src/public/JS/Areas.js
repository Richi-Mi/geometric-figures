const aside = document.getElementById('aside')
const figura = document.getElementById('FiguraModificar')
const btn_calculate = document.getElementById('calculate')
const formula = document.getElementById('formula')

const classes = ['square', 'triangle', 'trop', 'rectangle', 'circle']

aside.addEventListener('click', (event) => {
    const newFigura = event.target.id;
    deleteClasses(figura)
    figura.classList.add(newFigura)
    if(event.target.id == 'aside' || event.target.id == 'calculate'){
        figura.classList.remove('aside', 'calculate')
    }
})
btn_calculate.addEventListener('click', (e) => {
    console.log(e)
})
const deleteClasses = (objet) => {
    for(clas of classes){
        objet.classList.remove(clas)
    }
}
const aside = document.getElementById('buttons')
const figura = document.querySelectorAll('.fig')
const figuer = []

aside.addEventListener('click', (event) => {
    figura.forEach((fig) => {
        figuer.push(fig)
    })
    removerColor(figuer)
    if(event.target.id == 'red'){
        newColor(figuer, 'red')
    }
    else if(event.target.id == 'green'){
        newColor(figuer, 'green')
    }
    else if(event.target.id == 'blue'){
        newColor(figuer, 'blue')
    }
    else if(event.target.id == 'gris'){
        newColor(figuer, 'gris')
    }
    else{
        console.dir(aside)
    }
})
const removerColor = (array) => {
    array.forEach((Element) => {
        Element.classList.remove('red', 'green', 'blue', 'green')
    })
}
const newColor = (array, color) => {
    array.forEach((Element) => {
        Element.classList.add(color)
    })
}
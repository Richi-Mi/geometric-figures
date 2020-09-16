const button  = document.getElementById('btn-abrir')
const section = document.getElementById('section')

button.addEventListener('click', () => {
    if(section.classList.contains('active')){
        section.classList.remove('active')
        button.style.backgroundColor = '#252525'
    }
    else{
        section.classList.add('active')
        button.style.backgroundColor = '#ffffffb3'
    }
})
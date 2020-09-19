const button  = document.getElementById('btn-abrir')
const section = document.getElementById('section')
const contact = document.getElementById('contact')

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
contact.addEventListener('click', () => {
    window.alert('Lo creo Jose Ricardo 24/09/2020')
})
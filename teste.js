const bar = document.querySelector('.bar')
const allLi = document.querySelectorAll('li')

allLi.forEach( (li, teste) => {

    li.addEventListener('click', e => {
        bar.querySelector(".listaativa").classList.remove("listaativa")
        li.classList.add("listaativa")

        const indicador = document.querySelector('.indicador')
        indicador.style.transform  = `translateX(calc(${teste * 90}px))`
    })
})
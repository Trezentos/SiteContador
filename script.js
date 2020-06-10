let bntMais = document.querySelector('#botaoMais')
let btnMenos = document.querySelector('#botaoMenos')
let contadorDisplay = document.querySelector('#contador')

let contador = 1;
contadorDisplay.innerHTML=0



bntMais.addEventListener('click', mais)

btnMenos.addEventListener('click', menos)


function mais(){

    contadorDisplay.innerHTML++
    
}
function menos(){

    contadorDisplay.innerHTML--
}
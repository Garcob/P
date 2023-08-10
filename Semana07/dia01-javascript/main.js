//console.log ('Hola JS')

const inputPeso = document.getElementById('Peso');
const inputAltura = document.getElementById('Altura');
const BotonCalcular = document.getElementById('Calcular');
const divResultado = document.getElementById('resultado');


console.log(inputPeso);

BotonCalcular.addEventListener('click', function (event){
    //console.log(event)
    //console.log('click')
    const peso = inputPeso.value
    const altura = inputAltura.value

    console.log(peso,altura)

    const indiceDeMasaCorporal = (peso / (altura / 100 ** 2))
    console.log(indiceDeMasaCorporal)

    let resultado = ''

    if (indiceDeMasaCorporal < 18.5){
        resultado = 'Baja'
    } else if(indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <= 24.9){
        resultado = 'Normal'
    } else if(indiceDeMasaCorporal >= 25 && indiceDeMasaCorporal <= 29.9){
        resultado = 'SobrePeso'
    } else if(indiceDeMasaCorporal > 30 ){
        resultado = 'Obeso'
    } else {
        resultado = 'Datos Incorrectos'
    }

    console.log(resultado)

    divResultado.innerText = indiceDeMasaCorporal
})
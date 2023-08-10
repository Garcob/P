const inputColor = document.querySelector('#color')  // tambien puedes usar "getElemenById" // queryselector puede trabajar con class,id,etiquetas...
console.log(inputColor);
// Cuando el querySelector trabaja con id=> se pone antes el # adelante
// Cuando el querySelector trabaja con class=> se pone un . adelante

inputColor.addEventListener('input', function(event){
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value
})
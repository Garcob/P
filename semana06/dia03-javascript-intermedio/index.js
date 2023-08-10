console.log('hola js');

//Arrays

const numero1 = 1
const numero2 = 2
const numero3 = 3

const listNumeros = [1,2,3, 'Julio', 'Garcia', true]

console.log(listNumeros);

console.log(listNumeros[0]);
console.log(listNumeros[3]);

listNumeros.push('javascrpt')

console.log(listNumeros);

listNumeros.pop();

console.log(listNumeros);

console.log('Bienvenido'.length)
console.log(listNumeros.length)

// objetos

// {Key : Value}

const miObjeto = {
    nombre: 'Julio',
    apellido: 'Garcia'
}

console.log(miObjeto.nombre);

console.log(miObjeto['apellido']);

//delete miObjeto.apellido

console.log(miObjeto);

const nombreValue = miObjeto.nombre

console.log(nombreValue)

const {nombre,apellido} = miObjeto;

console.log(nombre,apellido);
const {nombre: nombrevalor, apellido: apellidovalor} = miObjeto

console.log(nombrevalor, apellidovalor)

// Spread operator ...

const product = {
    nombre: 'Laptop',
    precio: 6800,
}

const cliente = {
    nombre: 'Julio',
    isVip: true
}

const nuevoObjeto = { ...product, ...cliente}

console.log(nuevoObjeto)


const nuevoObjetoSinCol = { 
    producto: {...product},
    cliente: { ...cliente},
}

console.log(nuevoObjetoSinCol);

console.log(Object.keys(product));

console.log('Bienvenido'.length)



// REto


const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

const ovejasFiltradas = [
    { name: 'Navidad', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },

]

console.log(ovejasFiltradas)


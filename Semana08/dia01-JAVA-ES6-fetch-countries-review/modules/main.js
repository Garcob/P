//import { regions } from "./constants.js"

//import constants from './constants.js'

const url = 'https://restcountries.com/v3.1/all?fields=name,flags'
//console.log(constants)

function fetchContries(){
    fetch(url)  // promesa
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

fetchContries()

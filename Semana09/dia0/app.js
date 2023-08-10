

//const response = fetch('https://fakestoreapi.com/products/categories')
//console.log(response);

// async permite controlar procesos asincronos
// aways permite controlar procesos asincronos

async function rederCategories(){
    
    const response = await fetch('https://fakestoreapi.com/products/categories');
    //console.log(response);
    const categories = await response.json()
    console.log(categories);

    const categoriesSection = document.querySelector('.categories')
    let categoriaBotones = ''

    categories.forEach(categoria => {
        categoriaBotones = categoriaBotones + `<button>${categoria}</button>`
    })

    categoriesSection.innerHTML = categoriaBotones;

    const botones = document.querySelectorAll('button')

    botones.forEach(button => {
        button.addEventListener('click', event => {
            let dat = event.target.textContent
            console.log(dat)
            ProductosConCategoria(dat)


        })
    })
}

async function ProductosConCategoria(dat){
    const response = await fetch(`https://fakestoreapi.com/products/category/${dat}`);
    //let link = 'https://fakestoreapi.com/products/category/jewelery' + dat
    //const respon = await fetch(link);

    const product = await response.json();

    console.log(product);

    const ProductosSection = document.querySelector('.products');
    let productoBotones = ''

    product.forEach(product => {

        productoBotones=productoBotones + `
        
        <article class="product">
            <img class="p__image" src= "${product.image}" alt=""></img>
            <div class ="p__description">
                <h2 class="p__title"> ${product.title} </h2> 
                <p class="p__price"> S/ ${product.price} </p> 

            </div>

        </article>`
  
    })

    ProductosSection.innerHTML = productoBotones;




}

rederCategories()
const Boton_1 = document.querySelector('#boton1')
const Boton_2= document.querySelector('#boton2')
const Boton_3 = document.querySelector('#boton3')
const Boton_F = document.querySelector('#botonF')

const st1 = document.querySelector('#s1')
const st2 = document.querySelector('#s2')
const st3 = document.querySelector('#s3')
const st4 = document.querySelector('#s4')


const ss1 = document.querySelector('#ss1')
const ss2 = document.querySelector('#ss2')
const ss3 = document.querySelector('#ss3')
 let tasks = [
   {
     title: 'Rpt1',
     done: false
   },{
     title: 'Rpt2',
     done: false    
   },{
     title: 'Rpt3',
     done: false    
   }
 ]


Boton_1.addEventListener('click', function(event){
    console.log('Boton_1')


    st1.style.display = 'none';
    st2.style.display = 'block';
    st3.style.display = 'none';

    ss1.remove()
})

Boton_2.addEventListener('click', function(event){
    console.log('Boton_2')
    st1.style.display = 'none';
    st2.style.display = 'none';
    st3.style.display = 'block';
    ss2.remove()
})

Boton_3.addEventListener('click', function(event){
    console.log('Boton_3')
    ss3.remove()

    st4.style.display = 'block';
})

Boton_F.addEventListener('click', function(event){
    console.log('Boton_F')
    location.reload()
})



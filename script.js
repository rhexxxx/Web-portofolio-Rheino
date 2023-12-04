const toogle = document.getElementById('boton');
const nav = document.querySelector('#menu');

toogle.addEventListener('click',function(){
    nav.classList.toggle('slide');
})
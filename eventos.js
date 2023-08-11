let div = document.getElementById('div');
let parrafo = document.getElementById('parrafo');

div.addEventListener('click', function mensaje(){
    parrafo.innerHTML = alert("Hola! Soy el div");
});
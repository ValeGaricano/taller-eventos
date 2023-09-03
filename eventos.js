let div = document.getElementById('div');
let parrafo = document.getElementById('parrafo');

function mensajeDiv(e){
    parrafo.innerHTML = "Hola! Soy el div";
}

div.addEventListener('click', mensajeDiv);

/*div.addEventListener('click', function(){
    parrafo.innerHTML = alert("Hola! Soy el div");
});*/

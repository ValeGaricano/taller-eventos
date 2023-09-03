let div = document.getElementById('div');

function mensajeDiv(e){
    alert("Hola! Soy el div");
}

div.addEventListener('click', mensajeDiv);

/*div.addEventListener('click', function(){
    parrafo.innerHTML = alert("Hola! Soy el div");
});*/

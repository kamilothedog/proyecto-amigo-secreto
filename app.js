// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtén el valor ingresado en el campo de texto
    const nombreAmigo = document.getElementById('amigo').value.trim(); // .trim() elimina espacios en blanco al inicio y al final
    // Validación: el nombre no debe estar vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Termina la función si la validación falla
    }
    // Agrega el nombre a la lista
    amigos.push(nombreAmigo);
    // Limpia el campo de texto
    document.getElementById('amigo').value = "";
    agregarArregloEnLista(amigos);
}

function agregarArregloEnLista(arreglo){
    const lista = document.getElementById('listaAmigos'); // Obtiene el elemento <ul> de la lista
    lista.innerHTML = ""; // Limpia la lista
    for(let i=0; i<arreglo.length; i++){
    const li = document.createElement('li'); // Crea un elemento <li>
    li.textContent = arreglo[i]; // Agrega el texto al <li>
    lista.appendChild(li); // Agrega el <li> a la lista
   }
}

function sortearAmigo(){
    const amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)];
    const li = document.createElement('li'); // Crea un elemento <li>
    document.getElementById('resultado').innerHTML = ""; // Limpia la lista
    document.getElementById('listaAmigos').innerHTML = ""; // Limpia la lista
    if(amigos.length < 2){
        alert("No hay suficientes amigos para sortear");
        return;
    }
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`; // Agrega el texto al <li>
    document.getElementById('resultado').appendChild(li); // Agrega el <li> a la lista
}


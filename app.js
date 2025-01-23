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
    console.log(amigos);
}

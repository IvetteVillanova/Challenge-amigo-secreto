
// Array para almacenar los nombres
let amigos = [];
console.log(amigos)

// Función para agregar un nuevo amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre.length === 0) {
        alert('Agrega un nombre en la casilla')

        return;
    }
    else {
        amigos.push(nombre); // Agrega el nombre al array
        input.value = ""; // Limpia el input
        mostrarListaAmigos(); // Actualiza la lista en pantalla

    }
    
}

// Función para mostrar la lista de amigos
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista antes de mostrarla

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
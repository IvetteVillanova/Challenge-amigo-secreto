
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

// Función para sortear 
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia resultado anterior

    if (amigos.length === 0) {
        // Si no hay amigos, muestra un mensaje
        const li = document.createElement('li');
        li.textContent = "No hay amigos en la lista para sortear.";
        resultado.appendChild(li);
        return;
    }

    // Selecciona un índice aleatorio del array amigos
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indice];

    // Muestra el nombre sorteado en el resultado
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}
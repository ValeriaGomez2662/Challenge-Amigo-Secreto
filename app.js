// Amigo Secreto

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNombre = amigoInput.value.trim(); // Obtener el valor y eliminar espacios

    if (amigoNombre === '') {
        alert('Por favor, inserte un nombre válido.');
        return;
    }

    amigos.push(amigoNombre); // Agregar el nombre al array
    actualizarLista(); // Actualizar la lista en pantalla
    limpiarBox(); // Limpiar el input
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista antes de actualizar

    amigos.forEach((nombre, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${nombre}`;
        lista.appendChild(li);
    });
}

// Función para limpiar el campo de entrada
function limpiarBox() {
    document.getElementById('amigo').value = '';
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎊</li>`;
}
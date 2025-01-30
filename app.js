
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    } else {
        alert('Por favor, ingrese un nombre válido que no esté repetido.');
    }
}
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.dataset.index = index;
        const button = document.createElement('button');
       
        
        lista.appendChild(li);
    });
}


function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }
    const resultados = document.getElementById('resultado');
    resultados.innerHTML = '';
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.createElement('li');
    resultado.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    resultados.appendChild(resultado);
}

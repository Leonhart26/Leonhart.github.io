let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Rata.png') {
        miImage.setAttribute('src', 'images/Quiltro.png');
    } else if (miSrc === 'images/Quiltro.png') {
        miImage.setAttribute('src', 'images/Planta.png');
    } else if (miSrc === 'images/Planta.png') {
        miImage.setAttribute('src', 'images/Perla.png');
    } else {
        miImage.setAttribute('src', 'images/Rata.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Catharsis es genial, ' + miNombre;
    }
}

if(!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Catharsis es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
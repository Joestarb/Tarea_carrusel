// ---------------------carouse pretty-----------------------
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarrusel = document.querySelectorAll(".carousel")
    M.Carousel.init(elementosCarrusel, { 
        duration: 150
    })

})
// ---------------------carrusel prettyn't----------------------
const carrusel = document.querySelector('.carrusel');
const botonAnterior = document.getElementById('botonAnterior');
const botonSiguiente = document.getElementById('botonSiguiente');

let indiceImagenActual = 0;
const imagenes = carrusel.querySelectorAll('img');
const totalImagenes = imagenes.length;

function mostrarImagen(indice) {
    imagenes.forEach((imagen, indice) => {
        if (indice === indiceImagenActual) {
            imagen.style.display = 'block';
        } else {
            imagen.style.display = 'none';
        }
    });
}

function mostrarImagenSiguiente() {
    indiceImagenActual = (indiceImagenActual + 1) % totalImagenes;
    mostrarImagen(indiceImagenActual);
}

function mostrarImagenAnterior() {
    indiceImagenActual = (indiceImagenActual - 1 + totalImagenes) % totalImagenes;
    mostrarImagen(indiceImagenActual);
}

botonAnterior.addEventListener('click', mostrarImagenAnterior);
botonSiguiente.addEventListener('click', mostrarImagenSiguiente);

mostrarImagen(indiceImagenActual);


// -----------------------------cajas----------------------------------------

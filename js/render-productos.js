import { productos } from './productos.js';

function renderProductos() {
    const produ = document.querySelector('.productos');
    if (!produ) return;
    produ.innerHTML = productos.map(producto => `
        <article class="card">
            <div class="card-img">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-body">
                <h3>${producto.nombre}</h3>
                <div class="card-footer">
                    <p class="precio">$${producto.precio.toLocaleString()}</p>
                    <a href="producto.html?id=${producto.id}" class="btn">Ver Detalles</a>
                </div>
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProductos);
function cargarProductos(){

}
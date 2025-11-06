import { productos } from "./productos.js";

function cargarProducto(){
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = parseInt(urlParams.get("id"));

    console.log(productoId);

    const producto = productos.find((prod) => prod.id === productoId);

        document.querySelector(".producto-imagen").src = producto.imagen;
        document.querySelector(".producto-imagen").alt = producto.nombre;
        document.querySelector(".producto-nombre").textContent = producto.nombre;
        document.querySelector(".producto-descripcion").textContent = producto.descripcion;
        document.querySelector(".producto-precio").textContent = `$${producto.precio.toLocaleString("es-AR")}`;
        

        document.title = producto.nombre;

        
};


document.addEventListener('DOMContentLoaded', () => {
  cargarProducto();
});
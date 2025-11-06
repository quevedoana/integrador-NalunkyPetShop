 import {productos} from "./productos.js"
        const produc = document.querySelector(".productos-destacados");
        const destacados = productos.filter(prod => prod.destacado === true)
        destacados.forEach((prod) => {
        const card = document.createElement("article");
        card.classList.add("card");

        card.innerHTML = `
            <div class="card-img">
                <img src="${prod.imagen}" alt="${prod.nombre}">
            </div>
            <div class="card-body">
                <h3>${prod.nombre}</h3>
            </div>
            <div class="card-footer">
                <p class="precio">$${prod.precio.toLocaleString("es-AR")}</p>
                <a href="producto.html?id=${prod.id}" class="btn">Ver Detalle</a>
            </div>
            `;
            produc.appendChild(card);
        });
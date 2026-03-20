// ELEMENTOS
const btnCarrito = document.getElementById("btnCarrito");
const carrito = document.getElementById("carrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalHTML = document.getElementById("total");
const contador = document.getElementById("contador");

// DATOS
let carritoItems = [];
let total = 0;

// ABRIR / CERRAR
btnCarrito.addEventListener("click", () => {
    carrito.classList.toggle("activo");
});

// AGREGAR
function agregarCarrito(nombre, precio) {
    carritoItems.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

// ELIMINAR
function eliminarProducto(index) {
    total -= carritoItems[index].precio;
    carritoItems.splice(index, 1);
    actualizarCarrito();
}

// ACTUALIZAR
function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    carritoItems.forEach((producto, index) => {
        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <span>${producto.nombre} - $${producto.precio}</span>
            <button onclick="eliminarProducto(${index})">X</button>
        `;

        listaCarrito.appendChild(div);
    });

    totalHTML.innerText = "Total: $" + total;
    contador.innerText = carritoItems.length;
}

// 🔥 CLAVE PARA QUE FUNCIONE CON HTML
window.agregarCarrito = agregarCarrito;
window.eliminarProducto = eliminarProducto;
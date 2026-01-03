const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

if(productosEnCarrito){
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.remove("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
    contenedorCarritoComprado.classList.add("disabled");

    productosEnCarrito.forEach(producto => {
      
        const div = document.createElement("div");
        div.classList.add("carrito-producto");
        div.innerHTML =`
         <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
         <div class="carrito-producto-cantidad">
             <small>Cantidad</small>
             <h3>${producto.cantidad}</h3>
         </div> 
            <div class="carrito-producto-precio">
             <small>Precio</small>
             <h3>${producto.precio}</h3>
         </div>
          <div class="carrito-producto-subtotal">
             <small>Subtotal</small>
             <h3>${producto.precio * producto.cantidad}</h3>
         </div>
       <div class="carrito-producto-subtotal">
             <small>Subtotal</small>
             <h3>${producto.precio * producto.cantidad}</h3>
         </div>
         <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
        `;

        contenedorCarritoProductos.append(div);
    });
} else{
     contenedorCarritoVacio.classList.remove("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.add("disabled");
}

function actualizarBotonesEliminar(){
   botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");  
   
   botonesAgregar.forEach(boton => {
     boton.addEventListener("click",eliminarDelCarrito);
   });
 }


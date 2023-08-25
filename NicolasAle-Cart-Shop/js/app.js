const carrito = document.querySelector("#carrito");
const botones = document.querySelectorAll(".btn-color");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();

const reproductor = {};

const AgregarProducto = (e) => {
  const producto = {
    id: e.target.dataset,
    titulo: e.target.dataset.disco,
    imagen: e.target.dataset.img,
    cantidad: 1,
  };
  sumarCantidad(producto);
  reproductor[producto.titulo] = producto;
  mostrarProducto();
};
const mostrarProducto = () => {
  carrito.textContent = "";

  Object.values(reproductor).forEach((item) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector('.img-fluid').src = item.imagen;
    clone.querySelector('.lead').textContent = item.titulo;
    clone.querySelector('.badge').textContent = item.cantidad;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

function sumarCantidad(producto) {
  if (reproductor.hasOwnProperty(producto.titulo)) {
    producto.cantidad = reproductor[producto.titulo].cantidad + 1;
  }
}

botones.forEach((item) => {
  item.addEventListener('click', AgregarProducto)
});

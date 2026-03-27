import fs from 'fs';

function buscarProducto(nombre) {
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);

    const producto = productos.find(p => p.nombre === nombre);

    if (producto) {
        console.log("Producto encontrado");
        console.log("Nombre:", producto.nombre);
        console.log("Precio:", producto.precio);
    } else {
        console.log("Producto no encontrado");
    }
}

export default buscarProducto;
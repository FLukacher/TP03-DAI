import fs from 'fs';

function leerProductos() {
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);

    console.log('Lista de productos:\n');

    productos.forEach(producto => {
        console.log(`ID: ${producto.id}`);
        console.log(`Nombre: ${producto.nombre}`);
        console.log(`Precio: $${producto.precio}`);
        console.log('----------------------');
    });
}

export default leerProductos;
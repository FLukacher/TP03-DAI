import fs from 'fs';

function agregarProductos(nombre, precio) 
{
    const data = fs.readFileSync('productos.json', 'utf-8');
    const productos = JSON.parse(data);

    const nuevoProducto = {
        id: productos.length + 1,
        nombre: nombre,
        precio: precio
    };

    productos.push(nuevoProducto);

    fs.writeFileSync('productos.json', JSON.stringify(productos, null, 2));
}

export default agregarProductos;
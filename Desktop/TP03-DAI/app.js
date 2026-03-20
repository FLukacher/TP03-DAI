import leerProductos from './modulo/leerProductos.js';
import  agregarProductos from './modulo/agregarProductos.js';
import mostrarFechaHora from './modulo/mostrarFechaHora.js';
import obtenerPais from './modulo/obtenerPais.js';
import buscarProducto from './modulo/buscarProducto.js';
import contador from './modulo/contador.js';
import analizarTexto from './modulo/analizarPalabra.js';
import validarPassword from './modulo/validarPassword.js';
leerProductos();
agregarProductos("ciro", "10");
mostrarFechaHora();
obtenerPais("Brasil");
buscarProducto("ciro");
//prueba con producto inexistente
buscarProducto("el mantecas");
contador();
analizarTexto("hola fac");
validarPassword("Mantecoños123");
//contraseña incorrecta
validarPassword("mantecoños123");

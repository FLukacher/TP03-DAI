import axios from "axios";

async function obtenerPais(nombrePais) {
    try {
        const respuesta = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`);
        const pais = respuesta.data[0];
        console.log(`País: ${pais.name.common}`);
        console.log(`Capital: ${pais.capital[0]}`);
        console.log(`Región: ${pais.region}`);
    } catch (error) {
        console.error("Error al obtener el país:", error.message);
    }
}

export default obtenerPais;
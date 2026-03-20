import axios from "axios";

function obtenerPais(nombrePais) {
    axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`)
        .then(respuesta => {
            const pais = respuesta.data[0];

            console.log(`País: ${pais.name.common}`);
            console.log(`Capital: ${pais.capital[0]}`);
            console.log(`Región: ${pais.region}`);
        })
}

export default obtenerPais;
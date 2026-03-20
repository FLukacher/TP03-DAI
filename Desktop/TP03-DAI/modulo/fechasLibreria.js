import dayjs from "dayjs";
function mostrarFechaHora() {

    dayjs().format("DD/MM/YYYY");
    dayjs().format("HH:mm");

    console.log(`Fecha actual: ${fecha}`);
    console.log(`Hora actual: ${hora}`);
}

export default mostrarFechaHora;
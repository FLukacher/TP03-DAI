function contador() {
    let numero = 1;

    const intervalo = setInterval(() => {
        console.log(numero);
        numero++;

        if (numero > 10) {
            clearInterval(intervalo);
            console.log("Fin del contador");
        }
    }, 1000);
}
export default contador;
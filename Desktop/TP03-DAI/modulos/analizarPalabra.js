function analizarTexto(texto) {
    const caracteres = texto.length;

    const palabras = texto.trim().split(" ").length;

    let vocales = 0;
    let consonantes = 0;


    for (let letra of texto.toLowerCase()) {
        if ("aeiou".includes(letra)) {
            vocales++;
        } else if (letra >= "a" && letra <= "z") {
            consonantes++;
        }
    }

        console.log(`
        Análisis del texto:
        Caracteres: ${caracteres}
        Palabras: ${palabras}
        Vocales: ${vocales}
        Consonantes: ${consonantes}
        `);

}
export default analizarTexto;
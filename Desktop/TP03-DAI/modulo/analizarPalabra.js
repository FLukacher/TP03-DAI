function analizarTexto(texto) {
    const caracteres = texto.length;

    const palabras = texto.trim().split(" ").length;

    let vocales = 0;
    let consonantes = 0;

    const textoLower = texto.toLowerCase();

    for (let letra of textoLower) {
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
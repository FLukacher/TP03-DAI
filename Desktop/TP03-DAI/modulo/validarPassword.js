function validarPassword(password) {
    if (
        password.length >= 8 &&
        password.match(/[0-9]/) &&
        password.match(/[A-Z]/)
    ) {
        console.log("Password válida");
    } else {
        console.log("Password inválida");
    }
}

export default validarPassword;
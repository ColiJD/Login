const datos = [
    {
        id: "01",
        nombre: "Jose",
        apellido: "Colindres",
        usuario1: "ColiJD",
        correo: "colindresj9@gmail.com",
        pass: "123456"
    }
];
var usuarioDato = document.querySelector("#usuario");
const passDato = document.querySelector("#contrasena");
const botonIngresar = document.querySelector("#boton-ingresar");



console.log(usuarioDato);

function acceder() {
    if (usuarioDato === "ColiJD") {
        alert("Bienvenido al sistema");
    } else {
        alert("usuario o contrase;a incorrectos");
    }
}

botonIngresar.addEventListener("click", acceder);


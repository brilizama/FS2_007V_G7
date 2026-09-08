function agregarProducto() {
    alert("Producto agregado (demostración). Todavía no existe un carrito de compras.");
}
// Validación del registro
function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmar = document.getElementById("confirmar").value;

    if (nombre.trim() == "") {
        alert("Debes ingresar tu nombre");
        return false;
    }
    if (apellido.trim() == "") {
        alert("Debes ingresar tu apellido");
        return false;
    }
    if (correo == "") {
        alert("Debes ingresar tu correo");
        return false;
    }
    if (contrasena != confirmar) {
        alert("Las contraseñas no coinciden");
        return false;
    }

    alert("Datos validados correctamente. Este formulario de prueba no crea una cuenta ni guarda datos.");
    return false;
}

// Validación del contacto
function validarContacto() {
    var nombre = document.getElementById("nombre-contacto").value;
    var correo = document.getElementById("correo-contacto").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre.trim() == "") {
        alert("Debes ingresar tu nombre");
        return false;
    }
    if (correo == "") {
        alert("Debes ingresar tu correo");
        return false;
    }
    if (asunto.trim() == "") {
        alert("Debes ingresar un asunto");
        return false;
    }
    if (mensaje.trim() == "") {
        alert("Debes escribir un mensaje");
        return false;
    }

    alert("Mensaje validado. Esta es una demostración: no se ha enviado ningún correo.");
    return false;
}

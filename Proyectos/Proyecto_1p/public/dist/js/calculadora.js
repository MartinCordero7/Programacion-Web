function enviarValor(arg) {
    // capturar el valor del elemento botón
    var valor = arg.dataset.valor;
    console.log(valor);

    // almacenar el elemento input con el id txt_caja_texto
    var ca_texto = document.getElementById("txt_caja_texto");
    // asignar el nuevo valor
    ca_texto.value += valor;
}

function borrarUltimo(arg) {
    // Obtener el elemento input con el id txt_caja_texto
    var ca_texto = document.getElementById("txt_caja_texto");
    // Eliminar el último carácter del valor actual
    ca_texto.value = ca_texto.value.slice(0, -1);
}

function borrarTodo(arg) {
    // Obtener el elemento input con el id txt_caja_texto
    var ca_texto = document.getElementById("txt_caja_texto");
    // Limpiar todo el contenido del input
    ca_texto.value = "";
}

// Exponer las funciones al ámbito global
window.enviarValor = enviarValor;
window.borrarUltimo = borrarUltimo;
window.borrarTodo = borrarTodo;
function cargarPaginas(nombre_pagina) {
    fetch(nombre_pagina)
    .then(
        res => res.text()
    )
    .then(
        data => document.getElementById("contenido").innerHTML = data
    )
}

window.onload = () => cargarPaginas("/paginas/inicio.html");
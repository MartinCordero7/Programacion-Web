fetch("/paginas/inicio.html")
    .then(
        res => res.text()
    )
    .then(
        data => document.getElementById("contenido").innerHTML = data
    )
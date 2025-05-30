let contenido = null;
navigator.mediaDevices.getUserMedia({ video: true }).then(res=>{
    contenido = res;
    document.getElementById("video").srcObject = contenido;
}).catch(error => {
    console.error("Error accessing the camera: ", error);
})
function fnc_foto() {
    var dvideo = document.getElementById("video");
    var dpicture = document.getElementById("my_foto");
    var ctxt = dpicture.getContext("2d");
    ctxt.drawImage(dvideo, 0, 0, dpicture.width, dpicture.height);
    dvideo.style.display = "none";
    dpicture.style.display = "block";
    
}

function fnc_video(){
    var dvideo = document.getElementById("video");
    var dpicture = document.getElementById("my_foto");
    if (contenido) {
        dvideo.srcObject = contenido;
        dvideo.style.display = "block";
        dpicture.style.display = "none";
    } else {
        console.error("No video stream available.");
    }
}

function fnc_guardar() {
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;   
    var edad = document.getElementById("fecha").value;
    var departamento = document.getElementById("Departamento").value;
    var latitud = document.getElementById("latitud").value;
    var longitud = document.getElementById("longitud").value;

    // Obtener la foto como DataURL
    var fotoCanvas = document.getElementById("my_foto");
    var fotoDataUrl = "";
    if (fotoCanvas && fotoCanvas.style.display !== "none") {
        fotoDataUrl = fotoCanvas.toDataURL("image/png");
    }

    // Cargar perfiles existentes
    var perfiles = JSON.parse(localStorage.getItem("perfiles")) || [];
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        departamento: departamento,
        latitud: latitud,
        longitud: longitud,
        fotoDataUrl: fotoDataUrl
    };
    perfiles.push(usuario);
    localStorage.setItem("perfiles", JSON.stringify(perfiles));
    alert("Perfil guardado exitosamente.");
    console.log("Perfil guardado:", usuario);
}

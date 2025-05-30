let my_geolocation = navigator.geolocation

if (my_geolocation) {
    my_geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        document.getElementById("latitud").value = position.coords.latitude;
        document.getElementById("longitud").value = position.coords.longitude;

        var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 300,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Marcador azul en la ubicación actual
        L.marker([position.coords.latitude, position.coords.longitude], {
            icon: L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).addTo(map);
    })
} else {
    alert("Error al cargar el mapa, no se pudo obtener la ubicación.");
}

function datos(){
    document.getElementById('enviarDatos').addEventListener('click', function() {
            const lat = document.getElementById('latitud').value;
            const lng = document.getElementById('longitud').value;
            // Guarda en localStorage
            localStorage.setItem('latitud', lat);
            localStorage.setItem('longitud', lng);
        });
}
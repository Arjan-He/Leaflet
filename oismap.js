var map = L.map('map').setView([53.214249, 6.576941], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.oisgroningen.nl">OIS Groningen</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([53.214249, 6.576941]).addTo(map)
    .bindPopup('Hier zijn wij')
    .openPopup();
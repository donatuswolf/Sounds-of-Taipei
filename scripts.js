window.onload = function () {

    var mymap = L.map('mapid').setView([25.032, 121.565], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg'
    }).addTo(mymap);

    var circle = L.circle([25.032, 121.565], {
        color: 'red',
        // fillColor: '#f03',
        fillOpacity: 1,
        radius: 100
    }).addTo(mymap);
}
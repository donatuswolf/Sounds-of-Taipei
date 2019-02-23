window.onload = function () {

    var mymap = L.map('mapid').setView([25.032, 121.565], 13);
    var radiusMin = 10;
    var radiusMax = 15;

    var color = {
        location: '#00A6A6',
        taipei: 'blue',
        event: 'yellow'
    }

    // var places = [
    //     {
    //         id: 'birds',
    //         vol: 0.5,
    //         x: 25.032,
    //         y: 121.565,
    //         type: 'red'
    //     },
    //     {
    //         id: 'hospital',
    //         vol: 1,
    //         x: 25.036732,
    //         y: 121.553764,
    //         type: 'blue'
    //     }
    // ];

    // var places = loadJSON('places.json');




    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg'
    }).addTo(mymap);

    // L.tileLayer('https://api.mapbox.com/styles/v1/donatuswolf/cjshijl1c13o41empmevvh85j.html?fresh=true&title=true&access_token=pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg#11.8/25.032714/121.562531/0').addTo(mymap);

    // mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg';
    // const map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/donatuswolf/cjshijl1c13o41empmevvh85j',
    //     center: [121.562531, 25.032714],
    //     zoom: 11.8
    // });

    var places = $.getJSON("places.json", function (json) {
        console.log(json); // show the JSON file content into console

        for (var i = 0; i < 3; i++) {
            drawPlaces(json[i]);
        }

        // console.log();

        function drawPlaces(data) {
            var circle = L.circleMarker([data.x, data.y], {
                // color: data.type,
                color: color[data.type],
                // fillColor: '#f03',
                fillOpacity: 1,
                radius: radiusMin
            }).addTo(mymap);

            circle.on('mouseover', function () {
                // this.setStyle({ color: 'blue' });
                playSound(data.id, data.vol);
                this.setRadius(radiusMax)
            });

            function playSound(name, volume) {
                var audio = new Audio('assets/sounds/' + name + '.mp3');
                audio.volume = volume;
                audio.loop = true;
                audio.play();

                circle.on('mouseout', function () {
                    audio.pause();
                    circle.setRadius(radiusMin)
                });
            }
        }
    });

}
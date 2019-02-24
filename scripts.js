window.onload = function () {

    var mymap = L.map('mapid').setView([25.032, 121.565], 13);
    var radiusMin = 10;
    var radiusMax = 20;

    var color = {
        city: '#FFBF46', //DEEP SAFFRON
        location: '#4DA1A9', //CADET BLUE
        event: '#D7E8BA' //TEA GREEN
    }

    L.tileLayer('https://api.tiles.mapbox.com/styles/v1/{id}/{z}/{x}/{y}@2x?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/light-v9/tiles/256',
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

        for (var i = 0; i < json.length; i++) {
            drawPlaces(json[i]);
        }

        // for (var i in places) {
        //     drawPlaces(json[i]);
        // }

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
                // this.setRadius(radiusMax)
                this.setRadius(map(data.db, 0, 1, radiusMin, radiusMax));
            });

            circle.on('dblclick', function () {
                if (data.googlemaps != '') {
                    window.open(data.googlemaps,'_blank'); 
                }    
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

    function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

}
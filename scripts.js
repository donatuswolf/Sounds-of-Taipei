window.onload = function () {

    var mymap = L.map('mapid').setView([25.032, 121.53], 13);
    var radiusMin = 10;
    var radiusMax = 20;

    var color = {
        city: '#3a7bbf',
        location: '#99e0dc',
        event: '#ae65d5'
    }

    L.tileLayer('https://api.mapbox.com/styles/v1/donatuswolf/cjshijl1c13o41empmevvh85j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg').addTo(mymap);

    $('#photo').addClass('hidden');

    var places = $.getJSON("places.json", function (json) {
        console.log(json); // show the JSON file content into console
        console.log(json.length);
        for (var i = 0; i < json.length; i++) {
            drawPlaces(json[i]);
        }

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
                // $('#photo').attr('background', 'url(assets/photos/' + data.id + '.png)');
                $('#photo').css('background-image', 'url(assets/photos/' + data.id + '.png)');
                $('#label').html(data.label);
                $('#photo').removeClass('hidden');
            });

            circle.on('dblclick', function () {
                if (data.googlemaps != '') {
                    window.open(data.googlemaps, '_blank');
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
                    $('#photo').addClass('hidden');
                });
            }
        }
    });

    function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}
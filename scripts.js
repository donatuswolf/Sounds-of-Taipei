window.onload = function () {

    var radiusMin = 10;
    var radiusMax = 20;

    var color = {
        city: '#3a7bbf',
        location: '#99e0dc',
        event: '#ae65d5'
    }

    //// load map ////////

    var lat = 25.032;
    var lng = 121.53;
    var zoom = 13;

    var mymap = L.map('mapid').setView([lat, lng], zoom);
    L.tileLayer('https://api.mapbox.com/styles/v1/donatuswolf/cjshijl1c13o41empmevvh85j/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZG9uYXR1c3dvbGYiLCJhIjoiY2pzaGdrcGMzMG40aDQzbjVudTJhZzZ6ZyJ9.McGYoRXAEFRlb9lG8CMXmg').addTo(mymap);

    //// load dataset from json ////////

    var places = $.getJSON("places.json", function (json) {
        console.log(json); // show the JSON file content into console
        console.log(json.length);
        for (var i = 0; i < json.length; i++) {
            drawPlaces(json[i]);
        }

        //// create circles ////////

        function drawPlaces(data) {
            var circle = L.circleMarker([data.x, data.y], {
                // color: data.type,
                color: color[data.type], // color cirlces with type-colors
                // fillColor: '#f03',
                fillOpacity: 1,
                radius: radiusMin // default size of cirlces
            }).addTo(mymap);

            //// mouseover ////////

            circle.on('mouseover', function () {
                playSound(data.id, data.vol);
                // this.setRadius(radiusMax)
                this.setRadius(map(data.db, 0, 1, radiusMin, radiusMax)); // size of cirlces when hovered

                $('#photo').css('background-image', 'url(assets/photos/' + data.id + '.jpg)'); // load photo
                $('#label').html(data.label); // add text
                $('#photo').removeClass('hidden'); // show photo
                $('#photobg').removeClass('hidden');
            });

            //// doubleclick ////////

            circle.on('dblclick', function () {
                if (data.googlemaps != '') {
                    window.open(data.googlemaps, '_blank'); // create link
                }
            });

            function playSound(name, volume) {
                var audio = new Audio('assets/sounds/' + name + '.mp3'); // load audio
                audio.volume = volume; // set to custom volume from dataset
                audio.loop = true;
                audio.play();

                //// mouseout ////////

                circle.on('mouseout', function () {
                    audio.pause();
                    circle.setRadius(radiusMin)
                    $('#photo').addClass('hidden'); // hide photo
                    $('#photobg').addClass('hidden');
                });
            }
        }
    });

    function map(x, in_min, in_max, out_min, out_max) {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
}
$(document).ready(function () {
    "use strict";

    // lat/lon getter

    $('style').append('.coordinates {\n' +
        'background: rgba(0, 0, 0, 0.5);\n' +
        'color: #fff;\n' +
        'position: absolute;\n' +
        'bottom: 40px;\n' +
        'left: 10px;\n' +
        'padding: 5px 10px;\n' +
        'margin: 0;\n' +
        'font-size: 11px;\n' +
        'line-height: 18px;\n' +
        'border-radius: 3px;\n' +
        'display: none;\n' +
        '}')

    $('.coords').hide();


    var lat = 29.4241;
    var lon = -98.4936;

    $('#relocate').click(function () {
        lat = $('#latitude').val();
        lon = $('#longitude').val();
        map.setCenter([lon,lat])
        mapIt();
    });

    //  Mapbox //
    mapboxgl.accessToken = mapboxToken;


        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v11',
            zoom: 10,
            scrollZoom: false,
            center: [lon, lat]
        });


    map.addControl(new mapboxgl.NavigationControl());

    //weather obj array //

    var weatherTypes = [
        {
            id: 0,
            type: "clear-day",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894508 - forecast shine summer sun sunny warm weather.png",
        },
        {
            id: 1,
            type: "clear-night",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894532 - crescent half moon nature night sleep weather.png",
        },
        {
            id: 2,
            type: "rain",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894521 - cloud drop forecast rain rainy water weather.png",
        },
        {
            id: 3,
            type: "snow",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894535 - cold flake holiday snow snowflake weather winter.png",
        },
        {
            id: 4,
            type: "sleet",
            icon: "4894546 - cloud flake rain snow snowflake weather winter.png",
        },
        {
            id: 5,
            type: "wind",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894512 - air blow direction nature weather wind windy.png",
        },
        {
            id: 6,
            type: "fog",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894526 - cloud fog forecast ocean warm weather wind.png",
        },
        {
            id: 7,
            type: "cloudy",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894547 - backup cloud data drive interface storage weather.png",
        },
        {
            id: 8,
            type: "partly-cloudy-day",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894525 - cloud day shine summer sun sunny weather.png",
        },
        {
            id: 9,
            type: "partly-cloudy-night",
            icon: "icons/Weather (Blue Filled Line)/PNG/48/4894519 - cloud crescent half moon night sleep weather.png",
        }
    ]

    // dow process //

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

// ajax api for darksky //

    function mapIt() {
        var ajax = $.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyToken + '/' + lat + ',' + lon);

        $(document).ready(function () {

            ajax.done(function (data) {
                // console.log(data);

                var weatherArr = [];


                for (var x = 0; x <= 2; x++) {
                    var dailyObj = {};

                    dailyObj.id = x;
                    dailyObj.summary = data.daily.data[x].summary
                    dailyObj.temperatureHigh = data.daily.data[x].temperatureHigh
                    dailyObj.temperatureLow = data.daily.data[x].temperatureLow
                    dailyObj.windSpeed = data.daily.data[x].windSpeed
                    dailyObj.icon = data.daily.data[x].icon;

                    weatherArr.push(dailyObj);
                }

                function icon(darkSkyIcon) {
                    var testIcon = '';
                    weatherTypes.forEach(function (weatherType) {
                        if (weatherType.type === darkSkyIcon) {
                            testIcon = weatherType.icon;
                        }
                    })
                    return testIcon;
                }

//****************************************************
                function getWeather() {
                    var current = '<div class="container scroll"><p><strong>CURRENTLY</strong>: FEELS LIKE: ' + data.currently.apparentTemperature.toFixed(0) + '°</p></div>';
                    $('#current').html(current)
                    weatherArr.forEach(function (obj) {
                        var dayId = '#day' + obj.id;
                        var imgSrc = icon(obj.icon);
                        var dow = '';
                        if (obj.id === 0) {
                            dow = 'TODAY';
                        } else if(d.getDay() + obj.id === 7){
                            dow = 'SUNDAY';
                        } else if(d.getDay() + obj.id === 8){
                            dow = 'MONDAY';
                        } else {
                            dow = weekday[d.getDay() + obj.id].toUpperCase()
                        }
                        $(dayId).html('<h4>' + dow + '</h4><h6>' + obj.summary.toUpperCase() + '</h6><img src="' + imgSrc + '"><p>HIGH: ' + obj.temperatureHigh.toFixed(0) + '° / LOW: ' + obj.temperatureLow.toFixed(0) + '°</p><p>WIND: ' + obj.windSpeed.toFixed(2) + 'MPH</p>')
                    })
                }

                getWeather();
            })


            // add markers to map
            var marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat([lon, lat])
                .addTo(map);

            function onDragEnd() {
                var lngLat = marker.getLngLat();
                // coordinates.style.display = 'block';
                // coordinates.innerHTML =
                //     'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

                lat = lngLat.lat;
                lon = lngLat.lng;
                $('.latLonInput').hide();
                $('.coords').show();
                map.setCenter([lon,lat])
            }

            marker.on('dragend', onDragEnd);
        })

        $('#coords').click(function(){
            $('.latLonInput').show();
            $('.coords').hide();
        })
    };
    mapIt()

});
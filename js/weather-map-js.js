$(document).ready(function () {
    "use strict";


    $('.coords').hide();
    $('.latLonInput').hide();
    $('.geocode').hide();

    //variables

    var tempCur, tempAppCur;

    // lat/lon SA
    var lat = 29.4241;
    var lon = -98.4936;

    function relocate() {
        lat = $('#latitude').val();
        lon = $('#longitude').val();
        map.setCenter([lon, lat]);
        mapIt();
    }

    //  Mapbox & token init//


    mapboxgl.accessToken = mapboxToken;


    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        zoom: 10,
        scrollZoom: false,
        center: [lon, lat]
    });

    map.addControl(new mapboxgl.NavigationControl());

    var marker = new mapboxgl.Marker({
        draggable: true
    });

    var popup = new mapboxgl.Popup();


    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
            });
    }

    function geocodeResult() {
        geocode($('#geocode').val(), mapboxToken).then(function (result) {
            var placeName = result.features[0].place_name;
            console.log(placeName);
            lat = result.features[0].center[1];
            lon = result.features[0].center[0];
            map.setCenter([lon, lat]).setZoom(10);
            marker.setLngLat([lon, lat]);
            mapIt();
            popup.setLngLat([lon, lat])
                .setHTML("<p>"+ placeName +"</p>")
                .addTo(map);
            $('#geocode').val('')
        });
    }

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
    ];

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
                    dailyObj.summary = data.daily.data[x].summary;
                    dailyObj.temperatureHigh = data.daily.data[x].temperatureHigh;
                    dailyObj.temperatureLow = data.daily.data[x].temperatureLow;
                    dailyObj.windSpeed = data.daily.data[x].windSpeed;
                    dailyObj.spdType = 'MPH';
                    dailyObj.icon = data.daily.data[x].icon;

                    weatherArr.push(dailyObj);
                }

                tempCur = data.currently.temperature;
                tempAppCur = data.currently.apparentTemperature;



                function icon(darkSkyIcon) {
                    var testIcon = '';
                    weatherTypes.forEach(function (weatherType) {
                        if (weatherType.type === darkSkyIcon) {
                            testIcon = weatherType.icon;
                        }
                    });
                    return testIcon;
                }



                function getWeather() {
                    // weather forecast generator and map center update


                    var current = '<div class="container scroll"><p><strong><em>WEATHER MAP</em>...CURRENTLY</strong>: '+ data.currently.summary.toUpperCase() +', ' + tempCur.toFixed(0) +'°, FEELS LIKE: ' + tempAppCur.toFixed(0) + '°</p></div>';
                    $('#current').html(current);
                    weatherArr.forEach(function (obj) {
                        var dayId = '#day' + obj.id;
                        var imgSrc = icon(obj.icon);
                        var dow;
                        if (obj.id === 0) {
                            dow = 'TODAY';
                        } else if (d.getDay() + obj.id === 7) {
                            dow = 'SUNDAY';
                        } else if (d.getDay() + obj.id === 8) {
                            dow = 'MONDAY';
                        } else {
                            dow = weekday[d.getDay() + obj.id].toUpperCase();
                        }

                            $(dayId).html('<h4>' + dow + '</h4><h6>' + obj.summary.toUpperCase() + '</h6><img alt="weather-icon" src="' + imgSrc + '"><p>HIGH: ' + obj.temperatureHigh.toFixed(0) + '° / LOW: ' + obj.temperatureLow.toFixed(0) + '°</p><p>WIND: ' + obj.windSpeed.toFixed(2) + ' ' + obj.spdType + '</p>');

                        // change units



                        $('#si').on('click', function() {

                            weatherArr = [];
                            tempCur = (data.currently.temperature - 32) * 5 / 9;
                            tempAppCur = (data.currently.apparentTemperature - 32) * 5 /9;

                            for (var x = 0; x <= 2; x++) {
                                var dailyObj = {};

                                dailyObj.id = x;
                                dailyObj.summary = data.daily.data[x].summary;
                                dailyObj.temperatureHigh = (data.daily.data[x].temperatureHigh  -32) *5 / 9;
                                dailyObj.temperatureLow = (data.daily.data[x].temperatureLow  -32) *5 / 9;
                                dailyObj.windSpeed = data.daily.data[x].windSpeed * 1.60934;
                                dailyObj.spdType = 'KPH';
                                dailyObj.icon = data.daily.data[x].icon;

                                weatherArr.push(dailyObj);
                            }

                            $('#si').hide();
                            $('#imp').show();

                            getWeather();
                        });

                        $('#imp').on('click', function (){

                            weatherArr = [];
                            tempCur = data.currently.temperature;
                            tempAppCur = data.currently.apparentTemperature;

                            for (var x = 0; x <= 2; x++) {
                                var dailyObj = {};

                                dailyObj.id = x;
                                dailyObj.summary = data.daily.data[x].summary;
                                dailyObj.temperatureHigh = data.daily.data[x].temperatureHigh;
                                dailyObj.temperatureLow = data.daily.data[x].temperatureLow;
                                dailyObj.windSpeed = data.daily.data[x].windSpeed;
                                dailyObj.spdType = 'MPH';
                                dailyObj.icon = data.daily.data[x].icon;

                                weatherArr.push(dailyObj);
                            }

                            $('#imp').hide();
                            $('#si').show();
                            getWeather();
                        })

                    })
                }

                getWeather();



            });



            // move markers to map
            marker.setLngLat([lon, lat])

                .addTo(map);


            function onDragEnd() {
                var lngLat = marker.getLngLat();
                lat = lngLat.lat;
                lon = lngLat.lng;
                $('.latLonInput').hide();
                $('.searchBy').hide();
                $('.geocode').hide();
                $('.coords').show();
                map.setCenter([lon, lat]);
                mapIt();
            }

            marker.on('dragend', onDragEnd);
        })


    }

    $('#relocate').click(function () {
        relocate()
    });

    // $('#geoSearch').click(function () {
    //     geocodeResult();
    // });
    $('#geoSearch').click(geocodeResult());

    $('#geocode').keypress(function (e) {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();

            if ($(this).val() !== '') {
                geocodeResult();
                $(this).val('');
            }
        }
    });

    $('#longitude').keypress(function (e) {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();

            if ($(this).val() !== '' && $('#latitude').val() !== '') {
                relocate();
                $('#longitude').val('');
                $('#latitude').val('');
            } else {
                $('#latitude').focus();
            }
        }
    });

    $('#latitude').keypress(function (e) {
        var code = e.key;
        if (code === 'Enter') {
            e.preventDefault();

            if ($(this).val() !== '' && $('#longitude').val() !== '') {
                relocate();
                $('#longitude').val('');
                $('#latitude').val('');
            } else {
                $('#longitude').focus();
            }
        }
    });

    // show/hide on

    $('#imp').hide();

    $('#coords').click(function () {
        $('.searchBy').show();
        $('.coords').hide();
    });
    $('#showCoord').click(function () {
        $('.latLonInput').show();
        $('.geocode').hide();
        $('#latitude').focus();
    });

    $('#showLoc').click(function () {
        $('.latLonInput').hide();
        $('.geocode').show();
        $('#geocode').focus();
    });


    mapIt();

});
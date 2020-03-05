$(document).ready(function () {
    "use strict";

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
    console.log('hello');

    var ajax = $.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyToken + '/29.4241,-98.4936');
    ajax.done(function (data) {
        console.log(data);
        //
        //
        // console.log(data.daily.data[0].icon);
        function getWeather() {

            for (var i = 0; i < weatherTypes.length; i++) {

                if (data.daily.data[0].icon === weatherTypes[i].type) {
                    var today = '<h3>Today\'s Forecast</h3><h4>' + data.daily.data[0].summary.toUpperCase() + '</h4><img src="' + weatherTypes[i].icon + '" alt="weather_icon">' + '<p>HIGH: '+ data.daily.data[0].temperatureHigh.toFixed(0) + '° / LOW: ' + data.daily.data[0].temperatureLow.toFixed(0) + '°</p><p>FEELS LIKE: ' + data.currently.apparentTemperature.toFixed(0) + '°</p>';
                    break;
                } else {
                    today = 'The Weather God\'s are Busy Right Now';
                }
            }
            for (var i = 0; i < weatherTypes.length; i++) {


                if (data.daily.data[1].icon === weatherTypes[i].type) {
                    var tomorrow = '<h3>Today\'s Forecast</h3><h4>' + data.daily.data[1].summary.toUpperCase() + '</h4><img src="' + weatherTypes[i].icon + '" alt="weather_icon">' + '<p>HIGH: '+ data.daily.data[1].temperatureHigh.toFixed(0) + '° / LOW: ' + data.daily.data[1].temperatureLow.toFixed(0) + '°</p>';
                    break;
                } else {
                    tomorrow = 'The Weather God\'s are Busy Right Now';
                }
            }
            //
            for (var i = 0; i < weatherTypes.length; i++) {
                if (data.daily.data[2].icon === weatherTypes[i].type) {
                    var theNextDay = '<h3>Today\'s Forecast</h3><h4>' + data.daily.data[2].summary.toUpperCase() + '</h4><img src="' + weatherTypes[i].icon + '" alt="weather_icon">' + '<p>HIGH: '+ data.daily.data[2].temperatureHigh.toFixed(0) + '° / LOW: ' + data.daily.data[2].temperatureLow.toFixed(0) + '°</p>';
                    break;
                } else {
                    theNextDay = 'The Weather God\'s are Busy Right Now';
                }
            }

            $('#todaysForecast').html(today);
            $('#tomorrowsForecast').html(tomorrow);
            $('#twoDaysForecast').html(theNextDay);

        }

        getWeather();
    })
});
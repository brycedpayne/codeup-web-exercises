'use strict';


mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 1,
    scrollZoom: true,
    center: [-98.4861, 29.4260]
});

map.addControl(new mapboxgl.NavigationControl());


/**********************************************
 *             MARKERS & POPUPS
 *********************************************/

var markerOptions = {
    color: 'orange',
    draggable: true,

}

// var restPopup = new mapboxgl.Popup()
//     .setHTML("")
//     .addTo(map);
//
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([2.339636, 48.839125])
//     .setPopup(restPopup)
//     .addTo(map);


/**********************************************
 *                    Geocoder
 *********************************************/


// geocode('Paris, France', mapboxToken).then(function (result) {
//     console.log(result);
//     // map.setCenter(result);
//     map.setZoom(15);
//     // map.flyTo({center: result, zoom: 15});
// });


reverseGeocode({lng: -98.4861, lat: 29.4260}, mapboxToken).then(function (result) {
    console.log(result);
});

function createMarker(input){

};


var favRest = [
    {
        favoriteNum: 1,
        name: 'La Terrasse St Jacques',
        address: "86 Boulevard de Port-Royal, 75005 Paris, France",
        yelp: 'https://www.yelp.com/biz/la-terrasse-saint-jacques-paris',
        phoneNum: '+33 1 43 54 23 73',
    },
    {
        favoriteNum: 2,
        name: "Ray's Hell Burger",
        address: "1650 Wilson Blvd, Arlington, VA 22209",
        yelp: 'https://www.yelp.com/biz/rays-hell-burger-arlington-3',
    },
    {
        favoriteNum: 3,
        name: "Sally's Apizza",
        address: "237 Wooster St, New Haven, CT 06511",
        yelp: 'https://www.yelp.com/biz/sallys-apizza-new-haven?osq=Sallys+Apizza',
    }
];


favRest.forEach(function(restaurant){

    var blank = '_blank';
    var setHTML = '<p><strong>' + restaurant.name + '</strong></p><p>' + restaurant.address + '</p><a href="'+ restaurant.yelp + '" target="_blank">Yelp!</a>';

    geocode(restaurant.address, mapboxToken).then(function (result){
        var restPopup = new mapboxgl.Popup()
            .setHTML(setHTML)

            .addTo(map);

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .setPopup(restPopup)
            .addTo(map);
    })
});

document.getElementById("myBtn").addEventListener("click", function(){
    var zmlvl = parseInt(document.getElementById('zmLvl'));
    map.setZoom(zmlvl);
});


































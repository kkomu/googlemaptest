window.onload = function (event) {
    "use strict";
    
    var geocoder = new google.maps.Geocoder();
    var inputAddress = document.getElementById("myAddress").innerHTML;
    geocoder.geocode({
        "address": inputAddress
    }, function(results) {
        var latLng = results[0].geometry.location;
        var myMapOpt = {
            center: latLng,
            zoom: 14,
            mapMarker: false,
            mapTypeControl: false,
            zoomControl: false,
            rotateControl: false,
            scrollwheel: false,
            streetViewControl: false,
            scaleControl: false,
            panControl: false
        };
        
        var myMap = document.getElementById("myMap");
        var map = new google.maps.Map(myMap, myMapOpt);
        
        var myMarkerOpt = {
            position: latLng,
            map: map,
            icon: 'pin.png',
        };
        var marker = new google.maps.Marker(myMarkerOpt);
    });
};
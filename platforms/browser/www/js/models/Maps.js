"use strict";
var Maps = {
    lat: "",
    lng: "",


    myPosition: function(myLat, myLng) {
        var thisPos = {lat: myLat, lng: myLng};
        var map = new google.maps.Map(document.getElementById('myPosition'), {
            zoom: 12,
            center: thisPos
        });

        var marker = new google.maps.Marker({
            position: thisPos,
            map: map,
            title: "Your position"
        });
    },

    placeLocation: function(myLat, myLng, myTitle) {
        var thisPos = {lat: myLat, lng: myLng};
        var map = new google.maps.Map(document.getElementById('myPosition'), {
            zoom: 12,
            center: thisPos
        });

        var marker = new google.maps.Marker({
            position: thisPos,
            map: map,
            title: myTitle
        });
    }
};

module.exports = Maps;

"use strict";

var m = require("mithril");
var Smhi = require("./Smhi");
var Places = require("./Places");
var Maps = require("./Maps");

var Geocode = {
    result: {},
    current: false,
    lat: "",
    lng: "",


    apiUrl: "https://maps.googleapis.com/maps/api/geocode/json?",
    apiKey: "&key=AIzaSyC8tv5peNxPiURDqfjfUJ2IVDbfsXQAw6k",
    location: "",


    setLocation: function() {
        if (Geocode.lat === "" && Geocode.lng === "") {
            m.request({
                method: "GET",
                url: Geocode.apiUrl + "components=country:SE|locality:" + encodeURIComponent(Geocode.location) + Geocode.apiKey
            }).then(function (res) {
                Geocode.result = res.results[0];
                Geocode.lat = res.results[0].geometry.location.lat;
                Geocode.lng = res.results[0].geometry.location.lng;

                Smhi.load(Geocode.lat, Geocode.lng);
                Places.load(Geocode.lat, Geocode.lng);
                Maps.myPosition(Geocode.lat, Geocode.lng);
            });
        } else {
            m.request({
                method: "GET",
                url: Geocode.apiUrl + "latlng=" + Geocode.lat + "," + Geocode.lng + Geocode.apiKey,
            }).then(function (res) {
                Geocode.result = res.results[0];

                Smhi.load(Geocode.lat, Geocode.lng);
                Places.load(Geocode.lat, Geocode.lng);
                Maps.myPosition(Geocode.lat, Geocode.lng);
            });
        }
    },
};

module.exports = Geocode;

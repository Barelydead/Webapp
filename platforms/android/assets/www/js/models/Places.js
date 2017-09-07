"use strict";
var m = require("mithril");
var Maps = require("./Maps");


var Places = {
    restaurants: [],
    stores: [],
    info: {},
    reviews: [],
    open: {},
    open_hours: [],

    apiUrl: "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
    apiKey: "AIzaSyC8tv5peNxPiURDqfjfUJ2IVDbfsXQAw6k",
    location: "",

    load: function(lat, long) {
        m.request({
            method: "GET",
            url: Places.apiUrl,
            data: {
                location: lat + "," + long,
                radius: "200",
                type: "restaurant",
                key: Places.apiKey,
            }
        }).then(function(res) {
            Places.restaurants = res.results;
        });

        m.request({
            method: "GET",
            url: Places.apiUrl,
            data: {
                location: lat + "," + long,
                radius: "200",
                type: "stores",
                key: Places.apiKey,
            }
        }).then(function(res) {
            Places.stores = res.results;
        });
    },

    getInfo: function(thisId) {
        var detailsUrl = "https://maps.googleapis.com/maps/api/place/details/json";
        m.request({
            method: "GET",
            url: detailsUrl,
            data: {
                placeid: thisId,
                key: Places.apiKey,
            }
        }).then(function(res) {
            Places.info = res.result;
            if (res.result.reviews) {
                Places.reviews = res.result.reviews;
            } else {
                Places.reviews = [];
            }
            Places.open = res.result.opening_hours;
            if (res.result.opening_hours.weekday_text) {
                Places.open_hours = res.result.opening_hours.weekday_text;
            } else {
                Places.open_hours = [];
            }

            Maps.placeLocation(Places.info.geometry.location.lat, Places.info.geometry.location.lng, Places.info.name);
        });

    }
};

module.exports = Places;

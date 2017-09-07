"use strict";

var m = require("mithril");
var Geocode = require("../models/Geocode");

function onSuccess(position) {
    Geocode.lat = position.coords.latitude;
    Geocode.lng = position.coords.longitude;
}

function onError(error) {
    window.alert("Could not set your current location. Use search instead");
    console.log(error);
}

function getLocation() {
    navigator.geolocation.getCurrentPosition
    (onSuccess, onError, { enableHighAccuracy: true });
}

module.exports = {
    oninit: function() {
        Geocode.lat = "";
        Geocode.lng = "";
    },
    view: function() {
        return [
            m("div.wrapper start", [
                m("div.top row", [
                    m("h1", "What's around?"),
                    m("p", "Enter a location to start exploring")
                ]),
                m("button.button green#current", { onclick: function() {
                    getLocation();
                    this.style.backgroundColor = "black";
                    var search = document.getElementById("search");
                    search.style.backgroundColor = "#4caf50";
                    var toggleBox = document.getElementById("search-form");
                    toggleBox.classList.add("hidden-box");
                } }, "Use current position"),
                m("button.button green#search", { onclick: function() {
                    Geocode.lat = "";
                    Geocode.lng = "";
                    this.style.backgroundColor = "black";
                    var current = document.getElementById("current");
                    current.style.backgroundColor = "#4caf50";
                    var toggleBox = document.getElementById("search-form");
                    toggleBox.classList.remove("hidden-box");
                } }, "Search location"),
                m("form#search-form.hidden-box", {
                        onsubmit: function(event) {
                            event.preventDefault();
                        } }, [
                    m("input.input[type=text]", {
                        oninput: m.withAttr("value", function(value) { Geocode.location = value; }),
                        value : Geocode.location
                    }),
                ]),
                m("a.button blue", { href: "/overview", oncreate: m.route.link}, "Explore"),
            ])
        ];
    }
};

"use strict";

var m = require("mithril");
var Geocode = require("../models/Geocode");
var Smhi = require("../models/Smhi");
var Places = require("../models/Places");
var Maps = require("../models/Maps");


module.exports = {
    oninit: function() {
        Geocode.setLocation();
    },
    view: function() {
        return [
            m("div.wrapper", [
                m("div.menu", [
                    m("a", {href: "/", oncreate: m.route.link}, "<< New location"),
                ]),
                m("div.top row", [
                    m("h1", Geocode.result.formatted_address),
                ]),
                m("div.weather-flex", [
                    m("div.weather", [
                        m("h4", "Current weather"),
                        m("p", Smhi.text[Smhi.today.icon - 1]),
                        m("img.weather-icon", {src: "img/" + Smhi.icon[Smhi.today.icon - 1], alt: "weather-icon"}),
                        m("div.temp", [
                            m("span", Math.round(Smhi.today.degrees) + " °"),
                            m("span", Smhi.today.windSpeed + " m/s"),
                        ])
                    ]),
                    m("div.weather", [
                        m("h4", "Weather tomorrow"),
                        m("p", Smhi.text[Smhi.tomorrow.icon - 1]),
                        m("img.weather-icon", {src: "img/" + Smhi.icon[Smhi.tomorrow.icon - 1], alt: "weather-icon"}),
                        m("div.temp", [
                            m("span", Math.round(Smhi.tomorrow.degrees) + " °"),
                            m("span", Smhi.tomorrow.windSpeed + " m/s"),
                        ])
                    ])
                ]),
                m("div.clickable weather-click", { onclick : function() {
                    var hidden = this.childNodes[1];
                    hidden.classList.toggle("drop-down");
                } }, [
                    m("div.show", [
                        m("p", "Show 24h forecast"),
                        m("img#arrow", {src: "img/angle-arrow-down.png"})
                    ]),
                    m("div.hide", Smhi.forecast.map(function(hour) {
                        return m("div.weather-hour", [
                            m("p", hour.time.toTimeString().slice(0, 5)),
                            m("p", Smhi.text[hour.icon - 1]),
                            m("p", Math.round(hour.degrees) + " °"),
                        ]);
                    }))
                ]),
                m("div", m("h4", "Location")),
                m("div#myPosition"),
                m("div.nearby row", [
                    m("h4", "Stuff nearby (200m)"),
                    m("div.clickable", { onclick : function() {
                        var hidden = this.childNodes[1];
                        hidden.classList.toggle("drop-down");
                    } }, [
                        m("div.show", [
                            m("p", (Places.restaurants.length == 20) ? "20+ restaurants" : Places.restaurants.length + " restaurants"),
                            m("img#arrow", {src: "img/angle-arrow-down.png"})
                        ]),
                        m("div.hide", Places.restaurants.map(function(restaurant) {
                            return m("a", { href: "/place/" + restaurant.place_id, oncreate: m.route.link }, m("div.place", [
                                m("p", restaurant.name),
                                m("p", restaurant.rating),
                            ]));
                        }))
                    ]),
                    m("div.clickable", { onclick : function() {
                        var hidden = this.childNodes[1];
                        hidden.classList.toggle("drop-down");
                    } }, [
                        m("div.show", [
                            m("p", (Places.stores.length == 20) ? "20+ stores" : Places.stores.length + " stores"),
                            m("img#arrow", {src: "img/angle-arrow-down.png"})
                        ]),
                        m("div.hide", Places.stores.map(function(store) {
                            return m("a", { href: "/place/" + store.place_id, oncreate: m.route.link }, m("div.place", [
                                m("p", store.name),
                                m("p", store.rating),
                            ]));
                        }))
                    ]),
                ]),
            ])
        ];
    }
};

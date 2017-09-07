"use strict";
var m = require("mithril");

var Smhi = {
    forecast : [],
    today : {},
    tomorrow : {},

    text : [
        "Clear sky",
        "Nearly clear sky",
        "Variable cloudiness",
        "Halfclear sky",
        "Cloudy sky",
        "Overcast",
        "Fog",
        "Rain showers",
        "Thunderstorm",
        "Light sleet",
        "Snow showers",
        "Rain",
        "Thunder",
        "Sleet",
        "Snowfall"
    ],

    icon : [
        "sun.png",
        "cloud-2.png",
        "cloud-2.png",
        "cloud-2.png",
        "cloud-1.png",
        "cloud-1.png",
        "cloud-1.png",
        "rain-1.png",
        "storm.png",
        "snow.png",
        "snow1.png",
        "rain-2.png",
        "storm.png",
        "snow.png",
        "snow-1.png"
    ],

    load: function (lat, long) {
        lat = lat.toFixed(5);
        long = long.toFixed(5);

        var apiURL = "http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/" + long + "/lat/" + lat + "/data.json";

        return m.request({
            method: "GET",
            url: apiURL
        }).then(function (result) {
            Smhi.forecast = result.timeSeries.slice(2, 30).map(function(time) {
                return { time : new Date(time.validTime),
                    degrees : time.parameters[1].values[0],
                    windSpeed : time.parameters[4].values[0],
                    windGust : time.parameters[11].values[0],
                    icon : time.parameters[18].values[0],};
            });

            Smhi.today = Smhi.forecast[0];
            Smhi.tomorrow = Smhi.forecast[24];
        });
    }
};

module.exports = Smhi;

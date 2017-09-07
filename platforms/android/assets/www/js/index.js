"use strict";

var m = require("mithril");
var Start = require("./views/start");
var Overview = require("./views/overview");
var Place = require("./views/place");

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(Start);
                }
            },
            "/overview": {
                render: function() {
                    return m(Overview);
                }
            },
            "/place/:id": {
                render: function(vnode) {
                    return m(Place, vnode.attrs);
                }
            }
        });
    }
};

app.initialize();

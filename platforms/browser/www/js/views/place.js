"use strict";

var m = require("mithril");
var Places = require("../models/Places");

module.exports = {
    oninit: function(vnode) {
        Places.getInfo(vnode.attrs.id);
    },

    view: function() {
        return [
            m("div.wrapper", [
                m("div.menu", [
                    m("a", {href: "/overview", oncreate: m.route.link}, "<< Back"),
                ]),
                m("h2", Places.info.name),
                m("div#myPosition"),
                m("h4", "contact"),
                m("p", Places.info.formatted_address),
                m("p", Places.info.formatted_phone_number),
                m("p", Places.open),
                m("div", Places.open_hours.map(function(open) {
                    return m("p", open);
                })),
                m("div.clickable", { onclick : function() {
                    var hidden = this.childNodes[1];
                    hidden.classList.toggle("drop-down");
                } }, [
                    m("div.show", [
                        m("p", Places.reviews.length + " reviews"),
                        m("img#arrow", {src: "img/angle-arrow-down.png"})
                    ]),
                    m("div.hide", Places.reviews.map(function(res) {
                        return m("div.place review", [
                            m("div.review-text", [
                                m("p", res.text),
                                m("p.fade", "-" + res.author_name),
                            ]),
                            m("p", res.rating),
                        ]);
                    }))
                ]),
            ])
        ];
    }
};

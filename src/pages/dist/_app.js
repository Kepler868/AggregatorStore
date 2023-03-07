"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var head_1 = require("next/head");
require("../styles/globals.css");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "MyTop - \u043D\u0430\u0448 \u043B\u0443\u0447\u0448\u0438\u0439 \u0442\u043E\u043F"),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
            React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&family=Space+Mono&display=swap", rel: "stylesheet" })),
        React.createElement(Component, __assign({}, pageProps))));
}
exports["default"] = App;

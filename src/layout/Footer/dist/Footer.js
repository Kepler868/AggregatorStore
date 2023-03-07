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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Footer = void 0;
var react_1 = require("react");
var Footer_module_css_1 = require("./Footer.module.css");
var classnames_1 = require("classnames");
var date_fns_1 = require("date-fns");
exports.Footer = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return (react_1["default"].createElement("footer", __assign({ className: classnames_1["default"](className, Footer_module_css_1["default"].footer) }, props),
        react_1["default"].createElement("div", null,
            "OwlTop \u00A9 ",
            date_fns_1.format(new Date(), "yyyy"),
            " \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B"),
        react_1["default"].createElement("a", { href: "#", target: "_blank" }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435"),
        react_1["default"].createElement("a", { href: "#", target: "_blank" }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0435\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")));
};

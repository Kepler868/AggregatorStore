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
exports.P = void 0;
var react_1 = require("react");
var P_module_css_1 = require("./P.module.css");
var classnames_1 = require("classnames");
exports.P = function (_a) {
    var _b;
    var _c = _a.size, size = _c === void 0 ? "m" : _c, children = _a.children, className = _a.className, props = __rest(_a, ["size", "children", "className"]);
    return (react_1["default"].createElement("p", __assign({ className: classnames_1["default"](P_module_css_1["default"].p, (_b = {}, _b[P_module_css_1["default"].s] = size == "s", _b[P_module_css_1["default"].m] = size == "m", _b[P_module_css_1["default"].l] = size == "l", _b)) }, props), children));
};

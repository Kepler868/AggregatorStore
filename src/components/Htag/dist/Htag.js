"use strict";
exports.__esModule = true;
exports.Htag = void 0;
var react_1 = require("react");
var Htag_module_css_1 = require("./Htag.module.css");
exports.Htag = function (_a) {
    var tag = _a.tag, children = _a.children;
    switch (tag) {
        case "h1":
            return react_1["default"].createElement("h1", { className: Htag_module_css_1["default"].h1 }, children);
        case "h2":
            return react_1["default"].createElement("h2", { className: Htag_module_css_1["default"].h2 }, children);
        case "h3":
            return react_1["default"].createElement("h3", { className: Htag_module_css_1["default"].h3 }, children);
        default:
            return react_1["default"].createElement(react_1["default"].Fragment, null);
    }
};
